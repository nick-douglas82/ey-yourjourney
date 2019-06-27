<template>
    <div class="videojs-vr" style="width: 100%; height: 100%;">

        <transition name="fade">
            <preloader v-if="preloader" :preloader="data.preloader" :preloaded="preloaded"></preloader>
        </transition>

        <video-js
            id="videojs-vr-player"
            :data-video-id="data.video.brightcoveId"
            :data-account="brightcoveData.accountId"
            :data-player="brightcoveData.playerId"
            data-embed="default"
            data-application-id
            playsinline
            class="video-js vjs-default-skin vjs-16-9"
            crossorigin="anonymous"
            data-setup='{ "controls": false, "autoplay": false, "muted": false, "preload": "auto", "html5" : { "nativeTextTracks" : false } }'
            ref="video"
            :poster="require('../../images/'+data.video.poster)"
        >
            <track kind="captions" :src="videoCaptions" srclang="en" label="English" default>
        </video-js>

        <a href="#" class="button back-button" @click.prevent="closeVideo()">Back to journeys</a>
    </div>
</template>

<script>
import { Bus } from '../events';
import preloader from './parts/Preloader';

import videojs from 'video.js';

const flipAngle = Math.PI;
const rightAngle = flipAngle / 2;
const markerWidth = 10; //window.innerWidth / 2;

const directions = {
    n: {
        position: [0, 0, - markerWidth],
        rotation: [0, 0, 0],
    },
    ne: {
        position: [markerWidth / 2, 0, - markerWidth / 2],
        rotation: [0, - rightAngle / 2, 0],
    },
    e: {
        position: [markerWidth, 0, 0],
        rotation: [0, - rightAngle, 0]
    },
    se: {
        position: [markerWidth / 2, 0, markerWidth / 2],
        rotation: [0, - flipAngle * 3 / 4, 0],
    },
    s: {
        position: [0, 0, markerWidth],
        rotation: [0, flipAngle, 0]
    },
    sw: {
        position: [- markerWidth / 2, 0, markerWidth / 2],
        rotation: [0, flipAngle * 3 / 4, 0],
    },
    w: {
        position: [- markerWidth, 0, 0],
        rotation: [0, rightAngle, 0],
    },
    nw: {
        position: [- markerWidth / 2, 0, - markerWidth / 2],
        rotation: [0, rightAngle / 2, 0],
    },
};

export default {
    name: 'video-component',

    props: {
        data: {
            type: Object,
            required: true
        }
    },

    components: {
        preloader
    },

    data() {
        return {
            preloader: true,
            preloaded: false,
            videoPlayer: null,
            camera: null,
            scene: null,
            renderer: null,
            controls: null,
            raycaster: null,
            mouse: null,
            objects: [],
            videoIsPlaying: false,
            brightcoveData: { 
                accountId: "1066292269001",
                playerId: "XDrPwAF7H",
            },
        };
    },

    computed: {
        videoCaptions() {
            return `${window.location.href}/dist/captions/${this.data.video.subtitles}`;
        }
    },

    mounted() {
        // Load the Brightcove player
        var s = document.createElement("script");
        s.src = `https://players.brightcove.net/${this.brightcoveData.accountId}/${this.brightcoveData.playerId}_default/index.min.js`;
        document.body.appendChild(s);
        // Call a function to play the video once player's Brightcove JavaScript is loaded
        s.onload = () => {
            this.videoPlayer = videojs.getPlayer('videojs-vr-player');

            videojs.getPlayer('videojs-vr-player').ready(() => {
                this.videoPlayer.on('loadedmetadata', () => {
                    this.events();
                    this.resizeVideo();

                    this.setupVREnviroment();
                    this.setupRenderer();
                    this.addObjectsToScene();

                    this.preloaded = true;

                    if (this.$store.state.isDesktopDevice) {
                        // TODO: Should be checker to allow xx% of the video to have loaded before removal.
                        setTimeout(() => {
                            this.preloader = false;
                            this.videoPlay();
                        }, 800);
                    }
                });
            });
        }
    },

    beforeDestroy() {
        window.removeEventListener("resize", this.resizeVideo);
        document.removeEventListener("mousedown", this.onDocumentMouseDown);
        document.removeEventListener("mousemove", this.onDocumentMouseMove);
        document.addEventListener('touchend', this.onDocumentMouseDown);
        this.videoPlayer.off('timeupdate', this.timeCheck);
        for(let popup of this.data.video.popups) {
            popup.marker.visible = false;
        }
        this.videoPlayer.dispose();
        Bus.$off('videoPlayPause');
        Bus.$off('videoMuteUnMute');
        Bus.$off('analytics-event-scene');
        Bus.$off('analytics-event-popup');
    },

    methods: {
        timeCheck() {
            for(let popup of this.data.video.popups) {
                if ( popup.timeToDisplay <= this.videoPlayer.currentTime() && this.videoPlayer.currentTime() < popup.timeToHide ) {
                    if( ! popup.marker.visible ) this.showMarker(popup);
                }
                if ( this.videoPlayer.currentTime() >= popup.timeToHide ) {
                    if( popup.marker.visible ) this.hideMarker(popup);
                }
            }
        },

        closeVideo() {
            this.$emit('sceneChange', 'navigation-scene-journey-select');
        },

        /**
         * Add all of our objects to the scene
         */
        addObjectsToScene() {
            for(let popup of this.data.video.popups) {
                let ring = new THREE.Mesh(
                    new THREE.RingGeometry( 2.3, 3.2, 30, 1, 0, 6.3 ),
                    new THREE.MeshBasicMaterial( { color: 0xffff00 } )
                );

                let cube = new THREE.Mesh(
                    new THREE.BoxGeometry( 5, 5, 10, 1, 1, 1 ),
                    new THREE.MeshBasicMaterial( { transparent: true, opacity: 0 } )
                );

                // Set the position of the objects
                ring.position.fromArray( this.calculatePosition(popup.marker.direction, popup.marker.depth) );
                ring.rotation.fromArray( this.calculateRotation(popup.marker.direction) );
                cube.position.fromArray( this.calculatePosition(popup.marker.direction, popup.marker.depth) );
                cube.rotation.fromArray( this.calculateRotation(popup.marker.direction) );

                // Apply any translation
                popup.marker.translation.forEach(translate => {
                    if (translate.coords != '') {
                        if (translate.name == 'X') ring.translateX(translate.coords * popup.marker.depth * markerWidth);
                        if (translate.name == 'Y') ring.translateY(translate.coords * popup.marker.depth * markerWidth);
                        if (translate.name == 'Z') ring.translateZ(translate.coords * popup.marker.depth * markerWidth)
                        if (translate.name == 'X') cube.translateX(translate.coords * popup.marker.depth * markerWidth);
                        if (translate.name == 'Y') cube.translateY(translate.coords * popup.marker.depth * markerWidth);
                        if (translate.name == 'Z') cube.translateZ(translate.coords * popup.marker.depth * markerWidth)
                    }
                });

                // Callback to emit content up to the parent.
                ring.callback = () => {
                    this.videoPause();
                    this.$emit('popupContent', popup.popupRef);
                    // analytics event video ref and pop ref
                    Bus.$emit('analytics-event-popup', `${this.data.ref} - ${popup.popupRef}`);
                };

                // Callback to emit content up to the parent.
                cube.callback = () => {
                    this.videoPause();
                    this.$emit('popupContent', popup.popupRef);
                    // analytics event video ref and pop ref
                    Bus.$emit('analytics-event-popup', `${this.data.ref} - ${popup.popupRef}`);
                };

                ring.name    = popup.name + '_ring';
                cube.name    = popup.name + '_cube';
                ring.visible = false;
                cube.visible = false;

                // Set the objects to look at the camera at all times
                ring.lookAt( this.camera.position );
                cube.lookAt( this.camera.position );

                // Add the objects to the scene
                this.scene.add(ring);
                this.scene.add(cube);
                this.objects.push(ring);
                this.objects.push(cube);
            }

            // Create the raycaster and mouse for the scene
            this.raycaster = new THREE.Raycaster();
            this.mouse     = new THREE.Vector2();

            // Attach the event listeners for click and move events
            document.addEventListener('mousedown', this.onDocumentMouseDown, false);
            document.addEventListener('mousemove', this.onDocumentMouseMove, false);
            document.addEventListener('touchend', this.onDocumentMouseDown, false);
        },

        showMarker(popup) {
            let objectring       = this.scene.getObjectByName( popup.name + '_ring', true );
            let objectcube       = this.scene.getObjectByName( popup.name + '_cube', true );
            popup.marker.visible = true;
            objectring.visible   = true;
            objectcube.visible   = true;
        },

        hideMarker(popup) {
            let objectring       = this.scene.getObjectByName( popup.name + '_ring', true );
            let objectcube       = this.scene.getObjectByName( popup.name + '_cube', true );
            objectring.visible   = false;
            objectcube.visible   = false;
        },

        /**
         * Remove an object from scene using the object name set in addObjectToScene
         */
        removeObjectFromScene(popup) {
            var selectedObject = this.scene.getObjectByName(popup.name);
            this.scene.remove( selectedObject );
        },

        /**
         * Set up methods
         */
        setupRenderer() {
            this.renderer.setSize( window.innerWidth, window.innerHeight );
        },

        setupVREnviroment() {
            this.camera   = this.videoPlayer.vr().camera;
            this.scene    = this.videoPlayer.vr().scene;
            this.renderer = this.videoPlayer.vr().renderer;
        },

        /**
         * Events
         */
        events() {
            Bus.$on('videoPlayPause', action => {
                this.preloader = false;
                (action == true) ? this.videoPlay() : this.videoPause();
            });

            Bus.$on('videoMuteUnMute', action => {
                this.videoPlayer.muted(action);
            });

            this.videoPlayer.on('timeupdate', this.timeCheck);

            this.videoPlayer.on('ended', this.closeVideo);
        },

        onDocumentMouseMove(event) {
            event.preventDefault();

            this.mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
            this.mouse.y =  - (event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;

            this.raycaster.setFromCamera(this.mouse, this.camera);

            var intersects = this.raycaster.intersectObjects(this.objects);
            var canvas = this.renderer.domElement;

            canvas.style.cursor = (intersects.length > 0) ? canvas.style.cursor = "pointer" : canvas.style.cursor = "move";
        },

        onDocumentMouseDown(event) {
            if (event.type == 'mousedown') {
                event.preventDefault();
                this.mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
                this.mouse.y =  - (event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
            }
            else {
                event.stopPropagation();
                this.mouse.x = +(event.changedTouches[0].clientX / this.renderer.domElement.clientWidth) * 2 +-1;
                this.mouse.y = -(event.changedTouches[0].clientY / this.renderer.domElement.clientHeight) * 2 + 1;
            }

            this.raycaster.setFromCamera(this.mouse, this.camera);

            const intersects = this.raycaster.intersectObjects(this.objects);

            if (intersects.length > 0) intersects[0].object.callback();
        },

        /**
         * Video Methods
         */
        toggleVideo() {
            // Play
            if ( ! this.videoIsPlaying) {
                this.videoIsPlaying = true;
                this.videoPlay();
            }
            // Pause
            else {
                this.videoIsPlaying = false;
                this.videoPause();
            }
        },

        videoPlay() {
            this.videoPlayer.play();
            this.videoIsPlaying = true;
            this.$emit('videoPlaying', true);
        },

        videoPause() {
            this.videoPlayer.pause();
            this.videoIsPlaying = false;
            this.$emit('videoPaused', true);
        },

        resizeVideo() {
            window.addEventListener("resize", this.resizeVideo);

            let viewport = {
                width: window.innerWidth,
                height: window.innerHeight,
            };
            let video = {
                width: 16,
                height: 9,
            };
            let newApp = {
                width: undefined,
                height: undefined,
            };

            if (video.height / video.width < viewport.height / viewport.width) {
                newApp.height = viewport.height;
                newApp.width = newApp.height * (video.width / video.height);
            }
            else {
                newApp.width = viewport.width;
                newApp.height = newApp.width * (video.height / video.width);
            }
            this.$refs.video.style.width = parseInt(newApp.width) + "px";
            this.$refs.video.style.height = parseInt(newApp.height) + "px";
        },

        calculatePosition(directionKey, depth) {
            const direction = directions[directionKey];

            return direction.position.map(coordinate => coordinate * depth);
        },

        calculateRotation(directionKey) {
            const direction = directions[directionKey];

            return direction.rotation;
        },

        loadBrightcovePlayer() {
            var playerData = {
                accountId: "1066292269001",
                playerId: "XDrPwAF7H",
                videoId: "5983483888001"
              };
            var s = document.createElement("script");
              s.src =
                "https://players.brightcove.net/" +
                playerData.accountId +
                "/" +
                playerData.playerId +
                "_default/index.js";
              // Add the script tag to the document
              document.body.appendChild(s);
              // Call a function to play the video once player's JavaScropt loaded
              //s.onload = callback;
        },
    },

    watch: {
        videoIsPlaying(val) {
            this.playPauseText = (val == true) ? 'Pause' : 'Play';
        },

        videoIsMuted(val) {
            this.muteUnmuteText = (val == true) ? 'Unmute' : 'Mute';
        }
    }
}
</script>

<style scoped>
.vjs-poster {
    background-size: cover !important;
}

.video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0, 0.3);
}

.back-button {
    position: absolute;
    right: 30px;
    bottom: 30px;
}

</style>

<template>
    <div class="scene" :data-ref="data.ref" :class="data.additionalWrapperClasses">
        <div id="panorama"></div>

        <transition name="fade">
        <div class="flex" v-if="part1" :style="{height: '100%'}">
            <div class="overlay"  :style="{opacity: 0.5, 'background-color': '#000000'}"></div>
            <div class="scene-wrapper flex items-center content-space-between">
                <div class="text-infobox__content" :style="{color: 'white', width: '50%', 'font-size': '26px', 'line-height': '1.3'}">
                    <div v-html="part1Text" style="margin-bottom: 30px;"></div>
                    <a href="#" class="button" @click.prevent="part1 = false">Continue</a>
                </div>
                <div class="arrow-pointers">
                    <div class="chevron-toggle__chevron"></div>
                    <div class="chevron-toggle__chevron"></div>
                </div>
            </div>
        </div>
        </transition>

        <transition name="fade">
        <div class="flex" v-if="part2" :style="{height: '100%'}">
            <div class="overlay" :style="{opacity: 0.5, 'background-color': '#000000'}"></div>
            <div class="scene-wrapper flex items-center">
                <div class="text-infobox__content" :style="{color: 'white', width: '50%', 'font-size': '26px', 'line-height': '1.3', 'margin-right': 'auto'}">
                    <div v-html="part2Text" style="margin-bottom: 30px;"></div>
                </div>
                <div class="arrow-pointers">
                    <div class="chevron-toggle__chevron"></div>
                    <div class="chevron-toggle__chevron"></div>
                </div>
                <div class="ring"></div>
            </div>
        </div>
        </transition>

        <transition name="fade">
        <div class="flex" v-if="part3" :style="{height: '100%'}">
            <div class="overlay"  :style="{opacity: 0.5, 'background-color': '#000000'}"></div>
            <div class="scene-wrapper flex items-center content-space-between">
                <div class="text-infobox__content" :style="{color: 'white', width: '50%', 'font-size': '26px', 'line-height': '1.3'}">
                    <div v-html="part3Text" style="margin-bottom: 30px;"></div>
                    <a href="#" class="button" @click.prevent="sceneChange('navigation-scene-journey-select')">Continue</a>
                </div>
            </div>
        </div>
        </transition>

        <div class="click-pad" v-if="clickpad" @click="finalScene"></div>
    </div>
</template>

<script>
import { Bus } from '../events';

export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            background: '',
            part1: true,
            part2: false,
            part3: false,
            viewer: null,
            clickpadActive: false,
            mouseClickActive: false
        }
    },

    mounted() {
        this.background = this.data.backgroundImage;

        this.viewer = pannellum.viewer('panorama', {
            type: "equirectangular",
            autoLoad: true,
            showControls: false,
            orientationOnByDefault: true,
            panorama: require('../../images/onboarding-360.jpg')
        });

        window.addEventListener('mousedown', () => this.mouseClickActive = true);
        window.addEventListener('mouseup', () => this.mouseClickActive = false);

        window.addEventListener('mousemove', this.threeSixtyPan)
        window.addEventListener("devicemotion", this.threeSixtyPan);
        window.addEventListener("touchmove", this.threeSixtyPan);
    },

    beforeDestroy() {
        this.destroyEventHandlers();
        this.viewer.destroy();
    },

    methods: {
        threeSixtyPan() {
            if (this.mouseClickActive === true ) {
                if (this.viewer.getYaw() > 10) {
                    this.part1 = false;
                }

                if (this.viewer.getYaw() > 50) {
                    this.part2 = true;
                    this.clickpadActive = true;
                    this.destroyEventHandlers();
                }
            }
            else {
                if (this.viewer.getYaw() > 10) {
                    this.part1 = false;
                }

                if (this.viewer.getYaw() > 50) {
                    this.part2 = true;

                    if (this.$store.state.isMobileDevice) {
                        this.viewer.stopOrientation();
                        this.clickpadActive = true;
                        this.destroyEventHandlers();
                    }
                }
            }
        },

        finalScene() {
            this.part2          = false;
            this.clickpadActive = false;
            this.part3          = true;
        },

        sceneChange(scene) {
            this.$store.commit('setSceneReference', scene);
            Bus.$emit('analytics-event-scene', scene);
        },

        destroyEventHandlers() {
            window.removeEventListener('mousedown', () => this.mouseClickActive = true);
            window.removeEventListener('mouseup', () => this.mouseClickActive = false);
            window.removeEventListener("mousemove", this.threeSixtyPan);
            window.removeEventListener("devicemotion", this.threeSixtyPan);
            window.removeEventListener("touchmove", this.threeSixtyPan);
        }
    },

    computed: {
        clickpad() {
            return ( this.clickpadActive == true ) ? true : false;
        },

        buttonDisplay() {
            return ( ! this.$store.state.isMobileDevice ) ? true : false;
        },

        part1Text() {
            if ( ! this.$store.state.isDesktopDevice ) {
                return 'This experience uses your movement to navigate. Try moving or panning to the right.';
            }

            return 'This experience uses your mouse to navigate. Click continue and then drag to rotate right.';
        },

        part2Text() {
            if ( ! this.$store.state.isDesktopDevice ) {
                return 'Tap pop-ups as they appear to learn more, or bookmark for later.';
            }

            return 'Click pop-ups as they appear to learn more, or bookmark for later.';
        },

        part3Text() {
            if ( ! this.$store.state.isDesktopDevice ) {
                return 'Tap continue to start exploring.';
            }

            return 'Click continue to start exploring.';
        }
    }
}
</script>

<style scoped>
    .ring {
        border-radius: 100%;
        border: 2px solid #FFE500;
        width: 24px;
        height: 24px;
        margin-right: 50px;
        cursor: pointer;
    }

    .click-pad {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
    }

    #panorama {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>

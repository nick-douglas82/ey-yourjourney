<template>
    <div class="better-question">
		<transition
			name="better-question-frame"
			:duration="4000"
			v-on:enter="enter"
			v-on:leave="leave"
		>
			<div class="better-question__frame" v-show="transition" v-if="!ie">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
		        		x="0px" y="0px"	viewBox="0 0 285 242" width="570" height="484" xml:space="preserve"
			 			stroke="#ffe600" stroke-miterlimit="10" stroke-width="10px" fill="none"
		        >
					<path
						ref="path_1"
						d="m 64.4,235 213.3,0 0,-226.4 -270.6,47.9 0,162.8"
						stroke-dasharray="877.307px"
						stroke-dashoffset="877.307px"
					/>
					<path
						ref="path_2"
						d="M43.6,235H54"
						stroke-opacity="0"
					/>
					<path
						ref="path_3"
						d="M22.7,235h10.4"
						stroke-opacity="0"
					/>
					<path
						ref="path_4"
						d="M1.8,235h10.4"
						stroke-opacity="0"
					/>
		        </svg>

                <transition name="better-question-text">
                    <div class="better-question__text" v-show="transition">
                        <div v-html="component.text"></div>
                    </div>
                </transition>
		    </div>
		</transition>
		<transition name="better-question-text">
		    <div class="better-question__frame" v-show="transition" v-if="ie">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
		        		x="0px" y="0px"	viewBox="0 0 285 242" width="570" height="484" xml:space="preserve"
			 			stroke="#ffe600" stroke-miterlimit="10" stroke-width="10px" fill="none"
		        >
					<path d="m 64.4,235 213.3,0 0,-226.4 -270.6,47.9 0,162.8" />
					<path d="M43.6,235H54" />
					<path d="M22.7,235h10.4" />
					<path d="M1.8,235h10.4" />
		        </svg>

                <transition name="better-question-text">
                    <div class="better-question__text" v-show="transition">
                        <div v-html="component.text"></div>
                    </div>
                </transition>
			</div>
		</transition>
        <transition name="better-question-text">
            <component
                v-for="(component, c) in component.components" :key="'scene_component_' + c"
                :is="component.type"
                :component="component"
                @sceneChange="sceneChange"
                v-show="transition"
            ></component>
        </transition>
	</div>
</template>

<script>

import Velocity from 'velocity-animate';
import scenebutton from './Button';
import { Bus } from '../../events';

export default {
    props: ["component"],

    components: {
        scenebutton
    },

    data() {
        return {
            transition: false,
            ie: false,
        };
    },

    mounted() {
        this.isIE();
        this.transition = true;
    },

    methods: {
        sceneChange(scene) {
            // If device is mobile and is not in landscape - go to the mobile rotate scene
            if ( this.$store.state.isMobileDevice && !this.$store.state.isLandscape ) {
                this.$store.commit('setSceneReference', 'introduction-scene-mobile-rotate');
                this.$store.commit('setNextSceneReference', scene);
            }
            // If device is mobile and landscape - go to the next scene
            else if ( this.$store.state.isMobileDevice && this.$store.state.isLandscape ) {
                this.$store.commit('setSceneReference', scene);
            }
            // If device is desktop (will always be landscape)
            else {
                this.$store.commit('setSceneReference', 'introduction-scene-desktop-warning');
            }

            Bus.$emit('analytics-event-scene', scene);

        },

        activate() {
            this.transition = !this.transition;
        },

        enter: function (el, done) {
            Velocity(this.$refs["path_1"], {
                strokeDashoffset: 0,
            },
            {
                duration: 1000,
                delay: 2000,
                easing: "easeInOut",
                complete: done,
            });
            Velocity(this.$refs["path_2"], {
                strokeOpacity: 1,
            },
            {
                duration: 500,
                delay: 1500,
                easing: "easeIn",
            });
            Velocity(this.$refs["path_3"], {
                strokeOpacity: 1,
            },
            {
                duration: 500,
                delay: 1250,
                easing: "easeIn",
            });
            Velocity(this.$refs["path_4"], {
                strokeOpacity: 1,
            },
            {
                duration: 500,
                delay: 1000,
                easing: "easeIn",
            });
        },
        leave: function (el, done) {
            Velocity(this.$refs["path_1"], {
                strokeDashoffset: "877.307px",
            },
            {
                duration: 500,
                complete: done,
            });
            Velocity(this.$refs["path_2"], {
                strokeOpacity: 0,
            },
            {
                duration: 500,
            });
            Velocity(this.$refs["path_3"], {
                strokeOpacity: 0,
            },
            {
                duration: 500,
            });
            Velocity(this.$refs["path_4"], {
                strokeOpacity: 0,
            },
            {
                duration: 500,
            });
        },

        isIE() {
            const ua = window.navigator.userAgent;
            if(ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0 || ua.indexOf('Edge/') > 0) {
                this.ie = true;
            }
        }
    }
}
</script>

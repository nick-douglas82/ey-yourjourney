<template>
    <div class="router-view__wrapper" :class="orientationClasses">
        <Stage>
            <transition-group name="scene" tag="div">
            <Scenes
                v-for="(scene, index) in scenes"
                :key="scene.ref"
                :scene="scene"
                v-if="activeScene === scene.ref"
                @showPopup="togglePopup">
            </Scenes>
            </transition-group>

            <transition-group name="scene" tag="div">
            <Popups
                v-for="(popup, index) in popups"
                :key="popup.ref"
                :popup="popup"
                v-if="activePopup === popup.ref">
            </Popups>
            </transition-group>

            <cookie-policy></cookie-policy>
        </Stage>
    </div>
</template>

<script>
import Stage from "../components/Stage";
import Scenes from "../components/Scene";
import Popups from "../components/Popup";
import cookiePolicy from "../components/CookiePolicy";
import scenes from '../scenes';
import popups from '../popups';
import { isMobile } from 'mobile-device-detect';
import { Bus } from '../events';

export default {
    components: {
        Stage,
        Scenes,
        Popups,
        cookiePolicy
    },

    data() {
        return {
            scenes: scenes.main,
            popups: popups.main
        };
    },

    mounted() {
        this.$store.commit('setMobileDevice', isMobile);
        this.$store.commit('setDesktopDevice', ! isMobile);

        this.orientationChange();

        window.onresize = (event) => {
            this.orientationChange();
        };

        this.initCookies();

        Bus.$emit('analytics-event-start');
    },

    created() {
        this.initAnalytics();

        window.addEventListener('resize', () => {
            // We execute the same script as before
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
    },

    methods: {
        orientationChange() {
            this.$store.commit(
                'setIsLandscape',
                (window.innerWidth > window.innerHeight)
            );
        },

        togglePopup(popupRef) {
            this.$store.commit('setPopupReference', popupRef);
        },

        initCookies() {
            let bookmarks = {
                bookmarked: []
            };

            if ( this.$cookies.isKey('ey_your_journey_bookmarks') ) {
                bookmarks = this.$cookies.get('ey_your_journey_bookmarks');
            }
            else {
                this.$cookies.set('ey_your_journey_bookmarks', bookmarks, "1y");
            }

            this.$store.commit('setBookmarks', bookmarks);
        },

        initAnalytics() {
            Bus.$on('analytics-event-start', this.analyticsEventStart); //
            Bus.$on('analytics-event-scene', this.analyticsEventScene); // which video
            Bus.$on('analytics-event-popup', this.analyticsEventPopup); // popup ref & scene ref
            Bus.$on('analytics-event-bookmark', this.analyticsEventBookmark);
        },

        analyticsEventStart() {
            if (this.webtrendsCustomEventsEnabled() == true) {
                Webtrends.trackEvent(
                    `start`,
                    {
                        sl: this.curSL,
                    }
                );
            }
            return;
        },

        analyticsEventScene(ref) {
            if(this.webtrendsCustomEventsEnabled() == true) {
                Webtrends.trackEvent(
                    `scene`,
                    {
                        sl: this.curSL,
                        ref: ref
                    },
                );
            }
            return;
        },

        analyticsEventPopup(ref) {
            if (this.webtrendsCustomEventsEnabled() == true) {
                Webtrends.trackEvent(
                    `popup`,
                    {
                        sl: this.curSL,
                        ref: ref,
                    },
                );
            }
            return;
        },

        analyticsEventBookmark(bookmarkRef) {
            if (this.webtrendsCustomEventsEnabled() == true) {
                Webtrends.trackEvent(
                    `bookmark`,
                    {
                        sl: this.curSL,
                        ref: bookmarkRef,
                    },
                );
            }
            return;
        },

        webtrendsCustomEventsEnabled() {
            if (typeof Webtrends === "object") {
                if (typeof Webtrends.trackEvent === "function") {
                    return true;
                }
            }
            return false;
        }
    },

    computed: {
        isMobile() {
            return this.$store.state.isMobileDevice;
        },

        isDesktop() {
            return this.$store.state.isDesktopDevice;
        },

        activeScene() {
            return this.$store.state.activeScene;
        },

        activePopup() {
            return this.$store.state.activePopup;
        },

        orientationClasses() {
            return [
                (this.$store.state.isDesktopDevice) ? 'is-desktop' : 'is-mobile',
                (this.$store.state.isLandscape) ? 'is-landscape' : 'is-portrait'
            ]
        }
    }
}
</script>

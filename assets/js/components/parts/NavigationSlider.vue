<template>
    <div class="navigation-slider">
        <h1 class="navigation-slider__title" v-if="component.title" v-html="component.title"></h1>
        <div class="slider">
            <div v-for="(navigation, index) in navigationItems"
                :key="navigation.id"
            >
                <a href="#"
                class="navigation-slider__item"
                @click.prevent="changeScene(index, navigation)"
                @mouseenter="changeBackground(navigation.backgroundImage)"
                @mouseleave="changeBackground('none')"
                :class="{active: index == selected}"
                >
                    <h2 v-html="navigation.title.text"></h2>
                    <h3 v-html="navigation.subtitle.text" v-if="navigation.subtitle"></h3>
                    <h3 v-else>Learn more &rarr;</h3>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import 'slick-carousel';
import popups from '../../popups';
import { Bus } from '../../events';

export default {
    props: ["component"],

    data() {
        return {
            selected: null,
            popups: popups,
            bookmarks: [],
            navigationItems: null,
        }
    },

    beforeMount() {
        this.bookmarks = this.$store.state.bookmarks.bookmarked;

        if (this.component.navigation.length < 1) {
            let popupItem = [];

            this.bookmarks.forEach(ref => {
                this.popups.main.forEach(popup => {
                    if (popup.ref === ref) {
                        popupItem.push(popup);
                    }
                });
            });

            this.navigationItems = popupItem;
        }
        else {
            this.navigationItems = this.component.navigation;
        }
    },

    mounted() {
        $('.slider').slick({
            dots: false,
            vertical: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            verticalSwiping: true,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><div class="chevron-toggle__chevron"></div></button>',
            nextArrow: '<button type="button" class="slick-next"><div class="chevron-toggle__chevron"></div></button>'
        });

        this.bookmarks = this.$store.state.bookmarks.bookmarked;
    },

    methods: {
        changeBackground(bgImage) {
            if (this.$store.state.isDesktopDevice) {
                this.$emit('changedJourney', bgImage);
            }
        },

        changeScene(id, navItem) {
            // activate selected user
            this.selected = id;
            if (navItem.type == 'popup') {
                this.$emit('openPopup', navItem.ref)
                Bus.$emit('analytics-event-popup', navItem.ref);
            }
            else {
                // change the background image
                this.changeBackground(navItem.backgroundImage);

                // after delay go to video intro screen
                setTimeout(() => {
                    this.$emit('sceneChange', navItem.goToScene)
                    Bus.$emit('analytics-event-scene', navItem.goToScene);
                }, 1000);
            }
        }
    },

    beforeDestroy() {
        $('.slider').slick('unslick');
        this.selected = null;
    }
}
</script>

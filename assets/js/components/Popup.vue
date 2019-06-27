<template>
    <div class="popup" @click.stop="closePopup">
        <close></close>
        <background-image v-if="popup.backgroundImage" :img="popup.backgroundImage" :blur="popup.backgroundBlur"></background-image>
        <div class="popup__wrapper">
            <h1 v-html="popup.title.text" :style="popup.title.styles"></h1>
            <div class="popup__content" v-html="popup.content.text" :style="popup.content.styles"></div>

            <a :href="popup.link.url"
               class="button"
               v-if="learnMoreLink"
               v-html="popup.link.text"
               :style="popup.link.styles"
               :target="popup.link.target"
               @click.stop>
            </a>

            <bookmark :popup="popup"></bookmark>
        </div>
    </div>
</template>

<script>
import backgroundImage from './parts/BackgroundImage';
import close from './parts/Close';
import bookmark from './parts/Bookmark';
import { Bus } from '../events';

export default {
    props: {
        popup: {
            type: Object,
            required: true
        }
    },

    components: {
        backgroundImage,
        close,
        bookmark
    },

    methods: {
        closePopup() {
            this.$store.commit('setPopupReference', "");
            Bus.$emit('videoPlayPause', true);
            Bus.$emit('popupClose', true);
        }
    },

    computed: {
        learnMoreLink() {
            return this.popup.link && this.$store.state.activeScene == 'navigation-scene-bookmarks';
        }
    }
}
</script>

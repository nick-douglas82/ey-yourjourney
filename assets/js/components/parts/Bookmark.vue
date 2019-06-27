<template>
    <a href="#"
       class="button"
       :class="{'is-bookmarked': alreadyBookmarked}"
       v-if="showBookmark"
       @click.prevent.stop="addBookmark"
       :disabled="alreadyBookmarked">
       {{buttonText}}
    </a>
</template>

<script>
import Vue from 'vue';
import VueCookies from 'vue-cookies';
import popups from '../../popups';
import { Bus } from '../../events';

Vue.use(VueCookies);

export default {
    props: {
        popup: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            popups: popups,
            buttonText: 'Bookmark',
            alreadyBookmarked: false
        }
    },

    created() {
        this.initCookies();
    },

    methods: {
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

            if (this.$store.state.bookmarks.bookmarked.includes(this.popup.ref)) {
                this.alreadyBookmarked = true;
                this.buttonText = 'Bookmarked!';
            }
        },

        addBookmark(bookmarkRef) {
            if ( !this.alreadyBookmarked ) {
                this.alreadyBookmarked = true;
                this.buttonText        = 'Bookmarked';

                this.$store.commit('addBookmark', this.popup.ref);
                this.$cookies.set('ey_your_journey_bookmarks', this.$store.state.bookmarks, "1y");
                Bus.$emit('analytics-event-bookmark', this.popup.ref);
            }
            else {
                this.alreadyBookmarked = false;
                this.buttonText        = 'Bookmark';

                this.$store.commit('removeBookmark', this.popup.ref);
                this.$cookies.set('ey_your_journey_bookmarks', this.$store.state.bookmarks, "1y");
            }
        }
    },

    computed: {
        showBookmark() {
            return this.popup.showBookmark && this.$store.state.activeScene != 'navigation-scene-bookmarks';
        }
    }
}
</script>

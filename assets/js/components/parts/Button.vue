<template>
    <a href="#"
       class="button"
       :class="[component.position]"
       :style="style"
       v-html="buttonText"
       @click.prevent="changeScene"
       v-if="isVisible">
    </a>
</template>

<script>
import { Bus } from '../../events';
export default {
    props: ["component"],

    methods: {
        changeScene() {
            this.$emit('sceneChange', this.component.goToScene);
        }
    },

    computed: {
        isVisible() {
            if (this.$store.state.activeScene === "navigation-scene-journey-select") {
                if (this.$store.state.bookmarks.bookmarked === undefined || this.$store.state.bookmarks.bookmarked.length === 0) {
                    return false;
                }
            }

            return true;
        },

        buttonText() {
            return (this.$store.state.isDesktopDevice) ? this.component.title.replace('Tap', 'Click') : this.component.title;
        },

        style() {
            let style = {}

            if (this.component.hasOwnProperty('order') === true) {
                style.order = this.component.order;
            }

            return style;
        }
    }
}
</script>

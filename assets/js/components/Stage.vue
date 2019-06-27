<template>
    <div class="viewport">
        <slot></slot>
    </div>
</template>

<script>
import { Bus } from '../events';
import scenes from '../scenes';

export default {
    data() {
        return {
            videoIsMuted: false,
            muteUnmuteText: 'Mute',
            scenes: scenes.main
        }
    },

    methods: {
        sceneChange(sceneRef) {
            Bus.$emit('analytics-event-scene', sceneRef);
            this.$store.commit('setSceneReference', sceneRef);
        }
    }
}
</script>

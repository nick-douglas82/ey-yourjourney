<template>
    <component :is="scene.type" :data="scene" @popupContent="activatePopup" @sceneChange="sceneChange"></component>
</template>

<script>
import scene from './SceneComponent';
import videoscene from './VideoComponent';
import threesixty from './Threesixty';
import { Bus } from '../events';

export default {
    props: {
        scene: {
            type: Object,
            required: true
        }
    },

    components: {
        scene,
        videoscene,
        threesixty
    },

    data() {
        return {
            component: null
        }
    },

    methods: {
        activatePopup(popupRef) {
            this.$emit('showPopup', popupRef);
        },

        sceneChange(scene) {
            this.$store.commit('setSceneReference', scene);
            Bus.$emit('analytics-event-scene', scene);
        }
    },

    computed: {
        isVideo() {
            return (this.scene.type === 'video') ? true : false;
        }
    }
}
</script>

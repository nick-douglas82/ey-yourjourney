<template>
    <div class="close" @click="closePopup"></div>
</template>

<script>
import { Bus } from '../../events';
export default {
    methods: {
        closePopup() {
            this.$store.commit('setPopupReference', "");
            Bus.$emit('videoPlayPause', true);
            Bus.$emit('popupClose', true);
        }
    }
}
</script>

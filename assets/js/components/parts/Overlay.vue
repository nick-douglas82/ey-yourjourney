<template>
    <div class="overlay" v-if="Object.keys(data.backgroundOverlay).length" :style="data.backgroundOverlay"></div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object
        }
    }
}
</script>

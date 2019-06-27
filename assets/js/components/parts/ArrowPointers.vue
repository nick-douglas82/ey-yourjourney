<template>
    <div class="arrow-pointers"
         :class="[component.position]"
         :style="component.styles"
         @click="changeScene"
    >
        <div class="chevron-toggle__chevron"></div>
        <div class="chevron-toggle__chevron"></div>
    </div>
</template>

<script>
export default {
    props: ["component"],

    methods: {
        changeScene() {
            if (this.component.goToScene && !this.component.goToSlide) {
                this.$emit('sceneChange', this.component.goToScene)
            }
            else {
                this.$emit('slideChange', this.component.goToSlide)
            }
        }
    }
}
</script>

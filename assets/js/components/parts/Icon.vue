<template>
    <i class="icon" :class="component.iconname" :style="style"></i>
</template>

<script>
export default {
    props: ["component"],

    computed: {
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

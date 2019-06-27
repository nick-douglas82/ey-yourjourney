<template>
    <div v-html="component.content" class="text-infobox__content" :style="styleText"></div>
</template>

<script>
export default {
    props: ["component"],

    computed: {
        styleText() {
            let style = {}
            if ( this.component.hasOwnProperty('fontSize') === true ) {
                style.fontSize = this.component.fontSize;
            }

            if ( this.component.hasOwnProperty('weight') === true ) {
                style.fontWeight = this.component.weight;
            }

            if ( this.component.hasOwnProperty('align') === true ) {
                style.textAlign = this.component.align;
            }

            if ( this.component.hasOwnProperty('color') === true ) {
                style.color = this.component.color;
            }

            if ( this.component.hasOwnProperty('lineheight') === true ) {
                style.lineHeight = this.component.lineheight;
            }

            if ( this.component.hasOwnProperty('order') === true ) {
                style.order = this.component.order;
            }

            if ( this.component.hasOwnProperty('marginBottom') === true ) {
                style.marginBottom = this.component.marginBottom;
            }

            if ( this.component.hasOwnProperty('display') === true ) {
                style.display = this.component.display;
            }

            if ( this.component.hasOwnProperty('width') === true ) {
                style.width = this.component.width;
            }

            return style;
        }
    }
}
</script>

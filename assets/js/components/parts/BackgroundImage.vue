<template>
    <div class="background-image"
         :style="backgroundImage"
         :class="{'has-blur' : blur}">
    </div>
</template>

<script>
export default {
    props: {
        img: {
            type: String
        },

        blur: {
            type: Boolean
        }
    },

    computed: {
        backgroundImage() {
            return {
                backgroundImage: 'url("'+require('../../../images/'+this.img)+'")',
            };
        }
    },
}
</script>

<template>
    <div class="sceneSlider" :style="[component.sliderStyles]">
        <div :style="slide.slideStyles" v-for="(slide, index) in component.slides" :key="slide.index">
            <component
                v-for="(component, c) in slide.components" :key="'scene_component_' + c"
                :is="component.type"
                :component="component"
                @sceneChange="sceneChange"
                @slideChange="slideChange"
            ></component>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import 'slick-carousel';
import textinfo from './Text';
import markerring from './Marker';
import arrowpointers from './ArrowPointers';
import { Bus } from '../../events';

export default {
    props: ["component"],

    components: {
        arrowpointers,
        textinfo,
        markerring
    },

    data() {
        return {
            sceneSlider: null
        }
    },

    mounted() {
        this.sceneSlider = $('.sceneSlider').slick({
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            pauseOnHover: false,
            pauseOnFocus: false,
            draggable: false,
            swipe: false,
        });

        this.sceneSlider.on('afterChange', (event, slick, currentSlide) => {
            if ( currentSlide == 1 ) {
                let fired = false;
                let timer = setTimeout(() => {
                    this.$emit('sceneChange', 'navigation-scene-journey-select');
                    Bus.$emit('analytics-event-scene', 'navigation-scene-journey-select');
                    fired = true;
                }, 3000);

                if (fired) clearTimeout(timer);
            }
        });
    },

    methods: {
        sceneChange(scene) {
            this.$store.commit('setSceneReference', scene);
            Bus.$emit('analytics-event-scene', scene);
        },

        slideChange(slide) {
            this.sceneSlider.slick("slickNext");
        }
    },

    beforeDestroy() {
        $('.sceneSlider').slick('unslick');
    }
}
</script>


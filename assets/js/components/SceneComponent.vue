<template>
    <div class="scene" :data-ref="data.ref" :class="data.additionalWrapperClasses">
        <background-image v-if="background" :img="background" :blur="data.backgroundBlur"></background-image>

        <transition name="fade">
            <background-image v-if="bgimage1" :img="bgimageImg1" :blur="data.backgroundBlur"></background-image>
        </transition>

        <transition name="fade">
            <background-image v-if="bgimage2" :img="bgimageImg2" :blur="data.backgroundBlur"></background-image>
        </transition>

        <div class="scene-wrapper" :class="data.additionalClasses">
            <component
                v-for="(component, c) in data.components" :key="'scene_component_' + c"
                :is="component.type"
                :component="component"
                @changedJourney="changeBackgroundImage"
                @sceneChange="sceneChange"
                @openPopup="openPopup"
            ></component>
        </div>

        <overlay :data="data"></overlay>
    </div>
</template>

<script>
import { Bus } from '../events';
import backgroundImage from './parts/BackgroundImage';
import logo from './parts/Logo';
import scenebutton from './parts/Button';
import navslider from './parts/NavigationSlider';
import overlay from './parts/Overlay';
import betterquestion from './parts/BetterQuestion';
import textinfo from './parts/Text';
import icon from './parts/Icon';
import arrowpointers from './parts/ArrowPointers';
import markerring from './parts/Marker';
import slider from './parts/Slider';

export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            background: '',
            bgimage1: false,
            bgimage2: false,
            bgimageImg1: '',
            bgimageImg2: ''
        }
    },

    components: {
        backgroundImage,
        logo,
        scenebutton,
        navslider,
        overlay,
        betterquestion,
        textinfo,
        icon,
        arrowpointers,
        slider,
        markerring
    },

    mounted() {
        this.background = this.data.backgroundImage;
        this.testImg = this.data.backgroundImage;
    },

    methods: {
        changeBackgroundImage(src) {
            if (src != 'none') {
                if ( this.bgimage1 === false && this.bgimage2 === false ) {
                    this.bgimage1    = true;
                    this.bgimageImg1 = src;
                }
                else if ( this.bgimage1 === true && this.bgimage2 === false ) {
                    this.bgimage2    = true;
                    this.bgimageImg2 = src;
                    this.bgimage1    = false;
                }
                else if ( this.bgimage1 === false && this.bgimage2 === true ) {
                    this.bgimage1    = true;
                    this.bgimageImg1 = src;
                    this.bgimage2    = false;
                }
            }
            else {
                this.bgimage1 = false;
                this.bgimage2 = false;
                this.bgimageImg1 = '';
                this.bgimageImg2 = '';
            }
        },

        sceneChange(scene) {
            this.$store.commit('setSceneReference', scene);
            Bus.$emit('analytics-event-scene', scene);
        },

        openPopup(popupRef) {
            this.$store.commit('setPopupReference', popupRef);
        }
    },

    computed: {
        deviceIsLandscape () {
            return this.$store.state.isLandscape;
        }
    },

    watch: {
        deviceIsLandscape (isLandscape) {
            if (isLandscape && this.$store.state.activeScene == 'introduction-scene-mobile-rotate') {
                this.sceneChange(this.$store.state.nextScene);
                Bus.$emit('analytics-event-scene', this.$store.state.nextScene);
            }
        }
    }
}
</script>

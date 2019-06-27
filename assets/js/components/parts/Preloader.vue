<template>
    <div class="preloader" :style="{ 'background-image': 'url(' + preloader.backgroundImage + ')' }" :class="preloader.additionalClasses">
        <div class="preloader__wrapper">
            <div v-for="item in preloader.components" :key="item.id">
                <div class="text-infobox__content" :style="titleStyles(item)" v-html="item.content"></div>
            </div>
            <div v-show="!preloaded" class="lds-ring"><div></div><div></div><div></div><div></div></div>
            <a 
                href="#" class="button" style="margin-top: 1em;" 
                v-show="preloaded"
                @click.prevent="playVideo"
            >
                Tap to start
            </a>
        </div>
    </div>
</template>

<script>
import { Bus } from '../../events';

export default {
    props: ["preloader", "preloaded"],

    methods: {
        playVideo() {
            Bus.$emit('videoPlayPause', true);
        },

        titleStyles(component) {
            let style = {}
            if ( component.hasOwnProperty('fontSize') === true ) {
                style.fontSize = component.fontSize;
            }

            if ( component.hasOwnProperty('align') === true ) {
                style.align = component.align;
            }

            if ( component.hasOwnProperty('color') === true ) {
                style.color = component.color;
            }

            if ( component.hasOwnProperty('lineheight') === true ) {
                style.lineHeight = component.lineheight;
            }

            return style;
        },

        subtitleStyles() {
            // let style = {}

            // if ( component.hasOwnProperty('fontSize') === true ) {
            //     style.fontSize = component.fontSize;
            // }

            // if ( component.hasOwnProperty('align') === true ) {
            //     style.align = component.align;
            // }

            // if ( component.hasOwnProperty('color') === true ) {
            //     style.color = component.color;
            // }

            // if ( component.hasOwnProperty('lineheight') === true ) {
            //     style.lineHeight = component.lineheight;
            // }

            // return style;
        },


    }
}
</script>

<style>
    .preloader {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .lds-ring {
      display: inline-block;
      position: relative;
      width: 64px;
      height: 64px;
    }
    .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 51px;
      height: 51px;
      margin: 6px;
      border: 6px solid #fff;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #fff transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
      animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
      animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
</style>

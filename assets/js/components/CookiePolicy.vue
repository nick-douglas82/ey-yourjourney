<template>
    <transition name="fade">
        <div class="cookie-policy"
             v-if="cookiePolicyOpen && $store.state.activeScene === 'introduction-scene-home'"
             @click="closePolicy"
        >
            <div class="container">
               <div class="vert-align">
                    <p>
                        This site uses cookies to provide you with a personalised browsing experience. By using this site you agree to our use of cookies as explained in our Privacy Policy. Please read our <a href="https://www.ey.com/UK/en/home/privacy-policy" target="_blank">Privacy Policy</a> for more information on how we use cookies and how you can manage them.
                    </p>
                    <p>
                        &copy; 2019 EYGM Limited. All Rights Reserved.
                    </p>
                    <a href="#" class="button" @click.prevent="closePolicy">Close</a>
               </div>
            </div>
        </div>
    </transition>

</template>

<script>

import Vue from 'vue';
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);

export default {
    data() {
        return {
            ie: false,
            cookiePolicyOpen: true,
        };
    },

    created() {
        this.initCookies();
        this.isIE();
    },

    methods: {
        initCookies() {
            let cookiePolicy = {
                open: true,
            };

            if (this.$cookies.isKey('ey_your_journey_cookie_policy')) {
                cookiePolicy = this.$cookies.get('ey_your_journey_cookie_policy');
            }
            else {
                this.$cookies.set('ey_your_journey_cookie_policy', cookiePolicy, -1);
            }

            if (cookiePolicy.open === false) {
                this.$store.commit('closeCookiePolicy');
                this.closePolicy();
            }
        },

        closePolicy() {
            this.$store.commit('closeCookiePolicy');
            this.$cookies.set('ey_your_journey_cookie_policy', { open: false, }, -1);

            this.cookiePolicyOpen = false;
        },

        isIE() {
            const ua = window.navigator.userAgent;
            if(ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0 || ua.indexOf('Edge/') > 0) {
                this.ie = true;
            }
        }
    }
}
</script>

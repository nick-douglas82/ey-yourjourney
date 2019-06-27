import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentScene: 0,
        activeScene: 'introduction-scene-home',
        activePopup: '',
        nextScene: '',
        bookmarks: [],
        showCookiePolicy: true,
        isLandscape: false,
        isMobileDevice: false,
        isDesktopDevice: false
    },

    mutations: {
        updateCurrentScene(state, sceneNo) {
            state.currentScene = sceneNo;
        },

        setSceneReference(state, sceneRef) {
            state.activeScene = sceneRef;
        },

        setNextSceneReference(state, sceneRef) {
            state.nextScene = sceneRef;
        },

        setPopupReference(state, popupRef) {
            state.activePopup = popupRef;
        },

        setBookmarks(state, bookmarks) {
            state.bookmarks = bookmarks;
        },

        addBookmark(state, bookmarkRef) {
            if (!state.bookmarks.bookmarked.includes(bookmarkRef) ) {
                state.bookmarks.bookmarked.push(bookmarkRef);
            }
        },

        removeBookmark(state, bookmarkRef) {
            const key = state.bookmarks.bookmarked.indexOf(bookmarkRef);
            if ( key !== -1 ) {
                state.bookmarks.bookmarked.splice( key, 1 );
            }
        },

        setMobileDevice(state, device) {
            state.isMobileDevice = device;
        },

        setDesktopDevice(state, device) {
            state.isDesktopDevice = device;
        },

        setIsLandscape(state, orientation) {
            state.isLandscape = orientation;
        },

        closeCookiePolicy(state) {
            state.showCookiePolicy = false;
        }
    }
});

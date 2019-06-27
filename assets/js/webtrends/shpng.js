/* global Webtrends */

/**
 * @callback
 * @param string - Name of plugin / callback
 * @param function - callback function
 */
Webtrends.registerPlugin('shpng', function (dcs) {
    /**
     *  addEvent function for browser compatibility
     *
     * @function addEvent
     * @param element - element to bind to
     * @param evnt - event to trigger on
     * @param funct - function to execute on event
     *
     */
    if (!window.addEvent) {
        window.addEvent = function (element, evnt, funct) {
            if (element.attachEvent) {
                return element.attachEvent('on' + evnt, funct);
            }
            return element.addEventListener(evnt, funct, false);
        };
    }

    Webtrends.trackEvent = function (evnt, params) {
        //console.log(`WT: ${evnt}`);
        var o = {};
        o.argsa = [];
        if (evnt) {
            o['argsa'].push("WT.ti", evnt);

            if (params) {
                if (params.hasOwnProperty('sl') === true) {
                    o['argsa'].push("WT.z_sl", params.sl);
                }
                if (params.hasOwnProperty('ref') === true) {
                    o['argsa'].push("WT.z_ref", params.ref);
                }
            }

            if (o['argsa'].length > 0) {
                o['argsa'].push("WT.site", "EY Build Tomorrow");
                o['argsa'].push("DCS.dcsuri", document.location.href);
                o['argsa'].push("WT.dl", "0");
                //console.log(o['argsa']);
                Webtrends.multiTrack({
                    argsa: o['argsa'],
                    delayTime: 30
                });
            }
        }  // if evnt
    }; //track
});

// WebTrends SmartSource Data Collector Tag v10.4.23
// Copyright (c) 2016 Webtrends Inc.  All rights reserved.
// Tag Builder Version: 4.1.3.5
// Created: 2018.08.12

window.webtrendsAsyncInit = function () {
    var dcs = new Webtrends.dcs().init({
        dcsid: "dcs222du0hczdus13094otknz_2v5q",
        domain: "statse.webtrendslive.com",
        timezone: 0,
        i18n: true,
        adimpressions: false,
        adsparam: "WT.ac",
        offsite: false,
        download: false,
        downloadtypes: "ppt,pptx,xls,doc,pdf,txt,csv,zip,docx,xlsx,rar,gzip",
        anchor: false,
        onsitedoms: "",
        fpcdom: "",
        plugins: {
            advancedLinkTracking: {
                src: "//s.webtrends.com/js/advancedLinkTracking.js",
                trackers: [
                    { name: "All Links", type: "all_links" }
                ]
            },
            shpng: { src: "/yourjourney-staging/dist/js/shpng.js" }
        }
    }).track();
};
(function () {
    var s = document.createElement("script"); s.async = true; s.src = "//s.webtrends.com/js/webtrends.js";
    var s2 = document.getElementsByTagName("script")[0]; s2.parentNode.insertBefore(s, s2);
}());

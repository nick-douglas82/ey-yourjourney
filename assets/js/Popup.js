class Popup {
    constructor(args = {}) {
        this.ref               = args.hasOwnProperty('ref') ? args.ref : 'no-ref';
        this.type              = args.hasOwnProperty('type') ? args.type : 'no-type';
        this.title             = args.hasOwnProperty('title') ? args.title : 'No title';
        this.content           = args.hasOwnProperty('content') ? args.content : 'No content';
        this.link              = args.hasOwnProperty('link') ? args.link : false;
        this.showBookmark      = args.hasOwnProperty('showBookmark') ? args.showBookmark : true;
        this.backgroundImage   = args.hasOwnProperty('backgroundImage') ? args.backgroundImage : false;
        this.backgroundBlur    = args.hasOwnProperty('backgroundBlur') ? args.backgroundBlur : false;
        this.backgroundOverlay = args.hasOwnProperty('backgroundOverlay') ? args.backgroundOverlay : false;
        this.internalRef       = args.hasOwnProperty('internalRef') ? args.internalRef : 'No internal reference';
    }
}

module.exports = Popup;

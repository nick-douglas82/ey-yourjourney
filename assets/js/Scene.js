class Scene {
    constructor(args = {}) {
        this.ref                = args.hasOwnProperty('ref') ? args.ref : 'no-ref';
        this.title              = args.hasOwnProperty('title') ? args.title : 'No title';
        this.additionalClasses  = args.hasOwnProperty('additionalClasses') ? args.additionalClasses : [];
        this.backgroundImage    = args.hasOwnProperty('backgroundImage') ? args.backgroundImage : false;
        this.backgroundBlur     = args.hasOwnProperty('backgroundBlur') ? args.backgroundBlur : false;
        this.backgroundVideo    = args.hasOwnProperty('backgroundVideo') ? args.backgroundVideo : false;
        this.backgroundSize     = args.hasOwnProperty('backgroundSize') ? args.backgroundSize : 'cover';
        this.backgroundPosition = args.hasOwnProperty('backgroundPosition') ? args.backgroundPosition : 'center';
        this.backgroundOverlay  = args.hasOwnProperty('backgroundOverlay') ? args.backgroundOverlay : {};
        this.type               = args.hasOwnProperty('type') ? args.type : 'standard';
        this.components         = args.hasOwnProperty('components') ? args.components : [];
        this.logo               = args.hasOwnProperty('logo') ? args.logo : [];
        this.video              = args.hasOwnProperty('video') ? args.video : [];
        this.preloader          = args.hasOwnProperty('preloader') ? args.preloader : [];
        this.journeys           = args.hasOwnProperty('journeys') ? args.journeys : [];
        this.timer              = args.hasOwnProperty('timer') ? args.timer : false;
        this.goToScene          = args.hasOwnProperty('goToScene') ? args.goToScene : false;
    }
}
module.exports = Scene;

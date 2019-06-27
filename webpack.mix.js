let mix = require('laravel-mix');

const staging = true; //false;

let directory = 'yourjourney';

if(staging) {
	directory += '-staging';
}

const resourceRoot = '/'+directory+'/dist/';

mix.js('assets/js/app.js', 'js')
    .sass('assets/sass/app.scss', 'css')
    .setPublicPath(directory+'/dist')
    .setResourceRoot(resourceRoot);

if (!mix.inProduction()) {
    mix.sourceMaps();
}

mix.copy('node_modules/three/build/three.min.js', directory+'/dist/js');
mix.copy('assets/js/vendor/pannellum.js', directory+'/dist/js');

mix.copy('assets/captions', directory+'/dist/captions');

if(staging) {
	mix.copy('index-staging.html', directory+'/index.html');
	mix.copy('assets/js/webtrends/webtrends.load.staging.js', directory+'/dist/js/webtrends.load.js');
}
else {
	mix.copy('index.html', directory+'/index.html');
	mix.copy('assets/js/webtrends/webtrends.load.js', directory+'/dist/js');
}
mix.copy('assets/js/webtrends/shpng.js', directory+'/dist/js');
mix.copy('favicon.ico', directory+'/favicon.ico');

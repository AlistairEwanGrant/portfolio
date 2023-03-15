import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/bootstrapFive.css',
                'resources/css/easy-button.css',
                'resources/css/leaflet.css',
                'resources/css/gaz.css',
                'resources/css/leaflet-markers.min.css',
                'resources/js/app.js',
                'resources/js/bootstrap.js',
                'resources/js/jquery-3.6.0.min.js',
                'resources/css/easy-button.js',
                'resources/js/company.js',
                'resources/js/leaflet.js',
                'resources/js/leaflet.extra-markers.min.js',
                'resources/js/gazetteer.js',
            ],
            refresh: true,
        }),
    ],
});

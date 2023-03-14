import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/bootstrapFive.css',
                'resources/css/gaz-bootstrap.min.css',
                'resources/css/easy-button.css',
                'resources/css/easy-button.d.ts',
                'resources/css/leaflet.css',
                'resources/css/gaz.css',
                'resources/css/gaz-bootstrap.min.css',
                'resources/js/gaz-bootstrap.bundle.js',
                'resources/css/leaflet-markers.min.css',
                'resources/js/app.js',
                'resources/css/easy-button.js',
                'resources/js/bootstrap.js',
                'resources/js/company.js',
                'resources/js/leaflet.js',
                'resources/js/leaflet-markers.min.js',
                'resources/js/leaflet-src.esm.js',
                'resources/js/leaflet-src.js',
                'resources/js/gazetteer.js',
            ],
            refresh: true,
        }),
    ],
});

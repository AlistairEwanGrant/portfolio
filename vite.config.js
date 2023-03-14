import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/jquery-3.6.0.min.js',
                'resources/js/app.js',
                'resources/js/bootstrap.js',
                'resources/js/company.js',
                'resources/js/leaflet.js',
                'resources/js/gaz-bootstrap.bundle.js',
                'resources/js/gazetteer-easy-button.js',
                'resources/js/leaflet-markers.min.js',
                'resources/js/leaflet-src.esm.js',
                'resources/js/leaflet-src.js',
                'resources/js/gazetteer.js',
            ],
            refresh: true,
        }),
    ],
});

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/bootstrapFive.css',
                'resources/js/app.js',
                'resources/js/bootstrap.js',
                'resources/js/company.js',
                'resources/js/jquery.min.js',
            ],
            refresh: true,
        }),
    ],
});

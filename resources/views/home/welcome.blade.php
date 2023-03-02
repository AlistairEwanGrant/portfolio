<x-app-layout>

    <x-nav-bar></x-nav-bar>

    <div class="py-6 px-4 sm:p-6 md:py-10 md:px-8 bg-cyan-900 text-white text-center py-24">
        <div class="flex items-center flex-col">
            <!-- Masthead Avatar Image-->
            <img class="flex mb-12 front-page-image" src="{{URL::asset('images/me.png')}}" alt="image of me"/>
            <!-- Masthead Heading-->
            <div class="inline">
                <h1 class="mb-0 font-bold max-w-lg inline title-name-front-page">ALISTAIR GRANT</h1>
            </div>
            <!-- Icon Divider-->
            <div class="front-page-divider-custom">
                <div class="bg-white front-page-strip"></div>
                <i class="fas fa-star text-5xl px-8"></i>
                <div class="bg-white front-page-strip"></div>
            </div>
            <!-- Masthead Subheading-->
            <p class="mb-0 text-lg ">Full-Stack Web Developer</p>
        </div>
    </div>

    <x-footer></x-footer>

</x-app-layout>


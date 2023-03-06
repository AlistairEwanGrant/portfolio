<x-app-layout>
    <x-nav-bar></x-nav-bar>

    <div class="p-24 max-sm:p-6">
        <div class="container mx-auto">
            <!-- Portfolio Section Heading-->
            <div class="text-center">
                <h2 class="mb-0 font-bold max-w-lg inline title-name-front-page mx-auto">Portfolio</h2>
            </div>

            <!-- Icon Divider-->
            <div class="front-page-divider-custom">
                <div class="bg-black front-page-strip"></div>
                <i class="fas fa-star text-5xl px-8"></i>
                <div class="bg-black front-page-strip"></div>
            </div>
            <!-- Portfolio Grid Items-->
            <div class="grid gap-x-8 lg:grid lg:grid-cols-3 lg:gap-y-8 lg:mx-auto w-full">
                <!-- Portfolio Item 3-->
                <div
                    class="mb-12 mx-6 cursor-pointer border-solid border-2 border-black rounded-lg mx-auto portfolio-div-sizes"
                    x-data="{ open: false }"
                >
                    <img class="portfolio-sizes"
                         src="{{URL::asset('images/project3.png')}}"
                         alt="Laravel Blog"
                         x-on:click="open = ! open"/>

                    {{-- Modal --}}
                    <div x-show="open" x-transition x-on:click="open = ! open">
                        <x-modal></x-modal>
                    </div>

                </div>

                <!-- Portfolio Item 1-->
                <div
                    class="mb-12 mx-6 cursor-pointer border-solid border-2 border-black rounded-lg mx-auto portfolio-div-sizes"
                    x-data="{ open: false }"
                >
                    <img class="portfolio-sizes"
                         src="{{URL::asset('images/project1.jpeg')}}"
                         alt="Gazzetteer"
                         x-on:click="open = ! open"/>

                    {{-- Modal --}}
                    <div x-show="open" x-transition x-on:click="open = ! open">
                        <x-modal-two></x-modal-two>
                    </div>
                </div>
                <!-- Portfolio Item 2-->
                <div
                    class="mb-12 mx-6 cursor-pointer border-solid border-2 border-black rounded-lg mx-auto portfolio-div-sizes"
                    x-data="{ open: false }"
                >
                    <img class="portfolio-sizes"
                         src="{{URL::asset('images/project2.jpg')}}"
                         alt="CRUD Application"
                         x-on:click="open = ! open"/>

                {{-- Modal --}}
                <div x-show="open" x-transition x-on:click="open = ! open">
                    <x-modal-three></x-modal-three>
                </div>

            </div>
        </div>
    </div>


    <x-footer></x-footer>
</x-app-layout>

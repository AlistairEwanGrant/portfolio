<x-app-layout>
    <x-nav-bar></x-nav-bar>

    <div class="p-24 max-sm:p-6 bg-cyan-900 text-white">
        <div class="container mx-auto">
            <!-- Portfolio Section Heading-->
            <div class="text-center">
                <h2 class="mb-0 font-bold max-w-lg mx-auto text-4xl">Curriculum Vitae</h2>
            </div>

            <!-- Icon Divider-->
            <div class="front-page-divider-custom">
                <div class="bg-black front-page-strip"></div>
                <i class="fas fa-star text-5xl px-8"></i>
                <div class="bg-black front-page-strip"></div>
            </div>

            <div class="grid sm:columns-1 mx-2.5 md:grid-cols-2 gap-4 ">
                <div class="font-light text-lg ml-auto"><p>Between 2012 and 2019, I worked within the Probation Service.
                        I progressed from administrator to a senior administrative & co-ordination position, to a
                        management
                        role. I managed a busy Court administrative team in Central London (including within the Old
                        Bailey)
                        and then an office-based team in Guildford. I then spent some time developing my project
                        management
                        skills within local councils, wherein my exposure to programmes alike Business Objects and SQL
                        ignited my passion for programming.

                    </p></div>

                <div class="font-light text-lg mr-auto"><p>
                        For the past year I have been working as a Laravel Full-Stack
                        Developer fixing and building many different websites based on the client’s requests.
                    </p>
                </div>
            </div>
        </div>

        <a href="{{route('curriculumVitae.index')}}" class="btn btn-light w-full inline-block" id="cv" target="_blank">
            <div
                class=" mx-auto border-green-100 rounded bg-white text-black mt-5 w-full text-center px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal w-max text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                Click to
                view Curriculum Vitae
            </div>
        </a>

    </div>



    <x-footer></x-footer>
</x-app-layout>

<x-app-layout>
    @vite('resources/css/gaz.css')
    @vite('resources/css/leaflet.css')
    @vite('resources/css/easy-button.css')
    @vite('resources/css/leaflet-markers.min.css')
    @vite('resources/css/gaz-bootstrap.min.css')


    <!-- dropdown menu -->
    <select name="CountryNameDrop_down" id="CountryNameDrop_down">
        <option value="Select Country" id="selector" placeholder="Select Country">Select Country</option>
    </select>

    <!-- Map div -->
    <div id="map"></div>

    <!-- Modal -->
    <div class="modal fade" id="newModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content table-primary ">
                <div class="modal-header table-primary ">
                    <h5 class="modal-title" id="titleTxt"></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                <!-- tables -->
                <!-- info table -->
                <table class="table table-striped" id="countryInfoTable">
                    <tr class="table-info" id="capital">
                        <td><i class="fas fa-hotel"></i></td>
                        <td class="white">Capital</td>
                        <td class="white" id="txtCapital"></td>
                    </tr>
                    <tr class="table-primary" id="population">
                        <td><i class="fas fa-user"></i></td>
                        <td class="blue">Population</td>
                        <td class="blue" id="txtPopulation"></td>
                    </tr>
                    <tr class="table-info" id="area">
                        <td><i class="fas fa-sign"></i></td>
                        <td class="white">Area (km<sup>2</sup>)</td>
                        <td class="white" id="txtArea"></td>
                    </tr>
                    <tr class="table-primary" id="continent">
                        <td><i class="fas fa-poll"></i></td>
                        <td class="blue">Country Code</td>
                        <td class="blue" id="txtCountryCode"></td>
                    </tr>
                    <tr class="table-info" id="continentName">
                        <td><i class="fas fa-mountain"></i></td>
                        <td class="white">Continent Name</td>
                        <td class="white" id="txtContinentName"></td>
                    </tr>
                    <tr class="table-primary" id="countryCode">
                        <td><i class="fas fa-minus-square"></i></td>
                        <td class="blue">Continent Code</td>
                        <td class="blue" id="txtContinent"></td>
                    </tr>
                    <tr class="table-info" id="currencyCode">
                        <td><i class="fas fa-money-bill"></i></td>
                        <td class="white">Currency Code</td>
                        <td class="white" id="txtCurrencyCode"></td>
                    </tr>

                </table>
                <div class="modal-footer" id="countryInfoTableFooter">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                <!-- wiki table -->

                <div id="factDiv">
                    <table class="table table-striped" id="factTable">
                    </table>

                </div>

                <!-- weather forcast table -->
                <table class="table table-striped" id="forcastTable">
                    <tr class="table-info">
                        <td class="white center" id="today"></td>
                        <td class="white width" id="todayCondition"></td>
                    </tr>
                    <tr class="table-info">
                        <td class="white center" id="todayIcon" rowspan="2"></td>
                        <td class="white width" id="todayHighTemp"></td>
                    </tr>
                    <tr class="table-info">
                        <td class="white width" id="todayLowTemp"></td>
                    </tr>

                    <tr class="table-primary">
                        <td class="blue center" id="tomorrow"></td>
                        <td class="blue width" id="tomorrowCondition"></td>
                    </tr>
                    <tr class="table-primary">
                        <td class="blue center" id="tomorrowIcon" rowspan="2"></td>
                        <td class="blue width" id="tomorrowHighTemp"></td>
                    </tr>
                    <tr class="table-primary">
                        <td class="blue width" id="tomorrowLowTemp"></td>
                    </tr>

                    <tr class="table-info">
                        <td class="white center" id="dayAfter"></td>
                        <td class="white width" id="dayAfterCondition"></td>
                    </tr>
                    <tr class="table-info">
                        <td class="white center" id="dayAfterIcon" rowspan="2"></td>
                        <td class="white width" id="dayAfterHighTemp"></td>
                    </tr>
                    <tr class="table-info">
                        <td class="white width" id="dayAfterLowTemp"></td>
                    </tr>
                </table>
                <div class="modal-footer" id="forcastTableFooter">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>

                <!-- news table -->
                <div id="newsDiv">
                    <table class="table table-striped" id="newsTable">
                    </table>
                </div>

            </div>
        </div>
    </div>

    @vite('resources/js/gaz-bootstrap.bundle.js')
    @vite('resources/js/leaflet.js')
    @vite('resources/js/easy-button.js')
    @vite('resources/js/leaflet.extra-markers.js')
    @vite('resources/js/gazetteer.js')
</x-app-layout>

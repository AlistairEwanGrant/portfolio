//Create map
    let map = L.map('map').fitWorld();

//Create highlighting layer
    let layerGroup = new L.LayerGroup();

//Add tiles to map
    L.tileLayer('https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 20,
        minZoom: 3,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiYWxpc3RhaXJncmFudCIsImEiOiJja3ZwNXpqNDM2MDFoMnRvazV1czlpd3ZsIn0.XYzSbYcrxacKZofVEt7uQg'
    }).addTo(map);

    //populate the dropdown and highlight local area from start
    $.ajax({
        url: "gazetteer/country-names",
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            for (let i = 0; i < result.data.length; i++) {
                let countryNames = result.data[i].name
                let countryValue = result.data[i].iso_a2

                let options = `<option value="${countryValue}" > ${countryNames} </option> `;
                $('select').append(options);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        }
    })

    //find location and add to lat and long to obj
    navigator.geolocation.getCurrentPosition(getLatLon);

    async function getLatLon(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        //with lat long obj find country from open cage
        $.when(getLatLon).done(function () {
            $.ajax({
                url: "gazetteer/openCage/{lat}/{lng}",
                type: 'GET',
                dataType: 'json',
                data: {
                    lat: latitude,
                    lng: longitude
                },
                success: function (result) {
                    if (result.status.name == "ok") {
                        const location = result.data.results[0].components.country_code;
                        const yourLocation = location.toUpperCase();

                        //country Geo for info and name
                        $.ajax({
                            url: "gazetteer/country-borders/{country_code}",
                            type: 'GET',
                            dataType: 'json',
                            data: {
                                country_code: yourLocation
                            },
                            success: function (result2) {
                                if (result2.status.name == "ok") {

                                    // Selected country highlight
                                    let area = new L.geoJSON(result2.data, {
                                        style: function (feature) {
                                            return {
                                                color: 'green',
                                                weight: '1',
                                                fillColor: 'Cornsilk',
                                                fillOpacity: '0.09',
                                            };
                                        }
                                    });

                                    layerGroup.clearLayers()
                                    layerGroup.addTo(map);
                                    layerGroup.addLayer(area);
                                    map.fitBounds(area.getBounds())

                                    //find country in dropdown
                                    let isoCode = [];
                                    let allListOptions = document.querySelector('#CountryNameDrop_down');

                                    for (let i = 0; i < allListOptions.length; i++) {
                                        if (yourLocation === allListOptions[i].getAttribute('value')) {
                                            isoCode = [i]
                                        }
                                    }
                                    let num = isoCode.toString();

                                    //select country in dropdown function
                                    function changeSelectedValue() {
                                        document.getElementById('CountryNameDrop_down').getElementsByTagName('option')[num].selected = true;
                                    }


                                    // funcitons to run at start up
                                    //select country in dropdown
                                    changeSelectedValue()
                                    // Display Citys on Load
                                    displayCities()

                                    displayCams()
                                }
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                console.log(jqXHR);
                            }
                        });
                    }
                }
            })
        })
    }


// changes to take place when select drop down is changed
$("select").change(function () {
    updateHighliughtedCountry()
    $.when(updateHighliughtedCountry).done(displayCities())
    $.when(updateHighliughtedCountry).done(displayCams())
})

// info display for button info
L.easyButton('fa-info', function () {
    $('#titleTxt').text('Country Information');
    displayInfo()
    callinfo()
    $("#newModal").modal();
}).addTo(map);

// info display for button wiki
L.easyButton('fa-circle', function () {
    $('#titleTxt').text("Wiki Search on Country's Capital");
    displayWiki()
    $("#newModal").modal();
    callWiki();
}).addTo(map);

// info display for button forcast
L.easyButton('fa-cloud', function () {
    callForcast()
    displayForcast()
    $("#newModal").modal();
}).addTo(map);

L.easyButton('fa-newspaper', function () {
    $('#titleTxt').text('Country Free News');
    callNews()
    displayNews()
    $("#newModal").modal();
}).addTo(map);


// recalled functions below

function updateHighliughtedCountry() {
    //change info on drop down select
    let country_code = $("#CountryNameDrop_down").val();
    // update country boundries
    $.ajax({
        url: "gazetteer/country-borders/{country_code}",
        type: 'GET',
        dataType: 'json',
        data: {
            country_code: country_code
        },
        success: function (result) {
            if (result.status.name == "ok") {
                let area = new L.geoJSON(result.data, {
                    style: function (feature) {
                        return {
                            color: 'green',
                            weight: '1',
                            fillColor: 'yellow',
                            fillOpacity: '0.09',
                        };
                    }
                });

                layerGroup.clearLayers()
                layerGroup.addTo(map);
                layerGroup.addLayer(area);
                map.fitBounds(area.getBounds())
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        }
    });
}


// changed info on view in modal to info
function displayInfo() {
    $('#countryInfoTable').show();
    $('#countryInfoTableFooter').show();
    $('#weatherTable').hide();
    $('#factTable').hide();
    $('#factTableFooter').hide();
    $('#forcastTable').hide();
    $('#forcastTableFooter').hide();
    $('#newsTable').hide();
    $('#newsTableFooter').hide();
};

function displayWiki() {
    $('#countryInfoTable').hide();
    $('#countryInfoTableFooter').hide();
    $('#weatherTable').hide();
    $('#factTable').show();
    $('#factTableFooter').show();
    $('#forcastTable').hide();
    $('#forcastTableFooter').hide();
    $('#newsTable').hide();
    $('#newsTableFooter').hide();
};

function displayForcast() {
    $('#countryInfoTable').hide();
    $('#countryInfoTableFooter').hide();
    $('#weatherTable').hide();
    $('#factTable').hide();
    $('#factTableFooter').hide();
    $('#forcastTable').show();
    $('#forcastTableFooter').show();
    $('#newsTable').hide();
    $('#newsTableFooter').hide();
};

function displayNews() {
    $('#countryInfoTable').hide();
    $('#countryInfoTableFooter').hide();
    $('#weatherTable').hide();
    $('#factTable').hide();
    $('#factTableFooter').hide();
    $('#forcastTable').hide();
    $('#forcastTableFooter').hide();
    $('#newsTable').show();
    $('#newsTableFooter').show();
};


//update country info modal infomation
function callinfo() {
    let country_code = $("option:selected").val()
    $.ajax({
        url: "gazetteer/get-country-info/{country}",
        type: 'GET',
        dataType: 'json',
        data: {
            country_code: country_code
        },
        success: function (result) {

            if (result.status.name === "ok") {

                //format numbers
                let pop = result['data'][0]['population'];
                let population = pop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                let area = result['data'][0]['areaInSqKm'];
                let formattedArea = area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                let noPointArea = formattedArea.slice(0, -2);

                //add to html
                $('#txtCapital').html(result['data'][0]['capital']);
                $('#txtPopulation').html(population);
                $('#txtArea').html(noPointArea);
                $('#txtCountryCode').html(result['data'][0]['countryCode']);
                $('#txtContinent').html(result['data'][0]['continent']);
                $('#txtContinentName').html(result['data'][0]['continentName']);
                $('#txtCurrencyCode').html(result['data'][0]['currencyCode']);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        }
    });
}


// calling forcast data
function callForcast() {

    let code = $("option:selected").val()

    $.ajax({
        url: "gazetteer/get-country-info/{country_code}",
        type: 'GET',
        dataType: 'json',
        data: {
            country_code: code
        },
        success: function (result) {
            if (result.status['description'] === "success") {
                $.ajax({
                    url: "gazetteer/weather-forcast/{city}",
                    type: 'GET',
                    dataType: 'json',
                    data: {
                        city: result['data'][0]['capital']
                    },
                    success: function (result2) {

                        $('#titleTxt').text(result['data'][0]['capital']);


                        // Set dates for forecast
                        // Today's date
                        const today = new Date().toLocaleDateString('en-us', {
                            weekday: "long",
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                        })

                        // Current date
                        const date = new Date();

                        // Tomorrow's date
                        date.setDate(date.getDate() + 1);

                        // Tomorrows date formated
                        const tomorrow = date.toLocaleDateString('en-us', {
                            weekday: "long",
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                        })

                        // Current date
                        const dayAfter = new Date();

                        // day after's date formatted
                        dayAfter.setDate(date.getDate() + 1);
                        const dayAfterTomorrow = dayAfter.toLocaleDateString('en-us', {
                            weekday: "long",
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                        })


                        $('#today').html(today);
                        $('#tomorrow').html(tomorrow);
                        $('#dayAfter').html(dayAfterTomorrow);


                        const todayHighTemp = result2['forecast']['forecastday'][0]['day']['maxtemp_c'];
                        const todayHighTempSign = `${todayHighTemp} &#8451;`

                        const tomorrowHighTemp = result2['forecast']['forecastday'][1]['day']['maxtemp_c'];
                        const tomorrowHighTempSign = `${tomorrowHighTemp} &#8451;`

                        const dayAfterHighTemp = result2['forecast']['forecastday'][2]['day']['maxtemp_c'];
                        const tdayAfterHighTempSign = `${dayAfterHighTemp} &#8451;`


                        $('#todayHighTemp').html(todayHighTempSign);
                        $('#tomorrowHighTemp').html(tomorrowHighTempSign);
                        $('#dayAfterHighTemp').html(tdayAfterHighTempSign);


                        const todayLowTemp = result2['forecast']['forecastday'][0]['day']['mintemp_c'];
                        const todayLowTempSign = `${todayLowTemp} &#8451;`

                        const tomorrowLowTemp = result2['forecast']['forecastday'][1]['day']['mintemp_c'];
                        const tomorrowLowTempSign = `${tomorrowLowTemp} &#8451;`

                        const dayAfterLowTemp = result2['forecast']['forecastday'][2]['day']['mintemp_c'];
                        const tdayAfterLowTempSign = `${dayAfterLowTemp} &#8451;`

                        $('#todayLowTemp').html(todayLowTempSign);
                        $('#tomorrowLowTemp').html(tomorrowLowTempSign);
                        $('#dayAfterLowTemp').html(tdayAfterLowTempSign);

                        $('#todayCondition').html(result2['forecast']['forecastday'][0]['day']['condition']['text']);
                        $('#tomorrowCondition').html(result2['forecast']['forecastday'][1]['day']['condition']['text']);
                        $('#dayAfterCondition').html(result2['forecast']['forecastday'][2]['day']['condition']['text']);

                        let todayCode = result2['forecast']['forecastday'][0]['day']['condition']['code']
                        let tomorrowCode = result2['forecast']['forecastday'][1]['day']['condition']['code']
                        let dayAfterCode = result2['forecast']['forecastday'][2]['day']['condition']['code']


                        $.ajax({
                            url: "gazetteer/weather-icon",
                            type: 'GET',
                            dataType: 'json',
                            success: function (result3) {
                                // icon for today condition
                                for (let i = 0; i < result3.length; i++) {
                                    if (todayCode === result3[i]['code']) {
                                        iconCode = result3[i]['icon']
                                        let icon = `<img src="public/images/weather/${iconCode}.png" alt="Weather Icon" width="100" height="100">`
                                        $('#todayIcon').html(icon);
                                        break;
                                    }
                                }

                                // icon for tomorrow condition
                                for (let i = 0; i < result3.length; i++) {
                                    if (tomorrowCode === result3[i]['code']) {
                                        iconCode = result3[i]['icon']
                                        let icon = `<img src="public/images/weather/${iconCode}.png" alt="Weather Icon" width="100" height="100">`
                                        $('#tomorrowIcon').html(icon);
                                        break;
                                    }
                                }

                                // icon for tomorrow condition
                                for (let i = 0; i < result3.length; i++) {
                                    if (dayAfterCode === result3[i]['code']) {
                                        iconCode = result3[i]['icon']
                                        let icon = `<img src="public/images/weather/${iconCode}.png" alt="Weather Icon" width="100" height="100">`
                                        $('#dayAfterIcon').html(icon);
                                        break;
                                    }
                                }
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                console.log(textStatus)
                            }
                        });
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(textStatus)
                    }
                });
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus)
        }
    });
}


// create layer for cities
let markerGroup = new L.layerGroup().addTo(map);
markerGroup.addTo(map);

// display city function
function displayCities() {
    let code = $("#CountryNameDrop_down").val();
    markerGroup.clearLayers()

    $.ajax({
        url: "gazetteer/cities-information",
        type: 'GET',
        dataType: 'json',
        data: {
            country_code: code
        },
        success: function (result) {

            for (let i = 0; i < result.cities.length; i++) {

                let cityName = result.cities[i].name;
                let pop = result.cities[i].population;
                let population = pop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                let latitude = result.cities[i].latitude;
                let longitude = result.cities[i].longitude;

                var redMarker = L.ExtraMarkers.icon({
                    icon: 'fa-city',
                    svg: true,
                    markerColor: 'MediumTurquoise',
                    svgBorderColor: 'MediumBlue',
                    iconColor: 'black',
                    shape: 'circle',
                    prefix: 'fa'
                });
                var layer = L.marker([latitude, longitude], {icon: redMarker})
                layer.addTo(markerGroup).bindPopup(`${cityName} <br/>Population: ${population}`)
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus)
        }
    })
}


// call news function
function callNews() {
    let country_code = $("option:selected").text();
    let mytrim = jQuery.trim(country_code);
    let searchCountry = mytrim.replace(/ /g, '%20')

    // remove previous
    var d = document.createDocumentFragment();
    d.appendChild(document.getElementById("newsTable"));

    // create an element table
    let newElement = document.createElement('table')
    newElement.id = "newsTable"
    newElement.class = "table table-striped"
    document.getElementById("newsDiv").appendChild(newElement);

    $.ajax({
        url: "gazetteer/news/{country}",
        type: 'GET',
        dataType: 'json',
        data: {
            country: searchCountry
        },
        success: function (result) {

            let newsList = []

            for (let i = 0; i < result.articles.length; i++) {
                let title = result['articles'][i]['title']
                let link = result['articles'][i]['link']
                let img = result['articles'][i]['media']
                let summary = result['articles'][i]['summary']

                if (i % 2 === 0) {
                    colorClass = "white"
                    trClass = "table-info"
                } else {
                    colorClass = "blue"
                    trClass = "table-primary"
                }

                newsList = `<tr class="${trClass}"><td><a href="https://${link}" target="_blank" style="text-decoration: none !important"><h1 class="center ${colorClass}
                headdingTxt">${title}</h1><figure class="center ${colorClass} smallerTxt">
                <img src="${img}" class="newsImg"><figcaption>${summary}</figcaption><a></figure></td></tr>`;


                $('#newsTable').append(newsList);
            }

            let footer = `<div class="modal-footer" id="newsTableFooter">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div>`;

            $('#newsTable').append(footer);


        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus)
        }
    })
}


//call wiki info function
function callWiki() {
    let code = $("option:selected").val();

    // remove previous
    var d = document.createDocumentFragment();
    d.appendChild(document.getElementById("factTable"));

    // create an element table
    let newElement = document.createElement('table')
    newElement.id = "factTable"
    newElement.class = "table table-striped"
    document.getElementById("factDiv").appendChild(newElement);

    $.ajax({
        url: "gazetteer/get-country-info/{country_code}",
        type: 'GET',
        dataType: 'json',
        data: {
            country_code: code
        },
        success: function (result) {
            if (result.status['description'] === "success") {
                $.ajax({
                    url: "gazetteer/country-wiki/{city}",
                    type: 'GET',
                    dataType: 'json',
                    data: {
                        city: result['data'][0]['capital']
                    },
                    success: function (result2) {

                        if (result2.status.name == "ok") {

                            let wikiList = []

                            for (let i = 0; i < result2['data'].length; i++) {
                                let title = result2['data'][i]['title']
                                let img = result2['data'][i]['thumbnailImg']
                                let summary = result2['data'][i]['summary']
                                let link = result2['data'][i]['wikipediaUrl']


                                if (i % 2 === 0) {
                                    colorClass = "white"
                                    trClass = "table-info"

                                } else {
                                    colorClass = "blue"
                                    trClass = "table-primary"
                                }

                                wikiList = `<tr class="${trClass}"><td><a href="${link}" target="_blank" style="text-decoration: none !important">
                        <h1 class="center ${colorClass}
                headdingTxt">${title}</h1><figure class="center ${colorClass} smallerTxt">
                <img src="${img}" class="wikiImg"><figcaption>${summary}</figcaption><a></figure></td></tr>`;

                                $('#factTable').append(wikiList);
                            }
                        }

                        let footer2 = `<div class="modal-footer" id="factTableFooter">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>`
                        $('#factTable').append(footer2);
                    },


                    error: function (jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR);
                    }
                });
            }
        }
    })
}


function displayCams() {

    let country_code = $("#CountryNameDrop_down").val();

    $.ajax({
        url: "gazetteer/windy/{country}",
        type: 'GET',
        dataType: 'json',
        data: {
            country: country_code
        },
        success: function (result) {
            if (result.status.name == "ok") {

                for (let i = 0; i < result.data.result.webcams.length; i++) {

                    let title = result.data.result.webcams[i].location.city
                    let img = result.data.result.webcams[i].player.day.embed
                    let latitude = result.data.result.webcams[i].location.latitude
                    let longitude = result.data.result.webcams[i].location.longitude

                    var redMarker = L.ExtraMarkers.icon({
                        icon: 'fa-camera',
                        svg: true,
                        markerColor: 'Coral',
                        svgBorderColor: 'MediumBlue',
                        iconColor: 'black',
                        shape: 'circle',
                        prefix: 'fa'
                    });
                    var layer = L.marker([latitude, longitude], {icon: redMarker})
                    layer.addTo(markerGroup).bindPopup(`<h1>${title}</h1><iframe scrolling="no" src="${img}"></iframe>`)

                }
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus)
        }
    })
}


/* hepl-mmi/meet-gmap
 *
 * /js/script.js - discover Google Map
 *
 * coded by leny@flatLand!
 * started at 01/03/2016
 */

( function() {

    "use strict";

    var $gmap,
        gMap,
        fInitGMap;

    fInitGMap = function() {
        gMap = new google.maps.Map( $gmap[ 0 ], {
            "center": new google.maps.LatLng( 50.83, 4.35 ),
            "disableDefaultUI": true,
            "scrollwheel": false,
            // see https://snazzymaps.com for ready-to-use styles
            "styles": [
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#FF00FF"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#FFFF00"
                        }
                    ]
                }
            ],
            "zoomControl": true,
            "zoom": 14
        } );
    };

    $( function() {

        $gmap = $( "#gmap" );

        fInitGMap();

    } );

} )();

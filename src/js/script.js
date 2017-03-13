/* leny/meet-gmap
 *
 * /src/js/script.js - Main script (jQuery Version)
 *
 * coded by leny@flatLand!
 * started at 06/03/2017
 */

let gMap,
    iAnimatedMarkers = 0;

const DEFAULT_CENTER = new google.maps.LatLng( 50.67, 4.6 );
const DEFAULT_ZOOM = 7;

const fInitMap = function() {
    gMap = new google.maps.Map( document.getElementById( "gmap" ), {
        "center": DEFAULT_CENTER,
        "mapTypeControl": false,
        "scrollwheel": false,
        "streetViewControl": false,
        "zoom": DEFAULT_ZOOM,
    } );
};

const fAddMarker = function( iLatitude, iLongitude ) {
    let gMarkerPosition = new google.maps.LatLng( iLatitude, iLongitude ),
        gMarker = new google.maps.Marker( {
            "map": gMap,
            "position": gMarkerPosition,
        } );

    iAnimatedMarkers++;
    gMap.panTo( gMarkerPosition );
    gMap.setZoom( 12 );
    gMarker.setAnimation( google.maps.Animation.BOUNCE );

    setTimeout( function() {
        gMarker.setAnimation();
        if ( --iAnimatedMarkers === 0 ) {
            gMap.setZoom( DEFAULT_ZOOM );
            gMap.panTo( DEFAULT_CENTER );
        }
    }, 2900 );
};

const fAddZone = function( iLatitude, iLongitude, iRadius = 10 ) {
    let gZonePosition = new google.maps.LatLng( iLatitude, iLongitude );

    new google.maps.Circle( {
        "center": gZonePosition,
        "map": gMap,
        "radius": iRadius * 1000,
        "fillColor": "blue",
        "fillOpacity": 0.25,
        "strokeColor": "blue",
        "strokeWeight": 1,
    } );
};

const fGetRandomPosition = function( fNext ) {
    $.ajax( {
        "url": "./",
        "method": "get",
        "dataType": "json",
        // "new" way to define object method
        success( { latitude, longitude } ) {
            fNext( latitude, longitude );
        },
        // "classic" way to define object method
        "error": function( oXHR, sError ) {
            console.error( sError );
        },
    } );
};

const fHandleAddMarkerClick = function( oEvent ) {
    oEvent.preventDefault();

    fGetRandomPosition( fAddMarker );
};

const fHandleAddZoneClick = function( oEvent ) {
    oEvent.preventDefault();

    fGetRandomPosition( function( iLatitude, iLongitude ) {
        fAddZone( iLatitude, iLongitude, Math.random() * 5 );
        fAddMarker( iLatitude, iLongitude );
    } );
};

$( function() {

    fInitMap();
    $( "#add-marker" ).on( "click", fHandleAddMarkerClick );
    $( "#add-zone" ).on( "click", fHandleAddZoneClick );

} );

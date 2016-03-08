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
        fInitGMap,
        fGetRandomPosition,
        fAddMarker,
        fAddZone;

    fInitGMap = function() {
        gMap = new google.maps.Map( $gmap[ 0 ], {
            "center": new google.maps.LatLng( 50.83, 4.35 ),
            "disableDefaultUI": true,
            "scrollwheel": false,
            "zoomControl": true,
            "zoom": 7
        } );
    };

    fGetRandomPosition = function( fNext ) {
        $.ajax( {
            "url": "./",
            "method": "GET",
            "dataType": "json",
            "error": function( oXHR, sError ) {
                console.error( sError );
            },
            "success": fNext
        } );
    };

    fAddMarker = function( oEvent, fNext ) {
        oEvent.preventDefault();

        fGetRandomPosition( function( oPosition ) {
            var gMarker;

            gMarker = new google.maps.Marker( {
                "map": gMap,
                "position": new google.maps.LatLng( oPosition.latitude, oPosition.longitude )
            } );

            if ( fNext ) {
                fNext( gMarker );
            }
        } );
    };

    fAddZone = function( oEvent ) {
        fAddMarker( oEvent, function( gMarker ) {
            var sZoneSize = window.prompt( "Quelle taille pour la zone (entre 1 et 50) ?" ),
                iZoneSize = parseInt( sZoneSize );

            if ( isNaN( iZoneSize ) || iZoneSize < 1 || iZoneSize > 50 ) {
                iZoneSize = 25;
            }

            return new google.maps.Circle( {
                "strokeColor": "#660033",
                "strokeOpacity": 0.8,
                "strokeWeight": 1,
                "fillColor": "#660066",
                "fillOpacity": 0.35,
                "map": gMap,
                "center": gMarker.getPosition(),
                "radius": iZoneSize * 1000
            } );
        } );
    };

    $( function() {

        $gmap = $( "#gmap" );

        fInitGMap();

        $( "#add-marker" ).on( "click", fAddMarker );

        $( "#add-zone" ).on( "click", fAddZone );

    } );

} )();

<?php
/* Meet GMap
 * hepl-mmi/meet-gmap
 *
 * by leny
 * started @ 29/02/2016
 */

if( !empty( $_SERVER[ "HTTP_X_REQUESTED_WITH" ] ) && strtolower( $_SERVER[ "HTTP_X_REQUESTED_WITH" ] ) == "xmlhttprequest" ) {
    $iMinLatitude = 49.567;
    $iMaxLatitude = 51.467;
    $iMinLongitude = 2.583;
    $iMaxLongitude = 6.250;

    $aMarker = [];
    $aMarker[ "latitude" ] = rand( $iMinLatitude * 1000, $iMaxLatitude * 1000 ) / 1000;
    $aMarker[ "longitude" ] = rand( $iMinLongitude * 1000, $iMaxLongitude * 1000 ) / 1000;

    header( "Content-Type: application/json" );
    die( json_encode( $aMarker ) );
}

?>
<!doctype html>
<html lang="fr">
    <head>
        <meta charset="utf-8" />
        <title lang="en">Meet GMap</title>

        <link rel="stylesheet" href="css/bootstrap.min.css" />

        <style media="screen">
            #gmap {
                height: 375px;
                background: silver;
            }

            kbd {
                white-space: nowrap;
            }
        </style>
    </head>
    <body>
        <main class="container">
            <header class="row page-header">
                <h1 class="col-md-12">
                    <span lang="en">Meet GMap</span>
                    <small>Une coupine qui saura toujours où vous êtes (ou presque)</small>
                </h1>
            </header>
            <section class="content row">
                <h2 class="hidden">
                    Un exercice haut en marqueurs…
                </h2>

                <div class="col-md-8">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div id="gmap"></div>
                        </div>
                        <div class="panel-footer text-right">
                            <a href="#" class="btn btn-xs btn-primary" id="add-marker">
                                Ajouter un marqueur
                            </a>
                            <a href="#" class="btn btn-xs btn-info" id="add-zone">
                                Ajouter une zone circulaire…
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <h3>Qu'est-ce qui se passe ici ?</h3>
                    <p>Sur cette page, on a une zone grise qui va afficher une Google Map.</p>
                    <p>Au clic sur le bouton adéquat, nous allons faire une requête AJAX qui nous retournera des coordonnées aléatoire, pour placer un marqueur sur notre carte.</p>
                    <hr />
                    <h3>Qu'est-ce qu'on va faire ?</h3>
                    <p>
                        Déjà, nous allons configurer &amp; afficher notre Google Map.<br />
                        Ensuite, lorsque le visiteur cliquera sur le bouton <kbd>#add-marker</kbd>, nous nous occuperons de faire la requête AJAX pour récupérer les informations des marqueurs à afficher sur cette carte.
                    </p>
                    <p>
                        Enfin, via le bouton <kbd>#add-zone</kbd>, nous ajouterons un marqueur et une zone circulaire dont le diamètre sera demandé au visiteur.
                    </p>
                </div>
            </section>
            <hr />
            <footer class="row">
                <div class="col-md-6 col-md-offset-6 text-right">
                    <small>MMI 2015-2016 - <a href="https://github.com/hepl-mmi/meet-gmap">hepl-mmi/meet-gmap</a></small>
                </div>
            </footer>
        </main>

        <!-- GMap key: AIzaSyB1LpozH5APCo78kwf0S67lVHX0opq9CWA -->

        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB1LpozH5APCo78kwf0S67lVHX0opq9CWA"></script>
        <script src="js/jquery.min.js"></script>
        <script src="js/script.js"></script>
    </body>
</html>

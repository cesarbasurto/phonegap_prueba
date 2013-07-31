    var watchIDgeo = null;

    // device APIs are available
    //
    function Getgeolocation() {
        // Get the most accurate position updates available on the
        // device.
        var options = { enableHighAccuracy: true };
        watchIDgeo = navigator.geolocation.watchPosition(onSuccessgeo, onErrorgeo, options);
    }

    // onSuccess Geolocation
    //
    function onSuccessgeo(position) {
        $("#geolocation_text").empty();
    	$("#geolocation_text").html(
    						'latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + position.timestamp                    + '<br />
                        );
    }

    // clear the watch that was started earlier
    //
    function clearWatchgeo() {
        if (watchIDgeo != null) {
            navigator.geolocation.clearWatch(watchIDgeo);
            watchIDgeo= null;
        }
    }

        // onError Callback receives a PositionError object
        //
        function onErrorgeo(error) {
          alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
        }
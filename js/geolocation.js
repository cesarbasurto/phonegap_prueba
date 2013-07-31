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
    	$("#geolocation_text").html('Latitude: '  + position.coords.latitude      + '<br />' +
                        'Longitude: ' + position.coords.longitude     + '<br />' +
                        '<hr />'      + element.innerHTML);
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
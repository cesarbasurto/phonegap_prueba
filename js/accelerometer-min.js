var watchID = null;
		
		function getaccelerometer(){
			
			 startWatch();
		}
		function startWatch() {

	        // Update acceleration every 3 seconds
	        var options = { frequency: 3000 };
	
	        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError_acele, options);
	    }
	
	    // Stop watching the acceleration
	    //
	    function stopWatch() {
	        if (watchID) {
	            navigator.accelerometer.clearWatch(watchID);
	            watchID = null;
	        }
	    }
	
	    // onSuccess: Get a snapshot of the current acceleration
	    //
	    function onSuccess(acceleration) {
	    	
	    	$("#accelerometer_text").empty();
	    	$("#accelerometer_text").html('Acceleration X: ' + acceleration.x + '<br/>' +
		                            'Acceleration Y: ' + acceleration.y + '<br/>' +
		                            'Acceleration Z: ' + acceleration.z + '<br/>' +
		                            'Timestamp: '      + acceleration.timestamp + '<br/>');
	     
	    }
	
	    // onError: Failed to get the acceleration
	    //
	    function onError_acele() {
	        alert('onError!');
	    }
			
//*********************************************************    
// Accelerometer Info function
//*********************************************************
var accelerometerInt;

function updateAccelerationStatus(status) {
    $("#acelerometerStatus").html(status);
    return false;
}

function getAccelonSuccess(acceleration) {
    $("#accX").html(textFormat(acceleration.x));
    $("#accY").html(textFormat(acceleration.y));
    $("#accZ").html(textFormat(acceleration.z));
    $("#accTime").html(toDateStr(new Date(acceleration.timestamp)));

    return false;
}

function getAccelonError() {
    var contents  = addGridRow("a", boldLabel("ERROR:"));
        contents += addGridRow("b", "Cannot get accelerometer info");

    $("#accelerometerProperties").html(contents);
    updateAccelerationStatus("ERROR");
    return false;
}

function updateAccelerometer() {
    if ( accelerometerInt != undefined ) {
        navigator.accelerometer.clearWatch(accelerometerInt);
    }

    var uDefFreq = $("#acFreq").val();

    if ( uDefFreq > 0 && uDefFreq < 11 ) {
        accelerometerInt = navigator.accelerometer.watchAcceleration(getAccelonSuccess, getAccelonError, {frequency: uDefFreq * 1000});
        updateAccelerationStatus("Updating... Frequency: " + uDefFreq + " sec");
    } else {
            updateAccelerationStatus("ERROR: Freq must be between 1 and 10");
    }
    return false;
}

function stopUpdateAccelerometer() {
    navigator.accelerometer.clearWatch(accelerometerInt);
    accelerometerInt = undefined;
    updateAccelerationStatus("Stopped");
    return false;
}

function getAccelerometerReady() {      
    if ( accelerometerInt != undefined ) {
        navigator.accelerometer.clearWatch(accelerometerInt);
    }
    if ( $("#acFreq").val() != 1 ) {
        $("#acFreq").val(1).slider("refresh");  // reset slider to 1
    }

    navigator.accelerometer.getCurrentAcceleration(getAccelonSuccess, getAccelonError);
    updateAccelerationStatus("Initialized");

    $('#startUpdateButton').on('vclick', function(e) {
        e.preventDefault();
        updateAccelerometer();
        return false;
    });

    $('#stopUpdateButton').on('vclick', function(e){
        e.preventDefault();
        stopUpdateAccelerometer();
        return false;
    }); 
}

//*********************************************************    
// initialize the environment
//********************************************************* 
$("#accelerometerMainPage").bind("pagebeforeshow", function() { getAccelerometerReady(); } );
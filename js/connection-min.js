//*********************************************************    
// Connection Capabilities
//*********************************************************    
function getConnectionReady() {
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.NONE]     = 'No network connection';

    var networkState = navigator.network.connection.type;
    var networkStateText  = "";
    
    for (var key in states) {
        if ( key == networkState ) {
            networkStateText += "" + states[key] + "
";
        }
        else {
            networkStateText += "" + states[key] + "
";
        }
    } 
    
    $("#connectionProperties").html(networkStateText);
}

//*********************************************************    
// initialize the environment
//********************************************************* 
$("#connectionMainPage").bind("pagebeforeshow", function() { getConnectionReady(); });
$("#refreshConnectionButton").bind("vclick", function() { getConnectionReady(); });
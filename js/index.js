//*********************************************************
		// Wait for Cordova to Load
		//*********************************************************
		
	    var rootDir = "file:///mnt/sdcard";
	    var appHomeDir = "Android/data/com.ventusmoso.pg2_jqm";
	
	    //*********************************************************    
	    // Prepare dir for file and storage features
	    //*********************************************************  
	    function createFileDir() {
	
	        function fsOnError(error) {
	            alert("Cannot get to root file system. Code: " + error.message)
	        }
	        function dirOnError(error) {
	            alert("Cannot create dir. Code: " + error.code)
	        }
	        function fsOnSuccess(fileSystem) {
	            fileSystem.root.getDirectory(appHomeDir, {create: true, exclusive: false}, null, dirOnError);
	        }
	
	        window.requestFileSystem( LocalFileSystem.PERSISTENT, 0, fsOnSuccess, fsOnError );
	    }


    	document.addEventListener("deviceready", onDeviceReady, false);
    	function onDeviceReady() {
			 $("#main h1#appTitle").html("PhoneGap " + device.cordova + " Demo");       
	       // addBackbuttonListener();
	        createFileDir();
			
		}
		
		document.addEventListener("backbutton", function() {
            if ( $('.ui-page-active').attr('id') == 'main') {
                exitAppPopup();
            } else {
                history.back();             
            }
        }, false);
        
        function exitAppPopup() {
		    navigator.notification.confirm(
		          'Exit PhoneGap ' + device.cordova + ' Demo?'
		        , function(button) {
		              if (button == 2) {
		                  navigator.app.exitApp();
		              } 
		          }
		        , 'Exit'
		        , 'No,Yes'
		    );  
		    return false;
		}
		
		
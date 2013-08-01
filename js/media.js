/**
 * @author Administrador
 */
 		var my_media = null;
        var mediaTimer = null;

        // Play audio
        //
        function playAudio(src) {
            if (my_media == null) {
                // Create Media object from src
                my_media = new Media(src, onSuccessmedia, onErrormedia);
            } // else play current audio
            // Play audio
            my_media.play();

            // Update my_media position every second
            if (mediaTimer == null) {
                mediaTimer = setInterval(function() {
                    // get my_media position
                    my_media.getCurrentPosition(
                        // success callback
                        function(position) {
                            if (position > -1) {
                                setAudioPositionmedia((position) + " sec");
                            }
                        },
                        // error callback
                        function(e) {
                            console.log("Error getting pos=" + e);
                            setAudioPositionmedia("Error: " + e);
                        }
                    );
                }, 1000);
            }
        }

        // Pause audio
        //
        function pauseAudio() {
            if (my_media) {
                my_media.pause();
            }
        }
		
		function playMyAudio() {      
		    /*check_network();
		    if (document.getElementById('connectionstate').innerHTML === 'No network connection') {
		        alert("Need network connection to play song from internet");
		        return false;
		    } */
		    // Note: Two ways to access media file: (1) web (below)        
		    //var src = 'http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3';
		    //var src = 'http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3';
		    // (2) local (on device): copy file to project's /assets folder, acces with:
		    var src = '/android_asset/www/audio/0.mp3'; 
		     
		    playAudio(src);
		}
        // Stop audio
        //
        function stopAudio() {
            if (my_media) {
                my_media.stop();
            }
            clearInterval(mediaTimer);
            mediaTimer = null;
        }

        // onSuccess Callback
        //
        function onSuccessmedia() {
            console.log("playAudio():Audio Success");
        }

        // onError Callback
        //
        function onErrormedia(error) {
            alert('code: '    + error.code    + '\n' +
                  'message: ' + error.message + '\n');
        }

        // Set audio position
        //
        function setAudioPositionmedia(position) {
            document.getElementById('audio_position').innerHTML = position;
        }
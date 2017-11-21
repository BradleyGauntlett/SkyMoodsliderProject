var calm_slider = document.getElementById("calmRange");
        var calm_output = document.getElementById("calm");
        calm_output.innerHTML = calm_slider.value;

        calm_slider.oninput = function() {
          calm_output.innerHTML = this.value;
        }
        
        var happy_slider = document.getElementById("happyRange");
        var happy_output = document.getElementById("happy");
        happy_output.innerHTML = happy_slider.value;

        happy_slider.oninput = function() {
          happy_output.innerHTML = this.value;
        }
        var awake_slider = document.getElementById("awakeRange");
        var awake_output = document.getElementById("awake");
        awake_output.innerHTML = awake_slider.value;

        awake_slider.oninput = function() {
          awake_output.innerHTML = this.value;
        }
        
        var scared_slider = document.getElementById("scaredRange");
        var scared_output = document.getElementById("scared");
        scared_output.innerHTML = scared_slider.value;

        scared_slider.oninput = function() {
          scared_output.innerHTML = this.value;
        }
        
        //----------------
        
        function loadXMLDoc() {
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              printFilms(this);
            }
          };
          xmlhttp.open("GET", "film-data.xml", true);
          xmlhttp.send();
        }
        
        function printFilms(xml) {
          document.getElementById("showFilm").innerHTML = " ";
          var i;
          var xmlDoc = xml.responseXML;
          var x = xmlDoc.getElementsByTagName("FILM");
            
          for (i = 0; i <x.length; i++) { 
              
            if(happy_slider.value < calm_slider.value && happy_slider.value < scared_slider.value && happy_slider.value < awake_slider.value && x[i].getElementsByTagName("MOOD")[0].childNodes[0].nodeValue == 'Happy') {
                    document.getElementById("showFilm").innerHTML +=
                        "<p class='film-panel'> Film: " +
                        x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
                        "<br>Mood Category: " +
                       x[i].getElementsByTagName("MOOD")[0].childNodes[0].nodeValue +
                       "<br><img class='img-holder' src='" + 
                       x[i].getElementsByTagName("IMGSRC")[0].childNodes[0].nodeValue + "'></p>";
                }
              
            else if(happy_slider.value > calm_slider.value && happy_slider.value > scared_slider.value && happy_slider.value > awake_slider.value && x[i].getElementsByTagName("MOOD")[0].childNodes[0].nodeValue == 'Sad') {
                    document.getElementById("showFilm").innerHTML +=
                        "<p class='film-panel'> Film: " +
                        x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
                        "<br>Mood Category: " +
                       x[i].getElementsByTagName("MOOD")[0].childNodes[0].nodeValue +
                       "<br><img class='img-holder' src='" + 
                       x[i].getElementsByTagName("IMGSRC")[0].childNodes[0].nodeValue + "'></p>";
                } 
              
            else if(awake_slider.value > calm_slider.value && awake_slider.value > scared_slider.value && awake_slider.value >      happy_slider.value && x[i].getElementsByTagName("MOOD")[0].childNodes[0].nodeValue == 'Awake') {
                document.getElementById("showFilm").innerHTML +=
                    "<p class='film-panel'> Film: " +
                    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
                    "<br>Mood Category: " +
                   x[i].getElementsByTagName("MOOD")[0].childNodes[0].nodeValue +
                   "<br><img class='img-holder' src='" + 
                   x[i].getElementsByTagName("IMGSRC")[0].childNodes[0].nodeValue + "'></p>";
            } 
              
            else if(scared_slider.value > calm_slider.value && scared_slider.value > awake_slider.value && scared_slider.value >      happy_slider.value && x[i].getElementsByTagName("MOOD")[0].childNodes[0].nodeValue == 'Scared') {
                document.getElementById("showFilm").innerHTML +=
                    "<p class='film-panel'> Film: " +
                    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
                    "<br>Mood Category: " +
                   x[i].getElementsByTagName("MOOD")[0].childNodes[0].nodeValue +
                   "<br><img class='img-holder' src='" + 
                   x[i].getElementsByTagName("IMGSRC")[0].childNodes[0].nodeValue + "'></p>";
            }
             
            else if (calm_slider.value < happy_slider.value && calm_slider.value < scared_slider.value && calm_slider.value < awake_slider.value && x[i].getElementsByTagName("MOOD")[0].childNodes[0].nodeValue == 'Calm') {
                    document.getElementById("showFilm").innerHTML +=
                        "<p class='film-panel'> Film: " +
                        x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
                        "<br>Mood Category: " +
                       x[i].getElementsByTagName("MOOD")[0].childNodes[0].nodeValue +
                       "<br><img class='img-holder' src='" + 
                       x[i].getElementsByTagName("IMGSRC")[0].childNodes[0].nodeValue + "'></p>";
                } 
              
            if(awake_slider.value <3) {
                    document.getElementById("showFilm").innerHTML = " ";
                    document.getElementById("showFilm").innerHTML = "<p>Get some sleep and come back later</p>";
                }
              
            var cmp = calm_slider.value;
            if(happy_slider.value==cmp && scared_slider.value == cmp && awake_slider.value==cmp){
                  document.getElementById("showFilm").innerHTML = " ";
                  document.getElementById("showFilm").innerHTML = "<p>Don't be boring, adjust your mood!</p>";
              }
          }
        }
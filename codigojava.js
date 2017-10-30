/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global google */

function funcaoabrirmapa(){
    
        
     document.getElementById("meumapa").style.display = "block";

 var minhatela = document.getElementById("meumapa").style.display;
 
 if(minhatela == "block"){
     

var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize() {	
	directionsDisplay = new google.maps.DirectionsRenderer();
	var latlng = new google.maps.LatLng(-19.8157, -43.9542);
	
    var options = {
        zoom: 17,
	center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapa"), options);
	directionsDisplay.setMap(map);
	;
	
        
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {

			pontoPadrao = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			map.setCenter(pontoPadrao);
			
			var geocoder = new google.maps.Geocoder();
			
			geocoder.geocode({
		"location": new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
            },
          );
		});
	}
        
}

initialize();



}
 }
 
 function escondermapa(){
      document.getElementById("meumapa").style.display = "none";
 }
 
 $(document).keypress(function(e) {
    if(e.which === 13) $('#novalocalizacao').click();
       navigator.geolocation.getCurrentPosition(function (position) {

			pontoPadrao = new google.maps.LatLng(position.value, position.value);
			map.setCenter(pontoPadrao);
			
			var geocoder = new google.maps.Geocoder();
			
			geocoder.geocode({
		"location": new google.maps.LatLng(position.value, position.value)
            },
          );
		});
});

$('button').click(function(e) {
    alert(this.innerHTML);
});

     

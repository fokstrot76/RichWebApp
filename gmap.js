			var endlocation = { 'center': '53.36721,-6.28335' };

			var start;

			var themap;

			var destination = ('53.36721,-6.28335');



			

			$(document).ready(function() {

				$('#map').gmap({'zoom': 15, 'center': endlocation.center, 'disableDefaultUI':false, 'callback': function() {

				themap = this;

				

				$('#submit').click(function() {

					themap.displayDirections(

						{ 'origin': start, 'destination': destination, 'travelMode': google.maps.DirectionsTravelMode.DRIVING, 'unitSystem':google.maps.UnitSystem.METRIC }, 

						{ 'panel': document.getElementById('directions')}, 

						function(response, status) {

							( status === 'OK' ) ? $('#results').show() : $('#results').hide();

						});

						return false;

					});

				}});

				

				$('#map').gmap('addMarker', {'position': '53.36721,-6.28335', 'bounds': false }).click(		function() {

					$('#map').gmap('openInfoWindow', {'content': "<img src='images/dragon.jpg' id='marker'><h3>Dragon Kung Fu - Lung Ying School!</h3>"}, this);

				});

				//$('#map').gmap('option', 'zoom', 20);

				navigator.geolocation.getCurrentPosition(handle_geolocation_query);

				var getZoom = $('#map').gmap('option', 'zoom');

				console.log(getZoom);

			});

			

			function handle_geolocation_query(position){  

				lat = parseInt(position.coords.latitude*10000,10)/10000;

				lon = parseInt(position.coords.longitude*10000,10)/10000;   

				start = new google.maps.LatLng(lat, lon);

				

			}			
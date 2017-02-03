angular.module('appConfig', ['ngRoute'])

	.config( function( $routeProvider ) {

		$routeProvider
			.when('/', {
				templateUrl: 'templates/home.html',
				controller: 'homeController'
			})
			.when('/home', {
				templateUrl: 'templates/home.html',
				controller: 'homeController'
			})
			.when('/popular', {
				templateUrl: 'templates/popular.html',
				controller: 'popularController'
			})
			.when('/upcoming', {
				templateUrl: 'templates/upcoming.html',
				controller: 'upcomingController'
			})
			.when('/nowplaying', {
				templateUrl: 'templates/nowPlaying.html',
				controller: 'nowPlayingController'
			})
			.when('/top_rated', {
				templateUrl: 'templates/top_rated.html',
				controller: 'top_ratedController'
			})
			.otherwise({ redirectTo: '/' });
	})

	.factory('appFactory', function( $http ) {

		function apiResult( apiType ) {
			var internetProtocol = window.location.protocol; // http or https
			internetProtocol = ( internetProtocol == 'http:' ) ? 'http' : 'https';
			var urlApi = internetProtocol + '://api.themoviedb.org/3/movie/' + apiType + '?api_key=1f3be3a60c163ba631dc4e863ef5fb77';
			return $http.get( urlApi );
		}
		return {
			apiResult: apiResult
		};
	});

//http://api.themoviedb.org/3/movie/popular?api_key=1f3be3a60c163ba631dc4e863ef5fb77

angular.module( 'mainControllers', [] )

	.controller( 'indexController', function( $scope, $location ) { // INDEX
		$scope.home = function() {
			$location.path('/');
		};
	})

	.controller('homeController', function( $scope, $rootScope ) { // HOME
		$rootScope.showSearch = true;
	})

	.controller('popularController', function( $scope, $rootScope, appFactory, $http ) { // POPULAR MOVIES

			$rootScope.searchType = 'Popular';
			$rootScope.showSearch = true;

			appFactory.apiResult( 'popular' )
				.then( function ( dataReceived ) {
					$scope.moviesArray =  dataReceived.data.results;
				});

			$scope.fn1 = function() {
				$rootScope.variable = true;
			};
			$scope.fn2 = function() {
				$rootScope.variable = false;

				var internetProtocol = window.location.protocol; // http or https
				internetProtocol = ( internetProtocol == 'http:' ) ? 'http' : 'https';
				var urlApi = 'http://api.themoviedb.org/3/movie/popular?api_key=1f3be3a60c163ba631dc4e863ef5fb77';
				$http.get( urlApi )
					.then( function( dataReceived ) {
						$scope.datos = dataReceived.data.results.length;
					});





			};
	})

	.controller('upcomingController', function( $scope, $rootScope, appFactory ) { // UPCOMING MOVIES
			$rootScope.searchType = 'Upcoming';
			$rootScope.showSearch = true;

			appFactory.apiResult( 'upcoming' )
				.then( function ( dataReceived ) {
					$scope.moviesArray =  dataReceived.data.results;
				});
	})

	.controller('nowPlayingController', function( $scope, $rootScope, appFactory ) { // NOW-PLAYING MOVIES
			$rootScope.searchType = 'Now Playing';
			$rootScope.showSearch = true;

			appFactory.apiResult( 'now_playing' )
				.then( function ( dataReceived ) {
					$scope.moviesArray =  dataReceived.data.results;
				});
	})

	.controller('top_ratedController', function( $scope, $rootScope, appFactory ) { // TOP-RATED MOVIES
			$rootScope.searchType = 'Top Rated';
			$rootScope.showSearch = true;

			appFactory.apiResult( 'top_rated' )
				.then( function ( dataReceived ) {
					$scope.moviesArray =  dataReceived.data.results;
				});
	});

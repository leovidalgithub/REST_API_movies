angular.module( 'appMovie', [ 'mainControllers', 'appConfig' ] )

	.run( function( $rootScope ) {
		$rootScope.showSearch = false;
		$rootScope.submit = function() {
			alert( $rootScope.searchType + '\n' + 'Sorry, this feature is not working yet!');
		};
});

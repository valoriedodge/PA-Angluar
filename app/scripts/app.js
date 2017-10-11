(function(){
    function config($stateProvider, $locationProvider){
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        $stateProvider
            .state('landing', {
                url: '/',
                controller: 'LandingCtrl as landing',
                templateUrl: '/templates/landing.html'
            })
            .state('bridal', {
                url: '/bridal',
                controller: 'BridalCtrl as bridal',
                templateUrl: '/templates/bridal.html'
            })
            .state('costume', {
                url: '/costume',
                templateUrl: '/templates/costume.html'
            })
            .state('classes', {
                url: '/classes',
                templateUrl: '/templates/classes.html'
            });
    }
    angular
        .module('peacockArtistry', ['ui.router'])
        .config(config);
})();

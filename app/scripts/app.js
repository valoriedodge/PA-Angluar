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
                controller: 'CostumeCtrl as costume',
                templateUrl: '/templates/costume.html'
            })
            .state('dances', {
                url: '/costume',
                controller: 'DancesCtrl as dances',
                templateUrl: '/templates/dances.html'
            })
            .state('glamour', {
                url: '/costume',
                controller: 'GlamourCtrl as glamour',
                templateUrl: '/templates/glamour.html'
            })
            .state('classes', {
                url: '/classes',
                controller: 'ClassesCtrl as classes',
                templateUrl: '/templates/classes.html'
            });
    }
    angular
        .module('peacockArtistry', ['ui.router'])
        .config(config);
})();

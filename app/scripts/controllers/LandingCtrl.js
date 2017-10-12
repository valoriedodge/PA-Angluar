(function() {
    function LandingCtrl() {
        this.title = "Peacock Artistry";
        this.photoShoots = Photos.all;
    }

    angular
        .module('peacockArtistry')
        .controller('LandingCtrl', LandingCtrl);
})();
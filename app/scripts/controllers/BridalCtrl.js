(function() {
    function BridalCtrl() {
        this.name = "bridal";
        this.title = "Bridal Make-Up";
        this.mainPhoto ="/assets/images/Cover.png";
        this.photoShoots = Photos.bridals;
    }

    angular
        .module('peacockArtistry')
        .controller('BridalCtrl', ["Photos", BridalCtrl]);
})();
(function() {
    function BridalCtrl() {
        this.title = "School Dance Make-Up"
        this.description = "Let me help you feel like the Belle of the Ball";
        this.photoShoots = Photos.dance;
        this.mainPhoto ="/assets/images/Cover.png";
    }

    angular
        .module('peacockArtistry')
        .controller('DancesCtrl', ["Photos", DancesCtrl]);
})();
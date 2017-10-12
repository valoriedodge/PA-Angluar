(function() {
    function BridalCtrl() {
        this.title = "Glamour Make-Up";
        this.description = "Whether it's for a photo shoot or a special night out, let me help you look amazing and feel beautiful!";
        this.photoShoots = Photos.glamour;
        this.mainPhoto ="/assets/images/Cover.png";
    }

    angular
        .module('peacockArtistry')
        .controller('GlamourCtrl', ["Photos", GlamourCtrl]);
})();
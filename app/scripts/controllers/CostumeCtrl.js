(function() {
    function BridalCtrl() {
        this.title = "Costume Make-Up";
        this.photoShoots = Photos.costume;
        this.description = "Scary, sweet, gory, or unique! I can help create anything your imagination can think up!";
        this.mainPhoto ="/assets/images/Cover.png";

    }

    angular
        .module('peacockArtistry')
        .controller('CostumeCtrl', ["Photos", CostumeCtrl]);
})();
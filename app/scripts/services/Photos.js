(function(){
    function Photos(){
        var Photos = {};
        function Photoshoot (name, date, mainImg, images) {
            this.name = name;
//            this.type = type;
            this.date = date;
            this.mainImage = "/assets/images/" + mainImg;
            this.images = images;
        }
        function Images(){
            var imageArr = [];
            for (var i=0; i<arguments.length; i++) {
                imageArr.push("/assets/images/" + arguments[i]);
            }
            return imageArr;
        }
        var Jessica = Photoshoot("Jessica", new Date(4/8/2016), "Jessica1", Images("Jessica1", "Jessica2"));
        var Makenzie = Photoshoot("Makenzie Peacock", new Date(10/12/2017), "Makenzie1", Images("Makenzie1", "Makenzie2"))
        Photos.bridals = [];
        Photos.costume = [Jessica, Makenzie];
        Photos.dance = [];
        Photos.glamour = [];
        Photos.classes = [];

//        this.all = [this.bridals, this.costume, this.glamour, this.dance];
        return Photos;
    }
    
    angular
        .module('peacockArtistry')
        .factory('Photos', Photos);   
})();
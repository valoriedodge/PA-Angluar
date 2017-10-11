(function(){
    function Photos(){
        var Photos = {};
        Photos.bridals = {};
        Photos.costume = {};
        Photos.classes = {};
        Photos.dance = {};
        Photos.glamour = {};
        return Photos;
    }
    
    angular
        .module('peacockArtistry')
        .factory('Photos', Photos);   
})();
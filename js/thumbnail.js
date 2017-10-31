var thumbnails= (function(holder){
      "use strict";
      var moduleId  = "thumbs",
          $_get     = document.getElementById.bind(document),
          $_getEls  = document.getElementsByTagName.bind(document),
          loop      = Array.prototype.forEach,
          thumbs    = $_get(moduleId),
          thumbLinks= thumbs.getElementsByTagName("a");

      function initialize(){
        loop.call(thumbLinks, (link) =>{
          link.addEventListener('click', doSwap);
        })
        //...
      }

      function doSwap(e){

          var href  =this.getAttribute("href"),
          caption   =this.getAttribute("alt");

          holder.updateCaption(caption);
          holder.updateImage(href);

          e.preventDefault()

      }
      return {
        initialize: initialize
      }

})(placeHolder);

    var placeHolder = (function (){
      "use strict";
      var moduleId    = "placeholder",
          $_get       = document.getElementById.bind(document),
      // $_getEls    = document.getElementsByTagName.bind(document);
      loop            = Array.prototype.forEach,
      placeholder     = $_get(moduleId),
      mainImage       = placeholder.childNodes[0],
      para            = placeholder.childNodes[1];

      function updateImage(href){
        mainImage.setAttribute("src", href);
      }

      function updateCaption(caption){
        para.firstChild.nodeValue = caption;
      }
      return{
        updateCaption: updateCaption,
        updateImage: updateImage
      }

    })();

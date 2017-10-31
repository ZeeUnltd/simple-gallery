// JavaScript source code
(function(){
  "use strict";
  var $_get = document.getElementById.bind(document),
  $_getEls= document.getElementsByTagName.bind(document);
  var loop = Array.prototype.forEach;

  function doSwap(e){
      var href=this.getAttribute("href");
      //get the placeholder from the html for the main img
      var placeholder= $_get('placeholder');

      var mainImg=placeholder.childNodes[0];
      //we Swap..
      mainImg.setAttribute("src", href);
      console.log(mainImg);
      var caption= this.getAttribute("alt");
      //get the paragraph
      var para.firstChild.nodeValue = caption;
      console.log(caption);
      // prevent the page from opening on another page, cancelling default
      // var caption =this.getAttribute('p');
      // text= caption.documentWrite('Caption 2')
      // console.log(text);
      e.preventDefault();
  }

  // function switchCaptions(){
  //   var caption= this.Attribute
  //}


  function prepareGallery(){
    // get the ul holding the links
    var thumblist = $_get("thumbs");
    //fetch the links in the ul
    var thumbLinks =thumblist.getElementsByTagName("a");

    //loop through the links...
    loop.call(thumbLinks, (link) =>{
      //quitely attach an event handler to the links
      link.addEventListener('click', doSwap)
    })
  }



  prepareGallery();
})()

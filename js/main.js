'use strict';

var Deepnic = (function($,global,document){
  var d = document,
      w = global.innerWidth,
      h = global.innerHeight;

  function _initPlayer(){
    $("#jquery_jplayer_1").jPlayer({
      ready: function () {
        $(this).jPlayer("setMedia", {
          mp3: "audio/beside-me.mp3"
        }).jPlayer("play");
      },
      cssSelectorAncestor: "#jp_container_1",
      swfPath: "/js/vendor",
      supplied: "mp3"
    });
  }

  function _init(){
    _initPlayer();
  }

  return {
    init: _init
  }


})(jQuery,window,window.document);

window.onload = function(){
  Deepnic.init();
}

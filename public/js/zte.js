function Ignite(){

  function onDocumentReady(){

      // $("#screen-one").css("background-size", "100%" )

      if($(window).scrollTop() > 10){
          $("#nav-on-scroll").addClass("nav-on-scroll")
      }

      $(window).scroll(function(){
          var from_top = $(window).scrollTop();
          if(from_top > 10){
            $("#nav-on-scroll").addClass("nav-on-scroll")

          }
          else {
            $("#nav-on-scroll").removeClass("nav-on-scroll")
          }

      })


  }

  $(document).ready(onDocumentReady)

}

(Ignite)()

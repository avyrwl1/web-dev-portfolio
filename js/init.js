(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('#download-button').click(function() {
        $(".preloader-wrapper").toggleClass("show");
        
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
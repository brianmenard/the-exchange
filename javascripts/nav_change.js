$(document).ready(function(){       
   var scroll_start = 0;
   var nav_change = $('#nav_change');
   var offset = nav_change.offset();
    if (nav_change.length){
       $(document).scroll(function() { 
          scroll_start = $(this).scrollTop();
          if(scroll_start > 0) {
              $("#nav").css('background-color', '#F0F2EB');
              $("#nav").css('color', 'black');
              $("#nav").css('border-bottom', 'solid thin #FF4E50');
           } else {
              $('#nav').css('background-color', 'transparent');
              $("#nav").css('color', 'white');
              $("#nav").css('border-bottom', 'none');
           }
       });
    }
});
$(document).ready(function () {
        $('.sb-gallery-image').each(function () {
            var imgsrc = $(this).find('img').attr('src');
            if(!imgsrc){
              imgsrc= $(this).attr('src');
            }
          
            $(this).wrap('<div class="sb-gallery-image"><a href="' + imgsrc +
                '" data-lity></a></div>');
        })
    });
$(function(){
    $('[data-fancybox="images"]').fancybox({
       loop: false,
       buttons: [
        "close"
      ]
    });

    $('[data-fancybox="video-content"]').fancybox({
        youtube : {
            controls : 1,
            showinfo : 1,
            autoplay : 1
        }
    });
});



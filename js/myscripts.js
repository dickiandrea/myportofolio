$(function(){

  $('.navbar a').on('click', function(e){
    var tujuan = $(this).attr('href');
    var hasil = $(tujuan);
    $('html, body').animate({
      scrollTop: hasil.offset().top - 50
    }, 500, 'swing');
    e.preventDefault();
  });

  // $(window).on('load', function() {
  //   $('.jumbotron h1, .jumbotron p, .jumbotron img').addClass('toNormal');
  // });

  $(window).on('load', function() {
    $('.jumbotron h1, .jumbotron p, .jumbotron img').css({
      'transform' : 'translate(0px, 0px)',
      'opacity' : 1
    });
  });

  $(window).on('scroll', function(){
    var jarak = ($(window).scrollTop());
    console.log(jarak);
    if(jarak > 900){
      $('.fortpolio .thumbnail').each(function(i){
        setTimeout(function(){
          $('.fortpolio .thumbnail').eq(i).css({
            'transform' : 'translate(0px,0px)',
            'opacity': 1
          });
        }, 300 * (i+1));
      });
    }else if(jarak < 900 && jarak > 200){
      // Efek Parallax fortpolio
      $('.fortpolio .thumbnail').css({
        'transform' : 'translate(0px,-100px)',
        'opacity': 0
      });
      // Akhir Efek Parallax Fortpolio
    }

    if(jarak < 200){
      // Efek Parallax Jumbotron
      $('.jumbotron h1, .jumbotron p, .jumbotron img').css({
        'opacity' : 1
      });
      $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ jarak/1.5 +'px)'
      });
      $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ jarak/2 +'px)'
      });
      $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ jarak/3 +'px)'
      });
      // Akhir Efek Parallax Jumbotron

      // Efek Parallax about
      $('.about div.text-center div:last-child').css({
        'transform' : 'translate(-100px,0px) rotate(30deg)',
        'opacity' : 0
      });
      $('.about div.text-center div:first-child').css({
        'transform' : 'translate(100px,0px) rotate(-30deg)',
        'opacity' : 0
      });
      // Akhir Efek Parallax about

    }else{
      // Efek Parallax Jumbotron
      $('.jumbotron h1, .jumbotron p, .jumbotron img').css({
        'opacity' : 0
      });
      // Akhir Efek Parallax Jumbotron

      $('.about div.text-center div').css({
        'transform' : 'translate(0px, 0px)',
        'opacity' : 1
      });
      // Akhir Efek Parallax about
    }
  });

});

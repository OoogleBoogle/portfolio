$.fn.moveIt = function(){
  var $els = $(this);
  var $window = $(window);
  var scrollPos = $window.scrollTop();
  
  $window.on('scroll', function(){
    scrollPos = $window.scrollTop();
    $els.each(moveEl);
  });
  
  function moveEl(){
    var $this = $(this);
    var scrollSpeed = parseInt($this.data('scroll-speed'));
    var elPos = scrollPos / scrollSpeed;
    
    $this.css('transform', 'translateY(-' + elPos + 'px)');
  }
}

$(function(){
  var $window = $(window);
  var htmlIcon = $('.icon-html');
  var intro = $('#intro-container');
  var introBox = $('.intro-box');

  $('[data-scroll-speed]').moveIt();

  intro.css({opacity : 0});
  introBox.css({opacity : 0});

  $window.on('scroll', function() {
    var $scroll = $window.scrollTop();
    if ($scroll > 150) {
      intro.animate({ opacity : 1 });
      var time = 500;
      introBox.each(function() {
        $(this).delay(time).animate({opacity : 1});
        time += 200;
      });
    } 
  })
});


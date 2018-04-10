function handleScrolling() {

  $('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );

    if( target.length ) {
      event.preventDefault();
      $('html, body').animate({
          scrollTop: (target.offset().top - 180)
      }, 600);
    }
  });

}



function loaded() {
  handleScrolling();
}



$(loaded);
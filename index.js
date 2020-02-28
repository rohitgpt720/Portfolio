// function ready(){
//   const win = window;
//   const navbar = document.getElementById('header');
//   const toggle = document.querySelector('.toggle-button');
//   const width = navbar.clientWidth;
  
//   console.log(width);
//   toggleOnClick(win,navbar,width);

// }

// function toggleOnClick(win,navbar,width){
//   console.log(navbar.style.);
  
//   if(win.clientWidth <= 768){
//     navbar.style.left = `-${width}px`;
//   } else {
//     navbar.style.left = '0px';
//   }
// }



$(document).ready(function(e){
  $win = $(window);
  $navbar = $('#header');
  $toggle = $('.toggle-button');
  var width = $navbar.width();
  toggle_onclick($win, $navbar, width);

  // resize event
  $win.resize(function(){
      toggle_onclick($win, $navbar, width);
  });

  $toggle.click(function(e){
    $navbar.toggleClass("toggle-left");
})

});

function toggle_onclick($win, $navbar, width){
  if($win.width() <= 768){
      $navbar.css({left: `-${width}px`});
  }else{
      $navbar.css({left: '0px'});
  }
}

var typed = new Typed('#typed',{
  strings: [
    'Web Developer.',
    'Freelancer.'
  ],
  typeSpeed : 50,
  backSpeed:50,
  loop:true
})

var typed_2 = new Typed('#typed_2',{
  strings: [
    'Web Developer.',
    'Freelancer.'
  ],
  typeSpeed : 50,
  backSpeed:50,
  loop:true
})
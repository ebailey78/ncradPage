$('.search-li').on('mouseover', 
  function() {
    'use strict';
    $('.search-li input[type="text"]').addClass('search-open');
  }).on('mouseout',  
  function() {
    'use strict';
    var $in = $('.search-li input[type="text"]');
    if($in.is(':focus') === false) {
      $in.removeClass('search-open');  
    }      
});

$('.search-li input[type="text"]').on('blur', function() {
  'use strict';
  $(this).removeClass('search-open');
});

$('#searchSubmit').on('click', function() {
  'use strict';
  var $in = $('.search-li input[type="text"]');
  if($in.hasClass('search-open') === false) {
    $in.addClass('search-open');
  } else if($in.val() === '') {
    $in.removeClass('search-open');
  } else {
    $in.parent().submit();
  }
  
});
/*
$(document).ready(function() {
  'use strict';
  $('[data-toggle="tooltip"]').tooltip();
});
*/

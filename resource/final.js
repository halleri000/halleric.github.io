$(document).ready(function () {

     $('.one').hover(function () {
          $('.intro').slideToggle();
     })
  

     $('.workOneImage').mouseenter(function () {
          $('.workOneImage').hide();
          $('.workSummaryOne').show();

     })

     $('.workSummaryOne').mouseleave(function () {
          $('.workOneImage').show();
          $('.workSummaryOne').hide();
     })

     $('.workTwoImage').mouseenter(function () {
          $('.workTwoImage').hide();
          $('.workSummaryTwo').show();

     });

     $('.workSummaryTwo').mouseleave(function () {
          $('.workTwoImage').show();
          $('.workSummaryTwo').hide();
     })


     $('.workThreeImage').mouseenter(function () {
          $('.workThreeImage').hide();
          $('.workSummaryThree').show();

     });

     $('.workSummaryThree').mouseleave(function () {
          $('.workThreeImage').show();
          $('.workSummaryThree').hide();
     })





















})

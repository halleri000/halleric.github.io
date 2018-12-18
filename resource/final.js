$(document).ready(function () {

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

     $('.skills').click(function() {
          $('.resume1').show();
          $('.resume2').hide();
          $('.resume3').hide();
     })
          $('.workExperience').click(function() {
          $('.resume1').hide();
          $('.resume2').show();
          $('.resume3').hide();
     })
          $('.education').click(function() {
          $('.resume1').hide();
          $('.resume2').hide();
          $('.resume3').show();
     })




















})

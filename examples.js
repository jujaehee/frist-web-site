/* Examples */
(function($) {
  /*
   * Example  FIRST:
   *
   * - no animation
   * - custom gradient
   *
   * By the way - you may specify more than 2 colors for the gradient
   */
  $('.first.circle').circleProgress({
    value: 0.86,
    fill: {gradient: [['#0681c4', .5], ['#4ac5f8', .5]], gradientAngle: Math.PI /4}
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text( ((stepValue.toFixed(2).substr(1))*100)  + '점');
  });

  /*
   * Example SECOND :
   *
   * - default gradient
   * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
   */
  $('.second.circle').circleProgress({
     value: 0.70,
    fill: {gradient: [['#32CD32', .5], ['#228B22', .5]], gradientAngle: Math.PI / 4}
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text( ((stepValue.toFixed(2).substr(1))*100)  + '점');
  });

  /*
   * Example THIRD:
   *
   * - very custom gradient
   * - listening to `circle-animation-progress` event and display the dynamic change of the value: from 0 to 0.8
   */
  $('.third.circle').circleProgress({
    value: 0.35,
    fill: {gradient: [['#FF0000', .5], ['#DC143C', .5]], gradientAngle: Math.PI / 4}
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text( ((stepValue.toFixed(2).substr(1))*100)  + '점');
  });

   
})(jQuery);

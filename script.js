window.addEventListener('load', function() {
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });
}); 

document.querySelectorAll('.project').forEach(function (project) {
  project.addEventListener('click', function () {

    const additionalDetails = project.querySelector('.additional-details');
    additionalDetails.style.display = additionalDetails.style.display === 'none' ? 'block' : 'none';

    adjustLayout();
  });
});

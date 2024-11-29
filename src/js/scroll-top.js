const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.style.display = 'flex'; 
  } else {
    scrollToTopBtn.style.display = 'none'; 
  }
};

scrollToTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', 
  });
});

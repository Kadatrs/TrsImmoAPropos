function slideInIfInView(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');
        observer.unobserve(entry.target);
      }
    });
  }
  
  var quoteElement = document.querySelector('.quote');
  
  var observer = new IntersectionObserver(slideInIfInView, {
    root: null,
    threshold: 0.2 // Adjust the threshold as needed
  });
  
  observer.observe(quoteElement);
  











  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function slideLeftIfInView(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');
        observer.unobserve(entry.target);
      }
    });
  }
  
  var leftElement = document.querySelector('.left');
  
  var observer = new IntersectionObserver(slideLeftIfInView, {
    root: null,
    threshold: 0.2 // Adjust the threshold as needed
  });
  
  observer.observe(leftElement);
  












  function slideRightIfInView(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');
        observer.unobserve(entry.target);
      }
    });
  }
  
  var rightElement = document.querySelector('.right');
  
  var observer = new IntersectionObserver(slideRightIfInView, {
    root: null,
    threshold: 0.2 // Adjust the threshold as needed
  });
  
  observer.observe(rightElement);
  

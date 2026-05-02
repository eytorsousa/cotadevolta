const progressbar = document.querySelector('.progressbar');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      progressbar.classList.add('animate');
      observer.unobserve(progressbar); 
    }
  });
}, { threshold: 0.5 }); 

observer.observe(progressbar);
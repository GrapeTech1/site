const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

window.addEventListener('scroll', function() {
    let scroll = document.querySelector('.scrolltop')
    scroll.classList.toggle('active', window.scrollY > 450)
})

function backTop() 
{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

const hamburger = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => 
nav.classList.toggle("active"));
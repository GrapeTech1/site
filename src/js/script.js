const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

class MobileNavBar {
   constructor(mobileMenu, navList, nav) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.nav = document.querySelector(nav);
    this.activeClass =  "active";
   } 

   addClickEvent() {
    this.mobileMenu.addEventListener("click", () => console.log
   ("Hey motherfuck"));
   }

   init() {
    if (this.mobileMenu) {
        this.addClickEvent();
    }
    return this;
   }
}

const MobileNavBar = new MobileNavBar (
    ".mobile-menu",
    "nav",
    "nav li",

);
MobileNavBar.init();
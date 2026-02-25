//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                //active navbae
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
               // active section for animation on scroll
               sec.classList.add('show-animate');
            }
            //if want to use animation that repeats on scroll use this
            else{
                sec.classList.add('show-animate');
            }
        });
    

   // stickyNavbar
   let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
   // removeToggle(); //when click navbar link (scroll)
   menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


   // animation footer on scroll
   let footer = document.querySelector('footer');

   footer.classList.toggle(
  'show-animate',
  window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight
);
}
// scroll animation
// animate home on load
window.addEventListener("load", () => {
    document.querySelector("#home").classList.add("show-animate");
});





window.addEventListener("load", () => {
    const home = document.querySelector("#home");
    setTimeout(() => {
        home.classList.add("show-animate");
        document.body.style.overflow = "auto";
    }, 1500); // match your page loader animation time
});
const openMenu = document.getElementById("open-menu")
const closeMenu = document.getElementById("close-menu")
const navLinks = document.getElementById("main-nav__links")
const menu = document.getElementById("main-nav__buttons")

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    closeMenu.classList.toggle("active")
    openMenu.classList.toggle("active")
})

//////////////////////////////////////////////////////////////////

const progressBars = document.querySelectorAll('.animation');

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
})

progressBars.forEach(element => {
    observer.observe(element);
});

//////////////////////////////////////////////////////////////////

const hero = document.querySelector('#hero');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const projects = document.querySelector('#projects');

const navItems = [hero, about, skills, projects];

observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio>=0.5) {
            document.querySelector('a[href="#'+entry.target.id+'"]').classList.add("active")
            navItems.forEach(item =>{
                if (item!==entry.target) {
                    document.querySelector('a[href="#'+item.id+'"]').classList.remove("active")
                }
            })
            if (entry.target.id == "about") {
                document.querySelector('#main-nav__website-title').classList.add('active')
            }
            if (entry.target.id == "hero") {
                document.querySelector('#main-nav__website-title').classList.remove('active')
            }
        }
        else {
            document.querySelector('a[href="#'+entry.target.id+'"]').classList.remove("active")
        }
        
    });
},{
    threshold:0.5
});

navItems.forEach(item => {
    observer.observe(item);
});



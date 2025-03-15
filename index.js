const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const links = document.querySelector(".links-parent");
const backdrop = document.querySelector(".backdrop"); 
const allLinks =document.querySelectorAll("nav li");
const backToTop =document.querySelector(".back-to-top");
const animateParent = document.querySelectorAll(".animate");
const qualification = document.querySelector(".qualification");
const date = document.querySelector("footer span");

console.log(animateParent);



// fix date
date.innerHTML = new Date().getFullYear();

// on load event listener
window.addEventListener("DOMContentLoaded", ()=> {
    document.querySelector(".image").classList.add("show");
    document.querySelector(".intro").classList.add("show");

})


// back to top btn
window.addEventListener("scroll", ()=> {
    if(window.scrollY > 850) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
})

// open menu
menuBtn.addEventListener("click", function () {
    links.classList.add("active");
    backdrop.classList.add("active");
    // document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
    links.classList.remove("active");
    backdrop.classList.remove("active");
    // document.body.style.overflow = "";

});
// close with backdrop
backdrop.addEventListener("click", () => {
    links.classList.remove("active");
    backdrop.classList.remove("active");
    // document.body.style.overflow = "";
});

allLinks.forEach((link)=> {
    link.addEventListener("click", ()=> {
        // document.body.style.overflow = "";
        links.classList.remove("active");
        backdrop.classList.remove("active");

    })
})

// animation for skills
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            // console.log(entries)
            if(entry.target.classList.contains("about-me")) {
                entry.target.querySelector(".about-image").classList.add("show");
                entry.target.querySelector(".about").classList.add("show");
            } else {
                entry.target.classList.add("show-skill");
            }
        } else {
            entry.target.classList.add("show-skill");
            entry.target.querySelector(".about-image").classList.add("show");
            entry.target.querySelector(".about").classList.add("show");
        }

    });
}, {threshold: 0.3});

animateParent.forEach((section) => {
    observer.observe(section);
    // console.log(section)
});

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show-skill");
        } else{
            entry.target.classList.remove("show-skill");
        } 
    });
}, {threshold: 0.3});
const projectSection = document.querySelectorAll(".project");
projectSection.forEach((section) => {
    observer.observe(section);
    console.log(section)
});





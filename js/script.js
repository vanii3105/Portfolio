// Toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// Scroll section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


    // remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');



};


// scroll reveal

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img , .services-container , .portfolio-box , .contact form, .work-container, .work-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .skill, .certifi', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .edu, .awards, .projects-container', { origin: 'right' });



// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent default form submission
  
//     // Get form data
//     var formData = new FormData(this);
  
//     // Create XMLHttpRequest object
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "/sendEmail", true);
//     xhr.setRequestHeader("Content-Type", "application/json");
  
//     // Convert form data to JSON format
//     var jsonData = {};
//     formData.forEach(function(value, key) {
//       jsonData[key] = value;
//     });
  
//     // Send JSON data to server
//     xhr.send(JSON.stringify(jsonData));
  
//     // Reset form fields
//     this.reset();
  
//     // Display success message or perform other actions
//     alert("Thank you for your message!");
//   });
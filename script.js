// JavaScript for the image slider
let currentImageIndex = 0;
const images = document.querySelectorAll('.slider img');

function nextImage() {
    images[currentImageIndex].style.opacity = 0;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity = 1;
}

// Start the slider
setInterval(nextImage, 3000); // Change image every 3 seconds


// JavaScript for the fixed navigation bar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add a click event listener to each question
const questions = document.querySelectorAll('.faq-question');
questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        // Toggle the answer's visibility
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});

//Contact page
// JavaScript for Form Validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    var name = document.getElementById('name').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('email').value;

    if (!name || !surname || !email) {
        event.preventDefault(); // Prevent form submission if required fields are not filled
        alert('Please fill in all required fields.');
    }
});

//Register page code 

document.addEventListener("DOMContentLoaded", function () {
    // Dynamically populate the select elements for date of birth
    const yearSelect = document.getElementById("year");
    const monthSelect = document.getElementById("month");
    const daySelect = document.getElementById("day");

    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100; // Assume minimum age is 100 years
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    for (let i = currentYear; i >= startYear; i--) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        yearSelect.add(option);
    }

    months.forEach((month, index) => {
        const option = document.createElement("option");
        option.value = index + 1;
        option.text = month;
        monthSelect.add(option);
    });

    for (let i = 1; i <= 31; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        daySelect.add(option);
    }
});



//application form code

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("application-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Add your custom form submission logic here
        // For example, you can collect form data and send it to a server using AJAX
        // or perform client-side validation before submission
        console.log("Form submitted!");
    });
});



//Testimonials section
let currentIndex = 1;

function changeTestimonial(n) {
    showTestimonial(currentIndex += n);
}

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial-card');
    if (index > testimonials.length) { currentIndex = 1 }
    if (index < 1) { currentIndex = testimonials.length }
    testimonials.forEach(testimonial => testimonial.style.display = 'none');
    testimonials[currentIndex - 1].style.display = 'block';
}

// Initialize Animations
AOS.init({
    duration: 1000,
    once: true
});

// Simple Form Handling
document.getElementById('enquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you! Sunminer will contact you shortly at 9660330333.");
    this.reset();
});
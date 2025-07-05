// Product Boxes Click Effect
document.querySelectorAll('.box').forEach((box) => {
    box.addEventListener('click', () => {
        alert("Product clicked!");  // Replace with any action you want
    });
});

// Product Hover Effect (Optional, already in CSS, this is an alternative)
document.querySelectorAll('.box').forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.03)';
        box.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    });
    box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1)';
        box.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    });
});

// Toggle Footer Panels (example: for the footer links)
document.querySelectorAll('.foot-panel2 ul').forEach((panel) => {
    panel.addEventListener('click', () => {
        panel.classList.toggle('active');
        // Toggle style changes or add animations here
    });
});

// Scroll to Top Button Functionality (Add a "Back to Top" button)
let topButton = document.createElement('button');
topButton.innerHTML = '⬆️';
topButton.classList.add('scroll-top-btn');
document.body.appendChild(topButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
});

topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Get the carousel container and the car cards
const carContainer = document.getElementById('car-container');
const cars = document.querySelectorAll('.car-card');

// Set the initial index for the carousel
let currentIndex = 0;

// Show the car at a given index with a sliding effect
function showCar(index) {
    // Hide all car cards with a fade-out effect
    cars.forEach((car, i) => {
        car.style.transition = 'opacity 0.3s ease-in-out, transform 0.6s ease';
        car.style.opacity = '0';
        car.style.transform = 'translateX(-100%)'; // Move off-screen to the left for the sliding effect
    });

    // Wait until the fade-out completes before showing the new car
    setTimeout(() => {
        cars.forEach((car, i) => {
            car.style.display = 'none'; // Hide all cars
        });
        
        // Show the car at the new index
        cars[index].style.display = 'block';
        
        // Apply a sliding effect for the transition (from left to right)
        cars[index].style.transform = 'translateX(0)';
        
        // Apply fade-in effect after a slight delay
        setTimeout(() => {
            cars[index].style.opacity = '1';
        }, 10);
    }, 300);
}

// Show the next car with a sliding transition
function nextCar() {
    currentIndex = (currentIndex + 1) % cars.length;
    showCar(currentIndex);
}

// Show the previous car with a sliding transition
function prevCar() {
    currentIndex = (currentIndex - 1 + cars.length) % cars.length;
    showCar(currentIndex);
}

// Handle renting the car
function rentCar() {
    alert("You have rented the car!");
    const rentButton = this;
    rentButton.textContent = 'Rented';
    rentButton.disabled = true;
}

// Attach event listeners to all "Rent Now" buttons
document.querySelectorAll('.rent-button').forEach(button => {
    button.addEventListener('click', rentCar);
});

// Initial call to show the first car
showCar(currentIndex);

// Add event listeners for the buttons
document.getElementById('next').addEventListener('click', nextCar);
document.getElementById('prev').addEventListener('click', prevCar);

// Initially hide 3 unavailable cars
cars.forEach((car, i) => {
    if (i > 2) { // Hiding the 3rd car initially
        car.style.display = 'none';
    }
});

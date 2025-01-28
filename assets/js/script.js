// Car Data (image links are directly in HTML)
const cars = [
    { id: 1, name: 'Toyota Corolla', available: true, image: '../img/corolla.png' },
    { id: 2, name: 'Honda Civic', available: true, image: '../img/civic.png' },
    { id: 3, name: 'Ford Mustang', available: false, image: '../img/mustang.png' },
    { id: 4, name: 'Chevrolet Malibu', available: true, image: '../img/malibu.png' },
    { id: 5, name: 'Nissan Altima', available: false, image: '../img/altima.png' },
    { id: 6, name: 'BMW 3 Series', available: true, image: '../img/bmw.png' },
    { id: 7, name: 'Audi A4', available: true, image: '../img/audi.png' },
    { id: 8, name: 'Mercedes-Benz C-Class', available: false, image: '../img/mercedes.png' },
    { id: 9, name: 'Hyundai Sonata', available: true, image: '../img/sonata.png' },
    { id: 10, name: 'Kia Optima', available: true, image: '../img/optima.png' }
];

// Function to display cars
function displayCars() {
    const carContainer = document.getElementById('car-container');
    carContainer.innerHTML = ''; // Clear previous content

    cars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');

        // Check if the image exists
        const img = new Image();
        img.src = car.image;
        img.onload = () => {
            carCard.innerHTML = `
                <div class="car-image">
                    <img src="${car.image}" alt="${car.name}">
                </div>
                <div class="car-info">
                    <h3>${car.name}</h3>
                    <p>Status: <span class="${car.available ? 'available' : 'unavailable'}">${car.available ? 'Available' : 'Not Available'}</span></p>
                    <button onclick="bookCar(${car.id})" ${!car.available ? 'disabled' : ''}>${car.available ? 'Book Now' : 'Not Available'}</button>
                </div>
            `;
            carContainer.appendChild(carCard);
        };

        img.onerror = () => {
            console.error(`Image for ${car.name} not found at ${car.image}`);
        };
    });
}

// Function to handle car booking
function bookCar(carId) {
    const car = cars.find(c => c.id === carId);
    if (car && car.available) {
        car.available = false; // Mark the car as unavailable after booking
        displayCars(); // Refresh the car list
        alert(`You have successfully booked the ${car.name}!`);
    }
}

// Initial call to display cars
window.onload = displayCars;

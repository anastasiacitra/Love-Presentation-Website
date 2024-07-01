const form = document.getElementById('loveForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name1 = document.getElementById('name1').value.trim().toLowerCase();
    const name2 = document.getElementById('name2').value.trim().toLowerCase();

    // Calculate love percentage (simple example)
    const lovePercentage = calculateLovePercentage(name1, name2);

    // Display result
    const resultMessage = `Love percentage between ${name1} and ${name2} is ${lovePercentage}%`;
    resultDiv.textContent = resultMessage;

    // Determine icon and color based on percentage
    let icon, color;
    if (lovePercentage < 30) {
        icon = 'error';
        color = '#e74c3c'; // Red color for low percentages
    } else if (lovePercentage < 70) {
        icon = 'warning';
        color = '#f39c12'; // Orange color for moderate percentages
    } else {
        icon = 'success';
        color = '#2ecc71'; // Green color for high percentages
    }

    // Show popup using SweetAlert2
    showPopup(resultMessage, icon, color);
});

function calculateLovePercentage(name1, name2) {
    // Dummy calculation: just a random number for demonstration
    return Math.floor(Math.random() * 101); // Random number between 0 and 100
}

function showPopup(message, icon, color) {
    Swal.fire({
        title: 'Love Percentage',
        text: message,
        icon: icon,
        confirmButtonText: 'Close',
        iconColor: color, // Set the icon color based on the condition
        customClass: {
            icon: 'swal2-icon-custom' // Custom class for the icon to apply the color
        }
    });
}

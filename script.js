// Fetch IP address
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    const panchodElement = document.getElementById('panchod');
    const ipAddressElement = document.createElement('div');
    ipAddressElement.id = 'ip-address';
    ipAddressElement.textContent = `get fucked idiot: ${ipAddress}`;
    const contentContainer = document.getElementById('content');
    contentContainer.appendChild(ipAddressElement);
  })
  .catch(error => console.error('Error fetching IP address:', error));


// A simple function to add a class when a section is in view
function isVisible(element) {
    const elementBox = element.getBoundingClientRect();
    return (elementBox.top < window.innerHeight) && (elementBox.bottom >= 0);
}

// Adding the 'animate' class to a section when in view
function scanDocument() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (isVisible(section)) {
            section.classList.add('animate');
        } else {
            section.classList.remove('animate');
        }
    });
}

window.addEventListener('scroll', scanDocument);

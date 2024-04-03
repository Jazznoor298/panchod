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

document.getElementById('bookingForm').addEventListener('submit', function(e) {
  var service = document.getElementById('service').value;
  if (!service) {
    alert('Please select a service before booking.');
    e.preventDefault();
  }
});
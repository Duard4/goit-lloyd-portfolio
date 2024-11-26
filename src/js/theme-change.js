document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.querySelector('.switch input');
  const body = document.body;

  // Function to toggle the 'dark' class
  toggleSwitch.addEventListener('change', function () {
    if (toggleSwitch.checked) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  });
});

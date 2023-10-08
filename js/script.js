// Misalkan URL endpoint backend Anda adalah seperti berikut:
const backendUrl = 'https://nama-backend-di-railway.railway.app/api';

// Membuat permintaan GET ke backend
fetch(backendUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Mengubah respons ke JSON jika diperlukan
  })
  .then(data => {
    // Lakukan sesuatu dengan data yang diterima dari backend
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


// get the navbar
document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((navbarHTML) => {
      document.getElementById("navbar-container").innerHTML = navbarHTML;
    });
});

// get the footer
document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then((response) => response.text())
    .then((navbarHTML) => {
      document.getElementById("footer-container").innerHTML = navbarHTML;
    });
});


document.addEventListener('DOMContentLoaded', function () {
  const target = document.getElementById('navbar');
  if (!target) return;

  fetch('components/navbar.html')
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Gagal memuat footer.html');
      }
      return response.text();
    })
    .then(function (html) {
      target.innerHTML = html;
    })
    .catch(function (error) {
      console.error(error);
    });
});


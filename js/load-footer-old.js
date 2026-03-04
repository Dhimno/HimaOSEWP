document.addEventListener("DOMContentLoaded", function () {
  const target = document.getElementById("footer-root");
  if (!target) return;

  fetch("components/footer.html")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Gagal memuat footer.html");
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

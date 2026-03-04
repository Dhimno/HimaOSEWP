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

      // Sesuaikan link footer tergantung halaman saat ini
      const isIndexPage =
        window.location.pathname.endsWith("/") ||
        window.location.pathname.endsWith("index.html") ||
        window.location.pathname === "";
      const isKontakPage = window.location.pathname.endsWith("kontak.html");

      if (isIndexPage) {
        const footerLinks = document.querySelectorAll(".footer-nav a");
        footerLinks.forEach((link) => {
          const href = link.getAttribute("href");
          if (!href) return;
          if (href === "index.html" || href === "#") {
            // Beranda di index cukup scroll ke atas
            link.setAttribute("href", "#");
          } else if (href === "index.html#about" || href === "#about") {
            // Tentang kami di index cukup anchor lokal
            link.setAttribute("href", "#about");
          }
        });
      }

      if (isKontakPage) {
        const footerLinks = document.querySelectorAll(".footer-nav a");
        footerLinks.forEach((link) => {
          const href = link.getAttribute("href");
          if (!href) return;
          if (href === "kontak.html") {
            // Di halaman kontak, link 'Kontak' cukup scroll ke atas
            link.setAttribute("href", "#");
          }
        });
      }
    })
    .catch(function (error) {
      console.error(error);
    });
});

// Hamburger Menu Toggle
document.getElementById('hamburger').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Smooth Scroll untuk Menu Navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Tutup menu mobile setelah klik
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Fungsi untuk pesan via WhatsApp
function pesanPaket(namaPaket) {
    const phoneNumber = "+6282346005010"; // Ganti dengan nomor WhatsApp Anda
    const message = `Halo Shabira Trans, saya ingin memesan paket ${namaPaket}. Bisakah Anda memberikan informasi lebih lanjut?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
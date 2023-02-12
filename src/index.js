 // tambahkan kelas "scrolled" ke elemen "nav" saat di-scroll
 window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', window.scrollY > 0);
});
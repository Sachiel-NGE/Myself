document.addEventListener('DOMContentLoaded', () => {
    const imageSets = document.querySelectorAll('.image-set');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    imageSets.forEach(set => {
        observer.observe(set);
    });
});

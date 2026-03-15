document.addEventListener('DOMContentLoaded', () => {
function incrementProgressBar(duration = 2000) {

    const bars = document.querySelectorAll('.porcentaje');

    bars.forEach(bar => {

        const container = bar.parentElement.previousElementSibling;
        const percentageText = container.querySelector('.percentage');

        const targetValue = parseInt(percentageText.textContent);

        let currentValue = 0;
        const stepDuration = duration / targetValue;

        percentageText.textContent = "0%";

        const interval = setInterval(() => {

            if (currentValue >= targetValue) {
                clearInterval(interval);
                return;
            }

            currentValue++;

            bar.style.width = currentValue + '%';
            percentageText.textContent = currentValue + '%';

        }, stepDuration);

    });

}

const section = document.querySelector('.skills');

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            incrementProgressBar();
            observer.unobserve(entry.target);

        }

    });

}, { threshold: 0.4 });

observer.observe(section);
});
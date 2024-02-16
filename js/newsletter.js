window.addEventListener('load', function () {
    const newsletter = document.querySelector('.newsletter');
    const blur = document.querySelector('.blur');
    newsletter.style.display = 'none'
    blur.style.display = 'none'
    setTimeout(thisFunc,5000)

    function thisFunc() {
        newsletter.style.display = 'flex'
        blur.style.display = 'block'

        const closeButton = document.querySelector('.newsletter .close-button');
        const form = document.querySelector('.newsletter form');
        const emailInput = document.querySelector('.newsletter input[type="email"]');


        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = emailInput.value;
            if (email === '')
                return;
            closeNewsletter();
        });

        function closeNewsletter() {
            newsletter.style.display = 'none';
            blur.style.display = 'none';
            setTimeout(function () {
                window.confirm('Ön nyert egy új Iphone 12 Pro\nGratulálunk!')
            }, 2000);
            setTimeout(function () {
                document.querySelector('.cookies').classList.add('slide-up')
            }, 10000)
        }

        closeButton.addEventListener('click', function () {
            closeNewsletter();
        });

        let position = -newsletter.offsetHeight;
        const centerPosition = (window.innerHeight / 2) - (newsletter.offsetHeight / 2);
        const animationTime = 1000;
        const step = (centerPosition + Math.abs(position)) / (animationTime / 5);

        function animateNewsletter() {
            position += step;
            newsletter.style.top = position + 'px';
            if (position < centerPosition) {
                setTimeout(animateNewsletter, 5)
            }
        }

        animateNewsletter();
    }
});
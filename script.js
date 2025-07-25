
        function enviarWhatsapp(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const mensagem = document.getElementById('mensagem').value;
        const telefone = '5585992376342';
        
        const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
        const msgFormatada = encodeURIComponent(texto);
        
        const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
        
        console.log(url);

        window.open(url, '_blank');
        }
   

    const container = document.getElementById('projetos-container');
    const cards = Array.from(container.children);
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const visibleCards = 3;
    let startIndex = 0;
    let interval;

    function updateCarousel() {
        cards.forEach((card, index) => {
            card.classList.remove('show');
            if (index >= startIndex && index < startIndex + visibleCards) {
                setTimeout(() => {
                    card.style.display = 'block';
                    requestAnimationFrame(() => {
                        card.classList.add('show');
                    });
                }, 10);
            } else {
                card.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        if (startIndex + visibleCards < cards.length) {
            startIndex += visibleCards;
        } else {
            startIndex = 0; // reinicia do começo
        }
        updateCarousel();
    }

    function prevSlide() {
        if (startIndex - visibleCards >= 0) {
            startIndex -= visibleCards;
        } else {
            // Calcula o índice do último grupo completo de cards
            const total = cards.length;
            const resto = total % visibleCards;

            // Se for múltiplo exato, mostra os últimos 'visibleCards'
            // Senão, mostra o grupo com os últimos 'resto' cards
            startIndex = resto === 0 ? total - visibleCards : total - resto;
        }
        updateCarousel();
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    function startAutoSlide() {
        interval = setInterval(nextSlide, 15000); 
    }

    function resetInterval() {
        clearInterval(interval);
        startAutoSlide();
    }

    updateCarousel();
    startAutoSlide();


// --- LÓGICA DO CARROSSEL DE PROJETOS (VERSÃO OTIMIZADA) ---
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('projetos-container');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    if (container && prevBtn && nextBtn) {
        const scrollAmount = () => {
            // Pega o primeiro card visível para medir sua largura total (incluindo o gap)
            const firstCard = container.querySelector('.projetos-card');
            if (!firstCard) return 300; // Valor padrão caso não encontre o card

            const cardStyle = window.getComputedStyle(firstCard);
            const cardMargin = parseFloat(cardStyle.marginRight) || 0; // Pega a margem se houver
            const cardWidth = firstCard.offsetWidth; // Largura total do card
            
            // O valor do scroll é a largura do card + o gap entre eles (que está no container)
            const containerStyle = window.getComputedStyle(container);
            const gap = parseFloat(containerStyle.gap) || 20; // Pega o valor do 'gap'

            return cardWidth + gap;
        };

        // Função para rolar para o próximo projeto
        nextBtn.addEventListener('click', () => {
            container.scrollBy({
                left: scrollAmount(),
                behavior: 'smooth'
            });
        });

        // Função para rolar para o projeto anterior
        prevBtn.addEventListener('click', () => {
            container.scrollBy({
                left: -scrollAmount(),
                behavior: 'smooth'
            });
        });
    }
});


// --- LÓGICA DO FORMULÁRIO DE CONTATO ---
function enviarWhatsapp(event) {
    event.preventDefault();

    const nomeInput = document.getElementById('nome');
    const mensagemInput = document.getElementById('mensagem');
    
    const nome = nomeInput.value;
    const mensagem = mensagemInput.value;
    const telefone = '5585992376342'; // Seu número de telefone

    if (!nome || !mensagem) {
        alert('Por favor, preencha o nome e a mensagem.');
        return;
    }
    
    const texto = `Olá! Me chamo ${nome}. ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
    
    window.open(url, '_blank' );

    // Limpa os campos após o envio
    nomeInput.value = '';
    mensagemInput.value = '';
}

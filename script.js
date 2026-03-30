const projectDetails = {
    barbearia: {
        title: "Barbearia Virtual",
        liveUrl: "http://localhost/barbearia/index.html", 
        repoUrl: "https://github.com/GustavoR-Dev",
        gallery: ["./img/barbearia-index.png"], 
        problem: "Barbearias locais muitas vezes carecem de uma presença online profissional para atrair novos clientes e gerenciar agendamentos.",
        solution: "Desenvolvi um site completo e responsivo para uma barbearia fictícia, com foco em praticidade de agendamento. O site apresenta os serviços, os horários e um formulário de contato funcional para agendamentos.",
        challenges: "Foi meu primeiro CRUD e o maior desafio foi lidar com o calendário e o agendamento de cortes.",
        techs: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    },
    workshop: {
        title: "Página de Vendas",
        liveUrl: "http://localhost/WorkShop/index.html",
        repoUrl: "https://github.com/GustavoR-Dev",
        gallery: ["./img/workshop-index.png"],
        problem: "Criar uma landing page atraente para a venda de um workshop de tecnologia.",
        solution: "Construí uma landing page com um design visualmente impactante, focada na conversão.",
        challenges: "A otimização da velocidade de carregamento foi crucial. Utilizei técnicas de compressão de imagem e carregamento assíncrono de scripts para garantir que a página abrisse rapidamente, evitando a perda de potenciais clientes.",
        techs: ["HTML", "CSS", "JavaScript"]
    },
    cafeteria: {
        title: "Cafeteria",
        liveUrl: "http://localhost/cafeteria/index.html",
        repoUrl: "https://github.com/GustavoR-Dev/cafeteria",
        gallery: ["./img/cafeteria-index.png"],
        problem: "A cafeteria precisava de uma presença digital para divulgar seus produtos e facilitar pedidos.",
        solution: "Criei uma landing page moderna e responsiva com cardápio interativo, localização no mapa e chamada para pedidos online.",
        challenges: "O desafio foi equilibrar estética elegante com boa performance e usabilidade em dispositivos móveis.",
        techs: ["HTML", "CSS", "JavaScript"]
    },
    ipjacarei: {
        title: "IP Jacareí",
        liveUrl: "http://localhost/ipjacarei/",
        repoUrl: "https://github.com/GustavoR-Dev/ipjacarei",
        gallery: ["./img/ipjacarei-index.png"],
        problem: "A igreja não possuía um site oficial centralizando informações sobre a igreja, cultos e eventos.",
        solution: "Desenvolvi um site institucional para a Igreja Impacto da Presença Jacareí, com agenda de cultos, eventos, informações sobre a liderança e conteúdos cristãos.",
        challenges: "Organizar o conteúdo de forma acessível e responsiva, mantendo identidade visual simples e clara.",
        techs: ["HTML", "CSS", "JavaScript"]
    },
    pjudicial: {
        title: "Processos Judiciais",
        liveUrl: "https://pjud.jacarei.sp.gov.br/login.php",
        repoUrl: "https://github.com/GustavoR-Dev",
        gallery: ["./img/pjudicial-login.png", "./img/pjudicial-redefinir-senha.png"],
        problem: "O sistema não possuía um mecanismo de renovação de senha. Caso o usuário esquecesse sua senha de acesso, era necessário entrar em contato com a equipe de TI, que então criava manualmente uma nova senha diretamente no banco de dados.",
        solution: "Criei uma página de redefinição de senha, onde o usuário pode criar uma nova senha utilizando uma chave de segurança (PIN). Esse PIN pode ser gerado pelo gestor ou por um usuário com perfil de administrador.",
        challenges: "Implementar toda a lógica em PHP para geração do PIN após o cadastro do usuário, incluindo a verificação do PIN informado em comparação ao PIN armazenado no banco de dados e o salvamento da nova senha no sistema.",
        techs: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"]
    },
    cestaServidores: {
        title: "Cesta Servidores",
        liveUrl: "http://cestabasica.jacarei.sp.gov.br/cesta_servidores/login",
        repoUrl: "https://github.com/GustavoR-Dev",
        gallery: ["./img/cesta-servidores.png"],
        problem: "O controle de servidores municipais elegíveis à cesta básica era descentralizado e manual.",
        solution: "Implementei uma lógica que importa uma planilha CSV de servidores e sincroniza os dados com o banco: insere novos servidores, atualiza os que já existem marcando-os como ativos, inativa os que não estão na planilha, contabiliza as alterações realizadas e registra a operação em um log vinculado ao usuário que fez a importação.",
        challenges: "Garantir a integridade dos dados ao importar a planilha, evitando erros de formatação, duplicidade ou inconsistência, além de manter performance e registrar as alterações para auditoria.",
        techs: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"]
    },
    credEstacionamento: {
        title: "Credencial Estacionamento",
        liveUrl: "https://cred-estacionamento.jacarei.sp.gov.br/login",
        repoUrl: "https://github.com/GustavoR-Dev",
        gallery: ["./img/cred-estacionamento-redefinir.png", "./img/cred-estacionamento-credencial.jpg", "./img/cred-estacionamento-2via.jpg", "./img/cred-estacionamento-cred.jpg"],
        problem: "O usuário precisava digitar o CPF do beneficiário duas ou três vezes para realizar tarefas como cadastro ou renovação de credencial.",
        solution: "Reestruturei o fluxo de paginação para que o usuário precise digitar o CPF do beneficiário apenas uma vez e implementei melhorias como a página de renovação de senha com PIN de segurança, métodos para renovação de credenciais, emissão de segunda via, cadastro de novos registros e a organização dos formulários com Twig em um único arquivo para facilitar a manutenção.",
        challenges: "Planejar a lógica para determinar quando é necessária a renovação de credencial ou a emissão de segunda via e realizar a compactação de três arquivos em um único, utilizando Twig.",
        techs: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"]
    },
    registroGeralAnimal: {
        title: "Registro Geral Animal",
        liveUrl: "http://intranet.jacarei.sp.gov.br/dti/rga-sis/",
        repoUrl: "https://github.com/GustavoR-Dev",
        gallery: ["./img/rga-cadastro.png", "./img/rga-consulta.png", "./img/rga-consulta-tutor.png", "./img/rga-form.png"],
        problem: "O sistema não apresentava o mesmo template visual de header, footer e sidebar nas páginas, o que não mantinha a identidade visual. Além disso, o processo de cadastro e emissão do registro era demorado, exigindo múltiplas etapas e entradas de dados repetitivas.",
        solution: "Atualizei o sistema para utilizar um template visual consistente em todas as páginas, melhorando a experiência do usuário.",
        challenges: "O maior desafio foi identificar as variações entre as versões do bootstrap e adaptar o código existente para garantir compatibilidade e funcionalidade, além de otimizar o processo de cadastro para reduzir etapas desnecessárias.",
        techs: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"]
    },
    vivavida: {
        title: "Viva Vida",
        liveUrl: "http://casavivavida.jacarei.sp.gov.br/login.php",
        repoUrl: "https://github.com/GustavoR-Dev",
        gallery: ["./img/viva-vida-relatorios.png", "./img/viva-vida-tipo-modalidade.png", "./img/viva-vida-lista.png"],
        problem: "O sistema precisava de uma forma de identificar exclusivamente os munícipes em lista de espera de uma modalidade específica, sem incluir aqueles já matriculados em outras atividades. Esse filtro era essencial para o planejamento e gestão de vagas.",
        solution: "Desenvolvi uma ferramenta de filtragem para identificar apenas munícipes ainda ativos em alguma atividade, garantindo que aqueles já matriculados não apareçam na lista de espera exclusiva. Além disso, implementei um filtro que permite agrupar os dados por tipo de modalidade, facilitando a visualização dos totais por categoria. E adicionei uma lógica para gerar Planilha Filtrada, onde é gerado os dados em excel do filtro escolhido.",
        challenges: "Garantir que a lógica SQL selecionasse corretamente apenas os munícipes que ainda não estavam matriculados em nenhuma outra atividade, evitando duplicidade ou inclusão de registros incorretos na lista de espera, e organizar os filtros de forma clara e funcional para o usuário.",
        techs: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"]
    },
    bolaoCopa: {
        title: "Bolão Copa do Mundo 2026",
        liveUrl: "http://localhost/bolao_copa_2026/login.html",
        repoUrl: "https://github.com/GustavoR-Dev/bolao_copa_2026",
        gallery: ["./img/bolao-copa-index.png", "./img/bolao-copa-palpites.png", "./img/bolao-copa-jogos.png", "./img/bolao-copa-tabela.png"],
        problem: "Toda Copa do Mundo, a família se reunia para jogar bolão, mas o uso de folhas de papel tornava o processo trabalhoso. Faltava uma plataforma digital que organizasse os palpites, calculasse a pontuação e gerasse o ranking dos participantes em tempo real.",
        solution: "Desenvolvi um sistema web em que os usuários registram palpites, acumulam pontos conforme a precisão e competem em um ranking em tempo real. O sistema calcula automaticamente a pontuação de todos após o término de cada partida. O usuário administrador pode acompanhar os palpites e pontuações por jogo, além de criar e editar partidas.",
        challenges: "O maior desafio foi implementar a lógica de pontuação e atualização dinâmica do ranking.",
        techs: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"]
    },
    placasSolares: {
        title: "Cálculo de Energia Solar",
        liveUrl: null, 
        repoUrl: "https://github.com/GustavoR-Dev/placas_solares",
        gallery: ["./img/Projeto Placas Solares.jpg",],
        problem: "Residências não tinham uma ferramenta simples para simular consumo de energia e verificar eficiência de painéis solares.",
        solution: "Desenvolvi um sistema em Java em POO, que simula o consumo de energia residencial e calcula o ângulo ideal de inclinação de placas solares conforme a estação do ano.",
        challenges: "Criar algoritmos que considerassem variações sazonais de insolação foi o ponto mais desafiador.",
        techs: ["Java", "MySQL"]
    }
};

// --- MENU RESPONSIVO ---

const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('ativo');
});

const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('ativo');
    });
});

//          LÓGICA DO MODAL

document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.getElementById('close-modal');
    const projectCards = document.querySelectorAll('.projetos-card');

    // Função para abrir o modal
    const openModal = (projectKey) => {
        const details = projectDetails[projectKey];
        if (!details) {
            console.error("Detalhes do projeto não encontrados para a chave:", projectKey);
            return;
        }

        // Gera o HTML da galeria
        const galleryHtml = details.gallery.map(item => {
            if (item.endsWith('.mp4')) {
                return `<video src="${item}" controls autoplay muted loop></video>`;
            }
            return `<img src="${item}" alt="Screenshot do projeto ${details.title}">`;
        }).join('');

        // Gera o HTML dos botões de ação
        let actionsHtml = `<a href="${details.repoUrl}" target="_blank" class="modal-btn github">Ver Código no GitHub</a>`;
        if (details.liveUrl) {
            actionsHtml += `<a href="${details.liveUrl}" target="_blank" class="modal-btn">Acessar Projeto Ao Vivo</a>`;
        }

        // Preenche o corpo do modal com os detalhes
        modalBody.innerHTML = `
            <h3>${details.title}</h3>
            
            <div class="modal-gallery">${galleryHtml}</div>

            <h4 class="modal-section-title">O Problema</h4>
            <p>${details.problem}</p>

            <h4 class="modal-section-title">Minha Solução</h4>
            <p>${details.solution}</p>

            <h4 class="modal-section-title">Principal Desafio Técnico</h4>
            <p>${details.challenges}</p>

            <div class="modal-actions">
                ${actionsHtml}
            </div>
        `;

        // Mostra o modal
        modalOverlay.style.display = 'flex';
        setTimeout(() => modalOverlay.classList.add('show'), 10); // Para a transição de opacidade
    };

    // Função para fechar o modal
    const closeModal = () => {
        modalOverlay.classList.remove('show');
        setTimeout(() => {
            modalOverlay.style.display = 'none';
            modalBody.innerHTML = ''; // Limpa o conteúdo
        }, 300); // Espera a transição de opacidade terminar
    };

    // Adiciona o evento de clique a cada card de projeto
    projectCards.forEach(card => {
        // Pega a chave do projeto de um atributo data-* que vamos adicionar
        const projectKey = card.dataset.projectKey;
        if (projectKey) {
            card.addEventListener('click', (event) => {
                // Impede que o clique no botão "Repositório" abra o modal
                if (event.target.closest('.btn-repo')) {
                    return;
                }
                event.preventDefault();
                openModal(projectKey);
            });
        }
    });

    // Eventos para fechar o modal
    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });
});

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

const botao = document.getElementById('botao-tema');
const corpo = document.body;

// 1. FUNÇÃO: VERIFICAR MEMÓRIA AO CARREGAR O SITE
// O site pergunta pro navegador: "Ei, tem algum tema salvo aí?"
const temaSalvo = localStorage.getItem('tema');

// Se a memória disser "escuro", a gente já liga o modo noturno na hora
if (temaSalvo === 'escuro') {
    corpo.classList.add('dark-mode');
    botao.textContent = "Ativar modo claro";
    botao.style.backgroundColor = "#fff";
    botao.style.color = "#000";
}

// 2. FUNÇÃO: O CLIQUE NO BOTÃO
botao.addEventListener('click', () => {
    // Liga ou desliga a classe
    corpo.classList.toggle('dark-mode');

    // Verifica se ficou escuro ou claro para salvar
    if (corpo.classList.contains('dark-mode')) {
        // Se ficou ESCURO:
        botao.textContent = "Ativar modo claro";
        botao.style.backgroundColor = "#fff";
        botao.style.color = "#000";
        
        // MÁGICA: Salva "escuro" na memória do navegador
        localStorage.setItem('tema', 'escuro');
    } else {
        // Se ficou CLARO:
        botao.textContent = "Ativar modo escuro";
        botao.style.backgroundColor = "#000000";
        botao.style.color = "#fff";
        
        // MÁGICA: Salva "claro" na memória do navegador
        localStorage.setItem('tema', 'claro');
    }
});
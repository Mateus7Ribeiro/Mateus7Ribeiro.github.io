const CACHE_KEY = 'mecenato_cache';

function salvarCache(dados) {
    localStorage.setItem(CACHE_KEY, JSON.stringify(dados));
}

function carregarCache() {
    try {
        const raw = localStorage.getItem(CACHE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (e) {
        return null;
    }
}

function limparCache() {
    localStorage.removeItem(CACHE_KEY);
}

/**
 * Gera uma permutação aleatória (derangement) onde ninguém aponta para si mesmo.
 * Garante que todos dão e recebem exatamente uma vez.
 */
function gerarSorteio(nomes) {
    const n = nomes.length;
    let tentativas = 0;
    const maxTentativas = 1000;

    while (tentativas < maxTentativas) {
        tentativas++;
        const destinos = [...nomes];

        // Fisher-Yates shuffle
        for (let i = destinos.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [destinos[i], destinos[j]] = [destinos[j], destinos[i]];
        }

        // Verifica se é um derangement (ninguém tira a si mesmo)
        const valido = nomes.every((nome, i) => nome !== destinos[i]);
        if (valido) {
            return nomes.map((nome, i) => ({ de: nome, para: destinos[i] }));
        }
    }

    return null;
}

function sortear() {
    const textarea = document.getElementById('nomes');
    const erroDiv = document.getElementById('erro');
    const resultadoDiv = document.getElementById('resultado');
    const resultadoLista = document.getElementById('resultadoLista');
    const modoIndividualCheck = document.getElementById('modoIndividual');
    const modoIndividualDiv = document.getElementById('modoIndividual-resultado');
    const cardsDiv = document.getElementById('cardsIndividuais');
    const btnLimpar = document.getElementById('btnLimpar');

    // Limpa estados anteriores
    erroDiv.style.display = 'none';
    resultadoDiv.style.display = 'none';
    modoIndividualDiv.style.display = 'none';
    resultadoLista.innerHTML = '';
    cardsDiv.innerHTML = '';

    // Processa os nomes
    const texto = textarea.value.trim();
    if (!texto) {
        mostrarErro('Por favor, insira ao menos 3 nomes.');
        return;
    }

    const nomes = texto
        .split('\n')
        .map(n => n.trim())
        .filter(n => n.length > 0);

    // Remove duplicatas (case-insensitive)
    const nomesUnicos = [];
    const nomesVistos = new Set();
    for (const nome of nomes) {
        const chave = nome.toLowerCase();
        if (!nomesVistos.has(chave)) {
            nomesVistos.add(chave);
            nomesUnicos.push(nome);
        }
    }

    if (nomesUnicos.length < 3) {
        mostrarErro('É necessário pelo menos 3 participantes diferentes para o sorteio.');
        return;
    }

    // Gera o sorteio
    const resultado = gerarSorteio(nomesUnicos);
    if (!resultado) {
        mostrarErro('Não foi possível gerar o sorteio. Tente novamente.');
        return;
    }

    const modoIndividual = modoIndividualCheck.checked;

    if (modoIndividual) {
        exibirModoIndividual(resultado, modoIndividualDiv, cardsDiv, []);
    } else {
        exibirResultadoCompleto(resultado, resultadoDiv, resultadoLista);
    }

    btnLimpar.style.display = 'block';

    salvarCache({
        texto: textarea.value,
        resultado: resultado,
        modoIndividual: modoIndividual,
        revelados: []
    });
}

function exibirResultadoCompleto(resultado, div, lista) {
    resultado.forEach((par, i) => {
        const li = document.createElement('li');
        li.style.animationDelay = `${i * 0.08}s`;
        li.innerHTML = `
            <span class="nome-de">${escapeHtml(par.de)}</span>
            <span class="seta">➜</span>
            <span class="nome-para">${escapeHtml(par.para)}</span>
        `;
        lista.appendChild(li);
    });
    div.style.display = 'block';
}

function exibirModoIndividual(resultado, div, cardsDiv, revelados) {
    resultado.forEach((par, i) => {
        const card = document.createElement('div');
        card.className = 'card-participante';

        const jaRevelado = revelados.includes(i);

        if (jaRevelado) {
            card.innerHTML = `
                <span class="nome">${escapeHtml(par.de)}</span>
                <span class="revelado">➜ ${escapeHtml(par.para)}</span>
            `;
            card.style.cursor = 'default';
        } else {
            card.innerHTML = `
                <span class="nome">${escapeHtml(par.de)}</span>
                <span class="oculto">Clique para revelar</span>
            `;

            card.addEventListener('click', function () {
                const oculto = this.querySelector('.oculto');
                if (oculto) {
                    oculto.remove();
                    const span = document.createElement('span');
                    span.className = 'revelado';
                    span.textContent = '➜ ' + par.para;
                    this.appendChild(span);
                    this.style.cursor = 'default';

                    // Atualiza cache com o índice revelado
                    const cache = carregarCache();
                    if (cache) {
                        if (!cache.revelados.includes(i)) {
                            cache.revelados.push(i);
                        }
                        salvarCache(cache);
                    }
                }
            });
        }

        cardsDiv.appendChild(card);
    });

    div.style.display = 'block';
}

function mostrarErro(mensagem) {
    const erroDiv = document.getElementById('erro');
    erroDiv.textContent = mensagem;
    erroDiv.style.display = 'block';
}

function limpar() {
    document.getElementById('nomes').value = '';
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('modoIndividual-resultado').style.display = 'none';
    document.getElementById('resultadoLista').innerHTML = '';
    document.getElementById('cardsIndividuais').innerHTML = '';
    document.getElementById('erro').style.display = 'none';
    document.getElementById('btnLimpar').style.display = 'none';
    limparCache();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
}

function restaurarCache() {
    const cache = carregarCache();
    if (!cache || !cache.resultado) return;

    const textarea = document.getElementById('nomes');
    const modoIndividualCheck = document.getElementById('modoIndividual');
    const resultadoDiv = document.getElementById('resultado');
    const resultadoLista = document.getElementById('resultadoLista');
    const modoIndividualDiv = document.getElementById('modoIndividual-resultado');
    const cardsDiv = document.getElementById('cardsIndividuais');
    const btnLimpar = document.getElementById('btnLimpar');

    textarea.value = cache.texto || '';
    modoIndividualCheck.checked = cache.modoIndividual || false;

    if (cache.modoIndividual) {
        exibirModoIndividual(cache.resultado, modoIndividualDiv, cardsDiv, cache.revelados || []);
    } else {
        exibirResultadoCompleto(cache.resultado, resultadoDiv, resultadoLista);
    }

    btnLimpar.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', restaurarCache);

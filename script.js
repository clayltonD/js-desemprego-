const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está em uma entrevista de emprego e descobre que a empresa está implementando uma nova tecnologia de IA para automatizar tarefas. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso pode ameaçar meu emprego!",
                afirmacao: "Você começa a se preocupar com a possibilidade de perder seu emprego devido à automação."
            },
            {
                texto: "Isso pode aumentar a eficiência da empresa!",
                afirmacao: "Você vê a tecnologia como uma oportunidade para aumentar a produtividade e buscar novos desafios."
            }
        ]
    },
    {
        enunciado: "Com a crescente adoção de IA, você percebe que seu trabalho pode ser substituído por uma máquina. Como você reage?",
        alternativas: [
            {
                texto: "Procuro adquirir novas habilidades para me adaptar às mudanças do mercado de trabalho.",
                afirmacao: "Você decide investir em sua educação e habilidades para se manter relevante em um mercado de trabalho em evolução."
            },
            {
                texto: "Fico preocupado e tento encontrar um novo emprego antes que seja tarde demais.",
                afirmacao: "Sua preocupação o motiva a buscar alternativas e planejar sua transição para um novo campo antes que o impacto da IA seja profundo."
            }
        ]
    },
    {
        enunciado: "Durante uma reunião de equipe, é discutido como a IA pode substituir algumas funções. Qual é a sua posição no debate?",
        alternativas: [
            {
                texto: "Defendo que a IA pode criar novas oportunidades de emprego e exigir novas competências dos trabalhadores.",
                afirmacao: "Você acredita que a automação pode gerar novas oportunidades e desafios que requerem uma adaptação dos profissionais."
            },
            {
                texto: "Preocupo-me com o impacto negativo que a IA pode ter sobre o emprego e defendo a necessidade de políticas de proteção aos trabalhadores.",
                afirmacao: "Sua preocupação leva você a advogar por políticas que protejam os trabalhadores e garantam uma transição justa para a nova realidade."
            }
        ]
    },
    {
        enunciado: "Depois de uma discussão sobre o impacto da IA no emprego, você precisa elaborar um plano para se adaptar às mudanças. O que você faz?",
        alternativas: [
            {
                texto: "Crio um plano de treinamento para adquirir novas habilidades que serão valorizadas no mercado de trabalho.",
                afirmacao: "Você desenvolve um plano de ação para se qualificar em áreas que estão em alta demanda e que não podem ser facilmente automatizadas."
            },
            {
                texto: "Procuro um novo emprego em um setor menos suscetível à automação.",
                afirmacao: "Você decide mudar de setor para encontrar oportunidades de trabalho que sejam menos impactadas pela automação."
            }
        ]
    },
    {
        enunciado: "Você está trabalhando em um projeto e descobre que a IA pode realizar uma parte significativa do trabalho. O que você faz?",
        alternativas: [
            {
                texto: "Utilizo a IA para melhorar a eficiência do projeto e me concentro nas partes que requerem criatividade e julgamento humano.",
                afirmacao: "Você otimiza seu trabalho com a IA, aproveitando seu potencial para se concentrar em tarefas que exigem habilidades humanas exclusivas."
            },
            {
                texto: "Confio totalmente na IA e deixo que ela faça a maior parte do trabalho, focando apenas na revisão final.",
                afirmacao: "Você delega a maior parte do trabalho à IA e se preocupa principalmente com a revisão e ajuste dos resultados produzidos pela máquina."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em um cenário futuro...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

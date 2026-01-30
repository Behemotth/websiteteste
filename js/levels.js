const levels = [

  // ==========================
  // 🌍 MUNDO 1 — HTML
  // ==========================

  {
    id: 1,
    world: "HTML",
    title: "O que é HTML?",
    theory: `
HTML (HyperText Markup Language) é a linguagem base da web.
Ela serve para estruturar o conteúdo de um site.
Tudo em HTML é feito com TAGS.
    `,
    example: `
<h1>Olá, mundo!</h1>
<p>Este é um parágrafo.</p>
    `,
    challenge: "Crie um título usando a tag <h1>.",
    expected: "<h1>",
    hint: "Use <h1>Texto</h1>",
    xp: 50
  },

  {
    id: 2,
    world: "HTML",
    title: "Parágrafos",
    theory: `
A tag <p> é usada para criar parágrafos.
Ela organiza textos longos e melhora a leitura.
    `,
    example: `
<p>Este é um parágrafo em HTML.</p>
    `,
    challenge: "Crie um parágrafo usando a tag <p>.",
    expected: "<p>",
    hint: "Use <p>Seu texto</p>",
    xp: 50
  },

  {
    id: 3,
    world: "HTML",
    title: "Listas",
    theory: `
Listas são usadas para organizar informações.
<ul> cria listas não ordenadas.
<li> define cada item.
    `,
    example: `
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
    `,
    challenge: "Crie uma lista usando <ul> e <li>.",
    expected: "<ul>",
    hint: "Não esqueça das tags <li>",
    xp: 75
  },

  // ==========================
  // 🌍 MUNDO 2 — CSS
  // ==========================

  {
    id: 4,
    world: "CSS",
    title: "O que é CSS?",
    theory: `
CSS (Cascading Style Sheets) define o visual do site.
Ele controla cores, tamanhos, fontes e layouts.
    `,
    example: `
p {
  color: red;
}
    `,
    challenge: "Mude a cor de um texto usando CSS.",
    expected: "color",
    hint: "Use a propriedade color",
    xp: 60
  },

  {
    id: 5,
    world: "CSS",
    title: "Cores e Fontes",
    theory: `
Você pode mudar fontes com font-family
e tamanhos com font-size.
    `,
    example: `
h1 {
  font-family: Arial;
  font-size: 32px;
}
    `,
    challenge: "Defina uma fonte e um tamanho de texto.",
    expected: "font-",
    hint: "Use font-family ou font-size",
    xp: 80
  },

  {
    id: 6,
    world: "CSS",
    title: "Background",
    theory: `
O background define o fundo dos elementos.
Pode ser uma cor ou imagem.
    `,
    example: `
body {
  background-color: #222;
}
    `,
    challenge: "Mude a cor de fundo da página.",
    expected: "background",
    hint: "Use background-color",
    xp: 80
  },

  // ==========================
  // 🌍 MUNDO 3 — JAVASCRIPT
  // ==========================

  {
    id: 7,
    world: "JavaScript",
    title: "O que é JavaScript?",
    theory: `
JavaScript adiciona interação ao site.
Ele reage a cliques, eventos e dados.
    `,
    example: `
alert("Olá, jogador!");
    `,
    challenge: "Mostre um alerta usando JavaScript.",
    expected: "alert",
    hint: "Use alert('texto')",
    xp: 100
  },

  {
    id: 8,
    world: "JavaScript",
    title: "Variáveis",
    theory: `
Variáveis guardam valores.
Use let ou const para criar variáveis.
    `,
    example: `
let nome = "Jogador";
    `,
    challenge: "Crie uma variável usando let.",
    expected: "let ",
    hint: "Exemplo: let idade = 10;",
    xp: 120
  },

  {
    id: 9,
    world: "JavaScript",
    title: "Eventos",
    theory: `
Eventos permitem interação.
Exemplo: clicar em um botão.
    `,
    example: `
button.addEventListener("click", () => {
  alert("Clicado!");
});
    `,
    challenge: "Use addEventListener para capturar um clique.",
    expected: "addEventListener",
    hint: "Use elemento.addEventListener",
    xp: 150
  }

];

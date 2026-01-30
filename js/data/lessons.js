const lessons = [

  {
    id: 1,
    module: "HTML",
    title: "Estrutura básica do HTML",
    theory: `
HTML é a base de qualquer site.
Todo documento HTML possui:
- <!DOCTYPE>
- <html>
- <head>
- <body>
    `,
    explanation: `
<!DOCTYPE html> → informa ao navegador o padrão HTML5
<html> → elemento raiz
<head> → metadados
<body> → conteúdo visível
    `,
    example: `
<!DOCTYPE html>
<html>
  <head>
    <title>Meu site</title>
  </head>
  <body>
    <h1>Olá mundo</h1>
  </body>
</html>
    `,
    exercise: "Crie um documento HTML com um <h1>.",
    expected: ["<!DOCTYPE", "<html", "<body", "<h1"],
    xp: 100
  },

  {
    id: 2,
    module: "CSS",
    title: "Estilizando texto",
    theory: `
CSS controla aparência.
Seletores indicam O QUE estilizar.
Propriedades indicam COMO.
    `,
    explanation: `
h1 → seletor
color → propriedade
red → valor
    `,
    example: `
h1 {
  color: blue;
  font-size: 32px;
}
    `,
    exercise: "Mude a cor de um texto usando CSS.",
    expected: ["color"],
    xp: 120
  },

  {
    id: 3,
    module: "JavaScript",
    title: "Introdução ao JavaScript",
    theory: `
JavaScript cria comportamento.
Permite lógica, eventos e interações.
    `,
    explanation: `
alert() exibe mensagens.
É uma função.
    `,
    example: `
alert("Bem-vindo ao CodeQuest");
    `,
    exercise: "Mostre uma mensagem usando alert.",
    expected: ["alert"],
    xp: 150
  }

];

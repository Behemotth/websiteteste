const htmlInput = document.getElementById("htmlInput");
const cssInput  = document.getElementById("cssInput");
const jsInput   = document.getElementById("jsInput");
const preview   = document.getElementById("preview");
const runBtn    = document.getElementById("runCode");

function updatePreview() {
  const html = htmlInput.value;
  const css  = `<style>${cssInput.value}</style>`;
  const js   = `<script>${jsInput.value}<\/script>`;

  const fullCode = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
${css}
</head>
<body>
${html}
${js}
</body>
</html>
  `;

  preview.srcdoc = fullCode;
}

runBtn.addEventListener("click", updatePreview);

// Atualização automática (modo aprendizado)
[htmlInput, cssInput, jsInput].forEach(area => {
  area.addEventListener("input", updatePreview);
});

// Render inicial
updatePreview();

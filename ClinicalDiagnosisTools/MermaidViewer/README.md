# Mermaid Viewer

Editor de diagramas Mermaid que funciona inteiramente no navegador. Node.js e npm são necessários somente para desenvolvimento e compilação.

```sh
npm install
npm run dev
npm run build
```

O build gera um único arquivo `dist/index.html`, que é versionado junto com o projeto. Abra esse arquivo diretamente no navegador, inclusive sem internet, sem instalar Node.js ou iniciar servidor. Para publicar neste repositório, habilite o GitHub Pages a partir da raiz da branch e mantenha `dist/index.html` no commit. A URL será `.../ClinicalDiagnosisTools/MermaidViewer/dist/index.html`. Para testar via HTTP, use `npm run preview`.

O código digitado é salvo apenas no `localStorage` deste navegador. Arquivos `.mmd`, `.mermaid` e `.txt` podem ser abertos pelo botão de importação. Os diagramas podem ser exportados em SVG ou PNG.
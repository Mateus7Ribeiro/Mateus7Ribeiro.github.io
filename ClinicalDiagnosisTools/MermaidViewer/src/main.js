  import './style.css'
  import mermaid from 'mermaid'
  import { createIcons, Activity, AlertCircle, Check, ChevronDown, Clipboard, Code2, Download, FileCode2, FileUp, Image, Maximize, Minus, PanelLeftClose, PanelLeftOpen, Play, Plus, RotateCcw } from 'lucide'

  const examples = {
    fluxo: `flowchart LR
      A[Ideia] --> B{Validar}
      B -->|Aprovada| C[Desenvolver]
      B -->|Revisar| A
      C --> D[Testar]
      D --> E((Publicar))`,
    sequencia: `sequenceDiagram
      participant U as Usuário
      participant A as Aplicação
      participant S as Serviço
      U->>A: Envia solicitação
      A->>S: Busca dados
      S-->>A: Retorna resultado
      A-->>U: Exibe resposta`,
    classes: `classDiagram
      class Projeto {
        +String nome
        +iniciar()
      }
      class Tarefa {
        +String titulo
        +concluir()
      }
      Projeto "1" --> "*" Tarefa : contém`,
    gantt: `gantt
      title Planejamento
      dateFormat YYYY-MM-DD
      section Descoberta
      Requisitos :a1, 2026-01-05, 5d
      section Entrega
      Desenvolvimento :a2, after a1, 10d
      Revisão :after a2, 3d`,
  }

  const storageKey = 'osiris-mermaid-source'
  let initialSource = examples.fluxo
  try {
    initialSource = localStorage.getItem(storageKey) ?? initialSource
  } catch {}

  document.querySelector('#app').innerHTML = `
    <header class="topbar">
      <div class="brand"><span class="brand-mark"><i data-lucide="activity"></i></span><span class="brand-name">osíris<span class="brand-dot">.</span></span><span class="brand-divider"></span><span class="brand-product">MERMAID VIEWER</span></div>
      <div class="top-actions"><span class="top-caption">Diagramas, sem complicação.</span><a href="../../index.html" class="back-link">Todas as ferramentas <span aria-hidden="true">↗</span></a></div>
    </header>
    <main class="workspace">
      <div class="intro"><div><div class="eyebrow"><span class="live-dot"></span> WORKSPACE / DIAGRAMAS</div><h1>Dê forma às suas ideias<span class="title-period">.</span></h1><p>Escreva Mermaid de um lado. Veja o resultado do outro.</p></div><div class="intro-index">01 <span>/</span> 01</div></div>
      <div class="workbench">
        <section class="editor-panel" id="editor-panel" aria-label="Editor Mermaid">
          <div class="panel-header"><div class="panel-heading"><span class="panel-number">01</span><i data-lucide="code-2"></i><h2>Código</h2></div><button class="icon-button collapse-button" id="collapse" type="button" title="Ocultar editor" aria-label="Ocultar editor"><i data-lucide="panel-left-close"></i></button></div>
          <div class="editor-actions"><label class="select-wrap"><span>EXEMPLO</span><select id="examples" aria-label="Selecionar exemplo"><option value="">Selecionar modelo</option><option value="fluxo">Fluxograma</option><option value="sequencia">Sequência</option><option value="classes">Classes</option><option value="gantt">Gantt</option></select><i data-lucide="chevron-down"></i></label><button id="open-file" type="button" class="icon-button" title="Abrir arquivo Mermaid" aria-label="Abrir arquivo Mermaid"><i data-lucide="file-up"></i></button><input id="file-input" type="file" accept=".mmd,.mermaid,.txt,text/plain" hidden></div>
          <div class="editor-body"><div class="gutter" id="gutter" aria-hidden="true"></div><textarea id="source" aria-label="Código Mermaid" spellcheck="false" autocomplete="off" autocapitalize="off" wrap="off"></textarea></div>
          <div class="editor-footer"><span><span class="footer-dot"></span> MERMAID SYNTAX</span><button id="copy" type="button" class="text-button"><i data-lucide="clipboard"></i> Copiar código</button></div>
        </section>
        <section class="preview-panel" aria-label="Prévia do diagrama">
          <div class="panel-header"><div class="panel-heading"><span class="panel-number">02</span><i data-lucide="image"></i><h2>Prévia</h2><span class="preview-state" id="status" role="status"><i data-lucide="check"></i> Pronto</span></div><div class="panel-controls"><button id="expand" type="button" class="icon-button expand-button" title="Mostrar editor" aria-label="Mostrar editor" hidden><i data-lucide="panel-left-open"></i></button><button id="render" type="button" class="icon-button" title="Renderizar diagrama" aria-label="Renderizar diagrama"><i data-lucide="play"></i></button></div></div>
          <div class="preview-toolbar"><span class="toolbar-label">VISUALIZAÇÃO</span><div class="zoom-controls"><button id="zoom-out" type="button" class="icon-button" title="Diminuir zoom" aria-label="Diminuir zoom"><i data-lucide="minus"></i></button><span id="zoom-value">100%</span><button id="zoom-in" type="button" class="icon-button" title="Aumentar zoom" aria-label="Aumentar zoom"><i data-lucide="plus"></i></button><span class="control-divider"></span><button id="zoom-reset" type="button" class="icon-button" title="Restaurar zoom" aria-label="Restaurar zoom"><i data-lucide="rotate-ccw"></i></button><button id="zoom-fit" type="button" class="icon-button" title="Ajustar à tela" aria-label="Ajustar à tela"><i data-lucide="maximize"></i></button></div></div>
          <div class="preview-viewport" id="viewport"><div class="diagram" id="diagram" aria-label="Diagrama renderizado"></div><div class="empty-state" id="empty" hidden><i data-lucide="file-code-2"></i><strong>Nada por aqui ainda</strong><span>Escreva um diagrama no editor para começar.</span></div><div class="error-state" id="error" role="alert" hidden><i data-lucide="alert-circle"></i><strong>Não foi possível renderizar</strong><span id="error-message"></span></div></div>
          <div class="preview-footer"><span>EXPORTAR DIAGRAMA</span><div class="export-actions"><button id="download-svg" type="button" class="text-button"><i data-lucide="download"></i> SVG</button><button id="download-png" type="button" class="primary-button"><i data-lucide="image"></i> Baixar PNG</button></div></div>
        </section>
      </div>
      <footer class="page-footer"><span>FEITO PARA PENSAR VISUALMENTE</span><span>Seus diagramas permanecem neste navegador.</span></footer>
    </main>
  `

  createIcons({ icons: { Activity, AlertCircle, Check, ChevronDown, Clipboard, Code2, Download, FileCode2, FileUp, Image, Maximize, Minus, PanelLeftClose, PanelLeftOpen, Play, Plus, RotateCcw } })

  const source = document.querySelector('#source')
  const diagram = document.querySelector('#diagram')
  const viewport = document.querySelector('#viewport')
  const error = document.querySelector('#error')
  const status = document.querySelector('#status')
  const gutter = document.querySelector('#gutter')
  let currentSvg = ''
  let zoom = 1
  let renderTimer
  let renderVersion = 0
  let renderQueue = Promise.resolve()

  mermaid.initialize({ startOnLoad: false, securityLevel: 'strict', htmlLabels: false, flowchart: { htmlLabels: false }, theme: 'base', themeVariables: { primaryColor: '#e4f2e6', primaryBorderColor: '#24795c', primaryTextColor: '#19362c', lineColor: '#35735f', secondaryColor: '#fce9df', tertiaryColor: '#f5f5ed', fontFamily: 'Trebuchet MS, sans-serif' } })

  function updateGutter() {
    gutter.textContent = Array.from({ length: source.value.split('\n').length }, (_, index) => index + 1).join('\n')
    gutter.scrollTop = source.scrollTop
  }

  function setStatus(label, type, icon) {
    status.className = `preview-state ${type}`
    status.innerHTML = `<i data-lucide="${icon}"></i> ${label}`
    createIcons({ icons: { Activity, AlertCircle, Check, ChevronDown, Clipboard, Code2, Download, FileCode2, FileUp, Image, Maximize, Minus, PanelLeftClose, PanelLeftOpen, Play, Plus, RotateCcw } })
  }

  function updateZoom() {
    diagram.style.transform = `scale(${zoom})`
    document.querySelector('#zoom-value').textContent = `${Math.round(zoom * 100)}%`
  }

  function queueRender() {
    clearTimeout(renderTimer)
    const version = ++renderVersion
    renderQueue = renderQueue.catch(() => {}).then(async () => {
      if (version !== renderVersion) return
      const text = source.value.trim()
      error.hidden = true
      if (!text) {
        currentSvg = ''
        diagram.replaceChildren()
        document.querySelector('#empty').hidden = false
        setStatus('Aguardando código', '', 'activity')
        return
      }
      document.querySelector('#empty').hidden = true
      setStatus('Renderizando', 'working', 'activity')
      try {
        const { svg } = await mermaid.render(`mermaid-${version}`, text)
        if (version !== renderVersion) return
        currentSvg = svg
        diagram.innerHTML = svg
        setStatus('Pronto', 'success', 'check')
      } catch (caught) {
        if (version !== renderVersion) return
        currentSvg = ''
        diagram.replaceChildren()
        error.hidden = false
        document.querySelector('#error-message').textContent = String(caught.message || caught).split('\n').slice(0, 3).join(' ')
        setStatus('Erro de sintaxe', 'invalid', 'alert-circle')
      }
    })
  }

  function download(blob, filename) {
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    link.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  source.value = initialSource
  updateGutter()
  queueRender()

  source.addEventListener('input', () => {
    updateGutter()
    document.querySelector('#examples').value = ''
    try { localStorage.setItem(storageKey, source.value) } catch {}
    clearTimeout(renderTimer)
    renderTimer = setTimeout(queueRender, 380)
  })
  source.addEventListener('scroll', updateGutter)
  source.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      source.setRangeText('  ', source.selectionStart, source.selectionEnd, 'end')
      source.dispatchEvent(new Event('input'))
    }
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault()
      queueRender()
    }
  })
  document.querySelector('#examples').addEventListener('change', (event) => {
    if (!examples[event.target.value]) return
    const selected = event.target.value
    source.value = examples[selected]
    source.dispatchEvent(new Event('input'))
    event.target.value = selected
  })
  document.querySelector('#open-file').addEventListener('click', () => document.querySelector('#file-input').click())
  document.querySelector('#file-input').addEventListener('change', async (event) => {
    const file = event.target.files[0]
    if (!file) return
    source.value = await file.text()
    source.dispatchEvent(new Event('input'))
    event.target.value = ''
  })
  document.querySelector('#render').addEventListener('click', queueRender)
  document.querySelector('#copy').addEventListener('click', async (event) => {
    try {
      await navigator.clipboard.writeText(source.value)
      event.currentTarget.lastChild.textContent = ' Copiado!'
      setTimeout(() => { event.currentTarget.lastChild.textContent = ' Copiar código' }, 1800)
    } catch {
      source.focus()
      source.select()
    }
  })
  document.querySelector('#zoom-in').addEventListener('click', () => { zoom = Math.min(3, zoom + 0.25); updateZoom() })
  document.querySelector('#zoom-out').addEventListener('click', () => { zoom = Math.max(0.25, zoom - 0.25); updateZoom() })
  document.querySelector('#zoom-reset').addEventListener('click', () => { zoom = 1; updateZoom() })
  document.querySelector('#zoom-fit').addEventListener('click', () => {
    const svg = diagram.querySelector('svg')
    if (!svg) return
    zoom = Math.min(1, (viewport.clientWidth - 72) / svg.getBoundingClientRect().width * zoom, (viewport.clientHeight - 72) / svg.getBoundingClientRect().height * zoom)
    zoom = Math.max(0.25, Math.round(zoom * 100) / 100)
    updateZoom()
  })
  document.querySelector('#collapse').addEventListener('click', () => {
    document.querySelector('.workbench').classList.add('editor-hidden')
    document.querySelector('#expand').hidden = false
  })
  document.querySelector('#expand').addEventListener('click', () => {
    document.querySelector('.workbench').classList.remove('editor-hidden')
    document.querySelector('#expand').hidden = true
  })
  document.querySelector('#download-svg').addEventListener('click', () => {
    if (currentSvg) download(new Blob([currentSvg], { type: 'image/svg+xml;charset=utf-8' }), 'diagrama.svg')
  })
  document.querySelector('#download-png').addEventListener('click', () => {
    if (!currentSvg) return
    const svg = diagram.querySelector('svg').cloneNode(true)
    const bounds = svg.viewBox.baseVal
    svg.setAttribute('width', bounds.width)
    svg.setAttribute('height', bounds.height)
    const image = new window.Image()
    const url = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(svg)], { type: 'image/svg+xml;charset=utf-8' }))
    image.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = image.width * 2
      canvas.height = image.height * 2
      const context = canvas.getContext('2d')
      context.fillStyle = '#ffffff'
      context.fillRect(0, 0, canvas.width, canvas.height)
      context.scale(2, 2)
      context.drawImage(image, 0, 0)
      try { canvas.toBlob((blob) => { if (blob) download(blob, 'diagrama.png') }, 'image/png') }
      catch { setStatus('Falha ao exportar PNG', 'invalid', 'alert-circle') }
      URL.revokeObjectURL(url)
    }
    image.onerror = () => { URL.revokeObjectURL(url); setStatus('Falha ao exportar PNG', 'invalid', 'alert-circle') }
    image.src = url
  })

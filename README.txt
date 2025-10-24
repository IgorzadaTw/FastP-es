======================================================
PROJETO: Prática 6 - Posicionamento CSS
======================================================

ALUNO: Igor Gabriel de Lima Fernandes
TURMA: TI03381C_Noite
DATA: 23/10/2025

----------------
1. DESCRIÇÃO DA ATIVIDADE
----------------

Nesta Prática 6, o foco foi aplicar as diferentes propriedades de "position" do CSS para criar um layout mais dinâmico no site "FastPães".
Foram implementados elementos fixos (header, botões flutuantes), elementos de sobreposição (badges) e elementos "grudentos" (cabeçalho da tabela).

Aproveitei a prática para fazer uma refatoração importante: todas as páginas (index, contato, pedidos, etc.) agora usam um único arquivo de estilo externo (`CSS/style.css`), garantindo um visual unificado em todo o site.

----------------
2. TÉCNICAS DE POSICIONAMENTO APLICADAS
----------------

### 1. Header Fixo (position: fixed)
* **O que eu fiz:** O cabeçalho (`#cabecalho-principal`) recebeu `position: fixed`.
* **Resultado:** Isso faz com que ele fique "pregado" no topo da tela (`top: 0`), mesmo quando o usuário rola a página.
* **Ajuste:** Para o conteúdo principal não ficar escondido *atrás* do header, foi aplicado um `padding-top` na classe `pagina-principal` (que está no `body` do index.html).
* **Camada (z-index):** Usei `z-index: 1000;` para garantir que o header sempre flutue por cima do conteúdo.

### 2. Emblema de Promoção (position: relative e absolute)
* **O que eu fiz:** Criei um `<span>` com a classe `.badge-promocao` dentro do card do pão francês.
* **Elemento Pai (`.galeria figure`):** Recebeu `position: relative;`. Isso transforma o card no "chefe" do emblema.
* **Elemento Filho (`.badge-promocao`):** Recebeu `position: absolute;`. Isso "solta" o emblema para flutuar e permite que eu o posicione com `top: 15px;` e `left: 15px;` (em relação ao card).
* **Camada (z-index):** Usei `z-index: 10;` para o emblema flutuar por cima da imagem do pão.

### 3. Botões Flutuantes (position: fixed)
* **O que eu fiz:** Criei dois links `<a>`, `#btn-whatsapp` e `#btn-voltar-topo`.
* **Resultado:** Eles usam `position: fixed;` para ficarem "flutuando" na tela, presos ao canto inferior (`bottom: 20px;`) da janela do navegador.
* **Camada (z-index):** Receberam `z-index: 1001;`, um valor mais alto que o do header, para que passem por cima de tudo.

### 4. Cabeçalho da Tabela (position: sticky)
* **O que eu fiz:** O cabeçalho da tabela do cardápio (`thead th`) recebeu `position: sticky;`.
* **Resultado:** O "sticky" faz o cabeçalho rolar normalmente com a página, mas quando ele bate no topo (ou no ponto que definimos), ele "gruda" ali.
* **Ajuste:** Usei `top: 150px;` (a altura aproximada do header fixo) para que ele grude exatamente *abaixo* do header, e não fique escondido atrás dele.

----------------
3. ESTRUTURA FINAL DOS ARQUIVOS
----------------

/
|-- index.html
|-- contato.html
|-- pedidos.html
|-- feedback.html
|-- cadastro.html
|-- README.txt (Este arquivo)
|-- CSS/
|   |-- style.css (Arquivo de estilo principal)
|-- images/
|-- videos/
|-- screenshots/
======================================================
PROJETO: Prática 4 - Evolução do Site FastPães
======================================================

AUTOR: Igor Gabriel de Lima Fernandes
TURMA: TI03381C_Noite
DATA: 13 de Outubro de 2025

----------------
1. DESCRIÇÃO GERAL
----------------

Este documento detalha a evolução do site "FastPães", um projeto desenvolvido ao longo de múltiplas práticas. O site começou como uma página única e informativa e evoluiu para um portal multi-página com funcionalidades interativas, como formulários para contato, pedidos e feedback, mantendo o foco em uma estrutura HTML semântica e acessível. A versão mais recente foca na estilização profissional com CSS externo.

----------------
2. EVOLUÇÃO DO PROJETO
----------------

### Fase 1: Estrutura e Mídia (Base da Prática 2)

A segunda fase do desenvolvimento enriqueceu a página com conteúdo visual e dados estruturados. As seguintes seções e funcionalidades foram adicionadas ao `index.html`:
- **Tabela de Cardápio**: Uma tabela semântica com 10 produtos, organizada por categorias, com descrição e preços.
- **Galeria de Imagens**: Uma seção com imagens da padaria (produtos e ambiente), utilizando a tag <img> com atributos de acessibilidade (alt).
- **Vídeo Institucional**: Incorporação de um vídeo local com a tag <video>, mostrando o processo de panificação.
- **Tabela de Horários**: A lista de horários foi convertida para uma tabela estruturada para melhor organização dos dados.

### Fase 2: Formulários e Navegação (Atualizações da Prática 3)

Esta foi a maior atualização do projeto, adicionando interatividade e transformando o site em um portal com múltiplas páginas. As principais diferenças são:
- **Navegação Multi-página**: O site deixou de ser uma página única. Foi adicionado um menu de navegação (`<nav>`) no `index.html` para conectar todas as novas seções.
- **Criação de Páginas de Formulário**: Foram desenvolvidas 4 novas páginas HTML, cada uma com um formulário específico:
  - `contato.html`: Para comunicação geral.
  - `pedidos.html`: Para encomendas de produtos personalizados.
  - `feedback.html`: Para clientes avaliarem os produtos e serviços.
  - `cadastro.html`: Para os clientes se inscreverem em uma newsletter.
- **Técnicas de Formulário**: Foram aplicadas as melhores práticas de HTML para formulários, como o uso de `<fieldset>` e `<legend>` para agrupar campos, `<label for="id">` para acessibilidade, e validação nativa do HTML5 (`required`, `pattern`, etc.).

### Fase 3: Estilização com CSS Externo (Atualizações da Prática 4)

Nesta fase, o foco foi a criação de uma identidade visual coesa e a melhoria da experiência do usuário através da estilização profissional.
- **CSS Externo**: Todo o código de estilo, que antes era interno em cada página, foi migrado para um único arquivo externo (`css/style.css`). Isso centraliza a estilização, facilita a manutenção e melhora o desempenho.
- **Identidade Visual**: Foi implementada uma paleta de cores profissional ("Tons Avermelhados") usando variáveis CSS para garantir consistência em todas as páginas.
- **Layout e Espaçamento**: O conteúdo do site agora está centralizado em um contêiner com largura máxima, melhorando a legibilidade em telas maiores. O espaçamento entre seções foi ajustado para criar um layout mais limpo e organizado.
- **Interatividade e UX**: Foram adicionados estados visuais (`:hover`, `:focus`) a links, botões e campos de formulário, com transições suaves para fornecer feedback visual ao usuário, tornando a navegação mais intuitiva e agradável.
- **Melhoria em Componentes**: Tabelas e formulários foram refinados com estilos que melhoram a clareza e a organização, como linhas de tabelas alternadas e destaque em campos de formulário ativos.

----------------
3. ESTRUTURA FINAL DE ARQUIVOS
----------------

A pasta do projeto foi reorganizada para incluir as novas páginas e mídias:

/
|-- index.html
|-- contato.html
|-- pedidos.html
|-- feedback.html
|-- cadastro.html
|-- README.txt              (Este arquivo de documentação)
|
|-- css/                    (Nova pasta para folhas de estilo)
|   |-- style.css           (Novo arquivo de estilo principal)
|
|-- images/                 (Pasta para armazenar todas as imagens)
|   |-- produtos/
|   |-- ambiente/
|
|-- videos/                 (Pasta para armazenar vídeos locais)
    |-- promocional.mp4

----------------
4. ACESSIBILIDADE
----------------

Foram implementadas práticas de acessibilidade em todas as fases:
- **Textos alternativos (alt)** descritivos foram adicionados a todas as imagens.
- As **tabelas** foram construídas com uma estrutura semântica (<thead>, <tbody>, <th>).
- **Formulários Acessíveis**: Todos os campos dos novos formulários foram associados a seus respectivos rótulos (`<label>`) usando os atributos `for` e `id`.
- **Contraste de Cores**: A paleta de cores foi escolhida visando um bom contraste entre o texto e o fundo, melhorando a legibilidade.
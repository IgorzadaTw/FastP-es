======================================================
PROJETO: Prática 3 - Evolução do Site FastPães
======================================================

AUTOR: Igor Gabriel de Lima Fernandes
TURMA: TI03381C_Noite
DATA: 08 de Outubro de 2025

----------------
1. DESCRIÇÃO GERAL
----------------

Este documento detalha a evolução do site "FastPães", um projeto desenvolvido ao longo de múltiplas práticas. O site começou como uma página única e informativa e evoluiu para um portal multi-página com funcionalidades interativas, como formulários para contato, pedidos e feedback, mantendo o foco em uma estrutura HTML semântica e acessível.

----------------
2. EVOLUÇÃO DO PROJETO
----------------

### Fase 1: Estrutura e Mídia (Base da Prática 2)

A segunda fase do desenvolvimento enriqueceu a página com conteúdo visual e dados estruturados. As seguintes seções e funcionalidades foram adicionadas ao `index.html`:
- **Tabela de Cardápio**: Uma tabela semântica com 10 produtos, organizada por categorias, com descrição e preços.
- **Galeria de Imagens**: Uma seção com imagens da padaria (produtos e ambiente), utilizando a tag <img> com atributos de acessibilidade (alt).
- **Vídeo Institucional**: Incorporação de um vídeo local com a tag <video>, mostrando o processo de panificação.
- **Tabela de Horários**: A lista de horários foi convertida para uma tabela estruturada para melhor organização dos dados.
- **Estilização**: Todo o estilo visual do site foi implementado via CSS Interno, contido em uma tag `<style>` no cabeçalho de cada página.

### Fase 2: Formulários e Navegação (Atualizações da Prática 3)

Esta foi a maior atualização do projeto, adicionando interatividade e transformando o site em um portal com múltiplas páginas. As principais diferenças são:
- **Navegação Multi-página**: O site deixou de ser uma página única. Foi adicionado um menu de navegação (`<nav>`) no `index.html` para conectar todas as novas seções.
- **Criação de Páginas de Formulário**: Foram desenvolvidas 4 novas páginas HTML, cada uma com um formulário específico:
  - `contato.html`: Para comunicação geral.
  - `pedidos.html`: Para encomendas de produtos personalizados.
  - `feedback.html`: Para clientes avaliarem os produtos e serviços.
  - `cadastro.html`: Para os clientes se inscreverem em uma newsletter.
- **Técnicas de Formulário**: Foram aplicadas as melhores práticas de HTML para formulários, como o uso de `<fieldset>` e `<legend>` para agrupar campos, `<label for="id">` para acessibilidade, e validação nativa do HTML5 (`required`, `pattern`, etc.).

----------------
3. ESTRUTURA FINAL DE ARQUIVOS
----------------

A pasta do projeto foi reorganizada para incluir as novas páginas e mídias:

/
|-- index.html              (Página principal, atualizada com o menu)
|-- contato.html            (Nova página de formulário)
|-- pedidos.html            (Nova página de formulário)
|-- feedback.html           (Nova página de formulário)
|-- cadastro.html           (Nova página de formulário)
|-- README.txt              (Este arquivo de documentação)
|
|-- images/                 (Pasta para armazenar todas as imagens)
|   |-- produtos/
|   |   |-- pao.png, etc.
|   |
|   |-- ambiente/
|       |-- motoboy.png, etc.
|
|-- videos/                 (Pasta para armazenar vídeos locais)
    |-- promocional.mp4     (Vídeo de apresentação da padaria)

----------------
4. ACESSIBILIDADE
----------------

Foram implementadas práticas de acessibilidade em todas as fases:
- **Textos alternativos (alt)** descritivos foram adicionados a todas as imagens, garantindo que usuários de leitores de tela compreendam o conteúdo visual.
- As **tabelas** foram construídas com uma estrutura semântica (<thead>, <tbody>, <th>) para facilitar a navegação por tecnologias assistivas.
- **Formulários Acessíveis**: Todos os campos dos novos formulários foram associados a seus respectivos rótulos (`<label>`) usando os atributos `for` e `id`, garantindo a navegação e o preenchimento corretos.
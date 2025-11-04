/* --- Prática 9: JavaScript - Padaria Doce Sabor --- */

document.addEventListener('DOMContentLoaded', () => {

    /* --- Listas de Objetos (Atividades 1, 4, 5) --- */
    
    const nomePadaria = "FastPães (Padaria Doce Sabor)";
    
    // Lista de produtos com nomes normais e obscuros
    const produtos = [
        { id: "PAO001", nome: "Pão Foguete (Francês)", preco: 0.90, nomeObscuro: "Pão Mofado (com Larvas)" },
        { id: "PAO002", nome: "Croissant Turbo", preco: 7.50, nomeObscuro: "Croissant de Sombra" },
        { id: "BOL001", nome: "Bolo Propulsor (Chocolate)", preco: 9.00, nomeObscuro: "Bolo Gosmento (Verde Pântano)" },
        { id: "DOC001", nome: "Donut Velocidade 5", preco: 5.50, nomeObscuro: "Rosquinha do Vórtice" },
        { id: "SAL001", nome: "Coxinha Sonic", preco: 7.00, nomeObscuro: "Coxinha Espectral" },
        { id: "SAL002", nome: "Pastel Jet", preco: 5.90, nomeObscuro: "Pastel Assombrado" },
        { id: "BEB001", nome: "Café Expresso Warp", preco: 5.00, nomeObscuro: "Café do Pesadelo" },
        { id: "BEB002", nome: "Suco Relâmpago (Laranja)", preco: 8.00, nomeObscuro: "Suco de Pavor (Mistério)" },
        { id: "LAN001", nome: "Pão com Manteiga 2x", preco: 6.00, nomeObscuro: "Pão com Gosma Radioativa" },
        { id: "SAL003", nome: "Mini Pizza Cronometrada", preco: 8.50, nomeObscuro: "Mini Pizza do Caos" },
        // Novos Itens (Hambúrgueres)
        { id: "BUR001", nome: "X-Foguete (Classic)", preco: 18.00, nomeObscuro: "X-Lamento (Clássico)" },
        { id: "BUR002", nome: "X-Infernal (Especial)", preco: 25.00, nomeObscuro: "Hambúrguer do Cérbero" },
        // Novos Itens (Bebidas e Frios)
        { id: "FRI001", nome: "Queijo Prato (100g)", preco: 8.00, nomeObscuro: "Queijo Gorgon (100g)" },
        { id: "FRI002", nome: "Mortadela (100g)", preco: 7.00, nomeObscuro: "Carne Curada Suspeita (100g)" },
        { id: "BEB003", nome: "Refrigerante (Lata)", preco: 6.00, nomeObscuro: "Poção Efervescente" },
        { id: "BEB004", nome: "Água sem Gás (500ml)", preco: 3.00, nomeObscuro: "Água do Rio Estige (500ml)" }
    ];
    
    /* --- Logs do Console (Atividades 1, 3, 4, 5) --- */
    console.log("--- ATIVIDADE 1: Variáveis (JS) ---");
    console.log("Nome da Padaria:", nomePadaria);
    console.log("Array de Produtos (para calculadora):", produtos);

    function formatarDinheiro(valor) { return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); }
    function criarMensagemBoasVindas(nomeCliente) {
        const agora = new Date(); const hora = agora.getHours(); let saudacao;
        if (hora < 12) { saudacao = 'Bom dia'; } else if (hora < 18) { saudacao = 'Boa tarde'; } else { saudacao = 'Boa noite'; }
        return `${saudacao}, ${nomeCliente}! Bem-vindo à ${nomePadaria}!`;
    }
    console.log("--- ATIVIDADE 3: Strings (JS) ---");
    console.log("Mensagem:", criarMensagemBoasVindas("Igor"));

    let carrinhoExemplo = [produtos[0], produtos[2]]; // Pão e Bolo
    console.log("--- ATIVIDADE 4: Arrays (JS) ---");
    console.log("Carrinho de compras (Exemplo):", carrinhoExemplo);

    const clienteIgor = { nome: "Igor Gabriel", telefone: "11912345678", pontosFidelidade: 42 };
    const pedidoExemplo = { id: 1, cliente: clienteIgor.nome, itens: carrinhoExemplo, status: "Em preparo" };
    console.log("--- ATIVIDADE 5: Objetos (JS) ---");
    console.log("Objeto Cliente (Exemplo):", clienteIgor);
    console.log("Objeto Pedido (Exemplo):", pedidoExemplo);


    /* --- ATIVIDADE 2: Calculadora --- */
    function calcularSubtotal(preco, quantidade) { return preco * quantidade; }
    function aplicarDesconto(subtotal, quantidade) { if (quantidade >= 10) { return subtotal * 0.90; } return subtotal; }
    function calcularTaxaEntrega(subtotalComDesconto) { if (subtotalComDesconto > 50.00) { return 0.00; } return 5.00; }
    function calcularTotal(subtotalComDesconto, taxa) { return subtotalComDesconto + taxa; }
    function calcularTroco(total, valorPago) { if (valorPago >= total) { return valorPago - total; } return -1; }
    function calcularPontos(total) { return Math.floor(total); }
    function converterMoeda(valorReal, moeda) {
        const taxaDolar = 5.40; const taxaEuro = 6.10;
        if (moeda === 'USD') { return (valorReal / taxaDolar).toFixed(2); }
        if (moeda === 'EUR') { return (valorReal / taxaEuro).toFixed(2); }
    }

    const form = document.getElementById('calculadora-form');
    const resultadoDiv = document.getElementById('resultado');
    const selectProduto = document.getElementById('produto');
    
    // Preenche o <select> dinamicamente e ADICIONA data-*
    if (selectProduto) {
        produtos.forEach(prod => {
            const option = document.createElement('option');
            option.value = prod.id;
            
            // Define os textos normal e obscuro
            const textoOriginal = `${prod.nome} (${formatarDinheiro(prod.preco)})`;
            const textoObscuro = `${prod.nomeObscuro} (${formatarDinheiro(prod.preco)})`;

            // Verifica se está no modo obscuro no momento em que a página carrega
            if (document.body.classList.contains('padaria-obscura')) {
                option.textContent = textoObscuro;
            } else {
                option.textContent = textoOriginal;
            }
            
            option.dataset.originalTexto = textoOriginal; // Guarda o original
            option.dataset.obscuroTexto = textoObscuro; // Guarda o obscuro
            
            selectProduto.appendChild(option);
        });
    }
    
    // Evento de submit do formulário
    if (form) {
        form.addEventListener('submit', (evento) => {
            evento.preventDefault(); 
            const produtoId = selectProduto.value;
            const quantidade = parseInt(document.getElementById('quantidade').value);
            const valorPago = parseFloat(document.getElementById('valor-pago').value);
            const produtoSelecionado = produtos.find(p => p.id === produtoId);
            
            if (!produtoSelecionado) { resultadoDiv.innerHTML = `<p style="color: red;">Produto não encontrado.</p>`; return; }
            if (quantidade <= 0) { resultadoDiv.innerHTML = `<p style="color: red;">A quantidade deve ser pelo menos 1.</p>`; return; }
            if (isNaN(valorPago) || valorPago <= 0) { resultadoDiv.innerHTML = `<p style="color: red;">Por favor, insira um valor pago válido.</p>`; return; }

            const subtotal = calcularSubtotal(produtoSelecionado.preco, quantidade);
            const subtotalComDesconto = aplicarDesconto(subtotal, quantidade);
            const taxaEntrega = calcularTaxaEntrega(subtotalComDesconto);
            const totalFinal = calcularTotal(subtotalComDesconto, taxaEntrega);
            const troco = calcularTroco(totalFinal, valorPago);
            const pontos = calcularPontos(totalFinal);
            const totalDolar = converterMoeda(totalFinal, 'USD');
            const totalEuro = converterMoeda(totalFinal, 'EUR');

            resultadoDiv.innerHTML = `
                <h3>Resumo do Pedido</h3>
                <p>Subtotal (${quantidade}x ${formatarDinheiro(produtoSelecionado.preco)}): ${formatarDinheiro(subtotal)}</p>
                <p>Desconto (10% acima de 10 itens): ${subtotal > subtotalComDesconto ? formatarDinheiro(subtotal - subtotalComDesconto) : 'R$ 0,00'}</p>
                <p>Taxa de Entrega (Grátis acima de R$ 50): ${formatarDinheiro(taxaEntrega)}</p>
                <strong><p>TOTAL A PAGAR: ${formatarDinheiro(totalFinal)}</p></strong>
                <hr>
                <p>Valor Pago: ${formatarDinheiro(valorPago)}</p>
                <p>Troco: ${troco >= 0 ? formatarDinheiro(troco) : '<span style="color: red;">VALOR PAGO INSUFICIENTE</span>'}</p>
                <p>Pontos Ganhos: ${pontos} 🎁</p>
                <hr>
                <p>Valor em Dólar: $${totalDolar} 💵</p>
                <p>Valor em Euro: €${totalEuro} 💶</p>
            `;
        });
    } else {
        console.log("Formulário de calculadora não encontrado nesta página.");
    }
});
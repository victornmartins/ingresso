//pegar o tipo de ingresseo
//pegar a quantidade
//verificar se o tipo tem saldo suficiente
//se sim, confirmar a compra
//registar o saldo de disponíveis

function comprar() {
    let qtd = parseInt(document.getElementById('qtd').value);
    if (qtd < 1) {
        alert('A quantidade informada é inválida.');
        return;
    }

    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let tipos = {
        pista: { 
            qtdDisponivel: parseInt(document.getElementById('qtd-pista').textContent), 
            elementId: 'qtd-pista', 
            nome: 'Pista' 
        },
        inferior: { 
            qtdDisponivel: parseInt(document.getElementById('qtd-inferior').textContent), 
            elementId: 'qtd-inferior', 
            nome: 'Cadeira Inferior' 
        },
        superior: { 
            qtdDisponivel: parseInt(document.getElementById('qtd-superior').textContent), 
            elementId: 'qtd-superior', 
            nome: 'Cadeira Superior' 
        }
    };

    if (tipos[tipoIngresso]) {
        comprarIngresso(qtd, tipos[tipoIngresso]);
    }
}

function comprarIngresso(qtd, tipo) {
    if (qtd > tipo.qtdDisponivel) {
        alert(`Quantidade indisponível para tipo ${tipo.nome}`);
    } else {
        tipo.qtdDisponivel -= qtd;
        document.getElementById(tipo.elementId).textContent = tipo.qtdDisponivel;
        alert('Compra realizada com sucesso!');
        document.getElementById('qtd').value = 0;
    }
}

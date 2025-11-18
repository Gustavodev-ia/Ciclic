async function calcular() {
    const nome = localStorage.getItem("nome");
    const expressao = localStorage.getItem("expressao");

    const body = {
        expr: expressao
    };

    
    const resposta = await fetch("https://api.mathjs.org/v4/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    const resultado = await resposta.json(); 

    document.getElementById("resultado").innerHTML = `
        <h2>Olá, ${nome}!</h2>
        <p>O valor acumulado será:</p>
        <h1>R$ ${Number(resultado.result).toFixed(2)}</h1>

        <a href="index.html">Nova simulação</a>
    `;
}

calcular();

document.getElementById("formSimulacao").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensalidade = Number(document.getElementById("mensalidade").value);
    const tempo = Number(document.getElementById("tempo").value);
    const taxa = Number(document.getElementById("taxa").value);

   

    const expressao = `${mensalidade} * (((1 + ${taxa}) ^ ${tempo} - 1) / ${taxa})`;

   
    localStorage.setItem("nome", nome);
    localStorage.setItem("expressao", expressao);

    
    window.location.href = "simulacao.html";
});

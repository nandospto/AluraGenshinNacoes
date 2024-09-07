function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    let highcasepesquisa = campoPesquisa;
    let resultado = "";
    let nome = "";
    let descricao = "";

    if (campoPesquisa == "") {

        section.innerHTML = "<a>Nada foi Encontrado</a>";
        return;

    }

    for (let nacao of nacoes) {
        campoPesquisa = campoPesquisa.toLowerCase();
        nome = nacao.nome.toLowerCase();
        descricao = nacao.descricao.toLowerCase();
        console.log(cores[highcasepesquisa]);

        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultado += `
            <div class="item-resultado">
            <h2 style="color: ${cores[nacao.elemento]}">${nacao.nome}</h2>
            <p class="paragrafo-justificado">
            ${nacao.descricao}
            </p>
            <a href="${nacao.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    section.innerHTML = resultado;
};
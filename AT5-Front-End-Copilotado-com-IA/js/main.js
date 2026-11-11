const botao = document.getElementById("botaoProjeto");

if (botao) {
    botao.addEventListener("click", function() {
        alert("Bem-vindo ao Mente em Alta Performance!");
        window.location.href = "sobre.html";
    });
}
const botaoTema = document.getElementById("botaoTema");

if (botaoTema) {
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {
        document.body.classList.add("tema-escuro");
    }

    botaoTema.addEventListener("click", function() {
        document.body.classList.toggle("tema-escuro");

        const temaAtual = document.body.classList.contains("tema-escuro")
            ? "escuro"
            : "rosa";

        localStorage.setItem("tema", temaAtual);
    });
}
const areaGrafico = document.getElementById("graficoAnsiedade");

if (areaGrafico) {
    new Chart(areaGrafico, {
        type: "bar",

        data: {
            labels: ["Geração Z", "Millennials"],
            datasets: [{
                label: "Estresse ou ansiedade (%)",
                data: [47, 39],
                backgroundColor: ["#991fd1", "#2d2fd1"],
                borderRadius: 8
            }]
        },

        plugins: [ChartDataLabels],

        options: {
            responsive: true,

            plugins: {
                datalabels: {
                    anchor: "end",
                    align: "top",
                    formatter: (valor) => valor + "%",
                    color: "#374151",
                    font: {
                        weight: "bold",
                        size: 14
                    }
                }
            },

            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}
const formularioEquilibrio = document.getElementById("formularioEquilibrio");

if (formularioEquilibrio) {
    formularioEquilibrio.addEventListener("submit", function(event) {

        event.preventDefault();

        const resposta1 = Number(formularioEquilibrio.pergunta1.value);
        const resposta2 = Number(formularioEquilibrio.pergunta2.value);
        const resposta3 = Number(formularioEquilibrio.pergunta3.value);

        const pontuacao = resposta1 + resposta2 + resposta3;

        const resultado = document.getElementById("resultadoEquilibrio");

        if (pontuacao <= 4) {
            resultado.innerHTML = `
                <h3>Seu equilíbrio está bem encaminhado! 🌷</h3>
                <p>Você demonstra hábitos positivos de organização e descanso.
                Continue respeitando seus limites.</p>
            `;
        } else if (pontuacao <= 6) {
            resultado.innerHTML = `
                <h3>Atenção à sua rotina! 💗</h3>
                <p>Alguns aspectos podem estar gerando sobrecarga.
                Procure reservar momentos para descansar e cuidar de você.</p>
            `;
        } else {
            resultado.innerHTML = `
                <h3>Hora de desacelerar! 🌸</h3>
                <p>Suas respostas indicam possíveis sinais de sobrecarga.
                Considere rever sua rotina e buscar apoio se precisar.</p>
            `;
        }
    });
}
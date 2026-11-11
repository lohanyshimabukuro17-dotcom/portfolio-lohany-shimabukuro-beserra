AUDITORIA DE USO DE INTELIGÊNCIA ARTIFICIAL

Auditoria 1 — Implementação de rótulos no gráfico

1. Prompt utilizado

Como exibir os valores percentuais acima das barras de um gráfico desenvolvido com Chart.js?

2. Resposta e código gerado pela IA

A IA sugeriu utilizar a biblioteca ChartDataLabels para apresentar os valores diretamente no gráfico.

Exemplo da configuração sugerida:

plugins: [ChartDataLabels],

options: {
    plugins: {
        datalabels: {
            anchor: "end",
            align: "top",
            formatter: (valor) => valor + "%",
            color: "#374151"
        }
    }
}

3. Diagnóstico crítico

Foi necessário verificar o posicionamento das configurações dentro da estrutura do Chart.js. A propriedade plugins que registra o ChartDataLabels deve ficar no nível principal da configuração do gráfico, e não dentro de datasets.

Também foi necessário incluir a biblioteca externa no HTML, após o Chart.js e antes do arquivo JavaScript principal.

4. Refatoração manual

O código foi revisado e organizado manualmente, colocando o registro do plugin no nível correto e mantendo as opções de formatação dentro de options.

5. Justificativa

A revisão foi importante para evitar erros de execução e garantir que os percentuais fossem apresentados corretamente acima das barras, melhorando a compreensão dos dados pelo visitante.

# AUDITORIA DE USO DE INTELIGÊNCIA ARTIFICIAL

## Auditoria 1 — Implementação de rótulos no gráfico

### 1. Prompt utilizado
Como exibir os valores percentuais acima das barras de um gráfico desenvolvido com Chart.js?

### 2. Resposta e código gerado pela IA
A IA sugeriu utilizar a biblioteca ChartDataLabels para apresentar os valores diretamente no gráfico.

Exemplo da configuração sugerida:

```javascript
plugins: [ChartDataLabels],

options: {
    plugins: {
        datalabels: {
            anchor: "end",
            align: "top",
            formatter: (valor) => valor + "%",
            color: "#374151"
        }
    }
}
```

### 3. Diagnóstico crítico
Foi necessário verificar o posicionamento das configurações dentro da estrutura do Chart.js. A propriedade `plugins` que registra o ChartDataLabels deve ficar no nível principal da configuração do gráfico, e não dentro de `datasets`.

Também foi necessário incluir a biblioteca externa no HTML, após o Chart.js e antes do arquivo JavaScript principal.

### 4. Refatoração manual
O código foi revisado e organizado manualmente, colocando o registro do plugin no nível correto e mantendo as opções de formatação dentro de `options`.

### 5. Justificativa
A revisão foi importante para evitar erros de execução e garantir que os percentuais fossem apresentados corretamente acima das barras, melhorando a compreensão dos dados pelo visitante.

---

## Auditoria 2 — Implementação do tema claro e escuro

### 1. Prompt utilizado
Como implementar um botão para alternar entre tema claro e escuro, salvando a preferência do usuário no navegador?

### 2. Resposta e código gerado pela IA
Foi proposta a utilização de JavaScript, `classList.toggle()` e `localStorage` para controlar a alternância de temas.

Exemplo da implementação:

```javascript
document.body.classList.toggle("tema-escuro");

const temaAtual = document.body.classList.contains("tema-escuro")
    ? "escuro"
    : "rosa";

localStorage.setItem("tema", temaAtual);
```

### 3. Diagnóstico crítico
Durante os testes, foi identificado que o código precisava verificar a existência do botão antes de adicionar o evento de clique, pois nem todas as páginas possuem o botão de navegação inicial.

Também foi necessário recuperar a preferência salva quando uma página era carregada.

### 4. Refatoração manual
Foi adicionada uma condição `if (botaoTema)` para evitar erros nas páginas sem o botão. Também foi implementada a leitura do valor salvo no `localStorage` para manter o tema escolhido pelo visitante.

### 5. Justificativa
A revisão garantiu que a alternância de temas funcionasse nas diferentes páginas e que a preferência do visitante fosse preservada durante a navegação.

# AUDITORIA DE USO DE INTELIGÊNCIA ARTIFICIAL

## Auditoria 1 — Implementação de rótulos no gráfico

### 1. Prompt utilizado
Como exibir os valores percentuais acima das barras de um gráfico desenvolvido com Chart.js?

### 2. Resposta e código gerado pela IA
A IA sugeriu utilizar a biblioteca ChartDataLabels para apresentar os valores diretamente no gráfico.

```javascript
plugins: [ChartDataLabels],

options: {
    plugins: {
        datalabels: {
            anchor: "end",
            align: "top",
            formatter: (valor) => valor + "%",
            color: "#374151"
        }
    }
}
```

### 3. Diagnóstico crítico
Foi necessário verificar o posicionamento das configurações dentro da estrutura do Chart.js. A propriedade `plugins` que registra o ChartDataLabels deve ficar no nível principal da configuração do gráfico, e não dentro de `datasets`.

Também foi necessário incluir a biblioteca externa no HTML, após o Chart.js e antes do arquivo JavaScript principal.

### 4. Refatoração manual
O código foi revisado e organizado manualmente, colocando o registro do plugin no nível correto e mantendo as opções de formatação dentro de `options`.

### 5. Justificativa
A revisão foi importante para evitar erros de execução e garantir que os percentuais fossem apresentados corretamente acima das barras, melhorando a compreensão dos dados pelo visitante.

---

## Auditoria 2 — Implementação do tema claro e escuro

### 1. Prompt utilizado
Como implementar um botão para alternar entre tema claro e escuro, salvando a preferência do usuário no navegador?

### 2. Resposta e código gerado pela IA
Foi proposta a utilização de JavaScript, `classList.toggle()` e `localStorage` para controlar a alternância de temas.

```javascript
document.body.classList.toggle("tema-escuro");

const temaAtual = document.body.classList.contains("tema-escuro")
    ? "escuro"
    : "rosa";

localStorage.setItem("tema", temaAtual);
```

### 3. Diagnóstico crítico
Durante os testes, foi identificado que o código precisava verificar a existência do botão antes de adicionar o evento de clique, pois nem todas as páginas possuem o botão de navegação inicial.

Também foi necessário recuperar a preferência salva quando uma página era carregada.

### 4. Refatoração manual
Foi adicionada uma condição `if (botaoTema)` para evitar erros nas páginas sem o botão. Também foi implementada a leitura do valor salvo no `localStorage` para manter o tema escolhido pelo visitante.

### 5. Justificativa
A revisão garantiu que a alternância de temas funcionasse nas diferentes páginas e que a preferência do visitante fosse preservada durante a navegação.

---

## Auditoria 3 — Microaplicação interativa

### 1. Prompt utilizado
Como desenvolver uma microaplicação em JavaScript que permita ao visitante responder perguntas sobre sua rotina e receber um resultado baseado na soma das respostas?

### 2. Resposta e código gerado pela IA
A IA sugeriu utilizar um formulário HTML com opções de resposta, valores numéricos e JavaScript para calcular a pontuação.

Exemplo da lógica utilizada:

```javascript
const pontuacao = resposta1 + resposta2 + resposta3;

if (pontuacao <= 4) {
    // Apresenta o primeiro resultado
} else if (pontuacao <= 6) {
    // Apresenta o segundo resultado
} else {
    // Apresenta o terceiro resultado
}
```

### 3. Diagnóstico crítico
Foi necessário verificar se cada pergunta possuía um nome diferente nos campos de resposta, evitando misturar as alternativas.

Também foi necessário utilizar `event.preventDefault()` para impedir que a página fosse recarregada durante o envio do formulário.

### 4. Refatoração manual
O código foi organizado com condições `if` e `else if`, leitura das respostas pelo formulário e apresentação dos resultados no elemento HTML identificado por `resultadoEquilibrio`.

Também foram realizados testes com diferentes combinações de respostas para verificar os três resultados possíveis.

### 5. Justificativa
A revisão permitiu desenvolver uma ferramenta interativa funcional, com perguntas organizadas e resultados apresentados de acordo com as respostas do visitante.

A ferramenta possui finalidade educativa e não representa um diagnóstico psicológico.
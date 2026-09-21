# Análise Custo-Consequência (ACC)

A ACC apresenta os custos ao lado de uma **tabela desagregada de todos os resultados** — clínicos, operacionais, experienciais — sem os colapsar num único rácio ou pontuação. O decisor pondera os compromissos explicitamente.

## Porque é importante

A ACC é o **formato económico preferido do NICE para a maioria das tecnologias de saúde digital** ao abrigo do Evidence Standards Framework. Os produtos digitais produzem efeitos heterogéneos (tempo poupado, satisfação, redução de faltas, pequenos ganhos clínicos) que resistem a uma agregação honesta num único número QALY. Em vez de forçar um composto frágil, a ACC mostra o livro razão completo. Para a maioria dos casos de negócio de software, é simultaneamente o formato mais honesto e o mais persuasivo, porque cada parte interessada consegue encontrar a sua própria linha relevante para a decisão.

## O cálculo

Não há deliberadamente nenhuma fórmula de agregação. O resultado é uma tabela:

```
                          Intervenção    Comparador   Diferença
Custos (anuais)            £X             £Y           ΔC
Resultado 1 (unidades naturais) …          …            Δ1
Resultado 2                 …              …            Δ2
Resultados qualitativos      descritos, não pontuados
```

Cada linha mantém as suas próprias unidades. Regras: cada consequência pré-especificada (sem escolha seletiva após os resultados); a mesma [perspetiva](../perspetiva-de-análise/) e [horizonte](../horizonte-temporal/) ao longo de tudo; incerteza por linha.

## Exemplo resolvido

Plataforma de avaliação pré-operatória digital vs processo por telefone, por ano, um hospital:

```
                              Digital      Telefone    Diferença
Custo de funcionamento        £180.000     £95.000     +£85.000
Horas de enfermagem em avaliações 6.200    11.800      −5.600 horas
Cancelamentos de cirurgia no dia  92       174         −82
Satisfação do doente (CSAT)   4,5/5        3,9/5       +0,6
Avaliações perdidas/incompletas 1,2%       4,8%        −3,6 pp
```

Nenhuma pontuação única — mas a decisão é fácil de raciocinar: £85.000 compram 5.600 horas de enfermagem (≈ £15/hora, muito abaixo de qualquer custo de pessoal), 82 cancelamentos evitados (cada um a desperdiçar uma vaga de bloco operatório no valor de ~£1.200), e melhor experiência. Um comité também consegue ver exatamente o que *não* está a obter: nenhum efeito de QALY ou mortalidade alegado.

## Ligação à engenharia de software

A ACC é a versão formal do painel equilibrado que uma boa proposta de plataforma já usa: custo ao lado de métricas DORA, pontuações DevEx, contagens de incidentes — não agregadas. A disciplina de economia da saúde a acrescentar: **pré-especifique as linhas** (decida o que conta antes do piloto, para não poder silenciosamente descartar a métrica que piorou), e **mostre linhas desfavoráveis** — uma ACC apenas com boas notícias é marketing. Use a ACC quando não existe um composto defensável, o que para ferramentas de programadores é quase sempre.

## Armadilhas

- **Consequências escolhidas seletivamente** — a integridade do formato depende da pré-especificação.
- **Agregação contrabandeada**: codificação por cor ou "pontuações gerais" reintroduzem os pesos arbitrários que a ACC existe para evitar.
- **Paralisia de decisão**: a ACC precisa de um decisor disposto a ponderar compromissos; combine-a com uma recomendação e o raciocínio.

## Fontes

- NICE Evidence Standards Framework for digital health technologies (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>

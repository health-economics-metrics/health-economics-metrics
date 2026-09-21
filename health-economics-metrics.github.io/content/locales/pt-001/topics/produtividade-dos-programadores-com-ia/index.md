# Produtividade dos Programadores com IA

Métricas do que a assistência de IA à codificação realmente faz ao resultado de engenharia: taxas de aceitação de sugestões, ganhos de velocidade em estudos controlados, taxa de PRs e retenção de código. A base de evidência é genuinamente contraditória — o que a torna um estudo de caso perfeito na distinção eficácia-vs-efetividade que a economia da saúde foi criada para gerir.

## Porque é importante

Os dois estudos controlados mais citados apontam em direções opostas:

- **Peng et al. 2023 (RCT do GitHub Copilot)**: os programadores concluíram uma tarefa de servidor HTTP de raiz **55,8% mais rápido** com o Copilot (1h11m vs 2h41m, n=95).
- **RCT da METR 2025**: programadores experientes de código aberto a trabalhar nos *seus próprios repositórios maduros* foram **19% mais lentos** com ferramentas de IA do início de 2025 (16 programadores, 246 tarefas) — enquanto *acreditavam* estar 20% mais rápidos.

Ambos são bons estudos. A contradição é a descoberta: a eficácia em tarefas de raiz não se transfere para a efetividade em código-base maduro, e o benefício *percebido* não pode substituir o benefício medido. A medicina tem nomes para ambos os fenómenos (ensaios explicativos vs pragmáticos; o problema do placebo) e mecanismos para os gerir.

## O cálculo

```
Taxa de aceitação  = sugestões aceites / sugestões apresentadas
                   (telemetria GitHub ~30% em média; varia: SQL 45%, Python 35%, JS 28%)
Taxa de retenção   = código de IA que sobrevive até ao merge / código de IA aceite (~88% reportado)
Ganho de velocidade = (t_controlo − t_IA) / t_controlo  (apenas de comparação controlada)
Diferencial de rendimento = Δ PRs integrados/programador/semana (dados de campo GitHub/Accenture: +8,7%)

Modelo de valor = programadores × tempo poupado × taxa carregada × fator de utilização
                  — cada termo precisa de medição local; ver o gráfico de tornado em
                  sensitivity-analysis.md, onde o tempo poupado domina todos os
                  outros parâmetros combinados
```

## Exemplo resolvido

Uma organização de 500 programadores testa um assistente com um controlo adequado (equipas emparelhadas, 3 meses, métricas pré-registadas):

```
Resultado do piloto: tempo de ciclo de PR −18%; PRs integrados +6%; CFR inalterada;
              tempo poupado autorreportado 45 min/dia; medido ao nível da tarefa ≈ 15 min/dia

Avalie o número MEDIDO: 500 × 0,25h × 220d × £60 × 0,6 de utilização
                          ≈ £990.000/ano de capacidade (não libertador de tesouraria)
Custo: 500 × £39/mês × 12 ≈ £234.000/ano
Rácio de capacidade líquido ≈ 4:1 — financiável, a um terço da alegação autorreportada.
```

A diferença de 3× entre o percebido e o medido é a descoberta da METR a operar na realidade; orçamentar com base no autorrelato teria triplicado a linha de benefício.

## Ligação à engenharia de software

As importações da economia da saúde para quem avalia ferramentas de IA: execute **ensaios pragmáticos** (o seu código-base, os seus engenheiros, tickets reais — não tarefas de demonstração do fornecedor); trate a **taxa de aceitação como um proxy, não um resultado** (é o [VPP](../avaliação-de-ia-clínica/) das sugestões do ponto de vista do programador — aceitação alta com retenção baixa é sobrediagnóstico); combine cada ganho de rendimento com uma **verificação de estabilidade** (DORA 2025: a IA eleva o rendimento, prejudica a estabilidade — uma intervenção com efeitos secundários precisa de análise de benefício líquido, conforme [métricas DORA](../métricas-dora/)); e classifique o benefício honestamente como capacidade ([libertador de tesouraria vs não libertador](../poupanças-libertadoras-de-tesouraria-vs-não-libertadoras/)).

## Armadilhas

- **Transplante de estudos de fornecedor**: números de RCT em código de raiz aplicados a trabalho em código-base legado — exatamente o erro que o estudo METR expôs.
- **Autorrelato como medição**: a lacuna de perceção de 20 pontos percentuais é o maior viés conhecido nesta literatura.
- **Inflação de atividade**: mais PRs e mais código são Atividade, não resultados ([SPACE](../space-e-devex/)); combine com retrabalho e CFR.
- **Ignorar a curva de aprendizagem**: medições na segunda semana capturam efeitos de novidade em qualquer direção; meça em estado estável ([horizonte temporal](../horizonte-temporal/)).

## Fontes

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA 2025 report. <https://dora.dev/dora-report-2025/>

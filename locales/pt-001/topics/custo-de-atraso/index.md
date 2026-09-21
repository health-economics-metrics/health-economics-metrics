# Custo de Atraso (CoD)

O Custo de Atraso é o valor económico perdido por unidade de tempo em que uma funcionalidade, produto ou serviço *não* é entregue. É a ponte mais forte entre as métricas de entrega de software e a economia da saúde: converte "entregámos tarde" em moeda — ou em QALYs.

## Porque é importante

A regra de Reinertsen: "Se só quantificar uma coisa, quantifique o Custo de Atraso." A maioria das organizações sabe quanto custa um projeto mas não quanto custa um mês de atraso, pelo que otimizam orçamentos enquanto hemorragiam valor-tempo. Para o software de saúde, as apostas são literais: cada semana que uma melhoria de via é atrasada, os doentes esperam mais tempo em piores estados de saúde. O CoD é o quadro matemático mais forte para apresentar às partes interessadas do NHS porque avalia a *ausência* do seu software.

## O cálculo

```
CoD = benefício por unidade de tempo perdido enquanto não entregue   (£/semana ou QALYs/semana)

Perda total de atraso = CoD × duração do atraso

Para priorização, ver wsjf-and-cd3.md: CD3 = CoD / duração.
```

Para software clínico, expresse tanto em saúde como em dinheiro:

```
CoD_saúde = doentes afetados por semana × ganho de QALY por doente
CoD_dinheiro  = CoD_saúde × λ (limiar de disposição para pagar, £20mil–30mil/QALY)
             + poupanças operacionais por semana perdidas
```

## Exemplo resolvido

**Operacional**: o software poupa £200 por doente numa via; um hospital processa 50 desses doentes/semana.

```
CoD = 200 × 50 = £10.000/semana
Um atraso de aquisição de 10 semanas custa 200 × 50 × 10 = £100.000 em desperdício evitável.
```

**Clínico**: uma melhoria de triagem remove 5 semanas de espera (utilidade 0,68 → 0,80 mais cedo) para 100 doentes/semana:

```
Ganho de QALY por doente = (5/52) × 0,12 ≈ 0,0115
CoD_saúde = 100 × 0,0115 = 1,15 QALYs/semana
CoD_dinheiro  = 1,15 × £20.000 ≈ £23.000/semana de valor em saúde
```

Um atraso de implementação de 6 meses "custa" ~30 QALYs — o argumento que reformula um deslizamento de arranque de TI como um evento clínico. (Referência de escala: a famosa análise Maersk da Black Swan Farming encontrou funcionalidades individuais com CoD ≈ $200mil/semana que tinham esperado 38 semanas.)

## Ligação à engenharia de software

O CoD é a métrica que torna o [tempo de espera DORA](../métricas-dora/) e a [eficiência de fluxo](../métricas-de-fluxo/) financeiramente legíveis: tempo de espera × CoD = dinheiro (ou saúde) queimado em filas. Usos:

- **Priorização**: classifique o trabalho por CoD/duração ([WSJF/CD3](../wsjf-e-cd3/)) em vez da parte interessada mais ruidosa.
- **Economia de processo**: um ritmo de lançamento de 2 semanas tem um custo de atraso esperado de ~1 semana × CoD por funcionalidade versus entrega contínua — avalie o lote.
- **Aquisição**: os ciclos de aquisição do NHS de 6–18 meses têm um CoD; mostrá-lo muda as conversas de urgência (ver [análise de impacto orçamental](../análise-de-impacto-orçamental/) para a contrapartida de sustentabilidade financeira).

## Armadilhas

- **Assumir CoD linear**: alguns trabalhos têm valor em forma de prazo (datas regulamentares — CoD infinito após a data, zero antes) ou valor decrescente (janelas de pioneirismo). Classifique o perfil de urgência antes de multiplicar.
- **CoD em resultados que ninguém quer**: o atraso só custa se a coisa tiver valor; lixo atrasado é gratuito.
- **Dupla contagem de atraso e desconto**: o [desconto](../desconto-e-preferência-temporal/) já avalia o tempo em horizontes plurianuais; o CoD é a versão operacional dentro do horizonte. Use o CoD para semanas/meses, o deslocamento de VAL para anos.

## Fontes

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Cost of delay overview. <https://en.wikipedia.org/wiki/Cost_of_delay>

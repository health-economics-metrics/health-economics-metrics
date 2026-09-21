# Ano de Vida Ajustado pela Qualidade (QALY)

Um QALY é um ano de vida vivido em saúde perfeita. Combina *quanto tempo* as pessoas vivem com *quão bem* vivem, pelo que um ano em má saúde conta como menos de um QALY — tornando intervenções de saúde totalmente diferentes comparáveis numa única escala.

## Porque é importante

O QALY é a moeda comum da avaliação de tecnologia de saúde. O NICE (Inglaterra) avalia os ganhos de saúde em **£20.000–£30.000 por QALY**: uma intervenção que compra QALYs mais barato do que esse limiar é normalmente recomendada; uma que os compra mais caro é normalmente rejeitada. Este único número é como um serviço nacional de saúde compara um medicamento oncológico, uma substituição da anca, e uma aplicação de triagem no mesmo eixo. Se o seu software pode alegar QALYs de forma credível — prevenindo a deterioração, acelerando o tratamento, ou melhorando a segurança — pode precificar o seu valor em saúde na mesma moeda que a própria medicina.

## O cálculo

```
QALYs = Σ_i (duração_i × utilidade_i)

duração_i = anos passados no estado de saúde i
utilidade_i  = peso de qualidade do estado i, ancorado a 1 = saúde perfeita, 0 = morto
             (valores negativos permitidos para estados piores do que a morte)
```

Os pesos de utilidade vêm de instrumentos validados, mais comummente o [EQ-5D](../eq-5d/). O *ganho* de QALY de uma intervenção é a diferença entre os fluxos de QALY com e sem ela, [descontado](../desconto-e-preferência-temporal/) a 3,5%/ano no caso de referência do NICE.

## Exemplo resolvido

Um doente espera por tratamento cardíaco num estado com utilidade 0,6. O tratamento restaura-o para utilidade 0,85.

- **Tratado agora**: 1 ano a 0,85 = 0,85 QALYs este ano.
- **Tratado após um atraso de 6 meses**: 0,5 × 0,6 + 0,5 × 0,85 = 0,725 QALYs.
- **Perda de QALY por doente devido ao atraso**: 0,85 − 0,725 = **0,125 QALYs**.

Monetizado ao limiar do NICE: 0,125 × £20.000–£30.000 = **£2.500–£3.750 de valor em saúde perdido por doente por atraso de 6 meses**. Se o software que acelera a via remove esse atraso para 400 doentes/ano, o valor em saúde são 50 QALYs ≈ **£1,0–£1,5 milhão/ano** — antes de contar quaisquer poupanças operacionais.

## Ligação à engenharia de software

- **Vias mais rápidas = QALYs mais cedo.** Qualquer coisa que encurte a [referenciação para tratamento](../referenciação-para-tratamento/) converte a desutilidade do tempo de espera em ganho de saúde, avaliado como acima.
- **Segurança = QALYs preservados.** Os erros de medicação prevenidos e os diagnósticos perdidos são perdas de QALY evitadas.
- **O QALY é também um modelo de design de métricas**: um composto de quantidade × qualidade, com pesos de qualidade obtidos de um instrumento padronizado. Um "ano-engenheiro ajustado pela qualidade" (tempo × peso de inquérito DevEx) é a mesma construção — ver [SPACE e DevEx](../space-e-devex/).
- Para transformar QALYs em dinheiro para um caso de negócio, use o [benefício monetário líquido](../benefício-monetário-líquido/); para os transformar numa decisão, use os [limiares de disposição para pagar](../limiares-de-disposição-para-pagar/).

## Armadilhas

- **Inventar pesos de utilidade.** Os pesos têm de vir de instrumentos validados (EQ-5D) e conjuntos de valores publicados, não de intuição.
- **Alegar QALYs sem uma via causal.** "A nossa aplicação melhora o bem-estar" não é uma alegação de QALY; "remove X semanas de espera num estado com utilidade 0,6" é.
- **Dupla contagem**: alegar tanto o ganho de QALY como as poupanças de custo da mesma deterioração evitada requer cuidado para que sejam genuinamente separadas.
- **Pontos cegos de equidade**: os QALYs avaliam um ano de extensão de vida pela utilidade basal, o que pode desfavorecer pessoas com incapacidades — a razão pela qual o ICER (EUA) também reporta o evLYG (ver [anos de vida ganhos](../anos-de-vida-ganhos/)).

## Fontes

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>

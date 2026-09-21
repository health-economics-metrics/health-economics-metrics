# Limiares de Disposição para Pagar

Um limiar de disposição para pagar (WTP) é o máximo que um decisor pagará por unidade de ganho de saúde — a linha que transforma um [ICER](../rácio-de-custo-efetividade-incremental/) numa decisão de adotar/rejeitar.

## Porque é importante

O limiar é onde a economia da saúde deixa de ser medição e se torna política. Todo o sistema nacional tem um, explícito ou implícito, e conhecer o número local diz-lhe exatamente como precificar uma alegação de valor em saúde:

| Organismo | Limiar (conforme investigado, 2024–2025) |
|---|---|
| NICE (Inglaterra) | £20.000–£30.000 por QALY; limiar de decisão médio empírico ≈ £24.400 (2022–24); os modificadores de severidade elevam o teto efetivo para ~£36mil–£51mil; tecnologias altamente especializadas até £100mil+ |
| ICER (EUA, não-governamental) | referenciais de preço $100.000–$150.000 por QALY/evLYG; reporta a gama $50mil–$200mil |
| Canadá (CADTH / CDA-AMC) | ≈ CAD$50.000 por QALY como limiar de trabalho |
| OMS-CHOICE (histórico, global) | 1–3× o PIB per capita por DALY evitado (agora desaconselhado como demasiado grosseiro) |
| Lado da oferta empírico do Reino Unido (Claxton et al.) | ≈ £13.000 por QALY realmente deslocado na margem do NHS |

## O cálculo

O limiar λ entra em toda a regra de decisão:

```
Adote se ICER = ΔC/ΔE < λ
Equivalentemente: adote se BML = λ×ΔE − ΔC > 0
```

Duas teorias sobre o que λ *é*:

- **Lado da procura**: o que a sociedade está disposta a pagar pela saúde (um julgamento de valor).
- **Lado da oferta**: a saúde que o orçamento atualmente produz na margem (uma quantidade empírica — os ~£13mil/QALY de Claxton). Se o λ usado para decisões excede a taxa do lado da oferta, aprovar nova tecnologia desloca mais saúde do que acrescenta.

## Exemplo resolvido

A sua terapêutica digital entrega 0,05 QALYs por doente tratado a um custo líquido (preço menos compensações) de £800.

```
ICER = 800 / 0,05 = £16.000 por QALY
```

- Inglaterra: abaixo de £20mil → financiável. Preço máximo defensável: a λ = £20.000, preço_máx = 0,05 × 20.000 + compensações = £1.000 + compensações.
- Enquadramento comercial dos EUA a $150mil/QALY: o preço baseado em valor é muito mais alto.
- Um limiar de país de PIB-per-capita de $4.000: o mesmo produto tem de custar menos de ~$200 líquidos.

Mesmo produto, três mercados, três preços — o limiar *é* o modelo de precificação. Isto é precificação baseada em valor, executada ao contrário a partir de λ.

## Ligação à engenharia de software

Toda a organização de engenharia tem um λ implícito: o obstáculo ao qual financia ferramentas por hora-engenheiro poupada. Torná-lo explícito — "financiamos qualquer coisa abaixo de £40 por hora-engenheiro credível poupada" — permite comparação estilo tabela-de-liga de investimentos em plataforma, exatamente como as tabelas de liga de custo-por-QALY classificam o gasto em saúde. A lição do lado da oferta também se transfere: o seu verdadeiro λ interno é o que o seu atraso *atual* produz na margem, não o que a liderança diz que o tempo vale.

## Armadilhas

- **Compras de limiar** entre jurisdições ou citar o teto de HST para um produto comum.
- **Tratar λ como um piso de preço**: passar o limiar é necessário, não suficiente — o [impacto orçamental](../análise-de-impacto-orçamental/) ainda pode afundar um produto acessível por unidade.
- **Ignorar que os limiares se movem**: os modificadores de severidade do NICE (2022) e as revisões periódicas mudam o λ efetivo; date as suas alegações.

## Fontes

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>

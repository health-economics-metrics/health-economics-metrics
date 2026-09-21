# Benefício Monetário Líquido (BML)

O BML converte um resultado de custo-efetividade num único valor monetário: o ganho de saúde precificado ao limiar de disposição para pagar, menos o custo. O seu gémeo, Benefício de Saúde Líquido (BSL), expressa a mesma regra em unidades de saúde.

## Porque é importante

Os rácios ([ICERs](../rácio-de-custo-efetividade-incremental/)) são incómodos: explodem perto de efeito zero, não podem ser calculados em média através de extrações de incerteza, e não conseguem classificar três ou mais opções de forma limpa. O BML resolve tudo isso — é linear, pelo que se pode classificar opções, calcular médias de extrações de Monte Carlo, e decompor contribuições. É também a forma de matemática de economia da saúde que todo o engenheiro já conhece: *valor menos custo*.

## O cálculo

```
BML = (ΔE × λ) − ΔC
BSL = ΔE − (ΔC / λ)

ΔE = efeito incremental (ex.: QALYs)
ΔC = custo incremental
λ  = limiar de disposição para pagar (ver willingness-to-pay-thresholds.md)

Regra de decisão: adote se BML > 0 (equivalentemente BSL > 0).
Entre alternativas: escolha o BML mais alto.
```

BML > 0 ⇔ ICER < λ (quando ΔE > 0), pelo que as duas regras concordam — o BML apenas se comporta melhor.

## Exemplo resolvido

Três opções para um serviço de diabetes, por 1.000 doentes, λ = £20.000/QALY:

```
Opção            ΔC          ΔE (QALYs)   BML = 20.000×ΔE − ΔC
Aplicação + coaching £400.000    30           600.000 − 400.000 = £200.000
Só aplicação     £150.000    12           240.000 − 150.000 = £90.000
Clínicas extra   £700.000    32           640.000 − 700.000 = −£60.000
```

As clínicas extra ganham mais QALYs mas destroem valor a este limiar (BML < 0). A aplicação + coaching vence. Note que o BML permite *classificar as três de uma vez* — os ICERs por pares precisariam do procedimento de fronteira em [dominância e a fronteira de eficiência](../dominância-e-a-fronteira-de-eficiência/), e chegariam à mesma resposta.

Vista de BSL do vencedor: 30 − 400.000/20.000 = 30 − 20 = **10 QALYs líquidos** — a saúde ganha para além do que o mesmo dinheiro teria produzido noutro lugar.

## Ligação à engenharia de software

`(horas poupadas × taxa horária carregada) − custo da ferramenta` — o caso de negócio de ferramentas do dia-a-dia — é literalmente um cálculo de BML com λ = custo de engenheiro carregado. Duas melhorias que a economia da saúde acrescenta:

- **Torne λ uma variável, não uma constante.** Trace o BML face a λ ("valor de uma hora-engenheiro") e mostre onde a decisão se inverte; diferentes partes interessadas podem então aplicar a sua própria avaliação sem refazer a sua matemática.
- **Pensamento BSL**: "esta plataforma poupa 5.000 horas-engenheiro mas consome orçamento que teria comprado 3.000 horas-engenheiro de capacidade de contratante — líquido de 2.000 horas" força a comparação de custo de oportunidade em unidades de capacidade. Ver [custo de oportunidade](../custo-de-oportunidade/).

## Armadilhas

- **Esconder o limiar**: um BML não significa nada sem declarar λ; reporte o BML a £20mil e £30mil, ou trace a curva.
- **Usar o BML para lavar efeitos minúsculos**: uma população enorme vezes um efeito por pessoa negligenciável pode produzir um BML grande — reporte os efeitos por pessoa ao lado.
- **Esquecer que o BML herda toda a incerteza** em ΔC e ΔE — combine com [análise de sensibilidade probabilística](../análise-de-sensibilidade-probabilística/).

## Fontes

- York Health Economics Consortium glossary: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>

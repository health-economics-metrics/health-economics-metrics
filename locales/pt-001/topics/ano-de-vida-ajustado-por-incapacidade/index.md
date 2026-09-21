# Ano de Vida Ajustado por Incapacidade (DALY)

Um DALY é um ano perdido de vida saudável — o espelho do lado do encargo do [QALY](../ano-de-vida-ajustado-pela-qualidade/). Onde os QALYs contam saúde *ganha*, os DALYs contam saúde *perdida* para a doença; as intervenções são avaliadas por DALYs **evitados**.

## Porque é importante

O DALY é o padrão global de saúde (OMS, o estudo Global Burden of Disease, e a maioria dos ministérios da saúde de países de baixo e médio rendimento planeiam em DALYs). Se o seu software visa sistemas de saúde internacionais, doadores, ou programas alinhados com a OMS, a linguagem de valor são DALYs evitados, não QALYs ganhos. O padrão de referência histórico da OMS-CHOICE: uma intervenção que evita um DALY por menos de 1× o PIB per capita é "altamente custo-efetiva", 1–3× o PIB per capita "custo-efetiva" (a OMS agora desaconselha o uso rígido destas bandas, mas permanecem omnipresentes na prática).

## O cálculo

```
DALY = APV + AVI

APV (anos de potencial de vida perdidos) = mortes × esperança de vida padrão à idade da morte
AVI (anos vividos com incapacidade)      = prevalência × peso de incapacidade

peso de incapacidade ∈ [0, 1], 0 = saúde plena, 1 = equivalente à morte
(pesos publicados pelo estudo Global Burden of Disease)
```

## Exemplo resolvido

Uma plataforma de rastreio/lembretes numa região aumenta a deteção precoce de uma doença. Anualmente previne 10 mortes prematuras (cada uma a perder 20 anos face à esperança de vida padrão) e previne 200 pessoas a viver um ano com uma condição cujo peso de incapacidade é 0,2.

```
APV evitados = 10 × 20        = 200
AVI evitados = 200 × 0,2      = 40
DALYs evitados               = 240 por ano
```

Se a plataforma custa $600.000/ano a funcionar, o custo por DALY evitado é 600.000 / 240 = **$2.500**. Num país com PIB per capita de $8.000, isso está bem abaixo do referencial de 1× PIB — "altamente custo-efetivo" em termos da OMS-CHOICE.

## Ligação à engenharia de software

- A saúde digital dirigida a financiadores globais de saúde (Gavi, Fundo Global, programas nacionais) deve expressar o impacto como **custo por DALY evitado** — é a métrica em que os revisores de subsídios já pensam.
- O DALY é também um modelo útil de *contabilização de encargo* para a engenharia: incidentes, compilações instáveis e fricção legada são "anos vividos com incapacidade" para um código-base — um inventário de encargo ponderado por trabalho penoso diz-lhe onde a correção compra mais "anos de engenharia saudável", da mesma forma que as tabelas de encargo do GBD orientam o gasto em saúde.

## Armadilhas

- **QALYs ganhos ≠ DALYs evitados numericamente** — pesos diferentes, tabelas de vida diferentes, convenções diferentes (os DALYs usaram historicamente ponderação por idade e desconto dentro da medida). Não converta casualmente.
- **Usar limiares múltiplos do PIB como carimbo automático** — a própria OMS avisa que ignoram orçamentos e custo de oportunidade; ver [limiares de disposição para pagar](../limiares-de-disposição-para-pagar/).
- **Alegar DALYs à escala populacional a partir de eficácia por utilizador** sem multiplicar através da adesão e da adoção — ver [alcance e equidade](../alcance-e-equidade/).

## Fontes

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>

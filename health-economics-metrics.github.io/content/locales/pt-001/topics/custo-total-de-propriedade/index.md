# Custo Total de Propriedade (TCO)

O TCO é o custo total de um sistema ao longo da sua vida: aquisição ou construção, integração, funcionamento, manutenção, suporte, formação, e desativação. O referencial desconfortável: **a manutenção é 50–80% do TCO de software** — aproximadamente três quartos do custo vitalício chega *depois* do lançamento.

## Porque é importante

A avaliação de tecnologia de saúde aprendeu há muito que o preço de um medicamento não é o seu custo — a administração, a monitorização, e a gestão de efeitos secundários pertencem todos ao modelo. Os casos de negócio de software que contam apenas o custo de construção/licença repetem o erro ingénuo do preço do medicamento e subestimam sistematicamente o lado do custo de todos os modelos [ICER](../rácio-de-custo-efetividade-incremental/) e de [impacto orçamental](../análise-de-impacto-orçamental/) que alimentam. Para a aquisição do NHS, a disciplina de TCO é o que torna honesta a alegação de custo-efetividade de um produto digital — e é onde as opções de aparência barata perdem.

## O cálculo

```
TCO = custo inicial (construção/licença + integração + migração de dados + formação)
    + Σ_t [operações + manutenção + suporte + infraestrutura + atualizações
           + conformidade/garantia]_t / (1 + r)^t
    + custo de desativação (saída, extração de dados, funcionamento paralelo)

Horizonte: 3–5 anos comercial, vida útil do sistema para infraestrutura clínica
r: 3,5% setor público (Green Book), 8–12% comercial
Referenciais: manutenção anual ≈ 15–20% do custo de construção; ~78% do TCO
vitalício pós-lançamento; ignorar a desativação e o aprisionamento ao fornecedor precifica-se sozinho.
```

## Exemplo resolvido

Duas opções para um sistema de observações eletrónicas, horizonte de 5 anos:

```
                        SaaS de fornecedor  Construção interna
Ano 0 (licença/construção)  £250.000        £900.000
Integração + formação       £180.000        £150.000
Funcionamento anual (anos 1–5) £120.000/ano £190.000/ano  (alojamento + 1,5 ETC manut.)
Saída/desativação           £60.000         £30.000

TCO não descontado           £1.090.000      £2.030.000
```

A estimativa de engenharia da opção de construção (£900mil) foi apenas 44% do seu TCO verdadeiro — e as próprias estimativas de construção tipicamente ultrapassam o orçamento em 30–40% (ver [construir vs comprar](../construir-vs-comprar/)). A menos que a opção interna entregue *resultados* materialmente diferentes, aplica-se a lógica de [minimização de custos](../análise-de-minimização-de-custos/) e o SaaS vence por ~£940mil.

## Ligação à engenharia de software

Os engenheiros subestimam os próprios dados de manutenção do seu campo ao defender construções: a regra de manutenção anual de 15–20% do custo de construção significa que todo o sistema de £1M compromete silenciosamente £150–200mil/ano de capacidade futura — um passivo que pertence ao mesmo balanço mental que a [dívida técnica](../dívida-técnica/). O TCO é também a metade do custo de todas as métricas neste repositório: custo por implantação, [economia unitária da nuvem](../economia-unitária-da-nuvem/), e a disciplina de denominador que a HTA impõe aos patrocinadores de medicamentos. Quando o preço do seu produto é contestado, uma comparação de TCO incluindo os custos de funcionamento reais do titular é normalmente a reformulação mais forte disponível.

## Armadilhas

- **Ancoragem no custo de lançamento**: comparar opções pelo custo do ano 0 quando a classificação se inverte pelo ano 3.
- **Falácia do trabalho interno gratuito** ("a equipa já cá está").
- **Ignorar os custos de saída**: a saída de dados, a rescisão de contrato, e o funcionamento paralelo são onde o SaaS "barato" se torna caro.
- **Violações do mesmo horizonte**: comparar um TCO de SaaS de 3 anos face a uma amortização de construção de 10 anos (ver [horizonte temporal](../horizonte-temporal/)).

## Fontes

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>

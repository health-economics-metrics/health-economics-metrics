# Horizonte Temporal

O horizonte temporal é o período ao longo do qual uma análise conta custos e efeitos. Tem de ser suficientemente longo para captar todas as diferenças significativas entre as opções a comparar.

## Porque é importante

Escolha um horizonte curto e perde os benefícios tardios (prevenção) e os custos tardios (manutenção). Escolha um horizonte demasiado longo e tudo se afoga em incerteza. A avaliação de tecnologia de saúde usa frequentemente um horizonte **vitalício** para tratamentos com efeitos na mortalidade; a [análise de impacto orçamental](../análise-de-impacto-orçamental/) usa deliberadamente um horizonte curto de **1–5 anos** porque a sua pergunta é sustentabilidade financeira, não valor. O horizonte é uma escolha de modelação declarada, e horizontes desajustados são uma forma clássica de manipular uma comparação.

## O cálculo

O horizonte é o limite superior da soma em qualquer avaliação:

```
Valor atual líquido = Σ (t = 0 … T) [ (Benefícios_t − Custos_t) / (1 + r)^t ]

T = horizonte temporal (anos)
r = taxa de desconto (ver discounting-and-time-preference.md)
```

Os resultados deveriam ser reportados com o horizonte declarado, e idealmente mostrados a múltiplos horizontes.

## Exemplo resolvido

Um sistema de prescrição eletrónica custa £2 milhões a implementar e £200.000/ano a funcionar. Previne erros de medicação no valor de £600.000/ano (custo de tratamento do dano evitado).

Benefício líquido por horizonte (não descontado, para clareza):

```
Horizonte 1 ano:  −2.000.000 − 200.000 + 600.000  = −£1.600.000
Horizonte 3 anos: −2.000.000 + 3 × 400.000        = −£800.000
Horizonte 5 anos: −2.000.000 + 5 × 400.000        =  £0
Horizonte 10 anos:−2.000.000 + 10 × 400.000       = +£2.000.000
```

O sistema "falha" em qualquer horizonte abaixo de 5 anos e "sucede" a 10. Nenhum é a resposta verdadeira; o relatório honesto declara o ponto de equilíbrio e justifica o horizonte pela vida útil do sistema (quanto tempo até à substituição?).

## Ligação à engenharia de software

- **As avaliações de ferramentas medidas ao longo de um sprint** perdem sistematicamente a queda da curva de aprendizagem (custos antecipados) e a manutenção a longo prazo (custos tardios). Os pilotos de assistente de codificação com IA medidos na semana 2 captam o pico de novidade, não o estado estável.
- **A duração do contrato ≠ horizonte de benefício.** Um contrato SaaS de 1 ano ainda pode ser avaliado ao longo de 5 anos se se espera realisticamente a renovação — mas diga-o.
- **Os casos de substituição de sistemas legados** deveriam correr até ao fim de vida credível do sistema antigo, não até um número redondo arbitrário.

## Armadilhas

- **Compras de horizonte**: escolher o horizonte que faz a sua opção vencer. Pré-registe o horizonte antes de calcular os resultados.
- **Horizontes diferentes para opções diferentes** na mesma comparação.
- **Horizontes vitalícios sem desconto ou análise de incerteza** — os benefícios do ano 30 ao valor nominal são ficção. Combine horizontes longos com [análise de sensibilidade](../análise-de-sensibilidade/).

## Fontes

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>

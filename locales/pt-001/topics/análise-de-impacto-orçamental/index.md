# Análise de Impacto Orçamental (AIO)

A AIO estima o que a adoção de uma intervenção faz ao **orçamento** de um pagador específico ao longo dos próximos 1–5 anos. Responde à *sustentabilidade financeira*; a custo-efetividade responde ao *valor*. Uma tecnologia pode ser de excelente valor e ainda assim insustentável — ou sustentável e de fraco valor. As avaliações sérias requerem ambos.

## Porque é importante

A pergunta do diretor financeiro nunca é "qual é o ICER?" — é "o que é que isto faz ao orçamento do próximo ano?" A orientação de boa prática do ISPOR (o padrão do setor) especifica: a própria perspetiva do pagador, um horizonte de 1–5 anos, fluxos de caixa anuais *não descontados*, curvas de adoção realistas, e incerteza por cenário (não probabilística). O NICE exige informação de impacto orçamental juntamente com a custo-efetividade; um produto com impacto orçamental nacional acima de ~£20M/ano em Inglaterra desencadeia negociação comercial independentemente do seu ICER.

## O cálculo

```
IO_ano_t = Custo_cenário_com_novo(t) − Custo_cenário_atual(t)

Custo_cenário(t) = Σ sobre grupos de doentes:
   população elegível(t) × adoção(t) × custo líquido por doente(t)

custo líquido por doente = custo da intervenção − custo de cuidados deslocados + custo de cuidados induzidos
```

Escolhas-chave de modelação: crescimento da população elegível, a curva de adoção (a adoção nunca é instantânea), o que a nova opção desloca, e qualquer procura que *induz* (acesso mais fácil → mais utilizadores).

## Exemplo resolvido

Um pagador que cobre 2M de pessoas considera uma terapêutica digital a £300/doente/ano; 1,5% dos membros elegíveis (30.000); adoção 20% → 40% → 60% ao longo de 3 anos; cada utilizador desloca £120/ano de outros cuidados.

```
Custo líquido por utilizador = 300 − 120 = £180

Ano 1: 30.000 × 0,20 × 180 = £1,08M
Ano 2: 30.000 × 0,40 × 180 = £2,16M
Ano 3: 30.000 × 0,60 × 180 = £3,24M
```

Mesmo que o ICER do produto seja um estelar £8.000/QALY, o pagador tem de encontrar £3,24M de *dinheiro novo* até ao ano 3 — os £120 deslocados estão espalhados finamente por outras linhas orçamentais e não serão libertados como tesouraria (ver [libertador de tesouraria vs não libertador](../poupanças-libertadoras-de-tesouraria-vs-não-libertadoras/)). É por isto que o valor por unidade e a sustentabilidade financeira são barreiras separadas.

## Ligação à engenharia de software

A AIO é exatamente o complemento voltado para o CFO de uma alegação de ROI por lugar: "é custo-efetivo por programador, mas conseguimos pagar a implementação em toda a organização este ano fiscal?" Modele níveis de licença, uma curva-S de adoção, gasto em ferramentas deslocado que só liberta tesouraria quando os contratos antigos realmente terminam, e utilização induzida (CI mais barato → mais CI). Apresentar uma tabela de impacto orçamental de 3 anos junto com o ROI é o que torna uma proposta de ferramentas empresariais credível para as finanças.

## Armadilhas

- **Fantasia de adoção instantânea**: impacto do ano 1 calculado à adoção em estado estável.
- **Contar o custo deslocado como tesouraria** quando é capacidade difusa.
- **Ignorar a procura induzida** — as melhorias de acesso aumentam a utilização da população elegível.
- **Confundir os horizontes/descontos da AIO e da ACE**: a AIO é de horizonte curto, não descontada, específica do pagador por design.

## Fontes

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- ISPOR good practices: budget impact analysis. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>

# Custos a Jusante Evitados

Os custos a jusante evitados (compensações de custo) são despesas futuras de tratamento prevenidas por ação anterior ou melhor, líquidas do custo da própria intervenção. As compensações são o mecanismo pelo qual uma intervenção pode tornar-se *dominante* — mais barata **e** melhor — e são também a linha mais duplamente contada e sobrealegada na economia da saúde.

## Porque é importante

Quase todas as propostas de valor em saúde digital contêm uma alegação de compensação: "a nossa aplicação previne internamentos", "os nossos alertas previnem a deterioração", "a nossa plataforma evita testes duplicados". Quando as compensações são reais, transformam a economia (ver o exemplo resolvido do [ICER](../rácio-de-custo-efetividade-incremental/), onde uma compensação de £600 mil faz o caso). Os pagadores sabem isto — pelo que as alegações de compensação atraem o escrutínio mais rigoroso em qualquer avaliação. As regras de credibilidade abaixo são o que separa um modelo financiável de marketing.

## O cálculo

```
Custo líquido = custo da intervenção − Σ compensações

Uma compensação válida tem de ser:
  Atribuível — causalmente ligada à intervenção (evidência comparativa)
  Marginal   — o dinheiro deixa realmente de ser gasto, ao custo marginal não
                 médio (ver marginal-vs-average-cost.md)
  Ponderada  — ponderada por P(o evento a jusante teria ocorrido)
  por probabilidade
  Descontada — custos futuros evitados a valor presente
  Única      — contada uma vez, numa linha de benefício
```

## Exemplo resolvido

"Esta alegação de risco de migração, feita corretamente": uma aplicação de monitorização de feridas para 5.000 doentes pós-cirúrgicos alega evitar reinternamentos relacionados com infeção.

```
Reinternamento basal por infeção: 4,0%; com aplicação (RCT): 3,1%
Eventos atribuíveis evitados = 5.000 × 0,009 = 45/ano
Custo por episódio de reinternamento (marginal, neste hospital): £3.200
Compensação = 45 × 3.200 = £144.000/ano
Custo da aplicação = 5.000 × £20 = £100.000/ano
Custo líquido = −£44.000 → genuinamente poupador de custos, com:
  atribuição de um RCT ✓  custeio marginal ✓  probabilidade de dados do ensaio ✓
```

A mesma alegação construída sobre "os reinternamentos custam £5.800 em média, vamos prevenir imenso" falha todos os quatro testes e merece a rejeição que recebe.

## Ligação à engenharia de software

"Esta migração evita a futura reescrita" é uma alegação de compensação, e as regras da economia da saúde tornam-na honesta:

- **Custo contrafactual**: quanto custaria realmente a reescrita, comprovado como?
- **Probabilidade**: quão provável é esse futuro? (Não 100% — produtos são cancelados, prioridades mudam.)
- **Desconto**: uma reescrita evitada no ano 4 a um desconto de 3,5–10% vale muito menos do que o valor nominal.
- **Unicidade**: não alegue a mesma reescrita evitada na linha de dívida técnica e na linha de retenção.

`Valor da compensação = P(evento futuro) × custo contrafactual × fator de desconto` — escreva essa linha na proposta e observe a estimativa tornar-se discutível, que é o objetivo.

## Armadilhas

- **Dupla contagem** — o mesmo internamento evitado alegado como compensação, dias de cama e QALY com custo associado.
- **Compensações a custo médio** para eventos cujos custos fixos continuam de qualquer forma.
- **Probabilidade silenciosa de 100%** em eventos a jusante que eram meramente possíveis.
- **Compensações para outros orçamentos** apresentadas como poupanças ao pagador a quem se pede que pague — ver [perspetiva de análise](../perspetiva-de-análise/).

## Fontes

- York Health Economics Consortium glossary: cost offset. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (offsets rarely exceed costs). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>

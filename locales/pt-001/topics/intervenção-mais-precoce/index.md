# Intervenção Mais Precoce

Se a capacidade poupada permite a um profissional rever atrasos de diagnóstico mais cedo, os doentes passam da lista de espera para o tratamento ativo mais rapidamente — e tratar mais cedo é normalmente mais barato e melhor do que tratar mais tarde, porque as condições não tratadas progridem.

## Porque é importante

A progressão da doença é os juros compostos dos cuidados de saúde. Um doente à espera com uma condição não tratada não está num estado estável: os cancros mudam de estádio, a insuficiência cardíaca descompensa, a depressão leve torna-se grave. Intervir mais cedo entrega, portanto, um duplo dividendo — **melhores resultados** (mais QALYs, tratados a partir de uma base mais saudável) e frequentemente **custos de tratamento mais baixos** (o tratamento em estádio precoce é menos intensivo do que o resgate em estádio tardio). Este mecanismo é o que eleva as "vias mais rápidas" de uma conveniência operacional a um imperativo clínico e económico — e é a razão profunda pela qual o [custo de atraso](../custo-de-atraso/) se aplica ao software clínico.

## O cálculo

```
Valor da intervenção mais precoce (por doente) =
    [Custo_tardio − Custo_precoce]                       (compensação do custo de tratamento)
  + [QALYs_precoce − QALYs_tardio] × λ                    (ganho de saúde × limiar)
  × P(progressão durante o atraso)                        (ponderação por probabilidade)
```

A ponderação por probabilidade é essencial: nem todo o doente em espera progride. Modele a probabilidade de transição por unidade de tempo (a partir de dados de história natural), não o pior cenário. Depois desconte: os custos evitados anos mais tarde valem menos hoje ([desconto](../desconto-e-preferência-temporal/)) — e note que a maior parte da intervenção precoce é custo-*efetiva* em vez de custo-*poupadora* (ver [economia da prevenção](../economia-da-prevenção/)).

## Exemplo resolvido

Atraso no rastreio de retinopatia diabética: 4.000 doentes, 6 meses atrasados. A classificação assistida por IA triplica o rendimento e limpa a fila em 8 semanas. História natural: ~2% dos doentes em espera/ano progridem para estádios que ameaçam a visão enquanto não revistos.

```
Eventos de progressão evitados por ~4 meses de aceleração:
  4.000 × 2% × (4/12) ≈ 27 doentes

Por progressão evitada:
  compensação de tratamento (terapia intravítrea vs laser) ≈ £4.000
  ganho de QALY (visão preservada) ≈ 0,8 QALYs × £20.000 = £16.000

Valor ≈ 27 × (4.000 + 16.000) ≈ £540.000 — de um atraso limpo uma vez,
antes de contar o ganho de rendimento permanente.
```

## Ligação à engenharia de software

Duas transferências. Primeiro, a óbvia: o software que acelera as vias de diagnóstico e tratamento (triagem, classificação por IA, encaminhamento de resultados) monetiza-se através deste modelo exato — e o modelo diz-lhe qual via acelerar: a que tem a curva de progressão mais íngreme, não a fila mais longa. Segundo, o espelho de engenharia: **os defeitos também progridem**. Um bug apanhado no design custa uma conversa; em produção custa um incidente; a curva de custo de defeitos (10–100× por fase) é um modelo de progressão, e a versão honesta carrega a mesma ressalva — a deteção precoce é normalmente custo-efetiva, não dinheiro grátis, porque as revisões e testes têm custos reais e a maioria dos problemas apanhados nunca teria progredido.

## Armadilhas

- **Progressão do pior cenário assumida para todos** — a ponderação por probabilidade é a diferença entre análise e advocacia.
- **Viés de tempo de antecipação**: encontrar a doença mais cedo sem mudar os resultados parece benefício mas não é; a *intervenção efetiva* mais precoce é a alegação, não a deteção mais precoce sozinha (ver [economia do rastreio](../economia-do-rastreio/)).
- **Dupla contagem** com alegações de lista de espera e RTT construídas na mesma aceleração — uma melhoria de via, um conjunto de benefícios, atribuído uma vez.

## Fontes

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, diabetic eye screening programme. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>

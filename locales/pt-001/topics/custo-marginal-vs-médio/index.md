# Custo Marginal vs Médio

O custo médio é o custo total dividido pelas unidades produzidas. O custo marginal é o custo de produzir uma unidade *adicional*. As decisões deveriam ser tomadas com base no custo marginal — mas os custos unitários publicados são quase sempre médias.

## Porque é importante

O erro único mais comum nos casos de negócio de saúde digital é avaliar um recurso poupado ao seu custo **médio** quando a poupança real é o custo **marginal**. Um dia de cama de hospital tem um custo médio (totalmente absorvido) de £400+, mas libertar um dia de cama não poupa £400 — o edifício, o aquecimento, e a maioria dos custos de pessoal continuam. O dinheiro efetivamente libertado pode ser £50–£150 a menos que camas suficientes sejam libertadas para fechar uma enfermaria.

## O cálculo

```
Custo médio:  CM = CT / Q
Custo marginal: Cm = dCT/dQ   (custo de uma unidade a mais/a menos)

CT = custo total, Q = quantidade
```

Os custos fixos fazem Cm < CM para reduções de capacidade, e o Cm pode aproximar-se de zero quando existe capacidade sobrante. As alegações de poupança deveriam usar:

```
Poupança real = ΔQ × Cm          (mudanças pequenas)
Poupança real = mudança de degrau em CT (mudanças grandes que atravessam um limiar de
              capacidade, ex.: fechar uma enfermaria)
```

## Exemplo resolvido

O seu software reduz o tempo médio de internamento, libertando 1.000 dias de cama/ano num hospital.

- **Alegação ingénua**: 1.000 × £400 de custo médio = **£400.000 poupados**. Errado.
- **Alegação marginal**: o custo variável por dia de cama (comida, lavandaria, consumíveis, alguma flexibilidade de enfermagem) ≈ £120. Poupança = 1.000 × £120 = **£120.000**, *mais* o valor da capacidade libertada se as camas forem reabastecidas com doentes eletivos em espera (rendimento sob pagamento baseado em atividade, ou redução de lista de espera).
- **Alegação de mudança de degrau**: se o hospital liberta 7.300 dias de cama/ano (uma enfermaria de 20 camas) pode realmente fechar a enfermaria: pessoal + funcionamento ≈ £1,5 milhão/ano de tesouraria real. Agora a aritmética de custo médio está mais próxima da verdade.

Mesma intervenção, três números defensáveis, dependendo de a mudança atravessar ou não um degrau de capacidade.

## Ligação à engenharia de software

A economia da nuvem é território nativo de custo marginal:

- O custo marginal de mais uma execução de CI em capacidade já reservada é ≈ £0, enquanto o custo médio por execução (gasto total da plataforma ÷ execuções) pode ser em libras. Os sistemas de contracarga que faturam o custo médio conduzem as equipas a subutilizar capacidade partilhada que é efetivamente gratuita na margem.
- Inversamente, "poupámos 30% de computação" só liberta tesouraria se as instâncias forem realmente terminadas ou as reservas reduzidas — a versão de software da armadilha do dia de cama. Ver [poupanças libertadoras de tesouraria vs não libertadoras](../poupanças-libertadoras-de-tesouraria-vs-não-libertadoras/).

## Armadilhas

- **Avaliar a capacidade a custo médio** e apresentá-la como tesouraria (o clássico).
- **Assumir que o custo marginal é constante.** Faz degraus em limites de capacidade (fechos de enfermaria, níveis de licença, compromissos de instância reservada).
- **Usar o custo marginal para decisões de expansão mas o médio para contração** no mesmo caso — escolha conforme a decisão real.

## Fontes

- York Health Economics Consortium glossary: marginal cost. <https://yhec.co.uk/glossary/marginal-cost/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>

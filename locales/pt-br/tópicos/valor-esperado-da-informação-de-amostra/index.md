# Valor Esperado da Informação de Amostra (EVSI)

O EVSI é o valor de *um estudo concreto proposto* (com um desenho e um tamanho de amostra dados) antes de o realizar, ao contrário do [EVPI](../valor-esperado-da-informação-perfeita/), que avalia eliminar por completo toda a incerteza. O EVSI responde à pergunta com que o financiador de investigação se depara de fato: «vale a pena *este* estudo, com *este* tamanho?»

## Porque é importante

O EVPI dá um teto ao valor que qualquer estudo poderia ter; nunca diz se o estudo que se tem à frente ultrapassa a fasquia. Um financiador nacional de investigação que escolhe entre um piloto de 50 pacientes e um ensaio decisivo de 500 precisa de saber o valor de *cada desenho*, não apenas o de saber tudo. O EVSI dá esse número e, como varia com o tamanho da amostra, o financiador pode encontrar o tamanho que maximiza o benefício líquido esperado em vez de adivinhar.

É também por isso que o EVSI é sempre menor ou igual ao EVPI: uma amostra finita resolve a incerteza apenas em parte, e um estudo que pareça valer mais do que a informação perfeita é sinal de um erro de cálculo, não de um resultado real.

## O cálculo

```
Caso geral:
EVSI(n) = E_dados[ max_d E_θ|dados[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (esperança aninhada: a externa sobre os resultados possíveis do estudo,
  a interna sobre a crença a posteriori sobre θ depois de ver esse resultado;
  estima-se normalmente com Monte Carlo aninhado / atualização bayesiana
  sobre as extrações da análise de sensibilidade probabilística)

Aproximação normal em forma fechada (um parâmetro incerto, modelo
normal-normal conjugado — atalho comum, não exato para todo o modelo):
EVSI(n) = EVPI × n / (n + n0)

n  = tamanho da amostra do estudo proposto
n0 = «tamanho de amostra equivalente da priori»: o tamanho de amostra
     hipotético que traria tanta informação como a crença atual, derivado
     do quociente entre a variância dos dados e a da priori
ENBS(n) = EVSI(n) − Custo(n)
EVSI populacional = EVSI_por_decisão × decisões_afetadas
```

A forma geral é uma esperança aninhada porque o resultado futuro do estudo é, ele próprio, incerto: é preciso fazer a média sobre cada conjunto de dados possível e, para cada um, recalcular a melhor decisão com a crença atualizada (a posteriori). A aproximação normal troca esse custo de cálculo por um único quociente, válido quando o parâmetro incerto e os dados são (aproximadamente) normais e conjugados — uma comodidade, não uma lei universal. O Monte Carlo aninhado completo é o método de uso geral quando esse pressuposto não se verifica. Veja-se a [análise de sensibilidade probabilística](../análise-de-sensibilidade-probabilística/) para as extrações de ASP a partir das quais o EVSI costuma ser estimado.

## Exemplo resolvido

Na continuação do exemplo resolvido do [EVPI](../valor-esperado-da-informação-perfeita/) (implementação de um assistente de documentação com IA em 5.000 clínicas, em que o EVPI foi de £1,2 milhões), escreve-se aqui esse mesmo EVPI por inteiro: **EVPI = £1.200.000**.

Um piloto proposto abrange 50 clínicas. A partir do quociente entre a variância da crença a priori e a precisão de medição do piloto, o tamanho de amostra equivalente da priori é `n0 = 75`:

```
EVSI(50) = 1,200,000 × 50 / (50 + 75)
         = 1,200,000 × 50 / 125
         = 1,200,000 × 0.4
         = £480,000
```

O piloto custa £120.000:

```
ENBS = EVSI − Custo = 480,000 − 120,000 = £360,000
```

Um ENBS claramente positivo: financiar o piloto. Se a mesma decisão de aquisição se repetir em 3 trusts regionais semelhantes, o valor do piloto escala em conformidade:

```
EVSI populacional = 480,000 × 3 = £1,440,000
```

## Ligação à engenharia de software

O EVSI é a economia de *quão grande* deve ser um piloto ou um teste A/B, e não apenas de se o fazer:

- **O tamanho da amostra é uma decisão de investimento.** Uma beta de 50 usuários e um lançamento por fases até 5.000 são «estudos» diferentes com EVSI e custos diferentes; o EVSI permite compará-los em pé de igualdade em vez de cair no valor por omissão de «mais dados é sempre melhor».
- **O teste de subscrição é ENBS, não apenas EVSI.** Um estudo com EVSI alto cujo custo lhe come quase tudo é uma proposta fraca; a regra de decisão é o benefício líquido esperado da amostra, tal como um caso de negócio põe o benefício frente ao custo em vez de reportar só o benefício.
- **O rendimento marginal decrescente vê-se com clareza.** Como o EVSI(n) cresce como `n/(n+n0)`, duplicar o tamanho do piloto nunca duplica o seu valor: a versão formal da intuição do engenheiro de que uma experiência maior tem valor informativo marginal decrescente.

## Armadilhas

- **Usar a aproximação normal fora dos seus pressupostos.** Só é aproximadamente válida para incerteza conjugada de um parâmetro; um modelo de decisão realmente não linear ou com vários parâmetros precisa do Monte Carlo aninhado completo, não deste atalho.
- **Comparar o EVSI apenas com o custo em numerário.** O EVSI deve ser confrontado com o custo *completo* do estudo, incluindo o custo de atrasar a própria decisão — veja-se o [custo de atraso](../custo-de-atraso/) — e não só a fatura do estudo.
- **Tratar um EVSI > EVPI como uma descoberta real.** Por construção, o EVSI nunca pode exceder o EVPI; um cálculo que o produza é um erro de modelo, não uma descoberta.

## Fontes

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.

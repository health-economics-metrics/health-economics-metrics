# Valor Esperado da Informação Perfeita (EVPI)

O EVPI é a quantia máxima que um decisor deveria pagar para eliminar a incerteza antes de decidir — o preço formal de "vamos primeiro fazer um estudo".

## Porque é importante

Os sistemas de saúde enfrentam constantemente a escolha: adotar agora com evidência imperfeita, ou financiar mais investigação primeiro. O EVPI coloca um número na segunda opção. Se o EVPI é £50.000 e o ensaio proposto custa £2 milhões, adote agora. Se o EVPI é £20 milhões, o ensaio é uma pechincha. A mesma pergunta — "devíamos pilotar isto antes de o lançar?" — surge para toda a decisão de ferramentas empresariais, e quase ninguém a precifica.

## O cálculo

O EVPI é a diferença entre decidir com previsão perfeita e decidir agora com expetativas:

```
EVPI = E_θ[ max_j VML(j, θ) ]  −  max_j E_θ[ VML(j, θ) ]

θ        = parâmetros incertos (com a sua distribuição conjunta)
VML(j,θ) = valor monetário líquido da opção j dado θ
```

Primeiro termo: a média do resultado da melhor escolha em cada mundo possível (escolhe sempre bem). Segundo termo: o resultado da única opção que é melhor em média (tem de se comprometer agora). O EVPI ≥ 0 sempre. O EVPI populacional multiplica pelo número de decisões afetadas. Calculado diretamente a partir de extrações de [ASP](../análise-de-sensibilidade-probabilística/).

## Exemplo resolvido

Lançar um assistente de documentação de IA para 5.000 clínicos, ou não. Dois mundos:

```
Mundo A (p = 0,6): o assistente poupa 20 min/dia → VML do lançamento = +£8M
Mundo B (p = 0,4): o assistente poupa ~0 (fricção de fluxo de trabalho) → VML do lançamento = −£3M
VML de "não lançar" = £0 em ambos os mundos.
```

Decidir agora: E[VML lançamento] = 0,6 × 8 − 0,4 × 3 = **+£3,6M** → lançar.

Com informação perfeita: no mundo A escolher lançamento (+£8M), no mundo B escolher nada (£0). Valor esperado = 0,6 × 8 + 0,4 × 0 = **£4,8M**.

```
EVPI = 4,8M − 3,6M = £1,2M
```

Um piloto rigoroso de 3 meses custando £150.000 que resolve substancialmente em que mundo se está vale enfaticamente a pena — e qualquer piloto que custe mais de £1,2M não, por mais exaustivo que seja.

## Ligação à engenharia de software

O EVPI é a economia do spike, do piloto, do teste A/B, e da prova de conceito. Produz duas regras práticas:

- **Um piloto só vale a pena financiar se a decisão puder realmente mudar.** Se lançasse independentemente do resultado do piloto, o EVPI = 0 e o piloto é teatro.
- **Limite o gasto do piloto ao EVPI.** O valor da informação é limitado pelo valor da decisão que informa.

O EVPI parcial (EVPPI) estende isto a parâmetros únicos: "quanto vale fixar especificamente o número de tempo poupado?" — o que lhe diz o que o piloto deve medir.

## Armadilhas

- **Executar pilotos sem regra de decisão associada** — informação que não pode mudar a escolha é sem valor por definição.
- **Ignorar o custo de atraso de recolher informação**: um piloto de 6 meses atrasa 6 meses de benefício ([custo de atraso](../custo-de-atraso/)); o valor líquido do piloto = EVPI resolvido − custo de atraso − custo do piloto.
- **Tratar o EVPI como uma previsão.** É um limite superior sobre o valor da informação, não uma estimativa do que um estudo específico entregará.

## Fontes

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium glossary: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>

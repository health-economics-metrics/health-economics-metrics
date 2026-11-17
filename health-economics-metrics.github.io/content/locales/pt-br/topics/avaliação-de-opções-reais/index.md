# Avaliação de Opções Reais

A avaliação de opções reais aplica a lógica da avaliação de opções financeiras a decisões de investimento reais (não transacionadas num mercado financeiro), em concreto à *opção de expansão*: o direito de alargar um projeto mais tarde se tiver êxito, sem a obrigação de o fazer. Um modelo binomial simplificado de um período (Cox, Ross, Rubinstein, 1979) avalia diretamente esta flexibilidade, transformando o «entregar em pequeno e ver» de um palpite num número com preço.

## Porque é importante

Um cálculo estático do valor atual dá preço ao projeto como uma aposta de tudo ou nada: financiar ou não, à escala de hoje, para sempre. Os projetos reais — e em especial os lançamentos faseados de saúde digital — raramente são assim estruturados: um sistema de saúde pode financiar um piloto pequeno, ver o que acontece e só comprometer mais dinheiro se funcionar. Essa flexibilidade tem um valor real, e ignorá-la subavalia sistematicamente os investimentos faseados face aos de uma só vez, o oposto dos processos de compra que premeiam a proposta faseada que parece mais segura. A avaliação de opções reais dá preço à própria flexibilidade, de modo a que uma proposta faseada possa ser comparada com justiça com a alternativa de compromisso total, em vez de ser penalizada por parecer menor na linha ingénua do valor atual.

## O cálculo

```
Probabilidade neutra ao risco do estado «alta»:
  p = ((1 + taxa_sem_risco) − fator_baixa) / (fator_alta − fator_baixa)

Pagamento da expansão em cada estado (limitado inferiormente a zero — expandir é opcional):
  pagamento_alta  = max(valor_do_projeto × fator_alta − custo_de_expansão, 0)
  pagamento_baixa = max(valor_do_projeto × fator_baixa − custo_de_expansão, 0)

Valor da opção (pagamento esperado descontado):
  valor_opção = (p × pagamento_alta + (1 − p) × pagamento_baixa) / (1 + taxa_sem_risco)

VAL expandido = val_estático + valor_opção
```

O valor do projeto sobe (`fator_alta`) ou desce (`fator_baixa`) até ao ponto de decisão seguinte. A expansão só é exercida quando é rentável nesse estado: o piso em zero do pagamento é o que a torna uma verdadeira *opção* e não uma obrigação. Para avaliar a opção de reunir primeiro informação, em vez da opção de expandir depois, veja-se o [valor esperado da informação perfeita](../valor-esperado-da-informação-perfeita/). Para o custo de esperar por esta decisão, veja-se o [custo de atraso](../custo-de-atraso/).

## Exemplo resolvido

Um piloto de serviço digital com `valor_do_projeto = £1.000.000`, que pode subir 1,5× ou descer para 0,5× até ao ponto de decisão seguinte, uma taxa sem risco de 8 % e um custo de expansão de £600.000:

```
p = (1.08 − 0.5) / (1.5 − 0.5) = 0.58

pagamento_alta  = max(1,000,000 × 1.5 − 600,000, 0) =  900,000
pagamento_baixa = max(1,000,000 × 0.5 − 600,000, 0) = max(−100,000, 0) = 0

O piso atua: a opção NÃO seria exercida se o mercado desiludir —
o custo de expansão de £600,000 excede os £500,000 que o projeto
valeria no estado «baixa».

valor_opção = (0.58 × 900,000 + 0.42 × 0) / 1.08
            = 522,000 / 1.08
            ≈ £483,333.33
```

Somando o valor da opção à base de VAL estático de £200.000: VAL expandido = 200.000 + 483.333,33 ≈ **£683.333,33**. Reportar apenas o VAL estático de £200.000 sem o valor desta opção subavaliaria o valor real do projeto faseado em mais do dobro.

## Ligação à engenharia de software

É a versão formal de «entregar já a versão mínima e manter a opção de investir mais se pegar» — diretamente relevante para o lançamento faseado de um produto de saúde digital, paralelo estrutural dos quadros de sequenciação sob incerteza do [custo de atraso](../custo-de-atraso/) e do [WSJF e CD3](../wsjf-e-cd3/), e complementar do [valor esperado da informação perfeita](../valor-esperado-da-informação-perfeita/) e do [valor esperado da informação de amostra](../valor-esperado-da-informação-de-amostra/): os três dão preço à flexibilidade ou à informação sob incerteza, de ângulos diferentes.

## Armadilhas

- **Tomar de empréstimo a avaliação neutra ao risco sem o pressuposto de ativo transacionável em que assenta**: os modelos de opções reais tomam de empréstimo a probabilidade neutra ao risco da avaliação de opções financeiras, que pressupõe que o valor subjacente é um ativo *transacionável*; para um projeto real verdadeiramente não transacionável é uma comodidade de modelação, não um fato de mercado literal.
- **Tratar `fator_alta`/`fator_baixa` como parâmetros livres**: as entradas de alta/baixa do binomial são, elas próprias, pressupostos que precisam de justificação, não parâmetros livres escolhidos para obter a resposta desejada.
- **Reportar apenas o valor da opção**: o valor de uma opção real *soma-se* ao VAL estático do projeto autónomo; o erro comum é reportar só o valor da opção e omitir o caso de base, o que exagera o caso quando o VAL estático é negativo e o subavalia (como no exemplo resolvido acima) quando se omite por completo o VAL estático.

## Fontes

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — liga as opções reais diretamente ao contexto de decisão da economia da saúde. <https://pubmed.ncbi.nlm.nih.gov/17395932/>

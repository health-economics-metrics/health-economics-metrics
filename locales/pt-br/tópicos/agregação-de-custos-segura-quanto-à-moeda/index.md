# Agregação de Custos Segura Quanto à Moeda

Somar muitas rubricas monetárias (faturas mensais, custos por local, valores de impacto orçamental plurianuais) com números de vírgula flutuante binária comuns (`f64`) acumula pequenos erros de representação, porque a maioria das frações decimais (como $1.234,56) não pode ser representada com exatidão em vírgula flutuante binária. Cada erro é minúsculo, mas um modelo grande que soma centenas ou milhares de rubricas ao longo de anos pode desviar-se uma fração de cêntimo — e o desvio depende da *ordem* da soma, pelo que não é reproduzível. A agregação monetária feita com aritmética decimal exata (ou com inteiros na unidade menor) soma com exatidão, em linha com a forma como os sistemas contabilísticos e a contabilidade por partidas dobradas têm de bater certo ao cêntimo.

## Porque é importante

É um tipo de erro de software bem documentado e fundamental: o artigo de Goldberg de 1991 na ACM Computing Surveys, "What Every Computer Scientist Should Know About Floating-Point Arithmetic", é a referência padrão sobre por que a vírgula flutuante binária não consegue representar com exatidão a maioria dos montantes decimais e por que somar muitos deles acumula o erro. Os modelos de economia da saúde e de finanças do NHS somam rotineiramente vários anos e várias categorias de custo: tanto o [custo total de propriedade](../custo-total-de-propriedade/) como a [análise de impacto orçamental](../análise-de-impacto-orçamental/) somam muitas rubricas de custo `f64` ao longo de anos. Quando um modelo tem de bater certo ao cêntimo — uma auditoria que calcula o total à mão tem de chegar ao valor *exato* — a própria aritmética tem de ser decimal exata, não de vírgula flutuante.

## O cálculo

```
Agregação ingénua:             total = Σ f64(rubrica_i)       — desvio dependente da ordem
Agregação segura quanto à moeda: total = Σ Decimal(rubrica_i) — exata, reproduzível

Aplicar um ajustamento percentual (por exemplo, uma contingência):
  ajustado = total × multiplicador    — resultado Decimal exato, pode ter mais casas
                                        decimais do que o expoente da unidade menor
                                        da moeda
  arredondado = arredondar(ajustado, expoente_moeda, regra_de_arredondamento)
                                      — a regra de arredondamento (half-up contra
                                        half-even/arredondamento bancário) tem de
                                        ser indicada explicitamente
```

Note-se a disciplina em dois passos: multiplicar um `Decimal` exato por um multiplicador pode dar mais casas decimais do que a moeda realmente usa (por exemplo, três casas a partir de um montante de duas casas por um multiplicador de duas casas); essa precisão intermédia *não* é truncada automaticamente: só um passo de arredondamento explícito, com uma regra de arredondamento indicada, a reduz ao expoente real da unidade menor da moeda.

## Exemplo resolvido

Doze faturas mensais idênticas de $1.234,56, somadas com aritmética decimal exata: $1.234,56 × 12 = **$14.814,72** exatos, contra somar doze vezes a constante `f64` `1234.56` em precisão dupla IEEE-754, que pode desviar-se uma fração de cêntimo consoante a ordem da soma — um tipo de erro real e documentado, que não é problema para um modelo construído sobre aritmética `Money` decimal exata.

Aplique-se agora uma contingência padrão de impacto orçamental de 5 % (multiplicador 1,05) a esse total de $14.814,72: $14.814,72 × 1,05 = $15.555,456 — três casas decimais, porque a multiplicação é exata e não é arredondada automaticamente às duas casas da moeda. Arredondando explicitamente a 2 casas com arredondamento bancário (half-even) obtém-se exatamente **$15.555,46**.

## Ligação à engenharia de software

É a lição fundamental direta por detrás do princípio de que «o software financeiro usa `Decimal`, não `float`», ligada explicitamente aos módulos de [custo total de propriedade](../custo-total-de-propriedade/) e de [análise de impacto orçamental](../análise-de-impacto-orçamental/) deste repositório, que hoje agregam custos em vírgula flutuante comum. O argumento de correção não exige migrar esses modelos de imediato; aponta com precisão *quando* um sistema tem de bater certo ao cêntimo e, por isso, não deve usar vírgula flutuante binária para a sua aritmética monetária. Veja-se a [alocação exata de custos ao cêntimo](../alocação-exata-de-custos-ao-cêntimo/) para o problema complementar de *repartir* (em vez de somar) um total sem perder um cêntimo.

## Armadilhas

- **Converter para `float` a meio da cadeia**: extrair um valor monetário como número de vírgula flutuante a meio de um cálculo (algumas bibliotecas `Money` chamam até «lossy» ao método de conversão, como aviso explícito) abandona em silêncio a garantia de exatidão para todo o cálculo seguinte.
- **«Decimal é demasiado lento para importar»**: descartar a aritmética decimal exata como um peso desnecessário, quando o reporte financeiro precisa de correção e de auditabilidade, não de débito bruto.
- **Aplicar uma percentagem de contingência sem indicar a regra de arredondamento**: half-up contra half-even (arredondamento bancário) pode mudar o último cêntimo; a própria convenção de arredondamento tem de ser uma escolha declarada e auditável — veja-se a [análise custo-benefício](../análise-custo-benefício/) para a orientação do Green Book do HM Treasury sobre ajustamentos de contingência e viés de otimismo, o tipo de valores a que este passo de arredondamento se aplica.

## Fontes

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — o padrão `Money`.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — orientação sobre viés de otimismo e contingência para a modelação do impacto orçamental. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>

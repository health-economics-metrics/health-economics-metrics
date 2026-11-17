# Fração Atribuível na População (PAF)

A PAF é a proporção da carga de doença ou de um resultado numa população que é atribuível à exposição a um fator de risco concreto: a proporção que desapareceria se a exposição fosse totalmente eliminada. Transforma «este fator de risco duplica as suas hipóteses» num número ao nível da população em torno do qual um planeador pode realmente planear: quanto vale a pena combater esta exposição em casos e em custo.

## Porque é importante

Levin introduziu a PAF em 1953 para responder a uma pergunta estreita e concreta: se ninguém fumasse, quanto cancro do pulmão desapareceria? A mesma aritmética dimensiona hoje o planeamento nacional da prevenção em toda a parte, das estratégias contra o tabaco e a obesidade às classificações de fatores de risco do estudo Global Burden of Disease da OMS, porque o risco relativo por si só diz muito pouco sobre o impacto: um fator de risco pode duplicar as hipóteses de um evento raro e quase não mexer na carga de doença da população, ou aumentar ligeiramente as de um evento comum e ainda assim explicar a maior parte dos casos. A PAF faz de «o fator de risco X é perigoso» «eliminar o fator de risco X evitaria tantos casos por ano», o número de que o caso de negócio de um programa de prevenção realmente precisa. Veja-se a [economia da prevenção](../economia-da-prevenção/) para custear a ação sobre esse número uma vez obtido.

## O cálculo

```
PAF = prevalência_da_exposição × (risco_relativo − 1) / (1 + prevalência_da_exposição × (risco_relativo − 1))

prevalência_da_exposição = proporção da população exposta ao fator de risco (0–1)
risco_relativo           = risco do resultado nos expostos face aos não expostos (p. ex., 2,5 = 2,5×)

casos_atribuíveis = casos_totais × PAF
```

A PAF cresce tanto com a prevalência da exposição como com o risco relativo: um risco relativo moderadamente elevado (digamos 1,5×) associado a uma exposição muito comum pode dar uma PAF maior do que um risco relativo espetacular (digamos 5×) associado a uma exposição rara. É essa a razão toda de existir como número distinto, a par do risco relativo.

## Exemplo resolvido

Um fator de risco está presente em 30 % da população (`prevalência_da_exposição = 0,3`) e multiplica por 2,5 o risco do resultado (`risco_relativo = 2,5`):

```
PAF = 0.3 × (2.5 − 1) / (1 + 0.3 × (2.5 − 1))
    = 0.3 × 1.5 / (1 + 0.3 × 1.5)
    = 0.45 / 1.45
    ≈ 0.3103 (31,0 %)

Com 1.000 casos por ano na população:
casos_atribuíveis = 1,000 × 0.3103 ≈ 310 casos por ano
```

Pouco menos de um terço da carga anual deste resultado é atribuível à exposição: eliminá-la por completo (um teto teórico; nenhuma intervenção real elimina 100 % da exposição) evitaria cerca de 310 em cada 1.000 casos todos os anos.

## Ligação à engenharia de software

A PAF é a versão epidemiológica da pergunta «que fração do volume dos nossos incidentes é atribuível a esta causa de raiz?», o mesmo tipo de pergunta que as equipes fazem ao medir uma classe concreta de implementações ou dependências face ao conjunto de incidentes de produção, em vez de tratar cada incidente como igualmente digno de correção. Uma categoria de causa de raiz que aparece na maioria das implementações e tem apenas um risco relativo moderado de provocar um incidente pode superar uma categoria rara de risco relativo elevado quanto a onde dirigir primeiro o esforço de engenharia: exatamente a observação da PAF, reformulada.

## Armadilhas

- **Somar PAF entre fatores de risco**: as PAF de vários fatores que influenciam o mesmo resultado não somam 100 %; em conjunto podem ultrapassá-lo, porque os fatores interagem e compartilham vias causais. Deve tratar-se cada PAF como «se apenas este fator fosse eliminado», nunca como uma repartição do risco total.
- **Transpor o risco relativo entre populações**: um risco relativo estimado numa população (prevalência de exposição de base diferente, fatores de confundimento diferentes) dá uma PAF enganadora se aplicado à prevalência de exposição de outra população.
- **Confundir a PAF com o risco atribuível nos expostos**: a PAF é ao nível da população e depende da prevalência da exposição; o risco atribuível nos expostos é ao nível individual e não depende dela. Respondem a perguntas diferentes: não use uma para responder à pergunta da outra.

## Fontes

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.

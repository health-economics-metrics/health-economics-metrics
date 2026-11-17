# Alocação Exata de Custos ao Cêntimo

Repartir um montante total (um subsídio compartilhado, uma fatura de infraestrutura, um valor de impacto orçamental) por vários destinatários com aritmética percentual ingénua dá muitas vezes partes que não somam o total original. A alocação exata ao cêntimo é o remédio: um método com inteiros/decimais que trabalha na unidade menor da moeda (o cêntimo) e garante que as partes somam *exatamente* o total, por muito desigual que seja a divisão. Todo o engenheiro de software que precise de que um total repartido bata certo ao cêntimo (processamento salarial, pagamento de subsídios, imputação de serviços compartilhados) precisa deste padrão, não de percentagens em vírgula flutuante.

## Porque é importante

É um padrão fundamental com nome na engenharia de software empresarial: o *Patterns of Enterprise Application Architecture* de Martin Fowler (2002) documenta `Money` e `Allocate` precisamente porque «repartir $100 por três» é um problema que o código ingénuo resolve sempre mal, e em silêncio: o erro aparece quando alguém reconcilia as contas e descobre que as partes ficam um cêntimo aquém (ou além) do total. No trabalho de economia da saúde e finanças do NHS isto não é acadêmico: um valor de impacto orçamental é repartido por local, ano ou entidade; os custos compartilhados de infraestrutura e licenças são distribuídos por departamentos consoante o número de funcionários ou a proporção de atividade. Cada uma destas repartições tem de bater certo exatamente, porque um diretor financeiro que receba partes cuja soma não é o total deixará de confiar em todo o modelo.

## O cálculo

```
Método ingénuo (errado):
  parte_i = arredondar(total × proporção_i / Σ proporções)     — arredonda cada parte em separado

Método exato (maior resto / "largest remainder allocation"):
  1. base_i = chão(total_em_unidade_menor × proporção_i / Σ proporções)   — apenas unidades menores inteiras (cêntimos)
  2. resto = total_em_unidade_menor − Σ base_i                            — cêntimos sobrantes, sempre < número de destinatários
  3. dar 1 unidade menor adicional a cada um dos `resto` destinatários com a
     maior parte fracionária do passo 1, até esgotar o resto

Resultado: Σ parte_i == total sempre, por construção
```

O método exato nunca arredonda uma parte isolada: arredonda *toda a alocação* numa só operação, e é isso que torna verdadeiro o invariante da soma.

## Exemplo resolvido

Repartir $100,00 em três partes iguais (`proporções = [1, 1, 1]`).

Método ingénuo: $100,00 ÷ 3 = $33,333…; arredondando cada resultado em separado ao cêntimo mais próximo obtêm-se $33,33 por destinatário. Soma: $33,33 × 3 = $99,99 — falta um cêntimo, e nenhuma rubrica isolada está suficientemente «errada» para se notar à vista.

Método exato: `base` = $33,33 para os três (9.999 unidades menores no total, de `chão(10.000 / 3) = 3.333` cêntimos por destinatário). Sobra 1 cêntimo (10.000 − 9.999). Esse único cêntimo restante vai para o destinatário com a maior parte fracionária na divisão; qual deles em concreto é um pormenor interno do desempate, em que quem chama não deve apoiar-se. Dois destinatários recebem $33,33 e um recebe $33,34, e as três partes somam exatamente $100,00.

É a aritmética de que a [análise de impacto orçamental](../análise-de-impacto-orçamental/) precisa sempre que um valor total de impacto orçamental tenha de ser repartido por local, grupo populacional ou exercício e conciliado com o total publicado — veja-se a [agregação de custos segura quanto à moeda](../agregação-de-custos-segura-quanto-à-moeda/) para o problema complementar de somar muitas rubricas destas sem desvio.

## Ligação à engenharia de software

É exatamente o «padrão Money» da arquitetura de software empresarial: o padrão fundamental com nome para este tipo concreto de erro, não um truque pontual. Falhas reais de conciliação financeira chegaram à produção por este mesmo erro: uma repartição proporcional calculada em `f64`, arredondada por destinatário e nunca confrontada com o total original. Liga-se diretamente ao módulo de [custo total de propriedade](../custo-total-de-propriedade/) deste repositório, que hoje agrega custos em vírgula flutuante comum ao longo de anos e opções: aplica-se a mesma disciplina de exatidão quando um total de TCO ou de impacto orçamental tem de ser *alocado*, e não apenas somado.

## Armadilhas

- **Percentagem e depois arredondamento em vez do maior resto**: alocar com percentagens em vírgula flutuante e arredondar cada destinatário em separado, o que acumula erros de arredondamento e raramente volta a somar o total, sobretudo com muitos destinatários.
- **Ignorar o expoente da unidade menor da moeda**: assumir que todas as moedas têm 2 casas decimais (o iene japonês tem 0, algumas moedas 3); uma repartição proporcional escrita à mão costuma fixar o 2 e falha em silêncio com outras moedas. A rotina de alocação exata lê o expoente da própria moeda (ISO 4217).
- **Realocar um resto já alocado**: voltar a executar a rotina de alocação sobre o que sobra de uma alocação anterior sem verificação de idempotência, o que pode creditar o mesmo cêntimo duas vezes ao mesmo destinatário.

## Fontes

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — os padrões `Money` e `Allocate`.
- ISO 4217 — a norma de códigos de moeda e fundos, que define o expoente da unidade menor de cada moeda.

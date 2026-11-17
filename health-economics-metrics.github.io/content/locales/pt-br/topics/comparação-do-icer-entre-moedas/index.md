# Comparação do ICER entre Moedas

Comparar um [ICER](../razão-de-custo-efetividade-incremental/) calculado na moeda de um país com o [limiar de disposição para pagar](../limiares-de-disposição-para-pagar/) de outro, ou agregar dados de custos recolhidos num ensaio multinacional, exige um passo de conversão monetária explícito e auditável. Escolher o método de conversão errado pode inverter a decisão de adoção a partir da mesma evidência, ainda que os dados clínicos ou de custos não tenham mudado.

## Porque é importante

As orientações metodológicas da ISPOR para ensaios clínicos multinacionais (Willke e outros, *Health Economics*, 1998) recomendam converter os custos dos recursos com a **paridade de poder de compra (PPC)** — e não com a taxa de câmbio de mercado — ao comparar o valor econômico real dos recursos entre países, e reservar a taxa de câmbio de mercado para o seu verdadeiro fim: modelar fluxos de caixa transfronteiriços efetivos. Confundir ambas é um dos erros metodológicos mais comuns na ATS multinacional, porque quem não leu as orientações vê nelas «uma taxa de câmbio», e a folha de cálculo não impedirá o erro.

## O cálculo

```
icer_na_moeda_local = converter(icer_na_moeda_de_origem, fator_de_conversão)

o fator_de_conversão deve ser:
  fator de conversão PPC    — para comparar o valor econômico real dos recursos
                              entre países (recomendação da ISPOR para ACE multinacional)
  taxa de câmbio de mercado — apenas para pagamentos em numerário transfronteiriços reais

adotar se icer_na_moeda_local < limiar_local
```

A regra de decisão é a [regra do ICER](../limiares-de-disposição-para-pagar/) habitual — `adotar se ICER < λ` —; a questão metodológica deste tema é *que fator de conversão* produz o `icer_na_moeda_local` a que essa regra se aplica.

## Exemplo resolvido

Um medicamento tem um ICER de um ensaio norte-americano de $45.000/QALY. Um país importador hipotético fixou o seu próprio limiar composto em £34.000/QALY (valor hipotético específico do país, apenas para este exemplo; os limiares reais variam por país e mudam com o tempo, e devem citar sempre fonte e data).

**Com um fator de conversão PPC de 0,72** (valor ilustrativo apenas para este exemplo): $45.000 × 0,72 = £32.400/QALY. £32.400 < £34.000 → **adotar**.

**Com a taxa de câmbio de mercado de 0,79** (valor ilustrativo): $45.000 × 0,79 = £35.550/QALY. £35.550 > £34.000 → **rejeitar**.

O mesmo ICER de $45.000/QALY dá uma decisão de adotar quando convertido por PPC e uma de rejeitar quando convertido à taxa de mercado. É uma ilustração concreta de por que as orientações da ISPOR consideram a escolha do fator de conversão metodologicamente relevante: não é um pormenor de arredondamento, nem algo que se deixe implícito numa fórmula de folha de cálculo que ninguém revê.

## Ligação à engenharia de software

É o reflexo, na economia da saúde, de um problema de engenharia bem conhecido: a correção da fixação de preços multimoeda i18n/l10n em software comercial, onde uma página de preços SaaS não deve comparar em silêncio um montante em `$` com um preço em `£`. A garantia ao nível do tipo que um tipo `Money` bem concebido oferece (um método de comparação que recusa comparar moedas diferentes e obriga primeiro a uma conversão explícita) é o paralelo direto, em engenharia de software, do ponto metodológico da economia da saúde: não comparar valores por converter entre moedas, nem deixar o passo de conversão implícito ou por documentar.

## Armadilhas

- **Comparar em silêncio montantes de moedas diferentes**: trabalho de ATS improvisado numa folha de cálculo que subtrai ou compara valores em dólares com valores em libras sem converter primeiro, o tipo de erro que um tipo `Money` consciente da moeda apanha estruturalmente em vez de o deixar como falha silenciosa.
- **Confundir a taxa de câmbio de mercado com a PPC**: o erro metodológico mais comum na ATS multinacional segundo as orientações da ISPOR; os dois valores podem diferir muito e respondem a perguntas diferentes (valor econômico real versus fluxo de caixa real).
- **Não datar a taxa de câmbio nem o índice de PPC usados**: ambos mudam com o tempo, pelo que cada fator de conversão citado deve ter data, tal como este repositório data os restantes valores de referência (preço do carbono do Green Book, valor de uma morte evitada, etc.).

## Fontes

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>

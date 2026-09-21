# Custos de Externalização Evitáveis

Quando um hospital não consegue cumprir objetivos com capacidade interna, compra capacidade a preços premium: horas extra de fim de semana para o seu próprio pessoal, ou externalização de procedimentos para prestadores privados. O valor económico do software que liberta capacidade inclui o **custo evitável desse trabalho a preço premium**.

## Porque é importante

Sob pressão de recuperação eletiva, os hospitais pagam rotineiramente preços de mercado do setor privado (frequentemente 1,2–1,5× o preço do esquema do NHS) ou taxas premium de iniciativa de lista de espera aos seus próprios especialistas para listas de fim de semana. Ao contrário das alegações de capacidade comuns, a externalização evitada **liberta tesouraria**: a fatura ao prestador privado genuinamente não é emitida. Isso torna-a uma das linhas de benefício mais fortes disponíveis para software que aumenta o rendimento interno — e uma das mais fáceis de comprovar, porque a despesa de externalização já é uma linha orçamental visível.

## O cálculo

```
Custo de externalização evitável = atividade internalizada × (preço unitário externalizado
                             − custo marginal interno por caso)

Custo marginal interno: consumíveis + pessoal variável para a atividade extra
— as instalações fixas já estão pagas (ver marginal-vs-average-cost.md).
```

A alegação requer que a capacidade interna libertada absorva realmente a atividade: sessões de bloco operatório, camas e pessoal têm todos de estar disponíveis (a restrição vinculativa governa — teoria das restrições novamente).

## Exemplo resolvido

Um hospital externaliza 800 procedimentos de catarata/ano a £900 cada: £720.000/ano de despesa externa, versus preço do esquema ~£750.

O software de agendamento de bloco operatório (otimização de listas, preenchimento de lacunas de cancelamentos, monitorização do tempo de rotatividade) aumenta suficientemente a utilização interna do bloco operatório para repatriar 500 procedimentos:

```
Custo marginal interno por caso ≈ £350 (consumíveis + pessoal de sessão)
Poupança = 500 × (900 − 350) = £275.000/ano — liberta tesouraria
Externalização remanescente: 300 × £900 = £270.000 (era £720.000)
```

Custo do software £90.000/ano → líquido ≈ **+£185.000/ano em dinheiro bancável**, mais os benefícios de qualidade interna e formação de manter o trabalho internamente.

## Ligação à engenharia de software

O análogo direto é o **prémio de contratantes e consultoria**: quando a capacidade de engenharia interna não consegue cumprir compromissos, as organizações compram capacidade externa a 1,5–3× as taxas internas carregadas. Investimentos em plataformas e produtividade que aumentam o rendimento interno devem reivindicar a despesa de contratantes evitada exatamente como acima — taxa diária externa menos custo marginal interno, multiplicado pelo trabalho repatriado — porque é uma das poucas linhas genuinamente libertadoras de tesouraria num caso de negócio de produtividade de programadores. A mesma ressalva aplica-se: a capacidade interna tem de existir realmente e ser agendada para o trabalho repatriado, ou a alegação é ficção.

## Armadilhas

- **Alegar repatriação sem a cadeia de capacidade completa** — cirurgiões libertados mas sem vagas de bloco operatório (ou engenheiros libertados mas sem largura de banda de gestão de produto) não repatria nada.
- **Comparar o preço externalizado ao custo médio interno** em vez do custo marginal — subestima a poupança, curiosamente; os custos fixos correm de qualquer forma.
- **Assimetria de qualidade/complexidade**: os casos externalizados são frequentemente os simples; repatriá-los muda a combinação de casos interna e os custos unitários.

## Fontes

- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>

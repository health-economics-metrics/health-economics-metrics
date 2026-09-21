# Poupanças Rígidas Libertadoras de Tesouraria (Defesa de Défice)

As poupanças rígidas libertadoras de tesouraria são linhas que um hospital pode ativamente **eliminar do orçamento do próximo mês** por causa do seu software. Para um contabilista financeiro rigoroso — e para um hospital a operar em défice — esta é a única classe de benefício que conta totalmente.

## Porque é importante

Muitos hospitais do NHS operam sob planos de recuperação de défice com escrutínio intenso de cada linha de despesa. Nesse ambiente, os benefícios de capacidade e as melhorias de qualidade — por mais reais que sejam — não fecham a lacuna; só a tesouraria conta. Um produto de software que consegue provar que elimina linhas orçamentais é *autofinanciado da perspetiva do CFO*, o que transforma a aquisição: a conversa deixa de ser "podemos pagar isto?" e passa a ser "podemos permitir-nos não pagar?". Este documento é a ponta afiada, voltada para o défice, das [poupanças libertadoras de tesouraria vs não libertadoras](../poupanças-libertadoras-de-tesouraria-vs-não-libertadoras/).

## O cálculo

O alvo de tesouraria rígida mais fiável do NHS é o **pessoal temporário a preço premium**. Os hospitais cobrem lacunas com pessoal interno de "Banco" (pago a taxas quase-padrão) e pessoal externo de "Agência" (frequentemente 2–3× as taxas do Agenda for Change, limitadas mas frequentemente ultrapassadas para funções escassas).

```
Poupança rígida = turnos premium evitados × (taxa premium − taxa substantiva)
            + horas extra evitadas × prémio de horas extra
            + contratos externos cancelados × valor do contrato

Requisito do mecanismo: nomeie a linha orçamental específica e o gestor que
confirmará a sua redução. Se ninguém conseguir apontar para a linha, não é tesouraria rígida.
```

## Exemplo resolvido

Um enfermeiro de nível 6 perde ~1 hora/turno com sobrecarga administrativa; a documentação regularmente estende-se para além do fim do turno em horas extra, e as enfermarias reservam cobertura extra de Banco para recuperar a documentação.

O software devolve essa hora ao turno agendado em 300 enfermeiros:

```
Horas extra evitadas:   300 enfermeiros × 2,5 horas extra pagas/semana × £8 prémio × 46 semanas
                    ≈ £276.000/ano
Turnos de banco/agência: 15 turnos de recuperação/semana × £180 prémio × 52
                    ≈ £140.400/ano
Total de tesouraria rígida ≈ £416.000/ano face a um custo de licença de ~£150.000
```

Cada libra é auditável face aos sistemas de escalonamento eletrónico e de folha de pagamento — que é exatamente como o benefício deveria ser comprovado, mensalmente, através da [realização de benefícios](../realização-de-benefícios/). (Modelos de força de trabalho do NHS publicados alegaram rácios tão altos como £11+ poupados por £1 gasto neste mecanismo; trate qualquer rácio desses como uma hipótese para os dados de escalonamento *do seu* hospital, não um facto portátil.)

## Ligação à engenharia de software

Os equivalentes de engenharia do prémio de agência são as compras de aflição da própria organização: taxas diárias de contratantes a cobrir lacunas de entrega, horas extra impulsionadas por incidentes, contratos de suporte acelerado, e pânico de preço spot em nuvem. O software de produtividade que alega tesouraria rígida deve visar essas linhas com a mesma disciplina — nomeie a linha orçamental, o responsável, e o mês em que encolhe. Tudo o resto que entrega é capacidade ([capacidade geradora de valor](../capacidade-geradora-de-valor-recuperação-operacional/)) ou qualidade: real, valiosa, e diferente.

## Armadilhas

- **Chamar "poupanças" à capacidade** — o assassino instantâneo de credibilidade com as finanças; ver a taxonomia em [libertador de tesouraria vs não libertador](../poupanças-libertadoras-de-tesouraria-vs-não-libertadoras/).
- **Rácios de modelo de fornecedor apresentados como facto local** (o problema £11:£1) — reconstrua o modelo com os dados de escalonamento do próprio hospital.
- **Confusão único vs recorrente**: um contrato cancelado poupa o seu valor uma vez por ano, não uma vez; um posto eliminado só poupa salário enquanto permanecer eliminado.

## Fontes

- NHS England, reducing agency spend in the NHS. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Digital business case guidance, economic case. <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>

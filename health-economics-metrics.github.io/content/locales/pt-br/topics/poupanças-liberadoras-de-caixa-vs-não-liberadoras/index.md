# Poupanças Liberadoras de Caixa vs Não Liberadoras

As poupanças liberadoras de caixa reduzem a despesa real — uma linha orçamental fica mais pequena. As poupanças não liberadoras de caixa liberam tempo ou capacidade que é *reutilizada* em vez de guardada. Os diretores financeiros dos sistemas de saúde tratam-nas como espécies diferentes, e você também deveria.

## Porque é importante

Este é o teste de honestidade mais afiado aplicado a qualquer caso de negócio digital num sistema de saúde nacional. Os quadros de benefícios do NHS categorizam explicitamente todo o benefício alegado como liberador de caixa, não liberador de caixa, ou qualitativo. A maioria das "poupanças" da saúde digital — minutos do clínico poupados por paciente, documentação mais rápida — não liberam caixa: são valiosas, mas não reduzem o déficit. Um CFO de hospital que enfrenta uma lacuna de financiamento só pode gastar caixa. Ver também [poupanças rígidas liberadoras de caixa](../poupanças-rígidas-liberadoras-de-caixa/).

## O cálculo

```
Poupança liberadora de caixa = linha orçamental antes − linha orçamental depois
                          (tem de ser extraível: um contrato cancelado, enfermaria fechada,
                           despesa em agência reduzida, compra evitada)

Valor não liberador de caixa = tempo libertado × custo unitário desse tempo
                          (avaliado ao custo de oportunidade; o dinheiro NÃO é extraível)
```

O mesmo evento físico (uma hora poupada) cai numa ou noutra categoria dependendo do que acontece a seguir:

```
hora poupada → turno de horas extra/agência cancelado        → libera caixa
hora poupada → clínico vê mais um paciente em espera            → não libera caixa (capacidade)
hora poupada → absorvida em folga, nada muda                  → nenhum benefício
```

## Exemplo resolvido

O software poupa a cada uma de 100 enfermeiras 30 minutos por turno. São 100 × 0,5 × 5 turnos/semana × 46 semanas ≈ 11.500 horas/ano. A um custo de empregador de nível 5 de ~£25/hora, o título tentador é £287.500/ano.

A divisão honesta:

- 20% do tempo cai onde as enfermarias atualmente pagam prémio de banco/agência para cobrir excessos de documentação: 2.300 horas × £35 taxa de agência = **£80.500 liberadoras de caixa** (turnos genuinamente não reservados).
- 60% é redistribuído para cuidados diretos ao paciente: 6.900 horas × £25 = **£172.500 de capacidade não liberadora de caixa** — valor real, reportado separadamente, nunca chamado "poupanças".
- 20% dissipa-se em pausas e interrupções: **£0**. Alegá-lo seria ficção.

Um caso de negócio que apresenta £80,5 mil de caixa + £172,5 mil de capacidade é credível. Um que apresenta £287,5 mil de "poupanças" é rejeitado pelo primeiro contabilista que o lê.

## Ligação à engenharia de software

A mesma lógica governa o ROI dos assistentes de codificação com IA: "30 minutos por programador por dia" é capacidade não liberadora de caixa a menos que o número de pessoal, o gasto em contratantes, ou o custo em nuvem realmente caiam. Reporte as categorias separadamente:

- Liberadora de caixa: contratos de contratantes cancelados, licenças de ferramentas desativadas, gasto em nuvem reduzido.
- Capacidade: funcionalidades lançadas mais cedo (valor via [custo de atraso](../custo-de-atraso/)), atraso queimado.
- Nada: minutos poupados que se fragmentam em mudança de contexto.

Rastreie também *para onde foi realmente o tempo libertado* — a realização de benefícios ([benefits-realization.md](../realização-de-benefícios/)) existe porque os ganhos de capacidade alegados frequentemente evaporam na auditoria.

## Armadilhas

- **Multiplicar minutos por salário e chamar-lhe poupanças** — o pecado canônico.
- **Avaliar o tempo libertado ao custo médio carregado** quando o uso marginal desse tempo é de baixo valor — ver [custo marginal vs médio](../custo-marginal-vs-médio/).
- **Contar a mesma hora duas vezes**: como caixa (turno evitado) e como capacidade (pacientes extra vistos).

## Fontes

- NHS Digital connectivity business case guidance, economic case (benefit categories). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>

# Poupanças Libertadoras de Tesouraria vs Não Libertadoras

As poupanças libertadoras de tesouraria reduzem a despesa real — uma linha orçamental fica mais pequena. As poupanças não libertadoras de tesouraria libertam tempo ou capacidade que é *reutilizada* em vez de guardada. Os diretores financeiros dos sistemas de saúde tratam-nas como espécies diferentes, e você também deveria.

## Porque é importante

Este é o teste de honestidade mais afiado aplicado a qualquer caso de negócio digital num sistema de saúde nacional. Os quadros de benefícios do NHS categorizam explicitamente todo o benefício alegado como libertador de tesouraria, não libertador de tesouraria, ou qualitativo. A maioria das "poupanças" da saúde digital — minutos do clínico poupados por doente, documentação mais rápida — não libertam tesouraria: são valiosas, mas não reduzem o défice. Um CFO de hospital que enfrenta uma lacuna de financiamento só pode gastar tesouraria. Ver também [poupanças rígidas libertadoras de tesouraria](../poupanças-rígidas-libertadoras-de-tesouraria-defesa-de-défice/).

## O cálculo

```
Poupança libertadora de tesouraria = linha orçamental antes − linha orçamental depois
                          (tem de ser extraível: um contrato cancelado, enfermaria fechada,
                           despesa em agência reduzida, compra evitada)

Valor não libertador de tesouraria = tempo libertado × custo unitário desse tempo
                          (avaliado ao custo de oportunidade; o dinheiro NÃO é extraível)
```

O mesmo evento físico (uma hora poupada) cai numa ou noutra categoria dependendo do que acontece a seguir:

```
hora poupada → turno de horas extra/agência cancelado        → liberta tesouraria
hora poupada → clínico vê mais um doente em espera            → não liberta tesouraria (capacidade)
hora poupada → absorvida em folga, nada muda                  → nenhum benefício
```

## Exemplo resolvido

O software poupa a cada uma de 100 enfermeiras 30 minutos por turno. São 100 × 0,5 × 5 turnos/semana × 46 semanas ≈ 11.500 horas/ano. A um custo de empregador de nível 5 de ~£25/hora, o título tentador é £287.500/ano.

A divisão honesta:

- 20% do tempo cai onde as enfermarias atualmente pagam prémio de banco/agência para cobrir excessos de documentação: 2.300 horas × £35 taxa de agência = **£80.500 libertadoras de tesouraria** (turnos genuinamente não reservados).
- 60% é redistribuído para cuidados diretos ao doente: 6.900 horas × £25 = **£172.500 de capacidade não libertadora de tesouraria** — valor real, reportado separadamente, nunca chamado "poupanças".
- 20% dissipa-se em pausas e interrupções: **£0**. Alegá-lo seria ficção.

Um caso de negócio que apresenta £80,5 mil de tesouraria + £172,5 mil de capacidade é credível. Um que apresenta £287,5 mil de "poupanças" é rejeitado pelo primeiro contabilista que o lê.

## Ligação à engenharia de software

A mesma lógica governa o ROI dos assistentes de codificação com IA: "30 minutos por programador por dia" é capacidade não libertadora de tesouraria a menos que o número de pessoal, o gasto em contratantes, ou o custo em nuvem realmente caiam. Reporte as categorias separadamente:

- Libertadora de tesouraria: contratos de contratantes cancelados, licenças de ferramentas desativadas, gasto em nuvem reduzido.
- Capacidade: funcionalidades lançadas mais cedo (valor via [custo de atraso](../custo-de-atraso/)), atraso queimado.
- Nada: minutos poupados que se fragmentam em mudança de contexto.

Rastreie também *para onde foi realmente o tempo libertado* — a realização de benefícios ([benefits-realization.md](../realização-de-benefícios/)) existe porque os ganhos de capacidade alegados frequentemente evaporam na auditoria.

## Armadilhas

- **Multiplicar minutos por salário e chamar-lhe poupanças** — o pecado canónico.
- **Avaliar o tempo libertado ao custo médio carregado** quando o uso marginal desse tempo é de baixo valor — ver [custo marginal vs médio](../custo-marginal-vs-médio/).
- **Contar a mesma hora duas vezes**: como tesouraria (turno evitado) e como capacidade (doentes extra vistos).

## Fontes

- NHS Digital connectivity business case guidance, economic case (benefit categories). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>

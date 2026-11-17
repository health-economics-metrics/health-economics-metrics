# Pegada de Carbono por QALY

O carbono por QALY é um razão de eficiência: as emissões de carbono de uma intervenção (ou as que ela evita) divididas pelos QALY que produz. É o paralelo direto do custo por QALY e permite avaliar a eficiência em carbono a par da eficiência em custos. O «BML ajustado ao carbono» dá mais um passo: monetiza o impacto de carbono com o valor oficial do carbono não transacionado do Green Book do Reino Unido e subtrai-o ao [benefício monetário líquido](../benefício-monetário-líquido/) habitual.

## Porque é importante

O NICE e o NHS England esperam agora que o impacto ambiental seja considerado a par do custo e dos QALY. O NHS tem um compromisso público de emissões líquidas nulas: zero líquido nas emissões diretas até 2040 e em toda a pegada da cadeia de abastecimento até 2045. O manual de avaliação de tecnologias de saúde do NICE (PMG36) cita a sustentabilidade ambiental como uma consideração emergente na avaliação de tecnologias. Para os produtos de saúde digital, isto significa que o carbono se está tornando o quarto pilar do argumento de valor, a par do custo, dos QALY e da [dominância na fronteira de eficiência](../dominância-e-a-fronteira-de-eficiência/): não substitui nenhum deles, mas é uma dimensão que um bom caso de negócio deve reportar cada vez mais.

## O cálculo

```
carbono_por_qaly = emissões_totais_t_co2e / qaly_total
  (um valor negativo significa emissões líquidas evitadas por QALY ganho:
  ganho duplo, melhor saúde e menos carbono)

impacto_carbono_monetizado = emissões_t_co2e × preço_carbono_por_tonelada
  (emissões negativas × preço positivo = custo negativo, ou seja, benefício)

BML_ajustado_ao_carbono = benefício_monetário_líquido − impacto_carbono_monetizado
```

Isto alarga a ideia de fronteira de eficiência custo/QALY com um segundo eixo, o carbono por QALY, com a mesma lógica de «representar cada alternativa e ver qual fica dominada» da [Dominância e a fronteira de eficiência](../dominância-e-a-fronteira-de-eficiência/), mas aplicada ao carbono em vez do custo.

## Exemplo resolvido

Um serviço de telemedicina substitui consultas presenciais, eliminando 5.000 deslocações de carro por ano, de cerca de 8 kg de CO2e cada: evita 40 toneladas de CO2e, expressas como emissões negativas (−40,0 t), e proporciona 25 QALY por ano:

```
carbono_por_qaly = −40.0 / 25.0 = 1,6 t de CO2e evitadas por QALY ganho
```

Com o preço do carbono não transacionado do Green Book (valor ilustrativo, valor central não transacionado de 2023 ≈ £269/t de CO2e; o Green Book atualiza anualmente os valores do carbono, pelo que convém verificá-los antes de os citar numa análise real):

```
impacto_carbono_monetizado = −40.0 × £269 = −£10,760
```

O «custo» negativo de −£10.760 é um benefício de £10.760. Se o benefício monetário líquido da própria intervenção for £500.000:

```
BML_ajustado_ao_carbono = £500,000 − (−£10,760) = £510,760
```

A poupança de carbono reforça o caso em vez de o enfraquecer: é precisamente o ganho duplo que o quadro de emissões negativas foi concebido para tornar visível.

## Ligação à engenharia de software

Este é o ponto de cruzamento atual com a economia da IA e da nuvem: a pegada de carbono da computação usada para treinar e executar modelos de IA já é uma rubrica real nas compras do NHS, porque os contratos de fornecedores do NHS acima de um certo limiar exigem um Plano de Redução de Carbono (Carbon Reduction Plan). A [economia unitária da nuvem](../economia-unitária-da-nuvem/) já acompanha o custo por unidade de produção de computação; o carbono por QALY é o modelo natural de uma futura métrica de «custo de carbono por inferência», que alargaria esse módulo e a economia unitária da inferência à dimensão ambiental, ainda que essa métrica não exista.

## Armadilhas

- **Manipular as fronteiras do sistema**: contar apenas as emissões diretas (âmbito 1) e excluir as da cadeia de abastecimento (âmbito 3), que costumam ser a maior parte da pegada real de um produto de saúde digital.
- **Usar um preço do carbono desatualizado**: o Green Book atualiza anualmente os valores do carbono não transacionado, pelo que um valor em £/t citado deve ter data e não ser apresentado como constante.
- **Tratar a «poupança de carbono» como substituto da «custo-efetividade»**: uma intervenção de baixas emissões mas pouco valor continua a ser um mau uso dos recursos do NHS. O carbono é o quarto pilar a par do custo e dos QALY, não um substituto de qualquer um deles.

## Fontes

- NHS England, "Delivering a Net Zero National Health Service" (2020, atualizado em 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (atualizado anualmente; valor central não transacionado ≈ £269/tCO2e, 2023 — datar cada citação). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>

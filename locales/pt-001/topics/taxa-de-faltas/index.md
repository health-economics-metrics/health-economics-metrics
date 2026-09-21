# Taxa de Faltas (DNA)

A taxa de DNA é a percentagem de consultas marcadas em que o doente nem comparece nem cancela. O clínico, a sala e a vaga são pagos; nada acontece. É a métrica de desperdício mais pura nos cuidados de saúde — e uma das mais corrigíveis por software.

## Porque é importante

Os números do NHS England (2019): as consultas de clínico geral perdidas excedem 15 milhões/ano a ~£30 cada — mais de **£216M/ano** — e as faltas em consultas externas hospitalares rondam 8M/ano (~6,4% das consultas) a uma média de ~**£160** por vaga perdida. Como o custo marginal de um lembrete é ínfimo e o valor recuperado é uma vaga clínica totalmente equipada, a redução de faltas tem alguma da melhor aritmética de ROI na saúde digital, razão pela qual os lembretes por SMS, a remarcação fácil e a sobrelotação preditiva estiveram entre as primeiras vitórias comprovadas da saúde digital.

## O cálculo

```
Taxa de DNA = faltas / consultas marcadas × 100

Valor da redução = consultas × ΔTaxa de DNA × valor por vaga recuperada

valor por vaga recuperada: a vaga é reabastecida (valor de atividade / redução
de lista de espera) ou não é (tempo de pessoal parcialmente reutilizável) — o mecanismo
importa, como com bed-days-saved.md.
```

## Exemplo resolvido

Um departamento de consultas externas: 200.000 consultas/ano, taxa de DNA 8%. Um serviço de lembretes-mais-remarcação (SMS com remarcação num toque, informação de transporte, formatos acessíveis) reduz as faltas para 5,5%.

```
Vagas recuperadas = 200.000 × 0,025 = 5.000/ano
Reabastecidas a partir da lista de espera a um valor médio de consulta externa de ~£160:
  5.000 × £160 = £800.000/ano de atividade recuperada
Custo do serviço: 200.000 × £0,40 = £80.000/ano

Retorno ≈ 10:1, mais 5.000 doentes em lista de espera vistos mais cedo
(ver waiting-list-impact.md e referral-to-treatment.md).
```

A dimensão do efeito (2,5 pontos) é realista: os ensaios de lembretes mostram consistentemente uma redução relativa de DNA de 25–40%.

## Ligação à engenharia de software

- **Isto é um problema de sistemas de agendamento**: lembretes, remarcação self-service, preenchimento automático de lista de espera a partir de cancelamentos, e modelos de previsão de faltas que orientam a sobrerreserva direcionada. Cada um é engenharia de software comum com um caso económico invulgarmente nítido.
- **O análogo de engenharia**: faltas em capacidade reservada — vagas de CI reservadas-mas-inativas, capacidade em nuvem reservada, salas de reunião, painéis de entrevista. A economia transfere-se: um lembrete automatizado barato (ou libertação automática de reservas não usadas) recupera capacidade comprometida cara.
- **Antevisão de ética de previsão**: os modelos de faltas treinados em dados de comparência codificam privação e barreiras de acesso; usá-los para *despriorizar* prováveis não comparecentes amplifica a desigualdade, usá-los para *apoiar* a comparência (ajuda de transporte, alternativas telefónicas) reduz-na. Ver [alcance e equidade](../alcance-e-equidade/).

## Armadilhas

- **Contar cancelado-e-remarcado como valor recuperado duas vezes.**
- **Avaliar vagas recuperadas que não são reabastecidas** — uma vaga vazia com um lembrete enviado ainda está vazia.
- **Perseguir a DNA até zero**: os últimos pontos de DNA são doentes que enfrentam barreiras reais; abordagens punitivas (alta após N faltas) reduzem a métrica ao abandonar os doentes.

## Fontes

- NHS England, "Missed GP appointments costing NHS millions" (2019). <https://www.england.nhs.uk/2019/01/missed-gp-appointments-costing-nhs-millions/>
- DNA cost summaries. <https://www.deep-medical.ai/cost-of-missed-nhs-appointments/>

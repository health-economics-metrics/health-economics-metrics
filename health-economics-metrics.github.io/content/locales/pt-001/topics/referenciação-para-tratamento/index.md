# Referenciação para Tratamento (RTT)

A referenciação para tratamento é o tempo decorrido desde a referenciação de um clínico geral até ao início do tratamento liderado por especialista. A Constituição do NHS define o padrão: **92% dos doentes deveriam iniciar o tratamento dentro de 18 semanas**. O RTT é a métrica operacional politicamente mais visível do NHS inglês.

## Porque é importante

Os hospitais que não cumprem os objetivos de RTT enfrentam escrutínio regulamentar, intervenção, e dano reputacional; a lista de espera nacional é um número de primeira página. Cada semana que um doente espera é saúde perdida (esperar num estado de saúde pior — ver a aritmética QALY abaixo) e frequentemente custo ganho (as condições deterioram-se; ver [intervenção mais precoce](../intervenção-mais-precoce/)). O software que poupa tempo em qualquer ponto da via referenciação-para-tratamento — triagem, tempo de resposta de diagnósticos, capacidade de clínica, agendamento — mitiga diretamente as consequências operacionais e financeiras de falhar o padrão, razão pela qual o impacto no RTT é uma linha de benefício de primeira classe nos casos de negócio digitais do NHS.

## O cálculo

```
Desempenho RTT = doentes tratados dentro de 18 semanas / total tratado × 100
Custo em saúde do tempo de espera por doente = duração da espera × (utilidade_tratado − utilidade_espera)

Vista de via: RTT = Σ durações de fase (triagem de referenciação → primeira consulta →
diagnósticos → decisão → tratamento) — melhore a fila mais longa, não a fase
mais ocupada (ver flow-metrics.md).
```

## Exemplo resolvido

Uma especialidade trata 5.000 doentes de via/ano; espera média 24 semanas; utilidade de espera 0,68 vs tratado 0,80.

A triagem digital mais os protocolos direto-para-teste removem 5 semanas de fila pura:

```
Ganho de QALY = 5.000 × (5/52) × (0,80 − 0,68) = 57,7 QALYs/ano
Monetizado a £20.000–£30.000/QALY (ver willingness-to-pay-thresholds.md):
  ≈ £1,15M–£1,73M/ano de valor em saúde
```

— mais o hospital passa de incumprir para cumprir o padrão das 18 semanas, o que tem um valor de governação que nenhuma folha de cálculo capta totalmente.

## Ligação à engenharia de software

O RTT é uma **métrica de tempo de espera sobre uma fila multifásica** — a versão hospitalar do tempo de espera do commit-à-produção (ver [métricas DORA](../métricas-dora/)). O método de melhoria é idêntico: instrumente todas as fases, encontre onde o tempo de calendário se acumula (são quase sempre as transferências e as filas, não o trabalho clínico), e remova os estados de espera. Vitórias típicas do software: a triagem eletrónica que encaminha referenciações em horas em vez de lotes semanais, o envio de resultados de diagnóstico em vez de consultas de seguimento, e os critérios automatizados de direto-para-teste. Avalie a melhoria com o [custo de atraso](../custo-de-atraso/) expresso em QALYs/semana.

## Armadilhas

- **Melhorar uma fase que não é a restrição** — cortar as esperas da primeira consulta enquanto as filas de diagnóstico crescem apenas move a acumulação.
- **Manipulação**: os resets de via e as pausas de relógio podem melhorar o RTT reportado sem tratar ninguém mais cedo; audite a distribuição subjacente.
- **Alegar a melhoria de toda a via** para uma única ferramenta quando várias mudanças aconteceram juntas — a atribuição precisa de um comparador.

## Fontes

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>

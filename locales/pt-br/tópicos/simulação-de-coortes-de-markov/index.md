# Simulação de Coortes de Markov

Um modelo de coortes de Markov é a técnica de modelação padrão da ATS para intervenções cujos efeitos se desenrolam ao longo de vários períodos (ciclos) em vez de ocorrerem de uma só vez. Uma coorte hipotética começa toda num estado de saúde e, em cada ciclo, um conjunto fixo de probabilidades de transição desloca frações da coorte entre os estados; os custos e os QALY acumulam-se em cada ciclo na proporção da fração da coorte que ocupa cada estado e são depois descontados ao seu valor atual. Todo o engenheiro de software que modele um caso de negócio de saúde digital plurianual, em que usuários ou pacientes passam entre estados como «envolvido», «desistente» ou «cancelado» ao longo do tempo, está construindo esta mesma estrutura.

## Porque é importante

A maioria das decisões reais sobre tecnologias de saúde não é uma comparação de custo e resultado num único período. Uma doença crônica progride, recai, responde ao tratamento ou mata, ao longo de anos — e uma [análise custo-efetividade](../análise-custo-efetividade/) de um só período não o consegue representar. As submissões ao NICE, ICER e CADTH de intervenções para doenças crônicas avaliadas através da [avaliação de tecnologias de saúde](../avaliação-de-tecnologia-de-saúde/) são quase sempre construídas como modelos de coortes de Markov com horizonte temporal vitalício, porque a alternativa — modelar todas as trajetórias individuais possíveis de pacientes — não é resolúvel em larga escala. Um modelo de Markov ao nível da coorte troca parte do realismo ao nível individual (tem dificuldade em representar a memória de estados anteriores, daí o «Markov»: o futuro depende apenas do estado atual) por um modelo transparente, auditável e rápido o suficiente para ser executado milhares de vezes numa [análise de sensibilidade probabilística](../análise-de-sensibilidade-probabilística/).

## O cálculo

```
Atualização da coorte num ciclo (vetor linha × matriz de transição):
  estado_novo[j] = soma_i estado[i] * matriz_transição[i][j]

Custo de um ciclo:
  custo_ciclo = soma_s estado[s] * custo_por_ciclo[s]

QALY de um ciclo:
  qaly_ciclo = soma_s estado[s] * utilidade[s] * duração_ciclo_anos

Simulação completa ao longo de `ciclos` ciclos, descontada à `taxa_de_desconto`:
  custo_descontado_total = soma_{t=0}^{ciclos-1} custo_ciclo(estado_t) / (1 + taxa_de_desconto)^t
  qaly_descontado_total  = soma_{t=0}^{ciclos-1} qaly_ciclo(estado_t) / (1 + taxa_de_desconto)^t
  em que estado_0 = distribuição inicial, estado_{t+1} = avançar_coorte(estado_t, matriz_transição)
```

Descontar cada ciclo ao valor atual usa exatamente a fórmula do [desconto e preferência temporal](../desconto-e-preferência-temporal/), aplicada ciclo a ciclo em vez de ano a ano.

## Exemplo resolvido

**Clínico**: um modelo de 2 estados — `Saudável` e `Falecido` — em que 10 % da coorte morre em cada ciclo e `Falecido` é um estado absorvente (probabilidade de permanecer em si próprio de 1,0; sem este laço, a massa da coorte desapareceria após um ciclo em `Falecido`). A coorte começa toda `Saudável`, custa £1.000 por ciclo enquanto `Saudável` (£0 se `Falecido`) e ganha 0,8 QALY por ano enquanto `Saudável`. Simulam-se 3 ciclos anuais com a taxa de desconto de 3,5 % do NICE:

```
Ciclo 0: estado = [1.00, 0.00] (100 % Saudável)
  custo = £1,000.00, qaly = 0.800, fator de desconto = 1.000000
  descontado: custo = £1,000.00, qaly = 0.8000

Ciclo 1: estado = [0.90, 0.10] (90 % Saudável, 10 % Falecido)
  custo = £900.00, qaly = 0.720, fator de desconto = 0.966184
  descontado: custo = £869.57, qaly = 0.6957

Ciclo 2: estado = [0.81, 0.19] (81 % Saudável, 19 % Falecido)
  custo = £810.00, qaly = 0.648, fator de desconto = 0.933511
  descontado: custo = £756.14, qaly = 0.6049

Custo descontado total ≈ £2,625.71
QALY descontado total ≈ 2.1006
```

O estado de cada ciclo é o do ciclo anterior passado pela matriz de transição: 90 % dos 90 % que continuam `Saudáveis` no ciclo 1 continuam `Saudáveis` no ciclo 2 (0,9 × 0,9 = 0,81), enquanto os restantes 19 % já morreram (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Note-se que a coorte nunca esvazia por completo o estado `Saudável`: com uma mortalidade constante de 10 % por ciclo e sem regresso, a proporção `Saudável` decresce geometricamente e não chega a zero em nenhum número finito de ciclos.

## Ligação à engenharia de software

Para ver como se usa um modelo de ATS de vários ciclos numa avaliação real, veja-se a [avaliação de tecnologias de saúde](../avaliação-de-tecnologia-de-saúde/) — o caso de referência que fixa a taxa de desconto, a fonte de utilidades e o horizonte temporal que um modelo de Markov submetido tem de usar.

Um modelo de coortes de Markov é, estruturalmente, uma máquina de estados com transições probabilísticas, executada um número fixo de passos, descontando o valor em cada passo. A mesma forma simula a retenção de uma coorte de usuários e as suas transições de estado no tempo — veja-se as [métricas DORA](../métricas-dora/) para a versão de fiabilidade: «que fração do sistema está em estado degradado neste período e quanto custa». Em concreto:

- **Modelar retenção/abandono** é um modelo de coortes de Markov com estados como «ativo», «em risco» e «perdido»: uma matriz de transição mensal fixa, executada 12 ou 24 ciclos mensais, dá o número esperado de usuários ativos (e a receita) em qualquer mês futuro, tal como `Saudável`/`Falecido` dá os sobreviventes esperados.
- **Fiabilidade e economia de incidentes**: os estados do sistema (saudável, degradado, em baixo) podem ser modelados da mesma forma, com um «custo por ciclo» do dano por indisponibilidade que se acumula enquanto o sistema ocupa os estados degradado/em baixo, o que converte o argumento da frequência de incidentes num argumento de custo descontado comparável com o custo do trabalho de fiabilidade que alteraria as probabilidades de transição.
- **Estados absorventes como estados terminais**: `Falecido` no modelo clínico é exatamente a «subscrição cancelada» ou o «offline de forma permanente» de um modelo de software; ambos precisam de uma probabilidade explícita de permanecer em si próprios de 1,0, ou a simulação perde massa em silêncio.

## Armadilhas

- **Probabilidades de transição que não somam 1 por linha.** Uma linha que some mais ou menos do que 1 faz com que a massa da coorte «escape» ou «se gere» em silêncio em cada ciclo; é preciso verificar sempre as somas por linha antes de confiar na saída do modelo, porque a própria estrutura do modelo não assinala este erro.
- **Duração de ciclo demasiado grosseira para a dinâmica real da doença.** Um ciclo anual para um estado que muda em semanas subestima as transições a meio do ciclo; convém escolher uma duração de ciclo curta em relação à rapidez real do processo modelado.
- **Esquecer o laço do estado absorvente.** Um estado absorvente (morte, cancelamento permanente) precisa de uma probabilidade de permanecer em si próprio de exatamente 1,0. Se for omitida, a massa da coorte evapora-se desse estado após um ciclo e os custos acumulados ou a perda de QALY ficam subestimados.
- **Dar o modelo por validado só porque corre.** Um modelo de coortes de Markov com probabilidades de transição verosímeis pode continuar a ser estruturalmente errado (estados em falta, comportamento absorvente incorreto); convém validá-lo face a referências epidemiológicas conhecidas (por exemplo, se a sobrevivência a 5 anos simulada coincide com as curvas de sobrevivência publicadas) antes de confiar na saída.

## Fontes

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>

# Tempo do Profissional

O tempo do profissional é o recurso mais escasso na maioria dos sistemas de saúde. Medir o valor de poupar a um clínico minutos por dia requer mudar da aritmética salarial simples para o **custo de oportunidade e a capacidade do sistema**: dentro de um sistema de saúde nacional, o tempo de um profissional é um gargalo operacional rígido, não uma linha de custo que se flexiona.

## Porque é importante

Não se consegue rapidamente criar mais clínicos gerais, especialistas, ou enfermeiros especializados — os pipelines de formação correm 5–15 anos, e as vagas são crónicas. Assim, uma hora de tempo de profissional poupada não é "salário evitado" (o profissional continua a ser pago); é *capacidade de gargalo libertada*, e a capacidade de gargalo vale o que o gargalo produz. É por isto que as alegações de "poupa 10 minutos por consulta" são simultaneamente a linha mais comum e a mais mal-precificada na saúde digital.

## O cálculo

Três níveis de avaliação, em honestidade crescente:

```
1. Base salarial:      horas × taxa salarial carregada (custos unitários PSSRU)
                      — o que o tempo custa, não o que produz
2. Base de resultado:  horas → consultas/procedimentos permitidos × valor de esquema
                      (ver national-tariff-and-unit-costs.md)
3. Base de gargalo:   se esta função controla toda uma via, horas × valor do
                      rendimento de via libertado (teoria das restrições)
```

Desconto de fragmentação: o tempo poupado em fragmentos abaixo de um quantum utilizável (ex.: 3 minutos espalhados por uma clínica) redistribui-se mal; aplique um fator de utilização declarado.

## Exemplo resolvido

A transcrição ambiente poupa a um clínico geral 2 minutos por consulta, 30 consultas/dia: 60 minutos/dia, ou **220 horas/ano por clínico geral** ao longo de 220 dias de trabalho.

```
Base salarial:  220 × £80 (hora carregada de clínico geral, região PSSRU) ≈ £17.600/clínico geral/ano
Base de resultado: 60 min/dia = 5 consultas extra de 12 minutos/dia
              = 1.100 consultas extra/clínico geral/ano × £42 ≈ £46.200/clínico geral/ano
              — ou as mesmas consultas absorvidas como horas extra reduzidas e
              consultas mais seguras e sem pressa (linha qualitativa)
```

Ao longo de uma federação de 50 clínicos gerais, a capacidade em base de resultado vale ~£2,3M/ano — desde que os minutos sejam reais (medidos, não alegados pelo fornecedor), consolidados (consultas inteiras, não fragmentos), e redistribuídos (ver [libertador de tesouraria vs não libertador](../poupanças-libertadoras-de-tesouraria-vs-não-libertadoras/)).

## Ligação à engenharia de software

O tempo de engenheiro sénior comporta-se de forma idêntica: é o gargalo através do qual fluem designs, revisões, e incidentes, pelo que se avalia pelo que o gargalo controla, não pelo salário. A mesma avaliação de três níveis aplica-se a qualquer alegação de "a IA poupa a cada programador X minutos" — a aritmética salarial lisonjeia números pequenos; as perguntas honestas são se os minutos se consolidam em blocos utilizáveis e o que a capacidade libertada realmente produz. Ver [otimização de recursos a jusante](../otimização-de-recursos-a-jusante/) para o multiplicador quando a hora poupada pertence à pessoa por quem todos os outros esperam.

## Armadilhas

- **Minutos × salário = poupanças** — a inflação canónica; é capacidade, e apenas à utilização declarada.
- **Ignorar o problema do quantum**: 12 × poupanças de 5 minutos ≠ uma hora livre.
- **Avaliar todas as funções da mesma forma**: uma hora do gargalo de via vale muitas vezes mais do que uma hora de uma função não-porta.

## Fontes

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>

# Retenção da Força de Trabalho

A economia da retenção da força de trabalho quantifica o que a rotatividade de pessoal custa a um sistema de saúde — recrutamento, integração, cobertura de vagas — e, portanto, quanto vale o software que reduz o esgotamento administrativo. O esgotamento causado por tarefas administrativas repetitivas de dados é um motor primário da rotatividade de pessoal e do absentismo por doença no NHS.

## Porque é importante

Quando um clínico sai, o hospital paga três vezes: para recrutar um substituto (publicidade, taxas de agência, entrevistas), para o integrar (meses de produtividade reduzida, supervisão), e para cobrir a vaga entretanto — tipicamente com pessoal de agência ou locum a 2–3× as taxas substantivas do Agenda for Change (ver [custos de externalização evitáveis](../custos-de-externalização-evitáveis/) e [poupanças rígidas libertadoras de tesouraria](../poupanças-rígidas-libertadoras-de-tesouraria-defesa-de-défice/)). Como os custos de rotatividade são tesouraria real, as melhorias de retenção estão entre os poucos benefícios de força de trabalho que um diretor financeiro pode bancar. A fricção administrativa está consistentemente entre os motores mais citados do esgotamento clínico, o que a torna um custo abordável por software.

## O cálculo

```
Custo por saída = custo de recrutamento + custo de integração/rampa de produtividade
                + prémio de cobertura de vaga × duração da vaga

Custo anual de rotatividade = número de pessoal × taxa de rotatividade × custo por saída

Valor do software  = número de pessoal × Δtaxa de rotatividade × custo por saída
                   + redução de absentismo por doença × custo de cobertura/dia
```

A cadeia causal tem duas ligações estimadas — software → esgotamento/fricção, e esgotamento → rotatividade — pelo que comprove ambas (inquéritos de pessoal antes/depois; associações publicadas esgotamento-atrito) e mantenha o Δ alegado modesto.

## Exemplo resolvido

Um hospital emprega 1.200 enfermeiras; rotatividade 11%/ano. Custo por saída:

```
Recrutamento ≈ £4.500;  integração/rampa ≈ £6.000
Cobertura de vaga: 4 meses × 0,6 ETC coberto por prémio de agência ≈ £8.000
Total ≈ £18.500 por saída
Custo de rotatividade basal = 1.200 × 0,11 × 18.500 ≈ £2,44M/ano
```

O software de carga de documentação (avaliações pré-preenchidas, início de sessão único, ditado) move plausivelmente a rotatividade 1 ponto percentual:

```
Valor = 1.200 × 0,01 × 18.500 = £222.000/ano relevante para tesouraria
```

Uma alegação de 1 ponto apoiada por pontuações de fricção de inquérito de pessoal é credível; uma alegação de 4 pontos não é. Execute o [tornado](../análise-de-sensibilidade/) sobre Δrotatividade: domina tudo o resto no modelo.

## Ligação à engenharia de software

A aritmética de retenção de engenharia é idêntica e pior documentada: substituir um engenheiro sénior custa 6–12 meses de salário carregado (recrutamento, rampa, contexto perdido), pelo que uma organização de 200 pessoas a 15% de atrito queima milhões anualmente em rotatividade. O investimento em experiência de programador ([SPACE e DevEx](../space-e-devex/)) é o análogo direto do alívio de carga de documentação para enfermeiras — e deveria ser justificado da mesma forma: pontuações de fricção medidas, um efeito modesto alegado sobre o atrito, custo por saída dos próprios dados financeiros. A disciplina de economia da saúde a copiar é *custear o saída honestamente* em vez de discutir se as pessoas "realmente" saem por causa de ferramentas.

## Armadilhas

- **Atribuir todo o movimento de rotatividade à sua intervenção** — os mercados de trabalho movem a rotatividade muito mais do que o software; use grupos de controlo ou pelo menos ajuste de tendência setorial.
- **Dupla contagem**: as poupanças de retenção e as poupanças de gasto em agência sobrepõem-se (a cobertura de vaga *é* gasto em agência); reconcilie as linhas.
- **Ignorar o atraso**: o atrito impulsionado pelo esgotamento responde a mudanças de fricção ao longo de 1–2 anos, não no próximo trimestre.

## Fontes

- NHS England, reducing agency spend. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Staff Survey (burnout and intention-to-leave data). <https://www.nhsstaffsurveys.com/>

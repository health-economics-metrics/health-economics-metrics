# Défice de QALY e Modificadores de Severidade

O défice de QALY mede quanta saúde futura uma doença retira aos doentes em comparação com a população geral. O NICE usa-o para aplicar **modificadores de severidade**: quanto mais doente a população, mais vale cada QALY ganho — até 1,7× o limiar padrão.

## Porque é importante

Desde o manual de 2022 do NICE, a severidade é um multiplicador explícito sobre o valor dos ganhos de saúde, substituindo o antigo prémio de fim de vida. Uma tecnologia para uma condição grave é julgada face a um limiar efetivo até ~£51.000/QALY em vez de £30.000. Se o seu software serve uma população gravemente afetada (insuficiência cardíaca avançada, doença mental grave), o modificador de severidade pode ser a diferença entre um caso económico financiável e não financiável — e precisa da aritmética de défice para o alegar.

## O cálculo

Duas medidas, calculadas ao longo da vida restante com o padrão de cuidados atual:

```
Défice absoluto      = QALYs_população_geral − QALYs_com_condição
Défice proporcional  = Défice absoluto / QALYs_população_geral
```

Pesos do NICE 2022 (aplica-se o que der o peso mais alto):

```
Peso ×1,0: absoluto < 12 e proporcional < 0,85
Peso ×1,2: absoluto ≥ 12 ou proporcional ≥ 0,85
Peso ×1,7: absoluto ≥ 18 ou proporcional ≥ 0,95
```

O peso multiplica o ΔE (ou equivalentemente o limiar): o λ efetivo torna-se £24mil–£36mil a ×1,2 e £34mil–£51mil a ×1,7.

## Exemplo resolvido

Doentes com uma condição agressiva, idade média 60. A população geral aos 60 espera 14,2 QALYs descontados; com a condição sob cuidados atuais, 2,1.

```
Défice absoluto      = 14,2 − 2,1 = 12,1  (≥ 12 → qualifica-se para ×1,2)
Défice proporcional  = 12,1 / 14,2 = 0,852 (≥ 0,85 → também ×1,2)
```

O ICER da sua plataforma de monitorização é £26.000/QALY — acima do julgamento médio padrão de £20mil–£30mil, no limite. Com o peso ×1,2: ICER efetivo = 26.000 / 1,2 ≈ **£21.700/QALY** — confortavelmente financiável. O cálculo do défice acabou de mover a decisão.

## Ligação à engenharia de software

A ponderação de severidade é uma versão formal de algo que as organizações de engenharia fazem por instinto: gastar mais por unidade de melhoria nos sistemas em pior estado. O padrão transferível — calcule o "défice de SLO" de cada serviço (quão abaixo da sua linha de base saudável esperada funciona, absoluta e proporcionalmente), e pondere o valor da correção em conformidade. Isto justifica, com aritmética em vez de argumentos, por que o sistema legado a arder recebe mais investimento por hora poupada do que um saudável. Também carrega a mesma lição de governação: publique os pesos *antes* da reunião de priorização, ou toda a equipa alegará severidade.

## Armadilhas

- **Calcular o défice face à linha de base errada**: é medido sob o *padrão de cuidados atual*, não a história natural não tratada.
- **Sensibilidade à idade**: o défice depende fortemente da idade da população (doentes mais jovens têm mais QALYs a perder → défice absoluto mais elevado); use a distribuição de idade real da população tratada.
- **Assumir que o modificador se aplica noutro lugar** — é um mecanismo do NICE (Inglaterra); outros organismos de HTA tratam a severidade de forma diferente (ou nem por isso).

## Fontes

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>

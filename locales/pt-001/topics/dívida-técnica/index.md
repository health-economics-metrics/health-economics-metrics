# Dívida Técnica

A dívida técnica é o custo futuro implícito de decisões passadas expeditas numa base de código: o trabalho de correção devido (**capital**) e o arrasto contínuo que exerce sobre a entrega (**juros**). Métodos de quantificação como o SQALE transformam-na de metáfora em passivo com custo.

## Porque é importante

Não quantificada, a dívida técnica é uma queixa; quantificada, é um caso de negócio. Referenciais do setor (CAST Appmarq, 1.400 aplicações / 550M LOC): historicamente ≈ **$3,61 de capital de dívida técnica por linha de código**, com bases de código típicas a carregar um rácio de dívida de 15–20% do custo de reconstrução, face a uma barra de saúde comummente usada de ≤5% (nota "A" do SonarQube). O enquadramento de economia da saúde encaixa precisamente: a dívida é uma *condição crónica* — não tratada, progride, os seus "juros" compõem-se como entrega mais lenta e taxas de defeito mais altas, e a correção compete por capacidade contra o trabalho de funcionalidades exatamente como a prevenção compete com o tratamento.

## O cálculo

```
Capital SQALE   = Σ sobre violações (tempo de correção) × taxa de custo do programador
Rácio de dívida técnica (TDR) = custo de correção / custo de reconstrução × 100
                    (notas SonarQube: A ≤ 5%, B ≤ 10%, C ≤ 20%, D ≤ 50%)

Juros (o número que justifica o pagamento):
  juros/ano = Δ velocidade de entrega × valor por unidade de velocidade
                + Δ taxa de defeitos × custo por defeito
Caso de pagamento  = VA(juros evitados ao longo do horizonte) − custo de correção
                (descontado — ver discounting-and-time-preference.md)
```

O capital declara o passivo; os **juros** criam o caso de investimento. Pagar £500mil de capital para evitar £40mil/ano de juros é um mau negócio; para evitar £400mil/ano, excelente.

## Exemplo resolvido

Uma camada de integração de registos clínicos de 400 mil LOC: capital SQALE 3.800 horas × £75 = **£285mil**; TDR ≈ 12% (nota C). Juros medidos: as equipas que tocam nesta camada mostram tempos de ciclo 40% mais longos e taxas de falha de alterações 2× face à linha de base do património. A camada absorve 6.000 horas-programador/ano:

```
Juros ≈ 6.000 × 0,40 × £75      = £180.000/ano (arrasto de velocidade)
         + 12 falhas extra × £8.000 = £96.000/ano (retrabalho/incidentes)
         ≈ £276.000/ano

Corrigir os piores 30% do capital (£85mil) visando pontos críticos → redução
de juros modelada 60%: poupa ~£166mil/ano. Retorno ≈ 6 meses.
```

O direcionamento a pontos críticos importa: os juros da dívida concentram-se onde a frequência de alteração × densidade de dívida atinge o pico — corrigir dívida raramente tocada não compra nada, como tratar uma condição que nunca teria progredido ([economia da prevenção](../economia-da-prevenção/)).

## Ligação à engenharia de software

As importações da economia da saúde que melhoram os argumentos de dívida técnica: expresse o património como um **inventário de encargo** (estilo [DALY](../ano-de-vida-ajustado-por-incapacidade/) — onde estão os anos-engenharia saudáveis perdidos?); justifique o pagamento com matemática de progressão, honestamente (normalmente custo-efetivo, não poupador de custos); pondere a correção dos piores sistemas pelo [défice de severidade](../défice-de-qaly-e-modificadores-de-severidade/); e submeta grandes propostas de correção com uma análise de compensação que sobrevive às regras dos [custos a jusante evitados](../custos-a-jusante-evitados/) — ponderada por probabilidade, descontada, contada uma vez.

## Armadilhas

- **Reportar apenas o capital**: um número grande e assustador sem estimativa de juros não justifica nada.
- **Cifras de dívida geradas por ferramenta tomadas literalmente**: o SQALE conta violações de regras; perde a dívida arquitetural (o tipo caro) e conta trivialidades.
- **Utopismo de dívida zero**: o nível de dívida ótimo não é zero — a dívida é alavancagem; a questão é a taxa de juro.
- **"A reescrita evita tudo isso"**: as propostas de reescrita têm de passar as mesmas regras de compensação — custo contrafactual, probabilidade, desconto.

## Fontes

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>

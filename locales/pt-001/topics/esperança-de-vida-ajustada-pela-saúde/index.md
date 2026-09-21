# Esperança de Vida Ajustada pela Saúde (HALE)

A HALE é um resumo ao nível populacional: o número de anos que uma pessoa pode esperar viver *em saúde plena*, descontando os anos passados em doença ou incapacidade. A HALE global à nascença era cerca de 61,9 anos face a uma esperança de vida de 73,3 (OMS, dados de 2019) — a humanidade vive a sua última década, em média, em saúde menos do que plena.

## Porque é importante

A HALE é a métrica-estrela da política de saúde nacional e global — o numerador dos objetivos de "envelhecimento saudável" e a lacuna que expõe (esperança de vida menos HALE) é o encargo que a prevenção, a intervenção precoce e a gestão de doenças crónicas visam fechar. As estratégias de saúde digital ao nível ministerial são justificadas em termos de HALE; um portefólio de aplicações, serviços de rastreio, e programas de monitorização acaba por convergir aqui.

## O cálculo

O cálculo padrão é o **método de Sullivan**:

```
HALE_idade_x = Σ (pessoas-ano da tabela de vida em cada idade ≥ x × proporção em saúde plena)
             / sobreviventes na idade x

"proporção em saúde plena" = 1 − Σ (prevalência_condição × peso de incapacidade)
```

Entradas: uma tabela de vida padrão mais prevalência e pesos de incapacidade para estados de saúde (dos dados do Global Burden of Disease). A HALE relaciona-se com os [DALYs](../ano-de-vida-ajustado-por-incapacidade/) — o encargo populacional de DALY e a lacuna de HALE são duas vistas da mesma saúde perdida.

## Exemplo resolvido

Um programa nacional de hipertensão digital: 500.000 inscritos, o controlo médio da pressão arterial melhora o suficiente para cortar a incidência de AVC em 0,2 pontos percentuais/ano. Modelado ao longo da vida da coorte, os AVCs evitados poupam 15.000 anos ponderados por incapacidade (AVI a peso 0,32 mais APV de AVCs fatais).

```
Contribuição de HALE ≈ 15.000 anos saudáveis / 500.000 pessoas
                  ≈ 0,03 anos (≈ 11 dias) de HALE por pessoa inscrita
```

Onze dias parece pouco — mas à escala populacional é como as métricas nacionais realmente se movem: os ministérios compram milhões de pequenos ganhos por pessoa. Esta aritmética também mostra por que **o alcance domina**: uma intervenção duas vezes mais eficaz com um décimo da inscrição move a HALE cinco vezes menos. Ver [alcance e equidade](../alcance-e-equidade/).

## Ligação à engenharia de software

A HALE é um padrão de métrica de saúde de frota: **vida de serviço esperada × proporção dessa vida passada saudável**. Uma equipa de plataforma pode calcular a "esperança de vida de serviço saudável" em todo o seu património — anos que se espera que um serviço funcione, descontados pelo tempo passado em estados degradados, obsoletos, ou de incidente (pesos do défice de SLO). Reformula a fiabilidade de disponibilidade pontual para saúde ao longo da vida, e direciona a correção para os sistemas que puxam a HALE do património para baixo.

## Armadilhas

- **A HALE move-se lentamente e multicausalmente** — nenhuma intervenção única "move a HALE" de forma mensurável; alegue a contribuição modelada, não a estatística nacional.
- **Os dados de prevalência atrasam-se** anos; os ganhos recentes não aparecerão na HALE oficial.
- **Comparar a HALE entre países** com medição de estado de saúde diferente é traiçoeiro; use-a longitudinalmente dentro de um sistema.

## Fontes

- WHO indicator registry: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Global Burden of Disease study (IHME). <https://www.healthdata.org/research-analysis/gbd>

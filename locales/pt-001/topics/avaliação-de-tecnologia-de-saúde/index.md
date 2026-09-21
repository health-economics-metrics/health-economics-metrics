# Avaliação de Tecnologia de Saúde (HTA)

A HTA é o processo formal e institucionalizado pelo qual os sistemas de saúde decidem se uma tecnologia — medicamento, dispositivo, ou software — vale a pena pagar. Combina evidência de efetividade clínica com avaliação económica sob uma metodologia publicada e obrigatória.

## Porque é importante

Se vende para um sistema de saúde nacional, um organismo de HTA pode literalmente decidir o seu acesso ao mercado. Conhecer o processo local é conhecer o seu verdadeiro regulador de valor:

- **NICE (Inglaterra)**: avaliações estatutárias sob um *caso de referência* definido — QALYs a partir do [EQ-5D](../eq-5d/), [perspetiva](../perspetiva-de-análise/) NHS+PSS, [desconto](../desconto-e-preferência-temporal/) de 3,5%, [ASP](../análise-de-sensibilidade-probabilística/) obrigatória — julgado face a £20mil–£30mil/QALY com [modificadores de severidade](../défice-de-qaly-e-modificadores-de-severidade/); tecnologias altamente especializadas até £100mil+ com ponderação.
- **ICER (EUA, não-governamental)**: relatórios de evidência com um *referencial de preço de benefício de saúde* — o preço ao qual um produto seria custo-efetivo a $100mil–$150mil por QALY/evLYG — usado como alavanca negocial; mais "alertas de sustentabilidade" de impacto orçamental.
- **Canadá (CADTH → CDA-AMC)**: revisões de reembolso a ≈CAD$50mil/QALY; historicamente pediu cortes de preço em ~95% das submissões.

## O cálculo

O poder da HTA não é uma fórmula mas um **método mandatado**: cada submissão calcula o mesmo [ICER](../rácio-de-custo-efetividade-incremental/) sob as mesmas regras de caso de referência, pelo que os resultados são comparáveis entre produtos e anos. O caso de referência especifica a medida de resultado, o instrumento de utilidade, a perspetiva, a seleção de comparador, a taxa de desconto, o horizonte temporal, e a análise de incerteza — removendo todo o grau de liberdade que um patrocinador poderia manipular.

## Exemplo resolvido

Uma terapêutica digital submete-se a uma avaliação estilo NICE:

```
Modelo: ΔC = +£450/doente, ΔE = +0,03 QALYs → ICER = £15.000/QALY ✓ abaixo de £20mil
Verificações do caso de referência:
  utilidades do EQ-5D-5L com conjunto de valores do Reino Unido       ✓
  comparador = via de cuidados atual (não "nenhum tratamento")       ✓
  ASP: 71% de probabilidade custo-efetiva a £20mil                   ✓ (reportado)
  modificador de severidade: défice abaixo dos limites ×1,2          — nenhum alegado
Recomendação: comissionamento de rotina, com recolha de dados do mundo real.
```

A própria análise preferida do patrocinador mostrou £9.000/QALY; o caso de referência empurrou-a para £15.000 ao forçar o comparador honesto. Essa lacuna é *por que* os casos de referência existem.

## Ligação à engenharia de software

O artefacto transferível é o **caso de referência interno**: um método mandatado para todos os casos de negócio de ferramentas/plataformas — comparador declarado, custos unitários padrão (ver [tarifa nacional e custos unitários](../tarifa-nacional-e-custos-unitários/) para o padrão), taxa de desconto fixa, análise de sensibilidade obrigatória, modelo padrão. Um "dossiê estilo AMCP para ferramentas" submetido a um conselho de plataforma torna as propostas comparáveis e a manipulação visível, exatamente como a HTA faz para a medicina. Comece mais pequeno do que o NICE fez: um modelo de duas páginas mais um livro de preços publicado vence não ter nenhum padrão.

## Armadilhas

- **Tratar a HTA como uma formalidade após a autorização regulamentar** — a autorização CE/UKCA/FDA diz que um produto é seguro; a HTA decide se *vale a pena comprar*. Barreira diferente, evidência diferente.
- **Construir o modelo económico depois do ensaio** — a geração de evidência deveria ser desenhada de trás para a frente a partir dos requisitos do caso de referência.
- **Ignorar diferenças de jurisdição**: um ICER financiável nos EUA a $120mil/QALY falha no NICE a £30mil; planeie a evidência e o preço por mercado.

## Fontes

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>

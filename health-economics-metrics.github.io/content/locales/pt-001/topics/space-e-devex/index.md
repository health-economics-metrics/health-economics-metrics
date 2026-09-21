# SPACE e DevEx

O SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow) e o DevEx (loops de feedback, carga cognitiva, estado de fluxo) são quadros para medir a produtividade dos programadores **multidimensionalmente** — a resposta do campo à descoberta de que nenhuma métrica única sobrevive ao contacto com a realidade.

## Porque é importante

Ambos os quadros codificam a mesma lição duramente aprendida que a investigação de resultados em saúde aprendeu décadas antes: um número único (linhas de código; pressão arterial) representa mal uma realidade multidimensional, e otimizá-lo produz manipulação, não melhoria. O SPACE prescreve combinar métricas de pelo menos três dimensões, misturando telemetria com autorrelato — estruturalmente idêntico a como o [EQ-5D](../eq-5d/) perfila cinco dimensões antes de qualquer índice ser calculado, e por que os [PROMs](../resultados-relatados-pelo-doente/) existem ao lado das medidas clínicas. A satisfação/bem-estar também não é uma guarnição suave: alimenta a economia da [retenção da força de trabalho](../retenção-da-força-de-trabalho/), onde o atrito é precificado em meses de salário carregado.

## O cálculo

Nenhum dos quadros é uma fórmula; ambos são desenhos de medição:

```
Regra SPACE: ≥ 3 dimensões, ≥ 1 métrica percetual (inquérito) + ≥ 1 métrica de sistema (telemetria)

Dimensões DevEx e emparelhamentos de exemplo:
  loops de feedback  → duração de CI (telemetria) + "esperar parece lento" (inquérito)
  carga cognitiva    → localizabilidade de documentação, tempo de integração + esforço percebido
  estado de fluxo    → densidade de reuniões/interrupções + foco autorrelatado

Índices derivados (ex.: o DXI da DX) mapeiam compostos de inquérito para tempo:
alegação de fornecedor ≈ 13 min/programador/semana por ponto de índice — trate como
um referencial de fornecedor a validar localmente, não uma constante da natureza.
```

## Exemplo resolvido

Uma equipa de plataforma justifica um investimento em DevEx (aceleração de CI + revisão de documentação) para 300 programadores:

```
Base: p75 de CI = 28 min; inquérito "perco o foco à espera de compilações": 62% concorda
Depois: p75 de CI = 9 min;  concordância 24%

Tempo recuperado (telemetria): 6 compilações/dia × 19 min × 0,4 utilizável = ~45 min/dia/programador
Valor de capacidade: 300 × 0,75h × 220d × £60/h ≈ £2,97M/ano (não libertador de tesouraria —
ver cash-releasing-vs-non-cash-releasing.md; o fator de utilização de 0,4 é o desconto
de fragmentação de practitioner-time.md)
A corroboração percetual é o que torna a alegação de telemetria credível — qualquer
uma sozinha é manipulável; juntas triangulam.
```

## Ligação à engenharia de software

Este documento *é* o lado do software; a transferência corre em direção à economia da saúde. Um "ano-engenheiro ajustado pela qualidade" — tempo ponderado por um índice de experiência padronizado — é a construção do [QALY](../ano-de-vida-ajustado-pela-qualidade/) aplicada à capacidade de engenharia, e herda as regras do QALY: pesos de um instrumento validado (inquérito consistente, pontuação publicada), obtidos *antes* da comparação, nunca afinados para lisonjear uma ferramenta favorecida. A lição [SF-6D vs EQ-5D](../eq-5d/) também se aplica: instrumentos diferentes dão números sistematicamente diferentes, pelo que nunca compare índices DevEx entre instrumentos de diferentes fornecedores.

## Armadilhas

- **Colapso de métrica única**: os painéis que reduzem o SPACE a uma única pontuação recriam o problema que o quadro existe para prevenir.
- **Métricas de atividade como resultados**: commits, PRs, e story points são Atividade — a dimensão que o SPACE avisa explicitamente ser a mais manipulável (analogia em saúde: contar procedimentos, não recuperações).
- **Fadiga de inquérito e efeitos Hawthorne**: instrumentos trimestrais de toque leve vencem a interrogação semanal.
- **Comparar equipas**: como tabelas de liga hospitalares sem ajuste de combinação de casos — as diferenças de contexto (domínio, carga legada, sobreaviso) dominam.

## Fontes

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>

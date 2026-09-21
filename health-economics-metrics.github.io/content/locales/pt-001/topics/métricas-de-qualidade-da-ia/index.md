# Métricas de Qualidade da IA

Métricas para a correção do conteúdo gerado por IA: precisão face à verdade fundamental, **fidelidade/fundamentação** (todas as afirmações são apoiadas pelo contexto fornecido?), e **taxa de alucinação** (que fração dos resultados contém conteúdo não apoiado ou falso?). Em contextos de saúde, estas não são subtilezas de qualidade — são taxas de dano.

## Porque é importante

Os padrões de referência no domínio médico mediram taxas de alucinação **acima de 60% para LLM não fundamentados** em tarefas médicas (alguns modelos abertos >80%), enquanto a fundamentação, a recuperação e os modos de raciocínio reduzem drasticamente as taxas (por exemplo, o modo de pensamento do GPT-5 reduziu as alucinações no HealthBench de 3,6% para 1,6% num padrão de referência). Uma dosagem alucinada ou uma citação fabricada num fluxo de trabalho clínico é um **evento de informação falsa com uma via de dano** — pertence ao braço de danos de qualquer modelo económico, avaliada como os falsos positivos da [economia do rastreio](../economia-do-rastreio/): cada uma desencadeia custo a jusante (agir com base em informação errada, trabalho de verificação, exposição médico-legal, confiança erodida).

## O cálculo

```
Taxa de alucinação = resultados com conteúdo não apoiado/falso / total de resultados
  intrínseca:  contradiz o contexto fornecido
  extrínseca:  fabricação não verificável para além do contexto

Fidelidade (estilo RAGAS) = afirmações apoiadas na resposta / total de afirmações na resposta
Precisão/recall de contexto = qualidade da recuperação que alimenta o gerador

Ponderação económica — nem todas as alucinações custam o mesmo:
  custo esperado de dano = Σ sobre tipos de erro (taxa × P(não detetado) ×
                       P(agido) × custo por erro agido)
  A camada de revisão humana define P(não detetado) — e o seu custo
  também pertence ao modelo (minutos do revisor × volume).
```

## Exemplo resolvido

Um assistente de IA de codificação clínica processa 200.000 episódios/ano; a auditoria mostra que 2% dos resultados contêm um erro de codificação material; os codificadores humanos apanham 85% desses:

```
Erros que chegam à submissão = 200.000 × 0,02 × 0,15 = 600/ano
Custo por erro não detetado (média de faturação errada + exposição a auditoria) ≈ £250
Custo de erro esperado         = 600 × 250 = £150.000/ano
Custo de revisão (2 min × 200mil × £0,50/min)  = £200.000/ano

Caso de melhoria: a fundamentação por recuperação reduz a taxa de erro para 0,8%
→ erros não detetados 240, custo de erro £60.000 (−£90mil/ano); o tempo
  de revisão também pode diminuir (amostragem em vez de revisão total) — o
  investimento em qualidade paga-se antes de qualquer alegação de velocidade.
```

## Ligação à engenharia de software

Trate a qualidade do modelo como a economia da cobertura de testes, com disciplina de grau de saúde: os **conjuntos de avaliação são o seu ensaio clínico** — pré-registados, representativos da *sua* combinação de casos, renovados contra a deriva; **a fundamentação vence a escala em tarefas factuais** (recuperação mais prompting com citação obrigatória é normalmente a redução de alucinações mais barata disponível — cf. [economia unitária de inferência](../economia-unitária-de-inferência/) para o seu custo em tokens); e **publique o ponto de operação**: como [sensibilidade/especificidade](../avaliação-de-ia-clínica/), "97% fiel" não significa nada sem a distribuição de tarefas e o limiar de deteção. O cálculo da camada de revisão acima é a mesma matemática de [NNT/NNH](../número-necessário-para-tratar/) que qualquer barreira de rastreio.

## Armadilhas

- **Transplante de referência para produção**: as taxas de alucinação são extremamente dependentes da tarefa; a sua combinação de casos é o único padrão que conta.
- **Revisão humana sem custo atribuído**: "um clínico verifica tudo" reduz o benefício a metade e tem de aparecer na linha de custo — e a vigilância decai (complacência com a automação), pelo que P(não detetado) aumenta com a confiança.
- **Otimizar a qualidade média enquanto o risco de cauda carrega o dano**: uma nota de alergia fabricada pesa mais do que mil frases estranhas; pondere os erros pela consequência, conforme a fórmula do dano esperado.

## Fontes

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>

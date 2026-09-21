# Retorno do Investimento em IA

O ROI de IA é o retorno mensurável em P&L atribuível a iniciativas de IA. O padrão de referência sóbrio: a investigação "GenAI Divide" de 2025 do MIT constatou que, apesar de $30–40 mil milhões de investimento empresarial em IA generativa, **~95% dos pilotos não mostraram retorno mensurável em P&L** — e os 5% bem-sucedidos partilhavam hábitos identificáveis.

## Porque é importante

Os sistemas de saúde têm um nome para o padrão do piloto de IA: **pilotite** — o cemitério do NHS de aplicações promissoras pilotadas para sempre e nunca escaladas. As conclusões do MIT mapeiam-se de forma limpa sobre o que a avaliação de tecnologia de saúde já sabe: as alegações de valor precisam de pontos finais pré-especificados, a atribuição precisa de comparadores, e "toda a gente sente que está a ajudar" não é uma linha de benefício. A minoria bem-sucedida nos dados do MIT concentrou-se em automação de retaguarda com bases de custo rastreáveis, e as **ferramentas compradas foram bem-sucedidas ~67% das vezes versus construções internas a cerca de um terço dessa taxa** — priores que pertencem a todos os casos de investimento em IA (ver [construir vs comprar](../construir-vs-comprar/)).

## O cálculo

```
ROI de IA = (benefício atribuível − custo total de IA) / custo total de IA

Custo total de IA = licenças/inferência (ver inference-unit-economics.md)
              + integração + preparação de dados + avaliação
              + redesenho de fluxo de trabalho + governação/garantia
              (a licença é tipicamente a minoria do denominador)

Benefício atribuível: medido face a uma base de referência ou controlo, classificado
tesouraria / capacidade / qualidade conforme cash-releasing-vs-non-cash-releasing.md
```

## Exemplo resolvido

Um grupo hospitalar implementa IA para dois casos de uso:

```
Caso de uso A — redação de cartas clínicas (retaguarda, rastreável):
  base de referência: transcrição externalizada £380mil/ano
  depois:    contrato de transcrição cancelado; tempo de revisão do clínico +£60mil
  custo de IA:  £120mil/ano tudo incluído
  ROI = (380mil − 60mil − 120mil) / 120mil ≈ 167% — libertador de tesouraria, auditável ✓

Caso de uso B — "copiloto de IA para clínicos" (amplo, não rastreado):
  alegação de benefício: "poupa tempo em 4.000 funcionários" — sem base de referência captada
  efeito de P&L medido: nenhum demonstrável
  → o balde dos 95%, independentemente de realmente ajudar
```

A diferença não é a qualidade da IA — é se o benefício tinha uma **base de referência, um responsável e uma linha orçamental** ([realização de benefícios](../realização-de-benefícios/)).

## Ligação à engenharia de software

O manual em forma de HTA para investimento em IA: **faseie a evidência como os [níveis do NICE ESF](../quadro-de-padrões-de-evidência-do-nice/)** — evidência de nível demonstrativo para ferramentas de baixo risco, pilotos controlados antes de gasto organizacional, com portas de implementação pré-registadas (padrão de [listagem provisória com prazo](../via-rápida-diga-da-alemanha/) do DiGA); **conte a evitação de custos como a economia da saúde conta a evitação de procura** — real apenas quando uma linha orçamental específica se move; e **avalie o próprio piloto com [EVPI](../valor-esperado-da-informação-perfeita/)** — um piloto que não pode mudar a decisão de implementação vale £0. Para a fatia específica de ferramentas de programadores, ver [produtividade dos programadores com IA](../produtividade-dos-programadores-com-ia/).

## Armadilhas

- **Difusão do benefício**: valor espalhado finamente por milhares de utilizadores é impossível de medir por construção; escolha casos de uso com bases de referência concentradas e rastreáveis.
- **Custeio apenas por licença**: a integração, avaliação e redesenho de fluxo de trabalho normalmente dominam o verdadeiro denominador.
- **Roubo de atribuição**: IA implementada juntamente com redesenho de processos reivindica toda a diferença.
- **Escalada de piloto afundado**: prolongar pilotos falhados porque parar admite fracasso — a data de encerramento tem de ser pré-acordada.

## Fontes

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>

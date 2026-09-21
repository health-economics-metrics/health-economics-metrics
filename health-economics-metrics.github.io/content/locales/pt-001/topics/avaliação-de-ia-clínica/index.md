# Avaliação de IA Clínica

As estatísticas centrais para avaliar um modelo de IA clínica ou diagnóstico: sensibilidade, especificidade, AUROC, valores preditivos, e número necessário para rastrear. A lição económica central: **uma excelente AUROC não torna uma implementação custo-efetiva** — o valor depende do ponto de operação, da prevalência, e do que acontece a jusante de cada resultado positivo.

## Porque é importante

Os reguladores (FDA, MHRA) autorizam a IA clínica num **ponto de operação bloqueado** — um par específico de sensibilidade/especificidade (ex.: o primeiro sistema autónomo de retinopatia diabética autorizado pela FDA: sensibilidade 87,2%, especificidade 90,7% no seu ensaio pivotal). Os economistas da saúde perguntam então a pergunta a que as métricas de precisão não conseguem responder: na prevalência da sua população de implementação, quanto *custa* cada deteção, e vale a pena agir sobre ela? Uma avaliação económica de IA de rastreio de retinopatia (npj Digital Medicine 2024) mostrou que maior precisão sozinha não garantia custo-efetividade uma vez contados os custos de referenciação.

## O cálculo

```
Sensibilidade = VP / (VP + FN)        — dos verdadeiramente positivos, proporção detetada
Especificidade = VN / (VN + FP)        — dos verdadeiramente negativos, proporção desimpedida
AUROC       = P(o modelo classifica um positivo aleatório acima de um negativo aleatório)
              0,5 acaso … 1,0 perfeito; independente do limiar — e, portanto,
              insuficiente para decisão de implementação

VPP = VP / (VP + FP)   ← dependente da prevalência (Bayes); colapsa quando raro
VPN = VN / (VN + FN)

NNR  ≈ 1 / (prevalência × sensibilidade)       — rastreados por cada caso verdadeiro encontrado
Custo por caso verdadeiro = custo do programa / VP      — o resultado económico final
```

## Exemplo resolvido

O mesmo modelo, dois contextos — sensibilidade 90%, especificidade 93%:

```
Clínica especializada (prevalência 20%):
  VPP = (0,9×0,2)/(0,9×0,2 + 0,07×0,8) = 0,18/0,236 ≈ 76%  → 3 em 4 alertas reais

Cuidados primários (prevalência 1%):
  VPP = (0,9×0,01)/(0,9×0,01 + 0,07×0,99) = 0,009/0,0783 ≈ 11,5%
  → 8 em 9 alertas falsos; investigação a £350 cada:
  custo por caso verdadeiro = (0,009 + 0,0693) × 350 / 0,009 ≈ £3.045 por caso encontrado
```

Modelo idêntico, economia radicalmente diferente — razão pela qual a avaliação específica do local é um tema regulamentar e porque "o nosso modelo tem 0,95 de AUROC" é o início de um caso económico, não o fim. Ver [economia do rastreio](../economia-do-rastreio/) para o cálculo completo do programa.

## Ligação à engenharia de software

Para engenheiros que constroem ou compram IA clínica: **envie a matriz de confusão na prevalência de implementação**, não apenas a curva ROC; **deixe que o limiar seja uma decisão económica** — a troca sensibilidade/especificidade deve minimizar o custo esperado (casos perdidos × custo de perda vs falsos alarmes × custo de investigação), não maximizar uma estatística de referência; e reconheça a mesma matemática nas suas próprias ferramentas — sistemas de alerta, detetores de anomalias e scanners de segurança são testes diagnósticos sobre fluxos de eventos de baixa prevalência, com fadiga de alertas como o [NNH](../número-necessário-para-tratar/). As atualizações de modelo que deslocam o ponto de operação reabrem a economia (e a autorização regulamentar — ver [avaliação regulamentar de IA](../avaliação-regulamentar-de-ia/)).

## Armadilhas

- **Compras por AUROC**: comparar modelos por AUROC quando vão operar a um limiar — compare no ponto de operação.
- **VPP de prevalência de ensaio citado para implementação no mundo real** — o clássico; recalcule sempre na prevalência local.
- **Viés de espectro**: modelos validados em casos óbvios vs controlos saudáveis têm desempenho superior no meio ambíguo que domina a prática.
- **Sem custeio da via a jusante**: cada positivo desencadeia uma investigação; um modelo é uma intervenção na economia da *via inteira*.

## Fontes

- Diagnostic accuracy measures reference. <https://www.medcalc.org/en/manual/roc-curves.php>
- Economic evaluation of AI retinopathy screening, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (NNT foundations). <https://pubmed.ncbi.nlm.nih.gov/3374545/>

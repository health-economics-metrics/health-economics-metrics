# Retorno do Investimento (ROI)

O ROI é o rácio do ganho líquido face ao dinheiro investido. É a métrica que a engenharia e as finanças já partilham — a economia da saúde acrescenta a disciplina que faz uma alegação de ROI sobreviver ao escrutínio: perspetiva declarada, comparador, horizonte, e categorias de benefício.

## Porque é importante

O ROI é a língua franca dos detentores de orçamento, e a saúde pública também o usa: a revisão histórica de Masters et al. encontrou um **ROI médio de 14,3:1** para intervenções de saúde pública (cada £1 devolve ~£14 à economia e ao sistema de saúde mais amplos) — um número amplamente usado para argumentar o gasto em prevenção. Mas esse 14:1 é uma cifra *societal e de longo horizonte*; o ROI de um CFO hospitalar é de perspetiva do pagador e de 1–3 anos. A maioria das disputas de ROI são na verdade disputas de perspetiva não declarada.

## O cálculo

```
ROI = (Benefícios − Custos) / Custos      (frequentemente × 100%)

Período de retorno = Custos / benefício líquido anual
```

Uma alegação de ROI é subespecificada sem quatro declarações:

1. **Perspetiva** — cujos benefícios contam? (ver [perspetiva de análise](../perspetiva-de-análise/))
2. **Comparador** — versus que alternativa? (ver [custo de oportunidade](../custo-de-oportunidade/))
3. **Horizonte** — ao longo de quanto tempo, e [descontado](../desconto-e-preferência-temporal/)?
4. **Classe de benefício** — libertador de tesouraria, capacidade, ou qualitativo? (ver [libertador de tesouraria vs não libertador](../poupanças-libertadoras-de-tesouraria-vs-não-libertadoras/))

## Exemplo resolvido

Sistema de escalonamento eletrónico, custo £500.000 ao longo de 3 anos.

```
Libertador de tesouraria:  redução de turnos de agência    £450.000
Capacidade:                tempo administrativo de gestor de enfermaria libertado £600.000 (avaliado, não bancado)
Qualitativo:                satisfação do pessoal, segurança  não monetizado

ROI financeiro estrito  = (450.000 − 500.000)/500.000 = −10%
ROI económico           = (1.050.000 − 500.000)/500.000 = +110%
```

Ambos os números são verdadeiros. Um fornecedor que cita "+110% de ROI" a um CFO que só pode bancar £450mil perderá confiança; apresentar ambos, rotulados, ganha-a. A mesma divisão protege um defensor interno quando as finanças auditam os benefícios dois anos depois.

## Ligação à engenharia de software

Toda a proposta de ferramentas tem um diapositivo de ROI; quase nenhuma declara os quatro parâmetros. A falha mais comum é a mistura de categorias: os ganhos de capacidade (minutos de programador) apresentados como retorno financeiro. Estruture o ROI de IA/plataforma como o exemplo resolvido acima — linha de tesouraria, linha de capacidade, linha qualitativa — e acrescente [análise de sensibilidade](../análise-de-sensibilidade/) sobre os números moles. Para a verificação de realidade de P&L especificamente sobre ROI de IA, ver [retorno do investimento em IA](../retorno-do-investimento-em-ia/).

## Armadilhas

- **Branqueamento de perspetiva**: benefícios societais ao longo de uma década citados a um detentor de orçamento com um horizonte de 12 meses.
- **Bruto em vez de líquido**: "devolve £3M" sobre um gasto de £2M é 50% de ROI, não 300%.
- **Maximização de rácio**: denominadores minúsculos produzem ROIs espetaculares em investimentos triviais; classifique os portefólios por VAL ou [benefício monetário líquido](../benefício-monetário-líquido/), use o ROI como filtro.
- **Sem auditoria de benefícios**: o ROI previsto sem monitorização de [realização de benefícios](../realização-de-benefícios/) é uma promessa, não um resultado.

## Fontes

- Masters R, et al. "Return on investment of public health interventions: a systematic review." J Epidemiol Community Health 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
- HM Treasury Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>

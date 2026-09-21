# Tempo de Internamento (TI)

O tempo de internamento é o número de dias desde a admissão hospitalar até à alta — a métrica central de eficiência de fluxo dos cuidados de internamento. As médias agudas do Reino Unido rondam 4–5 dias; cada dia em excesso consome uma cama escassa e expõe o doente a riscos adquiridos no hospital.

## Porque é importante

O TI impulsiona quase tudo na economia hospitalar aguda: capacidade de camas, rendimento eletivo, fluxo de emergência, pessoal. Reduzir o TI médio em mesmo frações de um dia à escala liberta uma capacidade enorme (ver [dias de cama poupados](../dias-de-cama-poupados/)). O TI é também um sinal de qualidade em ambas as direções — demasiado longo sugere falha de processo (diagnósticos atrasados, papelada de alta, esperas de cuidados sociais); demasiado curto pode significar alta prematura, que aparece mais tarde como [reinternamentos](../taxa-de-reinternamento/).

## O cálculo

```
TI (por episódio)  = data de alta − data de admissão
TI médio           = dias de cama ocupados / altas (reporte a média E a mediana;
                   o TI é fortemente assimétrico à direita por outliers de longa duração)

As comparações requerem ajuste de combinação de casos (idade, diagnóstico, acuidade),
ou está a medir quem o hospital admite, não como funciona.
```

A Lei de Little liga as variáveis de fluxo: `camas ocupadas = taxa de admissão × TI médio` — a mesma lei que governa as filas de software (ver [métricas de fluxo](../métricas-de-fluxo/)).

## Exemplo resolvido

Um hospital admite 40 doentes médicos de emergência/dia a TI médio de 6,0 dias: 240 camas permanentemente ocupadas (40 × 6). O software de coordenação de alta (rastreio de tarefas, automação de farmácia-para-levar, reserva de transporte) corta a cauda não-clínica das estadias em 0,4 dias em média.

```
Camas necessárias = 40 × 5,6 = 224 → 16 camas libertadas continuamente
            = 16 × 365 = 5.840 dias de cama/ano
```

Avalie os 5.840 dias de cama por mecanismo (reabastecimento/fecho/folga) conforme [dias de cama poupados](../dias-de-cama-poupados/). Note o que se moveu: não a medicina, mas a *espera* — o doente estava clinicamente apto; o sistema ainda estava a fazer papelada. Isso é um problema de filas, e o software é bom em problemas de filas.

## Ligação à engenharia de software

O TI é o tempo de ciclo do hospital, e o manual de melhoria é idêntico ao trabalho de fluxo de entrega: instrumente as fases (admissão → tratamento → clinicamente apto → efetivamente com alta), encontre onde o tempo se acumula (são as passagens de testemunho), remova os estados de espera em vez de acrescentar capacidade. A coorte "clinicamente apto para alta mas ainda a ocupar uma cama" é a versão hospitalar de um PR aprovado mas não integrado. Oportunidades diretas de software: orquestração de tarefas de alta, tempo de resposta de diagnóstico, prescrição eletrónica de medicação de alta, integração de referenciação para cuidados sociais.

## Armadilhas

- **Reportar apenas a média** — os outliers dominam; uma média em queda pode esconder uma cauda de longa duração crescente.
- **Sem ajuste de combinação de casos** em alegações antes/depois: os limiares de admissão mudam sazonal e seculamente.
- **Redução de TI que reaparece como reinternamento** — combine sempre as alegações de TI com dados de reinternamento a 30 dias.

## Fontes

- OECD, length of hospital stay indicator. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>

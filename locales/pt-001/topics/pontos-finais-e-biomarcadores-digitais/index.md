# Pontos Finais e Biomarcadores Digitais

Um biomarcador digital é uma medida fisiológica ou comportamental objetiva recolhida através de sensores (velocidade da marcha a partir de um telemóvel, sono a partir de um wearable, tremor a partir de acelerometria). Um ponto final digital é essa medida elevada a **resultado de ensaio** — usado para demonstrar o efeito do tratamento. A promoção de "dados que o dispositivo emite" para "evidência que um regulador aceita" percorre uma escada de validação definida.

## Porque é importante

Os pontos finais de ensaio tradicionais são episódicos (visitas à clínica a cada 3 meses) e caros; os pontos finais digitais são contínuos, ecológicos (vida real, não desempenho em clínica), e baratos por observação — podem encolher os ensaios, detetar efeitos mais cedo, e permitir estudos descentralizados. A dificuldade é a validação: o quadro aceite (alinhado com a FDA, três pilares) requer **verificação/validação analítica** (o sensor mede a quantidade física com precisão), **validação clínica** (a medida reflete o estado clínico que alega refletir), e um **aspeto significativo de saúde** demonstrado (os doentes importam-se com o que capta). Um ponto final sem os três é telemetria, não evidência.

## O cálculo

```
Validação analítica: concordância com referência (ver wearable-validation.md —
                       MAPE, CCC, Bland-Altman)
Validação clínica:   correlação/discriminação face a âncoras clínicas
                       (validade de grupos conhecidos, capacidade de resposta à mudança)
Economia de ponto final:
  eventos detetados por doente-ano (contínuo) vs amostragem por visita
  potência do ensaio: as medidas contínuas reduzem o tamanho da amostra quando
  a variância entre visitas domina — N ∝ σ²/Δ², e σ² cai com amostragem densa
```

## Exemplo resolvido

Um ensaio de Parkinson considera a velocidade da marcha a partir de um sensor de pulso versus pontuações clínicas trimestrais:

```
Ponto final clínico:  4 medições/doente/ano, ruído elevado dia-a-dia
Ponto final digital: ~200 medições passivas/doente/ano

A variância da estimativa de mudança anual cai ~5× com amostragem densa →
a dimensão de efeito detetável a potência fixa melhora ~√5 ≈ 2,2×, ou
equivalentemente o tamanho da amostra encolhe ~40–60% para a mesma hipótese.
A £25.000 por doente inscrito, reduzir 200 doentes ≈ £5M poupados
por ensaio — o caso comercial para o investimento em validação
(possivelmente £1–2M em si mesmo) ao longo do pipeline de um patrocinador.
```

## Ligação à engenharia de software

Os pontos finais digitais são uma disciplina de engenharia de dados vestida de roupa clínica: **proveniência e versionamento** (as atualizações de algoritmo a meio do estudo ameaçam a comparabilidade — o problema do [PCCP](../avaliação-regulamentar-de-ia/) em forma de ensaio; bloqueie a versão e valide a ponte); **design de dados em falta** (as lacunas de tempo de uso são informativas, não aleatórias — ver [validação de wearables](../validação-de-dispositivos-vestíveis/); as escolhas de imputação são afirmações científicas); e **decisões de divisão edge/nuvem** que mudam que sinal bruto é sequer recuperável mais tarde. As equipas que tratam o pipeline de medição como software regulado desde o primeiro dia — testado, versionado, documentado — compram a credibilidade dos seus pontos finais barato; retroajustar a validação num pipeline construído à pressa é onde os programas de pontos finais digitais morrem.

## Armadilhas

- **Correlação com a clínica como validação completa**: corresponder a uma medida de clínica imperfeita prova herança, não verdade; valide face ao aspeto significativo de saúde.
- **Risco regulamentar de ponto final inédito**: um ponto final sem precedentes pode ser cientificamente superior e ainda assim afundar uma submissão — envolva os reguladores cedo (existem programas de qualificação).
- **Desajuste sensor-população**: validação em pulsos jovens e saudáveis, implementação em doentes idosos com tremor e diferenças de pigmentação que o PPG nunca viu.
- **Deriva de características**: retreinar o algoritmo de marcha em novos dados redefine silenciosamente o ponto final a meio do estudo.

## Fontes

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>

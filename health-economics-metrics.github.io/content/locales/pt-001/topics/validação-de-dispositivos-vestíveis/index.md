# Validação de Dispositivos Vestíveis

As métricas de validação quantificam quão bem as medições de um dispositivo vestível concordam com um padrão-ouro clínico (ECG para frequência cardíaca, polissonografia para sono): **MAPE**, correlação de concordância, concordância de Bland–Altman — mais as métricas operacionais que controlam a qualidade dos dados no mundo real: **conformidade do tempo de uso** e **completude dos dados**.

## Porque é importante

A validação é a pré-condição para tudo a jusante: um dispositivo que não pode provar concordância com a medição de referência não pode ancorar [pontos finais digitais](../pontos-finais-e-biomarcadores-digitais/), suportar [faturação RPM](../economia-da-monitorização-remota-de-doentes/), ou carregar alegações clínicas. Os limiares aceites do campo para a frequência cardíaca: **MAPE ≤5%** (rigoroso) ou **≤10%** (permissivo) face ao ECG. Pontos de referência da literatura: MAPE da frequência cardíaca em repouso do Oura Gen 3 1,67% (CCC 0,97); MAPE do Fitbit Charge 6 ~5,5% — os dispositivos de consumo abrangem agora a fronteira de grau clínico, que é exatamente por que a medição importa por dispositivo e por condição.

## O cálculo

```
MAPE = (1/n) Σ |medido_i − referência_i| / referência_i × 100

CCC (correlação de concordância) = concordância incluindo tanto a correlação
      como o viés sistemático (r de Pearson penalizado por deslocamento de
      posição/escala)

Bland–Altman: viés médio ± 1,96 DP dos limites de concordância — mostra se
      o erro depende da magnitude do valor

Portas operacionais:
Conformidade do tempo de uso = tempo usado / tempo de protocolo × 100
Completude dos dados          = pontos de dados observados / esperados × 100
```

A validação tem de ser reportada **por condição de atividade** (repouso, movimento, sono) e por população — a deteção ótica PPG degrada-se com artefacto de movimento, mau contacto, e tons de pele mais escuros, um modo de falha documentado e relevante para a equidade.

## Exemplo resolvido

Um programa de enfermaria virtual seleciona um dispositivo vestível de monitorização. Candidato A: MAPE em repouso 2,1%, MAPE em exercício 11,4%. Candidato B: repouso 3,8%, exercício 6,9%.

```
Caso de uso: deteção de doente em deterioração em casa — os alertas disparam
com FC elevada sustentada, frequentemente durante a atividade.
O título do Candidato A (2,1%) vence a brochura; o candidato B vence o
caso de uso: na condição relevante para o alerta (movimento), o erro de
11,4% de A a FC 100 = ±11 bpm — abrangendo toda a banda de limiar de
alerta, gerando escaladas falsas (cada uma uma chamada de enfermeira, ~£40)
ou falhas.

Economia de alerta falso: 500 doentes × 2 alertas falsos extra/semana × £40
= £2,08M/ano de custo de erro por escolher o número de validação errado.
```

## Ligação à engenharia de software

Os engenheiros consomem dados de validação ao escolher sensores e *produzem-nos* ao construir funcionalidades de medição — ambos os papéis precisam da mesma disciplina: testar na condição de implementação, não na condição de demonstração (o análogo de software: fazer referência na sua carga de trabalho de produção, não na do fornecedor). O tempo de uso e a completude são resultados de engenharia de produto — o conforto, a vida útil da bateria, o design do ritual de carregamento, e a fiabilidade de sincronização determinam se a porta de faturação RPM de 16-dias-em-30 é cumprida ([economia da monitorização remota de doentes](../economia-da-monitorização-remota-de-doentes/)) e se os conjuntos de dados do ensaio são analisáveis. Trate a ausência de dados como um sinal desenhado: distinga "não usado", "usado mas sem sinal", e "sincronização falhada" no esquema desde o primeiro dia — colapsados em nulo, envenenam toda a análise a jusante.

## Armadilhas

- **MAPE agregado a esconder falhas específicas de condição** — a armadilha do exemplo resolvido.
- **População de validação ≠ população de implementação**: a idade, o tom de pele, o tremor, a obesidade deslocam todos o erro do sensor ótico; verifique a demografia do estudo.
- **Correlação reportada onde a concordância é necessária**: um r de Pearson alto com viés sistemático ainda classifica mal face a limiares absolutos — insista em CCC/Bland–Altman.
- **Completude inflacionada por imputação**: lacunas preenchidas reportadas como dados observados.

## Fontes

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>

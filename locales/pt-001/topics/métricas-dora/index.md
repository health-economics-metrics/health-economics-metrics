# Métricas DORA

As métricas DORA (DevOps Research and Assessment) são quatro medidas de desempenho de entrega de software — frequência de implantação, tempo de espera para alterações, taxa de falha de alterações, e tempo de recuperação de implantação falhada — mais a fiabilidade como quinta. São os padrões de referência de entrega mais validados do setor, e cada uma tem uma leitura direta em economia da saúde.

## Porque é importante

A década de investigação da DORA liga estas métricas ao desempenho organizacional. Os agrupamentos do relatório de 2024: as equipas de **elite** implementam a pedido (múltiplas vezes/dia), levam menos de um dia do commit à produção, falham ~5% das alterações, e recuperam em menos de uma hora; os desempenhos **baixos** implementam mensalmente-ou-menos, levam meses, falham ~40% das alterações, e recuperam em semanas. Para um sistema de saúde, estas não são cifras de vaidade de TI: determinam a velocidade com que o valor clínico chega aos doentes e quanto risco carrega cada alteração.

## O cálculo

```
Frequência de implantação    = implantações em produção / tempo
Tempo de espera para alterações = t(implementação) − t(commit), mediana
Taxa de falha de alterações  = alterações falhadas / total de alterações × 100
Tempo de recuperação (MTTR)  = t(restaurado) − t(falha), mediana
Fiabilidade                  = cumprimento de SLO (disponibilidade, latência, correção)
```

Traduções para economia da saúde:

```
Tempo de espera   → cost-of-delay.md: semanas no pipeline × CoD (£ ou QALYs/semana)
Taxa de falha     → taxa de evento adverso de alteração de software: TFA × custo por incidente
Tempo de recuperação → dano de indisponibilidade: MTTR × (atividade clínica perdida + exposição de segurança)/h
Fiabilidade       → desconto de benefício: um serviço a 99% de disponibilidade entrega ≈ 0,99
                    do seu benefício modelado — o análogo de software da adesão
```

## Exemplo resolvido

A equipa de software de fluxo de doentes de um hospital, antes/depois de um investimento em engenharia de entrega:

```
                    Antes       Depois
Implantações        mensal      semanal
Tempo de espera     6 semanas   4 dias
TFA                 25%         8%
MTTR                2 dias      2 horas
```

A equipa entrega ~30 melhorias/ano com valor médio por melhoria de £4.000/semana ([CoD](../custo-de-atraso/)). O corte de tempo de espera de ~5,4 semanas antecipa o fluxo de benefícios de cada melhoria: 30 × 5,4 × 4.000 ≈ **£648.000/ano** de valor entregue mais cedo. Melhoria da TFA: 30 × (0,25 − 0,08) = ~5 alterações falhadas a menos/ano × custo médio de incidente £15.000 (indisponibilidade de sistema clínico, correção) = **£76.500/ano**. O investimento em entrega é avaliado na mesma moeda que qualquer intervenção clínica.

## Ligação à engenharia de software

Isto *é* o lado do software — a ligação que vale a pena declarar é o mapeamento inverso: as métricas DORA são as métricas operacionais do hospital vestidas de roupa diferente. Tempo de espera ↔ [referenciação para tratamento](../referenciação-para-tratamento/); taxa de falha de alterações ↔ [taxa de reinternamento](../taxa-de-reinternamento/) (trabalho que voltou); MTTR ↔ resposta de emergência; frequência de implantação ↔ rendimento da clínica. Os métodos de melhoria transferem-se em ambas as direções porque ambos são sistemas de filas sob restrições de segurança. Note também a descoberta de IA do DORA 2025: a adoção de IA correlaciona-se agora com maior rendimento mas *pior* estabilidade — uma intervenção com eficácia e efeitos secundários, exigindo exatamente a análise de benefício líquido que este repositório ensina (ver [produtividade dos programadores com IA](../produtividade-dos-programadores-com-ia/)).

## Armadilhas

- **Manipulação de métricas**: contagens de implantação infladas por lançamentos no-op; TFA reduzida por não contar correções de emergência como falhas. Defina os eventos com precisão, como o HTA define pontos finais.
- **Tabelas de liga entre equipas**: os agrupamentos DORA comparam práticas, não equipas com perfis de risco diferentes; uma equipa de sistemas clínicos em "alto" pode ser ótima onde "elite" seria imprudente.
- **Otimizar uma métrica**: velocidade sem TFA/fiabilidade é a troca rendimento-instabilidade — reporte sempre as quatro juntas (são uma [tabela de custo-consequência](../análise-custo-consequência/), não uma pontuação).

## Fontes

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>

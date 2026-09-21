# Retenção e Abandono

A retenção mede que fração de uma coorte de utilizadores continua ativa N dias após o início (curvas D1/D7/D30); o abandono é o seu complemento. O referencial brutal da saúde digital: **aproximadamente 90% dos utilizadores de aplicações de saúde abandonam dentro de 30 dias** — a retenção D30 na saúde digital ronda ~3–4% face a uma média de todas as aplicações de ~6%.

## Porque é importante

Eysenbach nomeou isto em 2005: a **lei do atrito** — perder utilizadores a taxas elevadas é uma propriedade intrínseca e estrutural das intervenções de eSaúde, não um bug de implementação, com o atrito em ensaios de eSaúde a exceder rotineiramente 50%. A consequência económica é total: a retenção define a *janela de tratamento* dentro da qual qualquer benefício pode ser entregue, e a [economia unitária](../economia-unitária-de-aplicações-de-saúde/) — um CAC pago por um utilizador que fica 12 dias não entrega nem LTV nem QALYs. Qualquer modelo económico para um produto de saúde de consumo que não pondere os benefícios pela curva de retenção está a descrever um produto que não existe.

## O cálculo

```
Retenção_Dn = utilizadores ativos no dia n / tamanho da coorte × 100
Taxa de abandono = utilizadores perdidos no período / utilizadores no início do período × 100

Ponderação de benefício (o movimento da economia da saúde):
  benefício esperado por utilizador adquirido = Σ_t retenção(t) × taxa de benefício(t)
  ≈ área sob a curva de retenção × benefício por tempo
  — NÃO o benefício do ensaio × 100% dos utilizadores adquiridos

Custo por utilizador retido-a-D30 = CAC / retenção D30
  (a 4% de D30, um CAC de £5 é realmente £125 por utilizador retido)
```

## Exemplo resolvido

Uma aplicação de saúde mental: o ensaio mostrou 0,02 QALYs ganhos por utilizador que completa 8 semanas. Coorte de implementação de 100.000 downloads, retenção D7 25%, D30 8%, semana 8 4%:

```
Concluintes          = 100.000 × 0,04 = 4.000
QALYs entregues       = 4.000 × 0,02 = 80  (não 100.000 × 0,02 = 2.000)
A £20.000/QALY        = £1,6M de valor em saúde (não £40M)

Valor em saúde por download = £16 — o número que deveria definir o que
um pagador pagará por download, e é 4% da alegação ingénua.
Caso de melhoria de retenção: mover a conclusão da semana 8 de 4% → 6%
acrescenta 40 QALYs/ano ≈ £800mil — a engenharia de retenção É produção de saúde.
```

## Ligação à engenharia de software

A retenção é a métrica onde a engenharia de produto mais diretamente fabrica valor em saúde, conforme a aritmética acima. As práticas que a movem são comuns: tempo até ao primeiro valor na integração, design de reenvolvimento, desempenho, e crucialmente a **conclusão da dose planeada** — um programa com um fim definido (8 semanas, depois graduação) deveria medir a *conclusão*, não o DAU perpétuo, alinhando a métrica com o modelo clínico em vez do modelo de atenção financiado por publicidade. A análise de sobrevivência é o kit de ferramentas certo (a mesma matemática de Kaplan-Meier que os [anos de vida ganhos](../anos-de-vida-ganhos/)); segmente as curvas por canal de aquisição, já que a combinação de canais muda a retenção mais do que a maioria das funcionalidades.

## Armadilhas

- **Branqueamento reverso de intenção-de-tratar**: os ensaios reportam concluintes; a economia de implementação tem de contar todos os adquiridos (o aviso central de Eysenbach).
- **Teatro de retenção**: utilizadores "ativos" impulsionados por notificações que nunca realizam a ação terapêutica (ver [métricas de envolvimento](../métricas-de-envolvimento/)).
- **Comparar curvas entre definições**: "ativo" definido como abertura vs ação significativa desloca o D30 por múltiplos.
- **Ignorar quem abandona**: se os mais doentes abandonam mais rápido, os benefícios por utilizador caem à medida que a retenção melhora entre os saudáveis — combine as curvas com a combinação de casos (ver [alcance e equidade](../alcance-e-equidade/)).

## Fontes

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>

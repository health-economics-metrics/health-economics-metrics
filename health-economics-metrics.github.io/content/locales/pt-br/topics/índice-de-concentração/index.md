# Índice de Concentração

O índice de concentração (Wagstaff, Paci, van Doorslaer, 1991) é a medida estatística padrão da desigualdade socioeconômica numa variável de saúde. Varia entre −1 e 1: um valor negativo significa que a variável de saúde se concentra nos mais desfavorecidos socioeconomicamente, um valor positivo que se concentra nos mais abastados, e zero que não existe um gradiente socioeconômico sistemático. Transforma a suspeita de uma distribuição desigual num único número comparável.

## Porque é importante

Um programa pode parecer eficaz no conjunto e, ainda assim, levar quase todo o seu benefício a quem já estava melhor. Essa é a preocupação distributiva que o [Alcance e equidade](../alcance-e-equidade/) acompanha de forma descritiva (alcance estratificado por quintis de privação, desfasamento de equidade entre o grupo superior e o inferior), mas uma tabela estratificada não se resume a uma linha de tendência e é difícil de comparar entre duas medidas muito diferentes medidas em escalas distintas. O índice de concentração resolve os dois problemas: calcula-se da mesma maneira para qualquer variável de saúde face a qualquer ordenação socioeconômica, pelo que um serviço nacional de saúde pode acompanhar se a desigualdade de um serviço digital concreto se alarga ou se estreita de uma versão para outra, e comparar a equidade de distribuição do lançamento de uma aplicação com a de, por exemplo, um programa de rastreio, numa escala normalizada.

## O cálculo

```
CI = (2 / média(valor_saúde)) × Cov(valor_saúde, posição_socioeconômica)

Cov(X, Y) = média(X × Y) − média(X) × média(Y)   (covariância populacional)

posição_socioeconômica: a posição fracionária de cada pessoa na distribuição
socioeconômica, em [0, 1] (0 = o mais desfavorecido, 1 = o mais favorecido;
para dados agrupados/em escalões usa-se normalmente a posição do ponto médio
de cada grupo)
```

Esta é a «fórmula prática da covariância» (O'Donnell, van Doorslaer, Wagstaff, Lindelow, Banco Mundial 2008): o atalho padrão dos profissionais para calcular o índice de concentração diretamente a partir de dados observados emparelhados, sem traçar nem integrar sob a curva de concentração.

## Exemplo resolvido

Uma pontuação de saúde autodeclarada (1 = a pior, 4 = a melhor) observada em quatro quartis socioeconômicos de igual dimensão, cada um representado pela posição do seu ponto médio:

```
valor_saúde                  = [1.0, 2.0, 3.0, 4.0]
posição_socioeconômica       = [0.125, 0.375, 0.625, 0.875]

média(valor_saúde)           = 2.5
média(saúde × posição)       = média([0.125, 0.75, 1.875, 3.5]) = 1.5625
média(posição)               = 0.5

Cov = 1.5625 − 2.5 × 0.5 = 0.3125

CI = 2 × 0.3125 / 2.5 = 0.25
```

O valor positivo `0,25` significa que esta pontuação de saúde se concentra nos socioeconomicamente favorecidos: quem responde com pontuações mais altas inclina-se para o extremo mais abastado da ordenação.

## Ligação à engenharia de software

É uma medida de desigualdade baseada na covariância, da mesma família das usadas em economia em geral (parente do coeficiente de Gini), e traduz-se em medir se os benefícios de um produto de software se concentram nos grupos de usuários já favorecidos ou se distribuem de forma equitativa: uma extensão direta do [Alcance e equidade](../alcance-e-equidade/) (a dimensão «reach» do RE-AIM) para uma medida estatística formal em vez de um desfasamento descrito. Enquanto o alcance e equidade reporta o impacto estrato a estrato, o índice de concentração comprime toda a distribuição num único número com sinal, adequado como KPI único acompanhado ao longo das versões, prático para painéis onde a distribuição estratificada completa não cabe.

## Armadilhas

- **Deriva na convenção de sinal**: o sinal depende de como a variável de saúde e a posição são definidas; inverter qualquer delas inverte o sinal, pelo que se deve indicar sempre a convenção usada ao reportar um valor.
- **Usar posições de fronteira em vez de posições de ponto médio**: dados socioeconômicos agrupados ou em escalões (por exemplo, quintis) exigem a posição fracionária de cada grupo no seu *ponto médio*, não na fronteira, sob pena de enviesar o índice.
- **Ler «próximo de zero» como «sem desigualdade»**: um índice de concentração próximo de zero significa «sem gradiente socioeconômico sistemático», não «sem desigualdade» em sentido absoluto: desigualdades de sentidos opostos podem anular-se.

## Fontes

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — o manual padrão para profissionais e fonte da fórmula prática da covariância aqui usada. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>

# Economia Unitária de Aplicações de Saúde

A aritmética comercial dos produtos de saúde de consumo: custo de aquisição de cliente (CAC), valor vitalício (LTV), receita média por utilizador (ARPU), preço por-membro-por-mês (PMPM), e a distinção do mercado empregador entre **ROI e VOI** (valor sobre o investimento).

## Porque é importante

As aplicações de saúde enfrentam um aperto estrutural: a aquisição é cara (alegações reguladas, barreiras de confiança, custos de conformidade) enquanto a retenção é a pior de qualquer vertical de software (~90% de abandono em 30 dias — ver [retenção e abandono](../retenção-e-abandono/)). O teste de viabilidade padrão — **LTV:CAC ≥ 3:1** — é, portanto, brutalmente difícil na saúde de consumo, razão pela qual o setor migra para modelos B2B2C: empregadores, seguradoras, e sistemas de saúde a pagar PMPM por populações, onde o comprador não é o indivíduo que abandona.

## O cálculo

```
CAC   = gasto em vendas + marketing / novos clientes pagantes
ARPU  = receita / utilizadores ativos (por período)
LTV   = ARPU × vida útil média  =  ARPU / taxa de abandono
Viabilidade: LTV : CAC ≥ 3, período de retorno ≤ 12–18 meses

CAC efetivo por utilizador retido = CAC / retenção(t)
  — a 4% de retenção D30, £5 por instalação = £125 por utilizador retido em 30 dias

Receita PMPM = taxa × membros inscritos × meses
  margem do fornecedor = PMPM − custo de servir por membro por mês
  — o envolvimento inverte o sinal: sob subscrições B2C o envolvimento
    impulsiona a receita; sob PMPM, os membros envolvidos CUSTAM mais
    a servir do que os inativos, e os contratos de resultados invertem-no de novo
```

## Exemplo resolvido

Uma aplicação de sono B2C: £6,99/mês, abandono mensal 18%, CAC misto £38.

```
LTV = 6,99 / 0,18 ≈ £38,8 → LTV:CAC ≈ 1,0 — inviável

Pivô para PMPM de empregador: £1,20 PMPM × 40.000 vidas cobertas = £48mil/mês
Custo de servir: infraestrutura £0,15 + suporte £0,10 + conteúdo £0,05
  por membro ≈ £0,30 → margem ~75%, ciclo de vendas longo mas o abandono é
  ao nível do contrato (anual), não ao nível do utilizador (diário)

A pergunta do empregador desloca a métrica: o ROI em dólares reais (sinistros
reduzidos, absentismo) raramente é demonstrável para produtos de bem-estar —
a resposta do setor é VOI: produtividade, apelo de recrutamento,
envolvimento — que só é honesta quando rotulada como VOI, não vestida
de ROI (ver return-on-investment.md e social-return-on-investment.md).
```

## Ligação à engenharia de software

As escolhas de engenharia definem ambos os lados do rácio: o **custo de servir** é arquitetura ([economia unitária da nuvem](../economia-unitária-da-nuvem/) — a margem PMPM vive ou morre com o custo de infraestrutura por membro), e o **LTV** é engenharia de retenção (cada ponto de abandono é receita aritmética — a matemática de QALY do documento de [retenção](../retenção-e-abandono/) tem um gémeo exato em receita). Especificamente para produtos de saúde, o painel de economia unitária deveria carregar uma terceira linha ao lado do LTV e do CAC: **valor em saúde por utilizador adquirido** (QALYs ponderados por retenção × limiar) — porque os mercados de pagadores e estilo DiGA precificam cada vez mais com base nisso, e porque um produto cuja economia unitária comercial e clínica diverge (lucrativo mas inerte em saúde, ou eficaz mas não financiável) precisa de saber que problema tem.

## Armadilhas

- **LTV a partir do abandono de coorte precoce**: o abandono estabiliza para baixo; mas também há sobrevivência — os adotantes precoces retêm melhor do que audiências escaladas. Use dados de coorte amadurecida.
- **CAC misto entre canais**: o CAC de social pago e o CAC de referenciação clínica diferem 10×, com perfis de retenção opostos — segmente ou seja enganado.
- **PMPM sem limites de utilização**: membros com envolvimento atípico podem inverter margens; modele a distribuição, não a média.
- **VOI apresentado como ROI** a um CFO — o falhanço de credibilidade que o setor de bem-estar do empregador passou uma década a ganhar.

## Fontes

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>

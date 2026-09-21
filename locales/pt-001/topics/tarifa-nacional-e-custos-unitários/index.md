# Tarifa Nacional e Custos Unitários

O NHS paga aos prestadores por atividade sob uma lista de preços nacional baseada em regras — historicamente a Tarifa Nacional / Payment by Results, substituída pelo **NHS Payment Scheme (NHSPS)** em 1 de abril de 2023. Por trás dos preços encontra-se uma infraestrutura nacional de custeio unitário: a **National Cost Collection (NCC)** e o compêndio **PSSRU Unit Costs of Health and Social Care**.

## Porque é importante

Estes são os denominadores de todo o caso de negócio credível do NHS. Quando uma alegação diz "uma consulta externa vale £160" ou "uma hora de enfermeiro de nível 6 custa £31", esses números vêm desta infraestrutura — e usar as cifras oficiais em vez de inventadas é o que torna as avaliações independentes comparáveis e as equipas financeiras cooperativas. Para um fornecedor, a tarifa também define o lado da *receita*: a atividade que o seu software permite (clínicas extra, camas reabastecidas) é avaliada a preços de esquema.

## O cálculo

```
Preço de tarifa por unidade de atividade (episódio codificado por HRG, consulta externa)
  = custo unitário médio nacional (da NCC) × Fator de Forças de Mercado (ajuste local)
  sob o NHSPS: elementos mistos fixos + variáveis ("pagamento alinhado e incentivo")

Custo unitário NCC = custo total reportado pelo hospital de um tipo de atividade / volume de atividade
                (construído sobre Patient-Level Information and Costing Systems, PLICS)

Compêndio PSSRU: ~80 custos unitários padrão (consulta de clínico geral, hora de
enfermeiro por nível, consulta de SU…) — a fonte padrão em avaliações económicas do Reino Unido.
```

## Exemplo resolvido

O seu software liberta 1 hora/dia do tempo de um enfermeiro de nível 6 num ano de trabalho de 250 dias:

```
Custo de nível 6 baseado no PSSRU incl. despesas gerais ≈ £31/hora (verifique a edição atual)
Valor de capacidade = 250 × £31 = £7.750/enfermeiro/ano (não libertador de tesouraria)
```

Alternativamente, o enfermeiro faz 2 consultas de seguimento de consulta externa extra/dia a ~£160 de valor de esquema: 500 × £160 = **£80.000/ano de atividade financiada** — uma diferença de dez vezes no valor alegado dependendo da redistribuição, tudo a partir de custos unitários oficiais. Ambas as alegações são auditáveis porque os denominadores estão publicados; esse é todo o objetivo.

## Ligação à engenharia de software

Este é o padrão do **livro de preços interno**. A economia da saúde do Reino Unido funciona porque toda a avaliação usa os mesmos custos unitários publicados; as organizações de engenharia geralmente carecem disto, pelo que todo o caso de negócio inventa o seu próprio custo de uma hora-engenheiro, um incidente, uma implantação. Uma equipa de plataforma pode publicar exatamente esse livro — custo carregado por hora-engenheiro por nível, por incidente por severidade, por minuto de compilação — e exigir o seu uso em todas as propostas. Os sistemas de contracarga/showback replicam também os modos de falha conhecidos da tarifa: a precificação a custo médio conduz à manipulação de volume, os pagamentos fixos conduzem à sub-provisão. A evolução do NHSPS de pagamento puro por atividade para misto fixo+variável são vinte anos de lições em design de incentivos para preços de plataforma internos.

## Armadilhas

- **Cifras obsoletas**: os preços NCC, PSSRU, e NHSPS renovam-se anualmente — data cada número.
- **Preço de tarifa ≠ custo**: os preços são médias nacionais com ajustes; o seu custo marginal local difere (ver [custo marginal vs médio](../custo-marginal-vs-médio/)).
- **Avaliar a capacidade à tarifa sem um mecanismo** para realmente entregar e ser pago pela atividade extra.

## Fontes

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>

# Economia Unitária da Nuvem (FinOps)

A economia unitária da nuvem traduz o gasto bruto em nuvem para **custo por unidade de resultado** — por cliente, por transação, por caso resolvido, por token. É a capacidade FinOps que transforma "a nossa fatura AWS é £400 mil/mês" em "servir um doente custa £0,83".

## Porque é importante

Os números de gasto total não conseguem responder às perguntas que importam: o produto está a tornar-se mais ou menos eficiente? O crescimento melhora ou destrói a margem? O que devemos cobrar? Os custos unitários respondem às três. Especificamente para a saúde digital, "custo por caso resolvido" *é* um custo unitário de serviço de saúde — diretamente comparável às cifras do [National Cost Collection](../tarifa-nacional-e-custos-unitários/) que um contratante usa para todos os outros serviços, o que a torna a linguagem natural para precificar vias digitais face às tradicionais.

## O cálculo

```
Custo unitário = custo total atribuído (incl. custos partilhados/plataforma) / unidades entregues

Duas famílias:
  unidades de eficiência de recursos: custo/GB armazenado, custo/hora-vCPU, custo/token,
                             custo/minuto de compilação
  unidades de negócio:            custo/cliente, custo/transação, custo/consulta,
                             custo/caso-resolvido

Aplica-se a disciplina marginal vs média (marginal-vs-average-cost.md):
o gasto comprometido/reservado torna o custo unitário marginal ≈ 0 até ao
próximo passo de compromisso — avalie as decisões de expansão ao marginal,
as tendências de eficiência ao médio.
```

## Exemplo resolvido

Um serviço de triagem digital: gasto em nuvem £62.000/mês (computação £30mil, dados £18mil, atribuição de plataforma partilhada £14mil), processando 380.000 episódios de triagem/mês:

```
Custo médio por episódio = 62.000 / 380.000 ≈ £0,163

Comparação do contratante: triagem telefónica ≈ £8–12/chamada, consulta de clínico geral ≈ £42
→ o episódio digital corre a ~2% da alternativa humana mais barata — a
economia de mudança de canal de gds-service-metrics.md, do lado do custo.

Verificação de tendência: no ano passado £0,21/episódio a 240mil episódios → economia
de escala a melhorar (custos fixos de plataforma a amortizar), digno de um título no QBR.
```

## Ligação à engenharia de software

A economia unitária é onde as escolhas de engenharia se tornam legíveis para as finanças: uma arquitetura que reduz para metade o custo-por-episódio é uma vantagem de precificação; uma que escala super-linearmente é uma bomba-relógio visível apenas nesta métrica. Práticas que se transferem do custeio em saúde: **publique as regras de atribuição** (os custos partilhados distorceram as cifras por unidade até o PLICS padronizar o custeio ao nível do doente — a atribuição do custo da sua plataforma precisa do mesmo rigor); **escolha unidades em que o comprador pensa** (os contratantes compram episódios, não vCPUs); e alimente os custos unitários em cada modelo [ICER](../rácio-de-custo-efetividade-incremental/) e de [impacto orçamental](../análise-de-impacto-orçamental/) como o denominador de custo autoritativo. Para funcionalidades de IA, a unidade é o token — ver [economia unitária de inferência](../economia-unitária-de-inferência/).

## Armadilhas

- **Ignorar custos partilhados**: os custos unitários que excluem atribuições de plataforma/segurança/prevenção subestimam em 30–50% e colapsam na auditoria.
- **Denominadores de vaidade**: "custo por chamada API" lisonjeia; "custo por episódio de doente completado" informa.
- **Precificação a custo médio de decisões marginais**: cobrar às equipas o custo unitário médio por uso que é marginalmente gratuito conduz a teatro de evitação de desperdício (ver [tarifa nacional](../tarifa-nacional-e-custos-unitários/) para a versão NHS deste bug de incentivo).

## Fontes

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>

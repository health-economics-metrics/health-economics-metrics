# Métricas de Serviço GDS

O Manual de Serviço do Government Digital Service (GDS) do Reino Unido exige quatro KPIs para todo o serviço digital governamental: **custo por transação, satisfação do utilizador, taxa de conclusão, e adoção digital**. Juntos, são a economia mínima de um serviço digital público — e o modelo que os serviços digitais do NHS herdam.

## Porque é importante

As métricas GDS codificam o caso de negócio de mudança de canal que financiou uma década de digitalização governamental: o Digital Efficiency Report constatou que as transações digitais são ~20× mais baratas do que por telefone e ~50× mais baratas do que presencial (cifras de governo local: web £0,15, telefone £2,83, presencial £8,62). Mas as poupanças só se materializam quando as pessoas *completam* a jornada digital (taxa de conclusão) *em vez de* o canal caro (adoção) — os quatro KPIs são um modelo económico, não quatro painéis.

## O cálculo

```
Custo por transação = custo total do serviço / transações concluídas
Taxa de conclusão    = concluídas / transações iniciadas × 100
Adoção digital        = transações digitais / transações de todos os canais × 100
Satisfação do utilizador = % satisfeito+muito satisfeito (5 pontos, inquérito no serviço)

Poupança de mudança de canal = volume × mudança de adoção × (custo_canal_antigo − custo_digital)
… menos a procura de falha: (1 − taxa de conclusão) × custo do canal de contingência
```

## Exemplo resolvido

Um serviço de gestão de consultas do NHS: 2M transações/ano, atualmente 70% telefone (£3,20/chamada) / 30% digital (£0,25). Um redesenho eleva a adoção digital para 55% e a conclusão de 84% para 93%:

```
Poupança de mudança de adoção = 2M × 0,25 × (3,20 − 0,25) = £1.475.000/ano

Poupança de procura de falha: as jornadas digitais falhadas voltam ao telefone
  antes: 2M × 0,30 × 0,16 × £3,20 = £307.200
  depois: 2M × 0,55 × 0,07 × £3,20 = £246.400
  líquido £60.800/ano — as melhorias de conclusão protegem os ganhos de adoção

A satisfação é o indicador líder: os utilizadores insatisfeitos voltam ao telefone,
pelo que uma queda de satisfação prevê a decadência da adoção antes de aparecer.
```

## Ligação à engenharia de software

Estes quatro KPIs são um exemplo de grau de produção de uma [tabela de custo-consequência](../análise-custo-consequência/): uma métrica de custo, três métricas de resultado, nunca colapsadas numa pontuação. Para engenheiros de produto, as lições operacionais: **a taxa de conclusão é um problema de instrumentação de funil** (todo o ponto de abandono é localizável e corrigível); **o custo por transação é [economia unitária da nuvem](../economia-unitária-da-nuvem/)** mais custos de canal assistido por pessoal; **a adoção é uma métrica de equidade disfarçada** — os utilizadores que não conseguem ou não querem mudar de canal são desproporcionalmente idosos, incapacitados, e desfavorecidos, pelo que o encerramento agressivo de canais converte "poupanças" em dano de acesso (ver [alcance e equidade](../alcance-e-equidade/)). Publicar os KPIs (o GOV.UK fá-lo, por serviço) é em si um mecanismo: a transparência disciplina as previsões da mesma forma que as auditorias de [realização de benefícios](../realização-de-benefícios/).

## Armadilhas

- **Adoção por coação**: fechar a linha telefónica eleva a adoção e despeja a procura de falha sobre o pessoal da linha da frente; meça o custo total do sistema.
- **Conclusão medida a partir da página 2**: iniciar o funil depois do ponto de abandono lisonjeia a taxa.
- **Custo por transação a ignorar o suporte digital assistido** e o tratamento da procura de falha.
- **Inquéritos de satisfação apenas na conclusão bem-sucedida** — os insatisfeitos maioritariamente nunca chegam ao inquérito.

## Fontes

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>

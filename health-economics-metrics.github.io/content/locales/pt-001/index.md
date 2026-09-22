# Métricas de Economia da Saúde

Uma introdução abrangente à matemática, aos exemplos e ao raciocínio da economia da saúde, escrita para engenheiros de software que desenvolvem soluções para organizações de serviços de saúde nacionais em todo o mundo. Cada ficheiro cobre uma métrica ou conceito: definição, por que importa, a matemática, um exemplo resolvido, a ligação com a engenharia de software, armadilhas comuns e fontes.

Novo por aqui? Comece por [custo de oportunidade](locales/en-gb-oxendict/topics/opportunity-cost/), [ano de vida ajustado pela qualidade](locales/en-gb-oxendict/topics/quality-adjusted-life-year/), e [custo do atraso](locales/en-gb-oxendict/topics/cost-of-delay/) — as três ideias sobre as quais tudo o resto se constrói.

## Fundamentos do raciocínio económico

- [Custo de Oportunidade](locales/en-gb-oxendict/topics/opportunity-cost/) — o valor da melhor alternativa abandonada; por que orçamentos fixos tornam cada escolha um deslocamento
- [Desconto e Preferência Temporal](locales/en-gb-oxendict/topics/discounting-and-time-preference/) — valores presentes, a taxa de 3,5% do Green Book/NICE
- [Perspetiva de Análise](locales/en-gb-oxendict/topics/analysis-perspective/) — pagador vs prestador vs sociedade: os custos de quem contam
- [Horizonte Temporal](locales/en-gb-oxendict/topics/time-horizon/) — durante quanto tempo contar custos e efeitos, e a manipulação do horizonte
- [Custo Marginal vs Médio](locales/en-gb-oxendict/topics/marginal-vs-average-cost/) — por que libertar uma cama não poupa o seu custo médio
- [Poupanças Libertadoras de Tesouraria vs Não Libertadoras](locales/en-gb-oxendict/topics/cash-releasing-vs-non-cash-releasing/) — o teste de honestidade para qualquer alegação de "tempo poupado"
- [Análise de Sensibilidade](locales/en-gb-oxendict/topics/sensitivity-analysis/) — diagramas de tornado; qual pressuposto sustenta o seu caso
- [Análise de Sensibilidade Probabilística (ASP)](locales/en-gb-oxendict/topics/probabilistic-sensitivity-analysis/) — Monte Carlo, CEAC, probabilidade de estar certo
- [Valor Esperado da Informação Perfeita (EVPI)](locales/en-gb-oxendict/topics/expected-value-of-perfect-information/) — atribuir um preço ao piloto antes de o executar
- [Dominância e a Fronteira de Eficiência](locales/en-gb-oxendict/topics/dominance-and-efficiency-frontier/) — eliminar opções que ninguém deveria escolher

## Medidas de resultados

- [Ano de Vida Ajustado pela Qualidade (QALY)](locales/en-gb-oxendict/topics/quality-adjusted-life-year/) — a moeda comum do valor em saúde
- [Ano de Vida Ajustado por Incapacidade (DALY)](locales/en-gb-oxendict/topics/disability-adjusted-life-year/) — o espelho do lado da carga de doença; a métrica da saúde global
- [EQ-5D](locales/en-gb-oxendict/topics/eq-5d/) — o instrumento por trás da maioria dos pesos de utilidade do QALY
- [Rácio de Custo-Efetividade Incremental (ICER)](locales/en-gb-oxendict/topics/incremental-cost-effectiveness-ratio/) — custo adicional por cada unidade adicional de saúde
- [Limiares de Disposição para Pagar](locales/en-gb-oxendict/topics/willingness-to-pay-thresholds/) — o limiar de £20–30 mil/QALY do NICE e as outras linhas do mundo
- [Benefício Monetário Líquido (BML)](locales/en-gb-oxendict/topics/net-monetary-benefit/) — valor menos custo, feito corretamente
- [Anos de Vida Ganhos (LYG)](locales/en-gb-oxendict/topics/life-years-gained/) — matemática de sobrevivência, e a variante de equidade evLYG
- [Esperança de Vida Ajustada pela Saúde (HALE)](locales/en-gb-oxendict/topics/health-adjusted-life-expectancy/) — contabilização de anos saudáveis ao nível populacional
- [Défice de QALY e Modificadores de Severidade](locales/en-gb-oxendict/topics/qaly-shortfall-and-severity-modifiers/) — por que os QALY de populações mais doentes contam mais

## Tipos de análise económica

- [Análise Custo-Efetividade (ACE)](locales/en-gb-oxendict/topics/cost-effectiveness-analysis/) — custo por unidade natural de resultado
- [Análise Custo-Utilidade (ACU)](locales/en-gb-oxendict/topics/cost-utility-analysis/) — custo por QALY; comparar intervenções distintas
- [Análise Custo-Benefício (ACB)](locales/en-gb-oxendict/topics/cost-benefit-analysis/) — tudo em dinheiro; VAL do Green Book
- [Análise de Minimização de Custos (AMC)](locales/en-gb-oxendict/topics/cost-minimization-analysis/) — a opção mais barata, após provar equivalência
- [Análise Custo-Consequência (ACC)](locales/en-gb-oxendict/topics/cost-consequence-analysis/) — a tabela desagregada; a preferência do NICE para a saúde digital
- [Análise de Impacto Orçamental (AIO)](locales/en-gb-oxendict/topics/budget-impact-analysis/) — acessibilidade financeira, distinta de valor
- [Retorno do Investimento (ROI)](locales/en-gb-oxendict/topics/return-on-investment/) — a métrica partilhada, com parâmetros declarados
- [Retorno Social do Investimento (SROI)](locales/en-gb-oxendict/topics/social-return-on-investment/) — monetizar o que os mercados não avaliam

## Economia operacional do sistema de saúde

- [Dias de Cama Poupados](locales/en-gb-oxendict/topics/bed-days-saved/) — o benefício de referência, e as suas armadilhas de valorização
- [Tempo de Internamento (TI)](locales/en-gb-oxendict/topics/length-of-stay/) — o tempo de ciclo do hospital
- [Taxa de Reinternamento](locales/en-gb-oxendict/topics/readmission-rate/) — a taxa de falha de mudança do sistema de saúde
- [Taxa de Faltas (DNA)](locales/en-gb-oxendict/topics/did-not-attend-rate/) — consultas não comparecidas; a métrica de desperdício mais pura
- [Evitação de Idas às Urgências](locales/en-gb-oxendict/topics/emergency-attendance-avoidance/) — economia da intervenção a montante
- [Tarifa Nacional e Custos Unitários](locales/en-gb-oxendict/topics/national-tariff-and-unit-costs/) — o tarifário do NHS e a infraestrutura de custeio
- [Referenciação para Tratamento (RTT)](locales/en-gb-oxendict/topics/referral-to-treatment/) — o padrão de 18 semanas como métrica de tempo de espera
- [Impacto na Lista de Espera](locales/en-gb-oxendict/topics/waiting-list-impact/) — converter horas poupadas em doentes atendidos
- [Tempo do Profissional](locales/en-gb-oxendict/topics/practitioner-time/) — valorizar a capacidade do estrangulamento, não os salários
- [Retenção da Força de Trabalho](locales/en-gb-oxendict/topics/workforce-retention/) — custos de rotatividade e economia do esgotamento profissional
- [Custos de Externalização Evitáveis](locales/en-gb-oxendict/topics/avoidable-outsourcing-costs/) — repatriar trabalho de tarifa premium
- [Otimização de Recursos a Jusante](locales/en-gb-oxendict/topics/downstream-resource-optimization/) — desbloquear o papel que todos aguardam
- [Intervenção Mais Precoce](locales/en-gb-oxendict/topics/earlier-intervention/) — a economia de tratar antes da progressão
- [Capacidade Geradora de Valor (Recuperação Operacional)](locales/en-gb-oxendict/topics/value-generating-capacity-operational-turnaround/) — criar capacidade sem contratar
- [Poupanças Rígidas Libertadoras de Tesouraria (Defesa de Défice)](locales/en-gb-oxendict/topics/hard-cash-releasing-savings-deficit-defence/) — eliminar linhas orçamentais; a métrica do diretor financeiro

## Estruturas de HTA e economia da prevenção

- [Avaliação de Tecnologia de Saúde (HTA)](locales/en-gb-oxendict/topics/health-technology-assessment/) — NICE, ICER (EUA), CADTH: quem decide o que vale a pena comprar
- [Quadro de Padrões de Evidência do NICE (ESF)](locales/en-gb-oxendict/topics/nice-evidence-standards-framework/) — requisitos de evidência graduados por risco para a saúde digital
- [Via Rápida DiGA da Alemanha](locales/en-gb-oxendict/topics/diga-fast-track/) — aplicações por receita; listagem provisória com prazo de evidência
- [Número Necessário para Tratar (NNT)](locales/en-gb-oxendict/topics/number-needed-to-treat/) — unidades de esforço por benefício que mantêm as alegações honestas
- [Economia da Prevenção](locales/en-gb-oxendict/topics/prevention-economics/) — por que a prevenção é custo-efetiva mas raramente poupa custos
- [Economia do Rastreio](locales/en-gb-oxendict/topics/screening-economics/) — Wilson–Jungner, o colapso do VPP com baixa prevalência, fadiga de alertas
- [Custos a Jusante Evitados](locales/en-gb-oxendict/topics/avoided-downstream-costs/) — compensações de custo e as regras que as tornam credíveis

## Engenharia de software e entrega digital

- [Custo de Atraso (CoD)](locales/en-gb-oxendict/topics/cost-of-delay/) — £/semana ou QALY/semana de não-entrega; a métrica ponte principal
- [Métricas DORA](locales/en-gb-oxendict/topics/dora-metrics/) — desempenho de entrega, traduzido para termos de economia da saúde
- [Métricas de Fluxo](locales/en-gb-oxendict/topics/flow-metrics/) — a Lei de Little, WIP, eficiência de fluxo; a matemática de filas partilhada por hospitais e pipelines
- [WSJF e CD3](locales/en-gb-oxendict/topics/wsjf-and-cd3/) — priorização por densidade de valor; o backlog como tabela de classificação QALY
- [SPACE e DevEx](locales/en-gb-oxendict/topics/space-and-devex/) — produtividade multidimensional; a lição do EQ-5D para métricas de engenharia
- [Dívida Técnica](locales/en-gb-oxendict/topics/technical-debt/) — capital, juros, e economia de doença crónica para bases de código
- [Custo Total de Propriedade (TCO)](locales/en-gb-oxendict/topics/total-cost-of-ownership/) — a manutenção é 50–80%; o erro ingénuo do preço do medicamento, aplicado ao software
- [Economia Unitária da Nuvem (FinOps)](locales/en-gb-oxendict/topics/cloud-unit-economics/) — custo por unidade de produção; o custo de referência do serviço digital
- [Construir vs Comprar](locales/en-gb-oxendict/topics/build-vs-buy/) — comparação ajustada ao risco com o termo de atraso valorizado
- [Realização de Benefícios](locales/en-gb-oxendict/topics/benefits-realization/) — auditar se os benefícios previstos realmente aconteceram
- [Métricas de Serviço GDS](locales/en-gb-oxendict/topics/gds-service-metrics/) — custo por transação, satisfação, conclusão, adesão

## Aceleração com IA

- [Produtividade dos Programadores com IA](locales/en-gb-oxendict/topics/ai-developer-productivity/) — o ECA do Copilot vs o ECA da METR; eficácia vs efetividade
- [Retorno do Investimento em IA](locales/en-gb-oxendict/topics/ai-return-on-investment/) — a conclusão dos 95% sem retorno e o que os 5% fizeram de diferente
- [Economia Unitária de Inferência](locales/en-gb-oxendict/topics/inference-unit-economics/) — custo por token, e modelar o declínio implacável dos preços
- [Métricas de Qualidade da IA](locales/en-gb-oxendict/topics/ai-quality-metrics/) — taxas de alucinação como taxas de dano com um preço
- [Avaliação de IA Clínica](locales/en-gb-oxendict/topics/clinical-ai-evaluation/) — sensibilidade, especificidade, AUROC, e por que a prevalência governa a economia
- [Avaliação Regulamentar de IA](locales/en-gb-oxendict/topics/ai-regulatory-evaluation/) — SaMD da FDA, PCCPs, e a economia das atualizações de modelos

## Aplicações e dispositivos de saúde para o consumidor

- [Métricas de Envolvimento](locales/en-gb-oxendict/topics/engagement-metrics/) — envolvimento como dose clínica
- [Retenção e Abandono](locales/en-gb-oxendict/topics/retention-and-churn/) — a lei da atrição; curvas de retenção como janelas de tratamento
- [Ativação e Adesão](locales/en-gb-oxendict/topics/activation-and-uptake/) — os portões da frente do funil de valor
- [Adesão e Persistência](locales/en-gb-oxendict/topics/adherence-and-persistence/) — MPR, PDC, envolvimento efetivo, dose mínima eficaz
- [Resultados Relatados pelo Doente (PROMs, PREMs, MCID)](locales/en-gb-oxendict/topics/patient-reported-outcomes/) — PROMs, PREMs, e a barra de honestidade do MCID
- [Pontos Finais e Biomarcadores Digitais](locales/en-gb-oxendict/topics/digital-endpoints-and-biomarkers/) — da telemetria de sensores à evidência de nível regulatório
- [Validação de Dispositivos Vestíveis](locales/en-gb-oxendict/topics/wearable-validation/) — MAPE, estatísticas de concordância, tempo de uso, completude
- [Economia da Monitorização Remota de Doentes](locales/en-gb-oxendict/topics/remote-patient-monitoring-economics/) — conjuntos de códigos CPT e substituição por hospital-em-casa
- [Economia Unitária de Aplicações de Saúde](locales/en-gb-oxendict/topics/health-app-unit-economics/) — CAC, LTV, PMPM, e ROI vs VOI
- [Alcance e Equidade](locales/en-gb-oxendict/topics/reach-and-equity/) — RE-AIM; impacto populacional = alcance × eficácia

## Atualidade dos valores de referência

Muitos dos valores citados são atualizados anualmente (custos unitários do NHS, preços do regime de pagamento, agrupamentos DORA, contagens de DiGA, preços de LLM). Cada documento data os seus valores de referência diretamente no texto; volte a verificá-los antes de os usar num caso de negócio real.

## Competências Claude

Este repositório inclui duas [Competências Claude](https://code.claude.com/docs/en/skills) — coloque qualquer uma delas no `.claude/skills/` de um projeto (ou aponte o Claude para o `skills/` deste repositório) para pôr este livro a trabalhar diretamente dentro de uma sessão de programação agêntica:

- [health-economics-metrics-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-skill/SKILL.md) — para uso geral: explicar um conceito, calcular uma métrica a partir dos seus próprios números, ou montar um caso de negócio com várias métricas, com base nas fórmulas, exemplos resolvidos e armadilhas deste livro em vez de conhecimento genérico.
- [health-economics-metrics-maintainer-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-maintainer-skill/SKILL.md) — para quem mantém este repositório: o modelo por tópico, as convenções de indexação do README, e uma lista de verificação de validação de ligações/sincronização para adicionar ou editar tópicos.

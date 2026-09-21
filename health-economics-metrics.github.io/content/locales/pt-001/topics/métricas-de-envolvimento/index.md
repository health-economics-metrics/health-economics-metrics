# Métricas de Envolvimento

As métricas de envolvimento medem quanto os utilizadores realmente usam uma aplicação de saúde: pegajosidade DAU/MAU, frequência e duração de sessões, uso de funcionalidades. Na saúde digital, o envolvimento não é vaidade — é **dose**: a exposição através da qual qualquer efeito clínico tem de fluir.

## Porque é importante

Um medicamento que fica no frasco não cura ninguém; uma aplicação que fica desinstalada ou por abrir é o mesmo modo de falha. Toda a alegação económica em saúde para um produto de saúde de consumo multiplica-se através do envolvimento — a eficácia mostrada em ensaios foi medida a algum nível de utilização, e o valor no mundo real escala com a proximidade entre a utilização na implementação e esse nível. Padrões de referência de produto padrão: DAU/MAU em torno de **20% é considerado saudável** para aplicações móveis em geral, >25% excecional; as aplicações de saúde correm frequentemente mais baixo.

## O cálculo

```
Pegajosidade (DAU/MAU) = utilizadores ativos diários / utilizadores ativos mensais × 100
Métricas de sessão      = sessões/utilizador/período; duração média = tempo total / sessões
Envolvimento de funcionalidade = utilizadores a realizar a ação-chave / utilizadores ativos

Enquadramento dose-resposta (a atualização da economia da saúde):
  efeito realizado ≈ efeito do ensaio × f(utilização real / utilização do ensaio)
  onde f vem da análise dose-resposta — ver o conceito de "envolvimento
  efetivo" em adherence-and-persistence.md: utilização suficiente
  para alcançar o resultado pretendido, que pode ser modesta e finita
```

## Exemplo resolvido

O estudo pivotal de uma aplicação de pressão arterial mostrou uma redução sistólica de 6 mmHg entre utilizadores que registam ≥4 leituras/semana. Na implementação em 50.000 utilizadores registados:

```
MAU 20.000 (40%); desses, a registar ≥4×/semana: 7.000
Utilizadores de dose efetiva = 7.000 / 50.000 = 14% da base registada

O efeito ao nível populacional ≈ efeito do ensaio entregue a 14%, não a 100%:
qualquer modelo económico que cite "50.000 utilizadores × 6 mmHg" sobrestima ~7×.
Modelo honesto: 7.000 × efeito completo + crédito parcial (de dados
dose-resposta, se existirem) para os 13.000 utilizadores subprancal.
```

Esta multiplicação — através do funil de envolvimento até à dose efetiva — é o local único mais comum onde a economia da saúde digital infla.

## Ligação à engenharia de software

Os engenheiros são donos do funil de envolvimento, o que os torna donos de uma variável *clínica*: a fricção de integração, a estratégia de notificações, o tempo de carregamento, e a resiliência offline movem todos a dose entregue. Duas implicações de design: instrumente a **ação clinicamente significativa** (leituras registadas, lições completadas), não as aberturas — o DAU construído sobre sessões de rebote de notificação é fraude de dose; e trate as metas de envolvimento como metas de *suficiência*, não de maximização — uma aplicação que alcança o seu resultado em 5 minutos/semana e sai do caminho é clinicamente ideal e metricamente "pobre" (ver envolvimento efetivo em [adesão e persistência](../adesão-e-persistência/)). Avalie o próprio trabalho de envolvimento através do modelo de efeito populacional acima: um ganho de 2 pontos na quota de dose efetiva é uma linha de QALY quantificável.

## Armadilhas

- **Envolvimento como resultado**: a utilização é um meio; o resultado é o [PROM](../resultados-relatados-pelo-doente/) ou o ponto final clínico.
- **Médias sobre utilização bimodal**: as populações de aplicações de saúde dividem-se em utilizadores dedicados e fantasmas; as médias não descrevem ninguém — faça coortes.
- **Inflação de dose por padrões obscuros**: sequências e notificações de culpa aumentam as métricas e podem prejudicar as populações ansiosas que as aplicações de saúde servem; os produtos clínicos carregam ética clínica.
- **Proveniência de referência de fornecedor**: a maioria das referências de envolvimento publicadas vem de fornecedores de análise, não de revisão por pares; calibre face aos seus próprios ensaios.

## Fontes

- App engagement benchmarks. <https://getstream.io/blog/app-retention-guide/>
- Health app KPI guides. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. on effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>

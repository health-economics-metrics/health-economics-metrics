# Realização de Benefícios

A gestão da realização de benefícios (BRM) é a disciplina de identificar, estabelecer uma base de referência, monitorizar e *comprovar* que os benefícios prometidos num caso de negócio realmente se materializaram após a entrega. No investimento público do Reino Unido, vive dentro do **Modelo de Cinco Casos** do Green Book do HM Treasury; na medicina, o seu primo é a vigilância pós-comercialização.

## Porque é importante

Os casos de negócio são promessas; a realização de benefícios é a auditoria. As avaliações de grandes programas digitais do NHS encontraram repetidamente benefícios previstos que nunca se materializaram — e quando os benefícios não libertavam tesouraria, não fizeram nada pelo resultado final do hospital. A resposta do Green Book: todo o caso de despesa tem de passar por **cinco casos** (estratégico, económico, comercial, financeiro, de gestão), com a realização de benefícios planeada no caso de gestão *antes da aprovação* — responsáveis nomeados, bases de referência captadas, datas de medição definidas. Sem isto, "o software poupou 30 minutos por enfermeiro" permanece ficção do fornecedor para sempre.

## O cálculo

```
Taxa de realização = benefícios realizados / benefícios previstos   (por benefício, por período)

Mecânica que a torna computável:
  base de referência captada ANTES do arranque (senão a diferença é impossível de medir)
  cada benefício: responsável, métrica, fonte de dados, calendário de medição
  previsão ajustada para viés de otimismo na avaliação (mandato do Green Book)
  benefícios classificados tesouraria / não tesouraria / qualitativos e monitorizados separadamente
  (ver cash-releasing-vs-non-cash-releasing.md)
```

## Exemplo resolvido

Um caso de negócio de escalonamento eletrónico prometeu, por ano: £450 mil de redução de despesa em agência (tesouraria), 8.000 horas de gestor de enfermaria (capacidade), conformidade de taxa de preenchimento melhorada (qualitativo). Doze meses após o arranque:

```
Benefício          Previsto    Realizado    Taxa   Evidência
Despesa em agência £450.000    £287.000     64%    livro razão vs ano de referência
Horas de gestor    8.000       5.100        64%    amostra de tempo-movimento
Conformidade       +10pp       +12pp        120%   dados do sistema de escalonamento

Ações da revisão (o objetivo do BRM):
défice de agência rastreado a duas enfermarias nunca integradas → integrá-las;
erro de otimismo de 30% do modelo de previsão registado → aplicado ao próximo caso.
```

64% de realização não é fracasso — é *conhecimento*. Os casos não medidos alegam 100% para sempre.

## Ligação à engenharia de software

As organizações de engenharia aprovam investimentos em plataformas com base em benefícios previstos e quase nunca os auditam — exatamente a patologia que o BRM corrige. A adaptação leve: toda a proposta acima de um limiar nomeia responsáveis de benefícios, métricas de referência, e uma data de revisão T+6 meses; as taxas de realização retroalimentam quanto a organização desconta a próxima previsão dessa equipa (ou fornecedor). Esta é também a resposta ao ceticismo sobre ferramentas de IA: a [descoberta do MIT de que ~95% dos pilotos de IA generativa não mostraram retorno mensurável em P&L](../retorno-do-investimento-em-ia/) é um resultado de realização de benefícios — os pilotos que *tiveram* retorno tinham linhas de benefício rastreáveis e com responsável. Prever → medir → recalibrar é o mesmo ciclo que os pilotos avaliados por [EVPI](../valor-esperado-da-informação-perfeita/), executado à escala de portefólio.

## Armadilhas

- **Sem base de referência pré-arranque** — a omissão fatal e irreparável.
- **Orfandade de benefícios**: nenhum responsável nomeado significa que ninguém recolhe os dados e toda a revisão diz "geralmente no caminho certo".
- **Benefícios duplamente contados entre programas** reivindicando a mesma capacidade libertada — mantenha um registo de benefícios em todo o portefólio.
- **Teatro de realização**: medir as vitórias qualitativas fáceis enquanto as linhas de tesouraria ficam silenciosamente por examinar.

## Fontes

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Global Digital Exemplar programme evaluation (NHS digital benefits lessons). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>

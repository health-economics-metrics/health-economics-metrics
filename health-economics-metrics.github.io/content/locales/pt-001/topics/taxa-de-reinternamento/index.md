# Taxa de Reinternamento

A taxa de reinternamento a 30 dias é a percentagem de doentes com alta que regressam como emergência dentro de 30 dias. É a métrica canónica de *qualidade de alta* do sistema de saúde — e carrega penalizações financeiras diretas.

## Porque é importante

Um reinternamento significa que a primeira alta não se manteve: alta prematura, transferência falhada de medicação, sem seguimento, ou apoio social em falta. Os pagadores penalizam-no explicitamente — o Hospital Readmissions Reduction Program dos EUA corta até 3% dos pagamentos Medicare de um hospital; o NHS historicamente não pagou por reinternamentos de emergência a 30 dias evitáveis. Assim, evitar reinternamentos é uma das poucas categorias de benefício que é *diretamente* relevante para a tesouraria de um prestador, não apenas capacidade.

## O cálculo

```
Taxa de reinternamento = reinternamentos de emergência dentro de 30 dias / altas índice × 100

As comparações padronizadas por risco ajustam para a combinação de casos; os programas
de penalização comparam observado vs esperado para hospitais semelhantes.

Valor da evitação = reinternamentos evitados × (custo por episódio de reinternamento
                     + exposição a penalização por reinternamento)
```

## Exemplo resolvido

Uma aplicação de apoio à alta de insuficiência cardíaca (rastreio de sintomas, alertas de peso, lembretes de medicação, escalonamento para enfermeiro): 2.000 altas/ano, taxa de reinternamento basal 18%, o ensaio mostra 14% com a aplicação.

```
Reinternamentos evitados = 2.000 × (0,18 − 0,14) = 80/ano
Custo por episódio de reinternamento ≈ £3.500 → £280.000/ano de custo de tratamento evitado
Mais a exposição a penalização/não-pagamento nesses episódios.
Custo da aplicação: 2.000 × £60 = £120.000/ano

Líquido ≈ +£160.000/ano, antes de qualquer alegação de QALY por deterioração evitada.
```

O número a defender é o efeito de 4 pontos percentuais: tem de vir de uma comparação controlada, porque as taxas de reinternamento oscilam com a combinação de casos e a estação.

## Ligação à engenharia de software

O reinternamento é a **taxa de falha de alterações** do sistema de saúde (ver [métricas DORA](../métricas-dora/)): trabalho que foi "entregue" e voltou dentro de 30 dias. As analogias são profundas: os tickets reabertos e os incidentes de regressão indicam má "qualidade de alta" (verificação fraca, encerramento prematuro, documentação de transferência em falta); a contabilidade estilo penalização (a equipa de correção paga, não a equipa recetora) muda o comportamento; e ambos os campos aprenderam a mesma lição, que empurrar o rendimento bruto (alta mais rápida, entrega mais rápida) sem investir na transferência simplesmente converte filas visíveis em retrabalho invisível. Uma "taxa de reabertura a 30 dias" pertence a qualquer painel de equipa que celebre o tempo de ciclo.

## Armadilhas

- **Manipulação por reclassificação**: reinternamentos codificados como estadias de observação ou novas condições; audite a definição.
- **Todas as causas vs causa relacionada**: os "todas as causas" a 30 dias incluem eventos genuinamente não relacionados; as penalizações usam normalmente todas as causas precisamente porque "relacionado" é manipulável.
- **Cegueira à combinação de casos**: um hospital que serve populações mais doentes e mais pobres reinterna mais por razões que nenhuma aplicação corrige — ajuste ao risco antes de comparar.

## Fontes

- CMS, Hospital Readmissions Reduction Program. <https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/hospital-readmissions-reduction-program-hrrp>
- NHS Digital, emergency readmissions statistics. <https://digital.nhs.uk/data-and-information/publications/statistical/compendium-emergency-readmissions>

# Adesão e Persistência

A adesão é o grau em que a utilização real corresponde à utilização prescrita (intensidade); a persistência é o tempo durante o qual a utilização continua antes da descontinuação (duração). A farmácia tem medidas padronizadas — **MPR** e **PDC**, com ≥80% como referência convencional de "aderente" — e as terapêuticas digitais herdam tanto os conceitos como o problema: a adesão é o multiplicador entre a eficácia e o valor realizado.

## Porque é importante

Os pagadores já operam com estes números: PDC ≥80% alimenta as Medicare Star Ratings dos EUA, que movem receita real dos pagadores — a adesão é infraestrutura financeira estruturante, não uma métrica secundária. Para as terapêuticas digitais o padrão repete-se: os dados de DiGA mostram volumes de prescrição fortes com adesão sustentada fraca, e o preço baseado em resultados para DTx (a chegar à Alemanha a partir de 2026) pagará com base em resultados condicionados à adesão. A atualização concetual da investigação em saúde digital: **envolvimento efetivo** — envolvimento *suficiente* para alcançar o resultado pretendido — e o seu corolário, a **dose mínima efetiva**, estabelecida empiricamente por intervenção em vez de assumida como "mais é melhor".

## O cálculo

```
MPR = Σ dias de fornecimento dispensados / dias no período × 100   (pode exceder 100%;
      sobrestima via reabastecimentos antecipados)
PDC = dias cobertos por fornecimento / dias no período × 100     (limitado a 100%;
      estimador conservador, preferido pelo CMS)
Adesão digital = eventos reais de utilização / eventos de utilização prescritos × 100
Persistência    = dias desde o início até à descontinuação
                  (reportar % persistente aos N meses; métodos de sobrevivência)

Condicionamento do valor: resultado realizado ≈ eficácia × g(adesão)
  onde g é a função dose-resposta; abaixo da dose mínima
  efetiva, g ≈ 0 — custo incorrido, benefício perdido
```

## Exemplo resolvido

Um produto digital de TCC para insónia, prescrito como 6 módulos ao longo de 6 semanas; eficácia no ensaio de 0,025 QALY entre quem completa ≥4 módulos (a dose mínima efetiva estabelecida empiricamente):

```
1.000 prescrições a £250 → £250.000 de despesa do pagador
Conclusão de módulos: ≥4 módulos 38%; 1–3 módulos 34%; zero módulos 28%

QALY realizados = 1.000 × 0,38 × 0,025 = 9,5
Custo por QALY  = 250.000 / 9,5 ≈ £26.300 — marginal face aos limiares do NICE

A engenharia de adesão (redesenho de lembretes, encurtamento de sessões) eleva
a conclusão de ≥4 módulos para 50%: 12,5 QALY → £20.000/QALY. O produto
cruzou o limiar de financiamento sem tocar no conteúdo da terapia.
```

Sob o preço por desempenho de estilo 2026, a mesma mudança move a *receita* diretamente — a engenharia de adesão torna-se o roteiro comercial.

## Ligação à engenharia de software

Dois vocabulários convergem num único conceito: a analítica de software ([ativação](../ativação-e-adesão/), [pegajosidade](../métricas-de-envolvimento/), [retenção](../retenção-e-abandono/)) e a farmácia clínica (MPR, PDC, persistência) medem ambas a exposição a uma intervenção — mapeie os eventos do seu produto para o vocabulário clínico e os pagadores conseguirão ler os seus painéis. A engenharia detém as alavancas de adesão: a lógica de lembretes (avisos diários simplistas ensinam a dispensa; o tempo adaptativo não), o custo da sessão (um módulo de 20 minutos completa-se menos do que 3 de 7 minutos), e a telemetria de fricção que localiza *onde* no protocolo os utilizadores abandonam. Instrumente a dose-resposta desde o primeiro dia — a análise de dose-mínima-efetiva que condiciona todo o modelo económico precisa de dados de utilização ligados ao resultado que só o produto pode recolher.

## Armadilhas

- **Confusão MPR/PDC**: o MPR infla; declare qual estimador e use PDC para qualquer coisa dirigida ao pagador.
- **Adesão à métrica, não à terapia**: aberturas contadas como doses (ver [métricas de envolvimento](../métricas-de-envolvimento/)).
- **Metas de envolvimento "mais é melhor"** onde a intervenção tem uma dose finita — a conclusão é sucesso, a utilização perpétua não é.
- **Alegações de eficácia baseadas em sobreviventes**: os resultados entre os aderentes incluem efeitos de seleção (as pessoas aderentes são diferentes); a estimativa causal honesta precisa de randomização ou ajuste cuidadoso.

## Fontes

- MPR vs PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- DiGA adherence findings, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>

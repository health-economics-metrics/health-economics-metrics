# Via Rápida DiGA da Alemanha

A DiGA (Digitale Gesundheitsanwendungen) é a via legal alemã de "aplicações por receita" — o primeiro sistema nacional do mundo onde os médicos prescrevem aplicações de saúde aprovadas e o seguro obrigatório tem de as reembolsar. É a principal experiência ao vivo em pagar por terapêuticas digitais à escala nacional.

## Porque é importante

A DiGA respondeu à pergunta que toda a empresa de saúde digital faz — "quem vai realmente pagar?" — com legislação (a DVG, 2019). O design é notável:

- **Decisão rápida**: o BfArM (o regulador) tem de decidir dentro de 3 meses.
- **Listagem provisória**: as aplicações podem ser listadas durante 12 meses *enquanto ainda geram evidência* — a ganhar receita durante o seu estudo pivotal.
- **Prazo de evidência**: provar um "efeito positivo nos cuidados de saúde" (benefício médico, ou melhoria estrutural/procedimental relevante para o doente) através de um estudo comparativo — normalmente um RCT — ou ser retirada da lista. Aproximadamente metade das entradas provisórias não consegue converter-se.
- **Preços**: o fabricante define livremente o preço do ano 1; depois negociado com a federação de seguradoras. Preços iniciais medianos de 3 meses em torno de €500; elementos de preço baseados em desempenho a chegar a partir de 2026.

Verificação da realidade de mercado (investigação até final de 2024): ~68 aplicações listadas, >1M de prescrições cumulativas, ~81% das prescrições ativadas, ~€234M de gasto cumulativo das seguradoras — um mercado real, mas modesto face ao entusiasmo, e a adesão após a ativação permanece o ponto fraco.

## O cálculo

O modelo comercial que todo o fundador de DiGA opera:

```
Receita = prescrições × taxa de ativação × preço por período de prescrição
Custo de evidência = RCT pivotal (tipicamente €1M–3M) dentro da janela de 12 meses
Valor esperado = P(a evidência é bem-sucedida) × receita em estado estável − custo de evidência

Com ~50% de falha de conversão, P tem de ser honestamente avaliado — metade
do campo gasta o dinheiro do RCT e perde a listagem.
```

## Exemplo resolvido

Uma aplicação de gestão da depressão lista-se provisoriamente a €450/trimestre:

```
Ano 1: 20.000 prescrições × 81% de ativação × €450 ≈ €7,3M de receita
Custo do RCT: €2M, a decorrer em paralelo
Resultado A (evidência positiva): listagem permanente, preço negociado ~€380,
  estado estável 60.000 prescrições/ano ≈ €18,5M/ano
Resultado B (evidência falha): retirada da lista ao mês 12; receita cessa.
```

O ano provisório financia a geração de evidência — a inovação central da via. Contraste com a sequência tradicional (evidência primeiro, receita anos depois), que priva de recursos exatamente os produtos que a DiGA quer que existam.

## Ligação à engenharia de software

O padrão da DiGA — **adoção provisória com uma métrica de sucesso pré-registada e um encerramento automático** — é diretamente copiável para a governação de ferramentas de engenharia: envie a ferramenta para utilizadores em produção durante 12 meses, pré-registe a métrica (tempo poupado medido, redução de incidentes), expire automaticamente a menos que a evidência chegue. Resolve o paradoxo do piloto (ferramentas que precisam de escala para provar valor nunca chegam à escala) sem conceder posse permanente a tecnologia não comprovada. Os dados de 81% de ativação/baixa adesão também carregam uma lição de produto: a prescrição (ou o mandato executivo) consegue instalações; só a qualidade do produto consegue utilização sustentada — ver [adesão e persistência](../adesão-e-persistência/).

## Armadilhas

- **Tratar a listagem como a linha de meta** — as prescrições requerem a confiança do prescritor; muitas DiGAs listadas veem volume negligenciável.
- **Subalimentar o estudo pivotal** para poupar dinheiro durante o ano de receita — a economia falsa que explica grande parte da taxa de falha de 50%.
- **Transportar o modelo sem o pagador**: a DiGA funciona porque o reembolso é legal; uma cópia sem pagamento obrigatório é apenas um programa piloto.

## Fontes

- Analysis of the DiGA market, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- DiGA pricing trends, npj Digital Medicine 2025. <https://www.nature.com/articles/s41746-025-01879-6>
- BfArM, Digital Health Applications. <https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html>

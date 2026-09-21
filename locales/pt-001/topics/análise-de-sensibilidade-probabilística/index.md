# Análise de Sensibilidade Probabilística (ASP)

A ASP atribui uma distribuição de probabilidade a todos os parâmetros incertos, amostra-os todos simultaneamente milhares de vezes (Monte Carlo), e reporta a *probabilidade* de uma opção ser a melhor escolha — em vez de uma única estimativa pontual.

## Porque é importante

O caso de referência do NICE *exige* a ASP. A análise determinística responde a "e se um input estiver errado?"; a ASP responde a "dado tudo o que não sabemos ao mesmo tempo, quão provável é que estejamos a tomar a decisão certa?" O seu resultado característico, a **curva de aceitabilidade de custo-efetividade (CEAC)**, traça a probabilidade de uma opção ser custo-efetiva face ao limiar de disposição para pagar — transformando "o ICER é £24.000/QALY" em "há 78% de probabilidade de esta ser a escolha certa a £30.000/QALY".

## O cálculo

```
Para cada uma de N extrações (N ≈ 10.000):
  amostre cada parâmetro θ da sua distribuição
    (custos ~ Gamma, probabilidades ~ Beta, utilidades ~ Beta, efeitos ~ Normal/logNormal)
  calcule BML_j(θ) = λ × Efeito_j(θ) − Custo_j(θ) para cada opção j

CEAC_j(λ) = fração de extrações em que a opção j tem o BML mais alto ao limiar λ
```

Ver [benefício monetário líquido](../benefício-monetário-líquido/) para o BML e [limiares de disposição para pagar](../limiares-de-disposição-para-pagar/) para λ.

## Exemplo resolvido

Caso de negócio de migração de plataforma. Três inputs incertos:

```
Custo de migração    ~ Gamma,  média £800mil, dp £200mil
Benefício anual       ~ Normal, média £350mil, dp £150mil
Duração do benefício   ~ Uniforme, 3–6 anos
```

Para cada uma de 10.000 extrações calcule o benefício líquido = duração × anual − custo (desconto omitido para clareza). Resultados ilustrativos:

```
Benefício líquido médio:   £775mil
Probabilidade líquido > 0: 0,86
5º–95º percentil:         −£180mil … +£1,9M
```

A estimativa pontual dizia "obviamente sim". A ASP diz "86% sim, com uma cauda real onde perdemos £180mil+" — que é o que um dono de portefólio realmente precisa, e precifica o caso para executar primeiro um spike de descoberta (ver [EVPI](../valor-esperado-da-informação-perfeita/)).

## Ligação à engenharia de software

Os engenheiros já confiam no Monte Carlo para previsão de entrega (a amostragem de rendimento vence as estimativas pontuais). Estenda o mesmo mecanismo ao dinheiro: distribuições sobre adoção, tempo poupado, e salário, depois reporte "probabilidade de este investimento em plataforma ser líquido-positivo" em vez de um ROI de falsa precisão. Uma curva estilo CEAC — probabilidade de ser a melhor opção em função de como a organização valoriza uma hora-engenheiro — é um artefacto genuinamente melhor para um comité de financiamento do que qualquer número único.

## Armadilhas

- **Distribuições de lixo**: a ASP com desvios-padrão inventados é análise determinística vestida de bata de laboratório. Baseie os espalhamentos em dados ou obtenção estruturada de opinião de especialistas.
- **Ignorar a correlação** entre parâmetros (a adoção alta normalmente correlaciona-se com o tempo poupado alto); a amostragem independente subestima o risco de cauda.
- **Reportar apenas a média** da simulação — todo o objetivo é a distribuição e a probabilidade de decisão.

## Fontes

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>

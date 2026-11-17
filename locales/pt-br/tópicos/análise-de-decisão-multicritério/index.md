# Análise de Decisão Multicritério (MCDA)

A análise de decisão multicritério (MCDA) é um modelo de pontuação por soma ponderada usado na avaliação de tecnologias de saúde quando um único limiar de ICER/disposição para pagar não capta tudo o que importa a quem decide: equidade, necessidade não satisfeita, inovação, impacto orçamental, gravidade da doença. A cada critério atribui-se um peso que reflete a sua importância (obtido junto das partes interessadas, com soma 1), cada alternativa recebe uma pontuação normalizada por critério (normalmente de 0 a 1) e a pontuação total é a soma ponderada — a mesma forma matemática de uma grelha de avaliação de fornecedores de software.

## Porque é importante

A MCDA usa-se em quadros como o EVIDEM e em algumas agências de ATS para medicamentos órfãos/doenças raras, onde a abordagem estrita de limiar de custo por QALY é considerada demasiado estreita para captar tudo o que importa à decisão. O grupo de trabalho ISPOR MCDA Emerging Good Practices Task Force formalizou boas práticas para obter pesos e pontuações defensáveis, precisamente porque uma decisão ponderada informal é fácil de construir e fácil de manipular. Quando uma tecnologia de saúde tem dimensões de valor que um único [limiar de disposição para pagar](../limiares-de-disposição-para-pagar/) não consegue representar — gravidade, inovação, equidade — a MCDA dá a quem decide uma estrutura explícita e auditável para as combinar, em vez de um juízo não dito.

## O cálculo

```
Pontuação MCDA = Σ_i (peso_i × pontuação_i)

os pesos devem somar 1 (obtidos com métodos para partes interessadas
como swing weighting ou Analytic Hierarchy Process)
```

## Exemplo resolvido

Uma comissão de ATS avalia uma terapêutica digital em quatro critérios:

```
Critério                              Peso    Pontuação   Peso × Pontuação
Benefício clínico                     0.4     0.8         0.32
Impacto nos custos                    0.3     0.5         0.15
Gravidade / necessidade não satisfeita  0.2   0.9         0.18
Inovação                              0.1     0.6         0.06
                                      ─────               ─────
                                      1.0                 0.71
```

Os pesos somam 1,0 (0,4 + 0,3 + 0,2 + 0,1) e a pontuação MCDA é 0,71 (0,32 + 0,15 + 0,18 + 0,06). A comissão compara 0,71 com um limiar acordado de antemão ou classifica-a face a tecnologias concorrentes pontuadas da mesma forma.

## Ligação à engenharia de software

É exatamente a mesma matemática de uma grelha de pontuação ponderada de seleção de fornecedores, de uma matriz de avaliação de RFP ou de um modelo de pontuação de priorização de funcionalidades — veja-se o [construir vs comprar](../construir-vs-comprar/) para o caso de uso clássico da grelha de pontuação ponderada na aquisição de software. Vale também contrastá-la com o [WSJF e CD3](../wsjf-e-cd3/): o WSJF/CD3 é um método de priorização assente num *quociente* (custo de atraso dividido pelo tamanho ou duração do trabalho), ao passo que a MCDA é uma *soma* ponderada. A MCDA e o WSJF/CD3 são duas respostas estruturalmente diferentes à pergunta «como classificamos opções concorrentes?», e saber qual delas uma decisão concreta realmente exige — valor agregado sobre critérios independentes, ou densidade de valor por unidade de capacidade escassa — importa mais do que qual fórmula parece mais rigorosa.

## Armadilhas

- **Viés na obtenção dos pesos**: quem fixa os pesos praticamente decide a classificação de antemão, pelo que a «fórmula» pode branquear uma decisão política ou comercial como um cálculo objetivo. Documentar quem fixou os pesos e como.
- **Dupla contagem de um critério já coberto noutro**: pontuar a «custo-efetividade» como critério *e* pontuar à parte o «impacto nos custos» pondera o dinheiro em excesso face aos restantes critérios, sem que ninguém o pretenda.
- **Falsa precisão**: uma pontuação ponderada com duas casas decimais (0,71) sugere mais rigor do que as avaliações das partes interessadas numa escala de 0–10 realmente sustentam, e a variabilidade entre avaliadores nessas avaliações muitas vezes nem sequer é reportada.

## Fontes

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.

# Análise de Sensibilidade

A análise de sensibilidade determinística (ASD) varia uma suposição de cada vez ao longo de uma gama plausível para ver se a conclusão sobrevive. A visualização padrão é um diagrama de tornado: parâmetros classificados por quanto oscilam o resultado.

## Porque é importante

Todo o modelo económico é construído sobre estimativas — tempo poupado, adoção, custos unitários. A avaliação de tecnologia de saúde recusa-se a aceitar uma estimativa pontual ("o ROI é 340%") sem evidência de que a conclusão é robusta a desacordo razoável sobre os inputs. Um diagrama de tornado diz ao decisor *qual suposição interrogar*: se o caso só funciona quando o parâmetro mais contestado está no seu extremo otimista, toda a gente consegue ver isso imediatamente.

Este é o hábito único mais transferível da economia da saúde para os casos de negócio de software.

## O cálculo

Para cada parâmetro p com gama plausível [p_baixo, p_alto]:

```
Resultado_baixo  = modelo(p = p_baixo,  todos os outros no caso base)
Resultado_alto   = modelo(p = p_alto, todos os outros no caso base)
Oscilação(p)    = |Resultado_alto − Resultado_baixo|
```

Classifique os parâmetros por oscilação; trace barras horizontais em torno do resultado do caso base. Variantes: ASD bidirecional (varia dois parâmetros numa grelha), análise de limiar (encontra o valor do parâmetro onde a decisão se inverte).

## Exemplo resolvido

Assistente de codificação com IA para 200 programadores. Caso base: licença £39/programador/mês; 30 min/programador/dia poupados; custo carregado £60/hora; 220 dias de trabalho.

```
Benefício anual do caso base = 200 × 0,5h × 220 × £60 = £1.320.000
Custo anual              = 200 × £39 × 12         = £93.600
Líquido do caso base            = £1.226.400
```

Tornado (um parâmetro de cada vez):

```
Tempo poupado 0,1–1,0 h/dia: líquido = £170.400 … £2.546.400   (oscilação £2,38M) ← domina
Custo carregado £40–£80/h:    líquido = £786.400 … £1.666.400   (oscilação £0,88M)
Dias de trabalho 200–240:     líquido = £1.106.400 … £1.346.400 (oscilação £0,24M)
Licença £30–£50/mês:          líquido = £1.248.000 … £1.200.000 (oscilação £48mil)
```

Análise de limiar: o benefício líquido atinge zero a cerca de **2,1 minutos/dia** poupados. A decisão é insensível ao preço da licença e depende inteiramente da estimativa de tempo poupado — pelo que meça isso, não o resto. (E lembre-se de que o resultado é capacidade, não tesouraria — ver [libertador de tesouraria vs não libertador](../poupanças-libertadoras-de-tesouraria-vs-não-libertadoras/).)

## Ligação à engenharia de software

Os engenheiros já fazem este instinto como "e se estivermos errados sobre X?" — a ASD apenas o torna sistemático e visível. Coloque um diagrama de tornado em toda a proposta de ferramentas, plano de capacidade, e análise construir-vs-comprar. Converte discussões sobre a intuição de quem tem razão em acordos sobre qual parâmetro ir medir — frequentemente através de um piloto, cujo valor pode ser precificado (ver [valor esperado da informação perfeita](../valor-esperado-da-informação-perfeita/)).

## Armadilhas

- **Gamas escolhidas para lisonjear**: ±10% em torno de todo o input independentemente da incerteza real. As estimativas de tempo poupado merecem ±80%; os preços de licença ±10%.
- **Uma-de-cada-vez perde interações** — parâmetros correlacionados (adoção e tempo poupado) precisam de análise bidirecional ou de [análise de sensibilidade probabilística](../análise-de-sensibilidade-probabilística/) completa.
- **Fazer a análise e ignorá-la**: se o tornado diz que o caso depende de um número mole, o próximo passo é medição, não aprovação.

## Fontes

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>

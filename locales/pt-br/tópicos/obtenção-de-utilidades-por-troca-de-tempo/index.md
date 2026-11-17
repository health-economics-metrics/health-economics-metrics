# Obtenção de Utilidades por Troca de Tempo (TTO)

O TTO é o método padrão para obter o valor de utilidade de um estado de saúde diretamente de quem responde, em vez de o inventar. É um dos métodos de obtenção (a par da lotaria padrão e das experiências de escolha discreta) que produzem os conjuntos de valores (value sets) por detrás de instrumentos como o [EQ-5D](../eq-5d/) e, por isso, por detrás da maioria dos cálculos de [QALY](../ano-de-vida-ajustado-pela-qualidade/) a jusante.

## Porque é importante

Cada peso de utilidade que entra num cálculo de QALY teve de vir de algum lado. O TTO é o «como»: para um estado considerado melhor do que a morte, pergunta-se a quem responde quantos anos `X` em saúde perfeita equivalem a `T` anos no estado comprometido (`X < T`); a utilidade é `X / T`. Para um estado que alguns inquiridos consideram pior do que a morte, a fórmula padrão deixa de funcionar (não consegue representar limpamente uma utilidade abaixo de zero), pelo que se usa o TTO alargado. Um engenheiro de software ou um analista que trata um peso de utilidade como um dado de entrada fornecido, sem saber que foi preciso um protocolo de obtenção validado para o conseguir, está a um passo de um número que não conseguirá defender quando for contestado.

## O cálculo

```
TTO padrão (estado melhor do que a morte):
  utilidade = tempo_em_saúde_perfeita / tempo_no_estado_comprometido

TTO alargado (estado pior do que a morte):
  utilidade = -tempo_trocado_pela_morte / (duração_total - tempo_trocado_pela_morte)
```

`tempo_em_saúde_perfeita` / `tempo_no_estado_comprometido`: `X` anos em saúde perfeita considerados equivalentes a `T` anos no estado comprometido. `tempo_trocado_pela_morte` / `duração_total`: na formulação pior-do-que-a-morte, de `T` anos de vida restante, os anos `a` que a pessoa trocaria por uma morte imediata, preferindo `T − a` anos em saúde perfeita seguidos de morte a `T` anos no estado pior do que a morte. O resultado é negativo, ancorado de modo a que a morte = 0.

## Exemplo resolvido

**Padrão**: uma pessoa está num estado comprometido durante 10 anos e é indiferente perante 7 anos em saúde perfeita: utilidade = 7 / 10 = **0,7**.

**Pior do que a morte**: de 10 anos de vida restante, a pessoa trocaria 2 anos por uma morte imediata (prefere 8 anos em saúde perfeita seguidos de morte a 10 anos no estado pior do que a morte): utilidade = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Ligação à engenharia de software

O mesmo ponto com que um inquérito de DevEx ou de envolvimento se depara quando pede às pessoas que classifiquem algo numa escala de 0–10 por validar aplica-se aqui ao contrário: o TTO existe precisamente porque «peça apenas às pessoas que classifiquem» não é, por si, um método de obtenção validado. Antes de construir um índice compósito (uma pontuação de DevEx, um índice de envolvimento, uma escala de esgotamento) sobre um número autodeclarado, convém perguntar como foi obtido e se esse método estava validado; é a mesma pergunta que os economistas da saúde fazem a um peso de utilidade antes de ele entrar num QALY.

## Armadilhas

- **Generalizar a partir de um valor isolado**: os valores de TTO obtêm-se de uma *amostra* do público (ou de pacientes), não da pessoa cujos cuidados se decidem; usar o valor de TTO de um único inquirido como se se generalizasse é um erro amostral.
- **Formular mal o estado**: a fórmula de TTO padrão pressupõe que o estado é inequivocamente melhor do que a morte; aplicá-la a um estado que alguns inquiridos considerariam pior do que a morte sem passar à formulação alargada dá em silêncio uma utilidade errada (positiva).
- **Durações não comparáveis**: valores de TTO obtidos com vidas restantes `T` diferentes para a comparação pior-do-que-a-morte não são diretamente comparáveis sem verificar que o desenho do estudo manteve `T` constante.

## Fontes

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.

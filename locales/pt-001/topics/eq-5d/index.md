# EQ-5D

O EQ-5D é o questionário padronizado do grupo EuroQol para medir a qualidade de vida relacionada com a saúde. É o instrumento que produz os pesos de utilidade dentro da maioria dos cálculos de [QALY](../ano-de-vida-ajustado-pela-qualidade/) — o caso de referência do NICE nomeia-o como a medida preferida para adultos.

## Porque é importante

Qualquer produto de saúde digital que queira alegar QALYs precisa de utilidades de um instrumento validado, e o EQ-5D é o padrão no Reino Unido e em grande parte da Europa. É curto o suficiente para incorporar numa aplicação (5 perguntas + uma escala visual), o que significa que os produtos de software podem recolher dados de resultado de grau HTA como efeito secundário do uso normal — uma vantagem estrutural face aos medicamentos, que precisam de estudos dedicados.

## O cálculo

O EQ-5D-5L faz uma pergunta em cada uma de **5 dimensões** — mobilidade, cuidados pessoais, atividades habituais, dor/desconforto, ansiedade/depressão — cada uma respondida em **5 níveis** (sem problemas … problemas extremos), mais uma escala visual analógica 0–100 (EQ VAS).

```
Estado de saúde = perfil de 5 dígitos, ex.: "21221"
Índice de utilidade = conjunto_de_valores(perfil)

O conjunto de valores é específico do país, derivado de inquéritos
de troca-tempo / escolha-discreta à população geral. Âncoras: 1 = saúde
plena, 0 = morto; estados piores do que a morte são negativos (piso do
conjunto 3L do Reino Unido: −0,594).
```

A aritmética do QALY prossegue então como `duração × utilidade`.

## Exemplo resolvido

Uma aplicação de reabilitação musculosquelética mede o EQ-5D-5L na integração e aos 6 meses para 1.000 utilizadores concluintes.

```
Utilidade média na base: 0,62
Utilidade média aos 6 meses: 0,71
Ganho sustentado (assumido) 1 ano: (0,71 − 0,62) × 1,0 = 0,09 QALYs por utilizador
```

Face a uma mudança do grupo de controlo de 0,03 (recuperação natural), o ganho atribuível é 0,06 QALYs/utilizador. Monetizado a £20.000–£30.000/QALY: **£1.200–£1.800 de valor em saúde por utilizador concluinte** — o número que ancora a negociação de preço da aplicação com um pagador. (As diferenças mínimas clinicamente importantes para o índice EQ-5D estão comummente na gama 0,03–0,08, pelo que 0,06 é plausível mas tem de passar a comparação de controlo; ver [resultados relatados pelo doente](../resultados-relatados-pelo-doente/).)

## Ligação à engenharia de software

- **Instrumente-o.** O EQ-5D no registo e em intervalos de seguimento é alguns ecrãs de UI; o retorno é evidência de grau HTA. Obtenha licenciamento da EuroQol (necessário, gratuito para alguns usos).
- **Use o conjunto de valores correto** para o país de implementação — as mesmas respostas pontuam de forma diferente no Reino Unido vs Alemanha vs Japão.
- **Lição de design**: o EQ-5D mostra como um pequeno inquérito padronizado mais uma função de pontuação publicada produz um índice único comparável. Esse é o padrão para qualquer índice credível de experiência de programador também — instrumento padronizado, pesos publicados, não vibrações ad-hoc. Ver [SPACE e DevEx](../space-e-devex/).

## Armadilhas

- **Antes/depois sem comparador** — a regressão para a média e a recuperação natural inflam os ganhos ingénuos.
- **Viés de sobrevivência**: medir apenas os utilizadores que permaneceram envolvidos (ver [retenção e abandono](../retenção-e-abandono/)).
- **Misturar versões 3L e 5L ou conjuntos de valores** entre estudos — números sistematicamente diferentes.
- **Efeitos de teto** em populações levemente afetadas: muitos utilizadores pontuam perto de 1,0 na base, sem margem para demonstrar ganho.

## Fontes

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>

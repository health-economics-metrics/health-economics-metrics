# Análise Custo-Utilidade (ACU)

A ACU é análise de custo-efetividade com um **resultado genérico, ponderado por preferência** — quase sempre o [QALY](../ano-de-vida-ajustado-pela-qualidade/) (ou [DALY](../ano-de-vida-ajustado-por-incapacidade/) evitado). Como a unidade de resultado é universal, a ACU consegue comparar intervenções entre doenças completamente diferentes.

## Porque é importante

Um sistema de saúde nacional tem de escolher entre um medicamento oncológico, uma aplicação de saúde mental, e um robô cirúrgico a partir de um único orçamento. As unidades naturais não os conseguem comparar; os QALYs conseguem. A ACU é, portanto, o método do caso de referência no NICE e na maioria dos organismos de HTA: o seu resultado — custo por QALY, julgado face a um [limiar](../limiares-de-disposição-para-pagar/) — é a coisa mais próxima que a política de saúde tem de uma taxa de câmbio universal. Se quer que o seu software seja financiado *em vez de outra coisa*, a ACU é a arena.

## O cálculo

```
ICUR = ΔCusto / ΔQALYs      (o ICER com QALYs como unidade de efeito)

ΔQALYs = Σ (duração_i × utilidade_i)_novo − Σ (duração_i × utilidade_i)_antigo
```

Utilidades de instrumentos validados ([EQ-5D](../eq-5d/)); custos e QALYs ambos [descontados](../desconto-e-preferência-temporal/) a 3,5% (caso de referência do NICE); incerteza via [ASP](../análise-de-sensibilidade-probabilística/).

## Exemplo resolvido

Uma aplicação de TCC para ansiedade moderada vs lista de espera para terapia presencial, por doente:

```
Custos:  licença + suporte da aplicação        £250
        terapia deslocada                       −£680   (40% dos utilizadores já não a precisam)
        ΔC = 250 − 680 = −£430 (poupa dinheiro)

QALYs:  6 meses a utilidade 0,76 em vez de 0,68 enquanto espera
        ΔE = 0,5 × (0,76 − 0,68) = +0,04 QALYs
```

ΔC < 0 e ΔE > 0: a aplicação **domina** — melhor e mais barata, sem necessidade de rácio. Se a suposição de deslocamento de terapia fosse apenas 10%, ΔC = 250 − 170 = +£80, e o ICUR = 80 / 0,04 = **£2.000/QALY** — ainda muito abaixo de £20.000. O caso sobrevive mesmo com a suposição-chave drasticamente reduzida: é assim que se parece uma ACU robusta (e o [diagrama de tornado](../análise-de-sensibilidade/) prova-o).

## Ligação à engenharia de software

A ideia profunda da ACU — *uma única unidade composta, ponderada por preferência, para comparar coisas diferentes* — é o padrão para comparar investimentos de engenharia diferentes (segurança vs experiência do programador vs fiabilidade). As opções honestas são ou uma unidade composta defensável (rara) ou uma [tabela de custo-consequência](../análise-custo-consequência/) explícita (habitual). O que a ACU avisa contra é o composto falso: uma "pontuação de impacto" ponderada cujos pesos foram ajustados depois do facto para fazer vencer a opção preferida. A economia da saúde passou décadas a padronizar a obtenção de utilidade precisamente para que os pesos precedam a comparação.

## Armadilhas

- **Ganhos de utilidade abaixo da sensibilidade do instrumento** (ver diferença mínima clinicamente importante em [resultados relatados pelo doente](../resultados-relatados-pelo-doente/)) — um pequeno ΔE vezes grandes populações é um truque de lavagem clássico.
- **Deslocamento de cuidados do comparador em falta** — o maior termo de custo para produtos digitais é frequentemente o que substituem.
- **Mapear pontuações não-preferenciais para utilidades** com correspondências não validadas.

## Fontes

- York Health Economics Consortium glossary: cost-utility analysis. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>

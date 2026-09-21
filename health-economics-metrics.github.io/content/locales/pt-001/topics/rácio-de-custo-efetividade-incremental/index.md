# Rácio de Custo-Efetividade Incremental (ICER)

O ICER é o custo extra por unidade extra de efeito de saúde quando se escolhe uma opção sobre a próxima melhor alternativa. É o número principal da avaliação de tecnologia de saúde. (Quando a unidade de efeito são QALYs, também se chama rácio de custo-utilidade incremental, ICUR.)

## Porque é importante

Os sistemas de saúde nunca avaliam uma tecnologia isoladamente — sempre *incrementalmente*, face ao que de outra forma seria feito. O NICE compara o ICER de uma tecnologia ao seu limiar de **£20.000–£30.000 por QALY**; o instituto ICER dos EUA reporta entre $50.000–$200.000/QALY; o Canadá trabalha aproximadamente com CAD$50.000/QALY. Se o seu produto "vale a pena" para um sistema de saúde nacional é, formalmente, se o seu ICER passa o limiar local. Ver [limiares de disposição para pagar](../limiares-de-disposição-para-pagar/).

## O cálculo

```
ICER = (Custo_novo − Custo_comparador) / (Efeito_novo − Efeito_comparador)
     = ΔC / ΔE
```

Regras de interpretação:

- ΔC < 0, ΔE > 0: a nova opção **domina** — mais barata e melhor; nenhum rácio necessário.
- ΔC > 0, ΔE > 0: calcule o ICER, compare ao limiar λ; adote se ICER < λ.
- ΔC > 0, ΔE < 0: a nova opção é dominada — rejeite.
- Os rácios comportam-se mal perto de ΔE = 0 — prefira o [benefício monetário líquido](../benefício-monetário-líquido/) para classificação.

O comparador tem de ser a *próxima melhor opção não dominada*, não "não fazer nada" — ver [dominância e a fronteira de eficiência](../dominância-e-a-fronteira-de-eficiência/).

## Exemplo resolvido

Um serviço de monitorização remota para doentes com insuficiência cardíaca, por 1.000 doentes/ano, versus cuidados habituais:

```
Custos:   serviço £900.000; internamentos evitados poupam £600.000
         ΔC = 900.000 − 600.000 = £300.000
Efeitos: a intervenção mais precoce ganha 25 QALYs
         ΔE = 25

ICER = 300.000 / 25 = £12.000 por QALY
```

£12.000/QALY está confortavelmente abaixo do limiar de £20.000 do NICE — um caso forte. Note como o custo *líquido* importa: sem a compensação de £600.000, o ICER seria £36.000/QALY e o caso provavelmente falharia. As compensações de custo e a qualidade da sua evidência são onde estas análises se ganham e se perdem (ver [custos a jusante evitados](../custos-a-jusante-evitados/)).

## Ligação à engenharia de software

A disciplina do ICER transfere-se por completo para decisões de engenharia:

```
(custo da opção B − custo da opção A) / (resultado B − resultado A)
```

— custo incremental por implantação adicional, por hora-engenheiro poupada, por incidente evitado — sempre face à próxima melhor alternativa, não face a não fazer nada. Os dois hábitos que vale a pena roubar: (1) *nomeie o comparador explicitamente*; a maioria das alegações de ROI de ferramentas compara secretamente com um espantalho; (2) *líquido dos custos primeiro* — uma ferramenta que custa £100mil mas desloca £80mil de gasto existente tem ΔC = £20mil.

## Armadilhas

- **Manipulação de comparador**: comparar face a uma linha de base obsoleta ou artificialmente má infla o ΔE e lisonjeia o ICER.
- **Médias em vez de incrementos**: o custo por QALY de todo um programa não é o ICER de o expandir ou adotar.
- **Culto do ponto de estimativa**: os ICERs são rácios de duas diferenças incertas; reporte a incerteza via [ASP e CEACs](../análise-de-sensibilidade-probabilística/).
- **Os ICERs negativos são ambíguos** (mais barato-e-melhor vs mais caro-e-pior dão o mesmo sinal) — nunca reporte um ICER negativo sem dizer qual quadrante é.

## Fontes

- NICE: cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>

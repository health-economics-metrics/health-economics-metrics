# Ratio de Coste-Efectividad Incremental (ICER)

El ICER es el coste adicional por unidad adicional de efecto sobre la salud cuando se elige una opción frente a la siguiente mejor alternativa. Es la cifra estrella de la evaluación de tecnologías sanitarias. (Cuando la unidad de efecto son QALYs, también se denomina ratio de coste-utilidad incremental, ICUR.)

## Por qué importa

Los sistemas de salud nunca evalúan una tecnología de forma aislada, siempre *de forma incremental*, frente a lo que se haría en su lugar. NICE compara el ICER de una tecnología con su umbral de **£20,000–£30,000 por QALY**; el instituto ICER de EE. UU. informa en un rango de $50,000–$200,000/QALY; Canadá trabaja en torno a CAD$50,000/QALY. Que tu producto «merezca la pena» para un servicio nacional de salud es, formalmente, si su ICER supera el umbral local. Véase [willingness-to-pay thresholds](../willingness-to-pay-thresholds/).

## Las matemáticas

```
ICER = (Coste_nuevo − Coste_comparador) / (Efecto_nuevo − Efecto_comparador)
     = ΔC / ΔE
```

Reglas de interpretación:

- ΔC < 0, ΔE > 0: la nueva opción **domina**: es más barata y mejor; no hace falta ratio.
- ΔC > 0, ΔE > 0: calcula el ICER, compáralo con el umbral λ; adóptala si ICER < λ.
- ΔC > 0, ΔE < 0: la nueva opción está dominada: recházala.
- Los ratios se comportan mal cerca de ΔE = 0: prefiere el [beneficio monetario neto](../net-monetary-benefit/) para clasificar opciones.

El comparador debe ser la *siguiente mejor opción no dominada*, no "no hacer nada"; véase [dominance and the efficiency frontier](../dominance-and-efficiency-frontier/).

## Ejemplo resuelto

Un servicio de monitorización remota para pacientes con insuficiencia cardíaca, por cada 1,000 pacientes/año, frente a la atención habitual:

```
Costes:  servicio £900,000; los ingresos evitados ahorran £600,000
         ΔC = 900,000 − 600,000 = £300,000
Efectos: la intervención temprana gana 25 QALYs
         ΔE = 25

ICER = 300,000 / 25 = £12,000 por QALY
```

£12,000/QALY queda cómodamente por debajo del umbral de £20,000 de NICE: un caso sólido. Obsérvese cómo importa el coste *neto*: sin la compensación de £600,000, el ICER sería £36,000/QALY y el caso probablemente fracasaría. Las compensaciones de coste y la calidad de su evidencia son donde se ganan y se pierden estos análisis (véase [avoided downstream costs](../avoided-downstream-costs/)).

## Conexión con la ingeniería de software

La disciplina del ICER se traslada íntegramente a las decisiones de ingeniería:

```
(coste de la opción B − coste de la opción A) / (resultado B − resultado A)
```

—coste incremental por despliegue adicional, por hora-ingeniero ahorrada, por incidente evitado— siempre frente a la siguiente mejor alternativa, no frente a no hacer nada. Los dos hábitos que merece la pena robar: (1) *nombra explícitamente el comparador*; la mayoría de las afirmaciones de ROI de herramientas comparan en secreto con un hombre de paja; (2) *neta los costes primero*: una herramienta que cuesta £100k pero desplaza £80k de gasto existente tiene ΔC = £20k.

## Trampas habituales

- **Manipulación del comparador**: comparar frente a una base obsoleta o artificialmente mala infla ΔE y favorece el ICER.
- **Promedios en lugar de incrementos**: el coste por QALY de todo un programa no es el ICER de ampliarlo o adoptarlo.
- **Culto a la estimación puntual**: los ICER son ratios de dos diferencias inciertas; informa la incertidumbre mediante [PSA y CEAC](../probabilistic-sensitivity-analysis/).
- **Los ICER negativos son ambiguos** (más barato y mejor frente a más caro y peor dan el mismo signo): nunca informes un ICER negativo sin decir en qué cuadrante se encuentra.

## Fuentes

- NICE: cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>

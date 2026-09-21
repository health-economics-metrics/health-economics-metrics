# Ratio de Coste-Efectividad Incremental (RCEI)

El RCEI es el coste extra por unidad extra de efecto en salud cuando eliges una opción sobre la siguiente mejor alternativa. Es la cifra titular de la evaluación de tecnología sanitaria. (Cuando la unidad de efecto son AVAC, también se llama ratio de coste-utilidad incremental, RCUI.)

## Por qué importa

Los sistemas de salud nunca evalúan una tecnología de forma aislada — siempre *incrementalmente*, frente a lo que se haría de otro modo. NICE compara el RCEI de una tecnología con su [umbral](../umbrales-de-disposición-a-pagar/) de **£20.000–£30.000 por AVAC**; el instituto ICER de EE. UU. informa a través de $50.000–$200.000/AVAC; Canadá trabaja en torno a CAD$50.000/AVAC. Si tu producto "vale la pena" para un sistema de salud nacional es, formalmente, si su RCEI supera el umbral local.

## El cálculo

```
RCEI = (Coste_nuevo − Coste_comparador) / (Efecto_nuevo − Efecto_comparador)
     = ΔC / ΔE
```

Reglas de interpretación:

- ΔC < 0, ΔE > 0: la nueva opción **domina** — más barata y mejor; no se necesita razón.
- ΔC > 0, ΔE > 0: calcula el RCEI, compáralo con el umbral λ; adopta si RCEI < λ.
- ΔC > 0, ΔE < 0: la nueva opción está dominada — rechaza.
- Las razones se comportan mal cerca de ΔE = 0 — prefiere el [beneficio monetario neto](../beneficio-monetario-neto/) para clasificar.

El comparador debe ser la *siguiente mejor opción no dominada*, no "no hacer nada" — ver [dominancia y la frontera de eficiencia](../dominancia-y-la-frontera-de-eficiencia/).

## Ejemplo resuelto

Un servicio de monitoreo remoto para pacientes con insuficiencia cardíaca, por 1.000 pacientes/año, frente a la atención habitual:

```
Costes:   servicio £900.000; ingresos evitados ahorran £600.000
         ΔC = 900.000 − 600.000 = £300.000
Efectos: la intervención más temprana gana 25 AVAC
         ΔE = 25

RCEI = 300.000 / 25 = £12.000 por AVAC
```

£12.000/AVAC está cómodamente por debajo del umbral de £20.000 de NICE — un caso sólido. Nota cómo importa el coste *neto*: sin la compensación de £600.000 el RCEI sería £36.000/AVAC y el caso probablemente fallaría. Las compensaciones de coste y su calidad de evidencia son donde se ganan y pierden estos análisis (ver [costes posteriores evitados](../costes-posteriores-evitados/)).

## Conexión con la ingeniería de software

La disciplina del RCEI se traslada íntegramente a las decisiones de ingeniería:

```
(coste de la opción B − coste de la opción A) / (resultado B − resultado A)
```

— coste incremental por despliegue adicional, por hora-ingeniero ahorrada, por incidente evitado — siempre frente a la siguiente mejor alternativa, no frente a no hacer nada. Los dos hábitos que vale la pena robar: (1) *nombra el comparador explícitamente*; la mayoría de las reclamaciones de ROI de herramientas comparan secretamente contra un hombre de paja; (2) *neta los costes primero* — una herramienta que cuesta £100k pero desplaza £80k de gasto existente tiene ΔC = £20k.

## Errores comunes

- **Manipulación del comparador**: comparar contra una línea base obsoleta o artificialmente mala infla ΔE y halaga el RCEI.
- **Promedios en lugar de incrementos**: el coste por AVAC de un programa completo no es el RCEI de expandirlo o adoptarlo.
- **Adoración de la estimación puntual**: los RCEI son razones de dos diferencias inciertas; informa la incertidumbre vía [ASP y CEAC](../análisis-de-sensibilidad-probabilístico/).
- **Los RCEI negativos son ambiguos** (más barato-y-mejor frente a más caro-y-peor dan el mismo signo) — nunca informes un RCEI negativo sin decir qué cuadrante es.

## Fuentes

- NICE: preguntas frecuentes sobre umbrales de coste-efectividad. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- Glosario del York Health Economics Consortium: RCEI. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>

# Año de Vida Ajustado por Calidad (QALY)

Un QALY es un año de vida vivido en perfecta salud. Combina *cuánto tiempo* vive la gente con *cómo de bien* vive, de modo que un año en mal estado de salud cuenta como menos de un QALY, lo que hace que intervenciones sanitarias completamente distintas sean comparables en una única escala.

## Por qué importa

El QALY es la moneda común de la evaluación de tecnologías sanitarias. NICE (Inglaterra) valora las ganancias en salud en **20,000–30,000 £ por QALY**: una intervención que compra QALYs más barato que ese umbral normalmente se recomienda; una que los compra más caro normalmente se rechaza. Esta única cifra es cómo un servicio nacional de salud compara un fármaco oncológico, una prótesis de cadera y una app de triaje en el mismo eje. Si tu software puede reivindicar QALYs de forma creíble — previniendo el deterioro, acelerando el tratamiento o mejorando la seguridad — puedes tasar su valor en salud en la misma moneda que la propia medicina.

## Las matemáticas

```
QALYs = Σ_i (duración_i × utilidad_i)

duración_i = años pasados en el estado de salud i
utilidad_i = ponderación de calidad del estado i, anclada en 1 = salud perfecta, 0 = muerte
             (se permiten valores negativos para estados peores que la muerte)
```

Las ponderaciones de utilidad proceden de instrumentos validados, más comúnmente [EQ-5D](../eq-5d/). La *ganancia* de QALYs de una intervención es la diferencia entre los flujos de QALYs con y sin ella, [descontada](../discounting-and-time-preference/) al 3.5%/año en el caso de referencia de NICE.

## Ejemplo trabajado

Un paciente espera tratamiento cardiaco en un estado con utilidad 0.6. El tratamiento le devuelve a una utilidad de 0.85.

- **Tratado ahora**: 1 año a 0.85 = 0.85 QALYs este año.
- **Tratado tras un retraso de 6 meses**: 0.5 × 0.6 + 0.5 × 0.85 = 0.725 QALYs.
- **Pérdida de QALY por paciente debida al retraso**: 0.85 − 0.725 = **0.125 QALYs**.

Monetizado al umbral de NICE: 0.125 × 20,000–30,000 £ = **2,500–3,750 £ de valor en salud perdido por paciente por cada retraso de 6 meses**. Si un software que acelera la vía asistencial elimina ese retraso para 400 pacientes/año, el valor en salud es de 50 QALYs ≈ **1.0–1.5 millones £/año**, antes de contar ningún ahorro operativo.

## Conexión con la ingeniería de software

- **Vías más rápidas = QALYs más tempranos.** Cualquier cosa que acorte el [tiempo de derivación a tratamiento](../referral-to-treatment/) convierte la desutilidad del tiempo de espera en ganancia en salud, valorada como arriba.
- **Seguridad = QALYs preservados.** Los errores de medicación y los diagnósticos perdidos evitados son pérdidas de QALY que se evitan.
- **El QALY es también una plantilla de diseño de métricas**: un compuesto de cantidad × calidad, con ponderaciones de calidad obtenidas de un instrumento estandarizado. Un "año-ingeniero ajustado por calidad" (tiempo × ponderación de encuesta de DevEx) es la misma construcción; véase [SPACE y DevEx](../space-and-devex/).
- Para convertir QALYs en dinero para un caso de negocio, usa el [beneficio monetario neto](../net-monetary-benefit/); para convertirlos en una decisión, usa los [umbrales de disposición a pagar](../willingness-to-pay-thresholds/).

## Errores habituales

- **Inventar ponderaciones de utilidad.** Las ponderaciones deben proceder de instrumentos validados (EQ-5D) y de conjuntos de valores publicados, no de la intuición.
- **Reivindicar QALYs sin una vía causal.** "Nuestra app mejora el bienestar" no es una reivindicación de QALY; "elimina X semanas de espera en un estado con utilidad 0.6" sí lo es.
- **Doble contabilización**: reivindicar tanto la ganancia de QALY como el ahorro de costes del mismo deterioro evitado exige cuidado para comprobar que son realmente independientes.
- **Puntos ciegos de equidad**: los QALYs valoran un año de extensión de vida por la utilidad basal, lo que puede desfavorecer a personas con discapacidad — la razón por la que el ICER (EE. UU.) también reporta el evLYG (véase [años de vida ganados](../life-years-gained/)).

## Fuentes

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>

# Año de Vida Ajustado por Calidad (AVAC)

Un AVAC es un año de vida vivido en salud perfecta. Combina *cuánto tiempo* viven las personas con *cuán bien* viven, así que un año en mala salud cuenta como menos de un AVAC — haciendo que intervenciones de salud completamente diferentes sean comparables en una única escala.

## Por qué importa

El AVAC es la moneda común de la evaluación de tecnología sanitaria. NICE (Inglaterra) valora las ganancias de salud en **£20.000–£30.000 por AVAC**: una intervención que compra AVAC más barato que ese umbral normalmente se recomienda; una que los compra más caro normalmente se rechaza. Esta única cifra es cómo un servicio de salud nacional compara un medicamento contra el cáncer, un reemplazo de cadera y una aplicación de triaje en el mismo eje. Si tu software puede reclamar AVAC creíblemente — previniendo el deterioro, acelerando el tratamiento o mejorando la seguridad — puedes tasar su valor de salud en la misma moneda que la propia medicina.

## El cálculo

```
AVAC = Σ_i (duración_i × utilidad_i)

duración_i = años pasados en el estado de salud i
utilidad_i  = peso de calidad del estado i, anclado en 1 = salud perfecta, 0 = muerte
             (se permiten valores negativos para estados peores que la muerte)
```

Los pesos de utilidad provienen de instrumentos validados, más comúnmente [EQ-5D](../eq-5d/). La *ganancia* de AVAC de una intervención es la diferencia entre los flujos de AVAC con y sin ella, [descontada](../descuento-y-preferencia-temporal/) al 3,5%/año en el caso de referencia de NICE.

## Ejemplo resuelto

Un paciente espera tratamiento cardíaco en un estado con utilidad 0,6. El tratamiento lo restaura a utilidad 0,85.

- **Tratado ahora**: 1 año a 0,85 = 0,85 AVAC este año.
- **Tratado tras un retraso de 6 meses**: 0,5 × 0,6 + 0,5 × 0,85 = 0,725 AVAC.
- **Pérdida de AVAC por paciente por el retraso**: 0,85 − 0,725 = **0,125 AVAC**.

Monetizado al umbral de NICE: 0,125 × £20.000–£30.000 = **£2.500–£3.750 de valor de salud perdido por paciente por retraso de 6 meses**. Si el software que acelera la vía elimina ese retraso para 400 pacientes/año, el valor de salud es 50 AVAC ≈ **£1,0–£1,5 millones/año** — antes de contar cualquier ahorro operativo.

## Conexión con la ingeniería de software

- **Vías más rápidas = AVAC más tempranos.** Cualquier cosa que acorte la [derivación a tratamiento](../derivación-a-tratamiento/) convierte la desutilidad del tiempo de espera en ganancia de salud, tasada como arriba.
- **Seguridad = AVAC preservados.** Los errores de medicación prevenidos y los diagnósticos perdidos son pérdidas de AVAC evitadas.
- **El AVAC también es una plantilla de diseño de métricas**: un compuesto de cantidad × calidad, con pesos de calidad obtenidos de un instrumento estandarizado. Un "año-ingeniero ajustado por calidad" (tiempo × peso de encuesta DevEx) es la misma construcción — ver [SPACE y DevEx](../space-y-devex/).
- Para convertir AVAC en dinero para un caso de negocio, usa el [beneficio monetario neto](../beneficio-monetario-neto/); para convertirlos en una decisión, usa los [umbrales de disposición a pagar](../umbrales-de-disposición-a-pagar/).

## Errores comunes

- **Inventar pesos de utilidad.** Los pesos deben provenir de instrumentos validados (EQ-5D) y conjuntos de valores publicados, no de la intuición.
- **Reclamar AVAC sin una vía causal.** "Nuestra aplicación mejora el bienestar" no es una reclamación de AVAC; "elimina X semanas de espera en estado de utilidad 0,6" sí lo es.
- **Doble contabilización**: reclamar tanto la ganancia de AVAC como los ahorros de coste del mismo deterioro evitado requiere cuidado para asegurar que son genuinamente separados.
- **Puntos ciegos de equidad**: los AVAC valoran un año de extensión de vida por utilidad base, lo que puede perjudicar a las personas con discapacidades — la razón por la que ICER (EE. UU.) también informa el evLYG (ver [años de vida ganados](../años-de-vida-ganados/)).

## Fuentes

- Glosario de NICE: AVAC. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>

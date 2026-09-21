# Productividad de desarrolladores con IA

Métricas de lo que la asistencia de IA para programar realmente produce en el rendimiento de ingeniería: tasas de aceptación de sugerencias, aceleraciones en estudios controlados, rendimiento de PR y retención de código. La base de evidencia es genuinamente contradictoria — lo que la convierte en un caso de estudio perfecto de la distinción eficacia frente a efectividad para la que se construyó la economía de la salud.

## Por qué importa

Los dos estudios controlados más citados apuntan en direcciones opuestas:

- **Peng et al. 2023 (ECA de GitHub Copilot)**: los desarrolladores completaron una tarea de servidor HTTP desde cero **un 55.8% más rápido** con Copilot (1h11m frente a 2h41m, n=95).
- **ECA de METR 2025**: desarrolladores de código abierto experimentados que trabajaban en *sus propios repositorios maduros* fueron **un 19% más lentos** con las herramientas de IA de principios de 2025 (16 desarrolladores, 246 tareas) — mientras *creían* ser un 20% más rápidos.

Ambos son buenos estudios. La contradicción es el hallazgo: la eficacia en tareas desde cero no se traslada a la efectividad en bases de código maduras, y el beneficio *percibido* no puede sustituir al beneficio medido. La medicina tiene nombres para ambos fenómenos (ensayos explicativos frente a pragmáticos; el problema del placebo) y maquinaria para gestionarlos.

## Las matemáticas

```
Tasa de aceptación = sugerencias aceptadas / sugerencias mostradas
                   (telemetría de GitHub ~30% de media; varía: SQL 45%, Python 35%, JS 28%)
Tasa de retención  = código de IA que sobrevive hasta el merge / código de IA aceptado (~88% reportado)
Aceleración        = (t_control − t_IA) / t_control  (SOLO a partir de comparación controlada)
Delta de rendimiento = Δ PR fusionadas/desarrollador/semana (datos de campo GitHub/Accenture: +8.7%)

Modelo de valor     = desarrolladores × tiempo ahorrado × tarifa cargada × factor de utilización
                  — cada término necesita medición local; véase el diagrama de tornado en
                  sensitivity-analysis.md, donde el tiempo ahorrado domina sobre
                  todos los demás parámetros combinados
```

## Ejemplo resuelto

Una organización de 500 desarrolladores pilota un asistente con un control adecuado (equipos emparejados, 3 meses, métricas preregistradas):

```
Resultado del piloto: tiempo de ciclo de PR −18%; PR fusionadas +6%; CFR sin cambios;
              tiempo ahorrado autodeclarado 45 min/día; medido a nivel de tarea ≈ 15 min/día

Valore la cifra MEDIDA: 500 × 0.25h × 220d × £60 × 0.6 de utilización
                          ≈ £990,000/año de capacidad (no liberadora de caja)
Coste: 500 × £39/mes × 12 ≈ £234,000/año
Ratio de capacidad neta ≈ 4:1 — financiable, con un tercio de la cifra autodeclarada.
```

La brecha de 3× entre lo percibido y lo medido es el hallazgo de METR operando en la práctica; presupuestar sobre el autoinforme habría triplicado la línea de beneficio.

## Conexión con la ingeniería de software

Las importaciones de la economía de la salud para quien evalúe herramientas de IA: ejecute **ensayos pragmáticos** (su base de código, sus ingenieros, tickets reales — no tareas de demostración del proveedor); trate la **tasa de aceptación como un indicador indirecto, no como un resultado** (es el [VPP](../clinical-ai-evaluation/) de las sugerencias desde el punto de vista del desarrollador; alta aceptación con baja retención es sobrediagnóstico); combine cada ganancia de rendimiento con una **comprobación de estabilidad** (DORA 2025: la IA eleva el rendimiento pero perjudica la estabilidad — una intervención con efectos secundarios necesita un análisis de beneficio neto, según las [métricas DORA](../dora-metrics/)); y clasifique el beneficio honestamente como capacidad ([liberador de caja frente a no liberador de caja](../cash-releasing-vs-non-cash-releasing/)).

## Trampas habituales

- **Trasplante de estudios de proveedor**: cifras de ECA en tareas desde cero aplicadas a trabajo en bases de código heredadas — el error exacto que expuso el estudio de METR.
- **El autoinforme como medición**: la brecha de percepción de 20 puntos porcentuales es el mayor sesgo conocido en esta literatura.
- **Inflación de actividad**: más PR y más código son Actividad, no resultados ([SPACE](../space-and-devex/)); combínelo con el retrabajo y el CFR.
- **Ignorar la curva de aprendizaje**: las mediciones de la semana 2 capturan efectos de novedad en cualquier dirección; mida en estado estacionario ([horizonte temporal](../time-horizon/)).

## Fuentes

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- Informe DORA 2025. <https://dora.dev/dora-report-2025/>

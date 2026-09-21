# Productividad del Desarrollador con IA

Métricas de lo que la asistencia de codificación con IA realmente hace a la producción de ingeniería: tasas de aceptación de sugerencias, aceleraciones en estudios controlados, rendimiento de PR y retención de código. La base de evidencia es genuinamente contradictoria — lo que la convierte en un caso de estudio perfecto de la distinción entre eficacia y efectividad que la economía de la salud fue construida para manejar.

## Por qué importa

Los dos estudios controlados más citados apuntan en direcciones opuestas:

- **Peng et al. 2023 (ECA de GitHub Copilot)**: los desarrolladores completaron una tarea de servidor HTTP desde cero **55,8% más rápido** con Copilot (1h11m frente a 2h41m, n=95).
- **ECA de METR 2025**: desarrolladores experimentados de código abierto trabajando en *sus propios repositorios maduros* fueron **19% más lentos** con herramientas de IA de principios de 2025 (16 desarrolladores, 246 tareas) — mientras *creían* ser un 20% más rápidos.

Ambos son buenos estudios. La contradicción es el hallazgo: la eficacia en tareas desde cero no se traslada a la efectividad en código base maduro, y el beneficio *percibido* no puede sustituir al beneficio medido. La medicina tiene nombres para ambos fenómenos (ensayos explicativos frente a pragmáticos; el problema del placebo) y maquinaria para manejarlos.

## El cálculo

```
Tasa de aceptación  = sugerencias aceptadas / sugerencias mostradas
                   (telemetría de GitHub ~30% media; varía: SQL 45%, Python 35%, JS 28%)
Tasa de retención   = código de IA que sobrevive hasta la fusión / código de IA aceptado (~88% reportado)
Aceleración          = (t_control − t_IA) / t_control  (SOLO de comparación controlada)
Delta de rendimiento = Δ PR fusionados/desarrollador/semana (datos de campo GitHub/Accenture: +8,7%)

Modelo de valor     = desarrolladores × tiempo ahorrado × tarifa cargada × factor de utilización
                  — cada término necesita medición local; ver el diagrama de tornado en
                  sensitivity-analysis.md, donde el tiempo ahorrado domina todos
                  los demás parámetros combinados
```

## Ejemplo resuelto

Una organización de 500 desarrolladores prueba un asistente con un control adecuado (equipos emparejados, 3 meses, métricas preregistradas):

```
Resultado del piloto: tiempo de ciclo de PR −18%; PR fusionados +6%; CFR sin cambios;
              tiempo ahorrado autoinformado 45 min/día; nivel de tarea medido ≈ 15 min/día

Valora el número MEDIDO: 500 × 0,25h × 220d × £60 × 0,6 utilización
                          ≈ £990.000/año de capacidad (no libera efectivo)
Coste: 500 × £39/mes × 12 ≈ £234.000/año
Ratio de capacidad neta ≈ 4:1 — financiable, a un tercio de la reclamación autoinformada.
```

La brecha de 3× entre lo percibido y lo medido es el hallazgo de METR operando en la realidad; presupuestar con autoinforme habría triplicado la línea de beneficio.

## Conexión con la ingeniería de software

Las importaciones de economía de la salud para cualquiera que evalúe herramientas de IA: ejecuta **ensayos pragmáticos** (tu código base, tus ingenieros, tickets reales — no tareas de demostración del proveedor); trata la **tasa de aceptación como proxy, no como resultado** (es el [VPP](../evaluación-clínica-de-la-ia/) de las sugerencias desde la perspectiva del desarrollador — aceptación alta con retención baja es sobrediagnóstico); combina cada ganancia de rendimiento con una **comprobación de estabilidad** (DORA 2025: la IA eleva el rendimiento, perjudica la estabilidad — una intervención con efectos secundarios necesita análisis de beneficio neto, según [métricas DORA](../métricas-dora/)); y clasifica el beneficio honestamente como capacidad ([liberador de efectivo frente a no liberador de efectivo](../ahorros-liberadores-de-efectivo-frente-a-no-liberadores-de-efectivo/)).

## Errores comunes

- **Trasplante de estudios de proveedores**: cifras de ECA desde cero aplicadas a trabajo en código base heredado — el error exacto que expuso el estudio de METR.
- **Autoinforme como medición**: la brecha de percepción de 20 puntos porcentuales es el mayor sesgo conocido en esta literatura.
- **Inflación de actividad**: más PR y más código son Actividad, no resultados ([SPACE](../space-y-devex/)); combina con retrabajo y CFR.
- **Ignorar la curva de aprendizaje**: las mediciones de la semana 2 capturan efectos de novedad en cualquier dirección; mide en estado estable ([horizonte temporal](../horizonte-temporal/)).

## Fuentes

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- Informe DORA 2025. <https://dora.dev/dora-report-2025/>

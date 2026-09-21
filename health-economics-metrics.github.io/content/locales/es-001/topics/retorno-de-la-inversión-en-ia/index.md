# Retorno de la Inversión en IA

El ROI de la IA es el retorno medible de pérdidas y ganancias atribuible a las iniciativas de IA. El punto de referencia aleccionador: la investigación de MIT de 2025 "GenAI Divide" encontró que, a pesar de $30-40 mil millones de inversión empresarial en IA generativa, **~95% de los pilotos no mostraron retorno medible de P&G** — y el 5% exitoso compartió hábitos identificables.

## Por qué importa

Los sistemas de salud tienen un nombre para el patrón del piloto de IA: **pilotitis** — el cementerio del NHS de aplicaciones prometedoras pilotadas para siempre y escaladas nunca. Los hallazgos de MIT se mapean limpiamente sobre lo que la evaluación de tecnología sanitaria ya sabe: las reclamaciones de valor necesitan puntos finales preespecificados, la atribución necesita comparadores, y "todos sienten que ayuda" no es una línea de beneficio. La minoría exitosa en los datos de MIT se concentró en automatización de back-office con líneas base de coste rastreables, y **las herramientas compradas tuvieron éxito ~67% de las veces frente a las construcciones internas en aproximadamente un tercio de esa cifra** — prioridades que pertenecen a todo caso de inversión en IA (ver [construir frente a comprar](../construir-frente-a-comprar/)).

## El cálculo

```
ROI de IA = (beneficio atribuible − coste total de IA) / coste total de IA

Coste total de IA = licencias/inferencia (ver inference-unit-economics.md)
              + integración + preparación de datos + evaluación
              + rediseño de flujo de trabajo + gobernanza/garantía
              (la licencia suele ser la minoría del denominador)

Beneficio atribuible: medido frente a una línea base o control, clasificado
efectivo / capacidad / calidad según cash-releasing-vs-non-cash-releasing.md
```

## Ejemplo resuelto

Un grupo hospitalario despliega IA para dos casos de uso:

```
Caso de uso A — redacción de cartas clínicas (back office, rastreable):
  línea base: transcripción externalizada £380k/año
  después:    contrato de transcripción cancelado; tiempo de revisión clínica +£60k
  coste de IA:  £120k/año todo incluido
  ROI = (380k − 60k − 120k) / 120k ≈ 167% — libera efectivo, auditable ✓

Caso de uso B — "copiloto de IA para clínicos" (amplio, no rastreado):
  reclamación de beneficio: "ahorra tiempo en 4.000 empleados" — sin línea base capturada
  efecto medido en P&G: ninguno demostrable
  → el grupo del 95%, independientemente de si realmente ayuda
```

La diferencia no es la calidad de la IA — es si el beneficio tenía una **línea base, un propietario y una línea de presupuesto** ([realización de beneficios](../realización-de-beneficios/)).

## Conexión con la ingeniería de software

El manual con forma de ETS para la inversión en IA: **escalona la evidencia como los [niveles de NICE ESF](../marco-de-estándares-de-evidencia-de-nice/)** — evidencia de nivel demostrativo para herramientas de bajo riesgo, pilotos controlados antes del gasto en toda la organización, con puertas de despliegue preregistradas (el patrón de [listado provisional con plazo](../vía-rápida-diga-de-alemania/) de DiGA); **cuenta la evitación de costes como la economía de la salud cuenta la evitación de demanda** — real solo cuando una línea de presupuesto específica se mueve; y **tasa el propio piloto con [VECI](../valor-esperado-de-la-información-perfecta/)** — un piloto que no puede cambiar la decisión de despliegue vale £0. Para la porción de herramientas de desarrollador específicamente, ver [productividad del desarrollador con IA](../productividad-del-desarrollador-con-ia/).

## Errores comunes

- **Difusión del beneficio**: el valor esparcido finamente entre miles de usuarios es inmedible por construcción; elige casos de uso con líneas base concentradas y rastreables.
- **Costeo solo de licencia**: la integración, la evaluación y el rediseño del flujo de trabajo suelen dominar el denominador real.
- **Robo de atribución**: la IA desplegada junto con el rediseño de procesos reclama todo el delta.
- **Escalada de piloto hundido**: extender pilotos fallidos porque detenerlos admite fracaso — la fecha de finalización debe acordarse de antemano.

## Fuentes

- Cobertura de MIT Project NANDA "GenAI Divide". <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- Resumen de hallazgos de ROI de IA generativa de MIT. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, encontrando el ROI en IA. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>

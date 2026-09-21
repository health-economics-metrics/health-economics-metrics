# Coste de Retraso (CdR)

El Coste de Retraso es el valor económico perdido por unidad de tiempo que una funcionalidad, producto o servicio *no* se entrega. Es el puente individual más fuerte entre las métricas de entrega de software y la economía de la salud: convierte "lo entregamos tarde" en moneda — o en AVAC.

## Por qué importa

La regla de Reinertsen: "Si solo cuantificas una cosa, cuantifica el Coste de Retraso." La mayoría de las organizaciones saben lo que cuesta un proyecto pero no lo que cuesta un mes de retraso, así que optimizan presupuestos mientras sangran valor de tiempo. Para el software sanitario las apuestas son literales: cada semana que se retrasa una mejora de vía, los pacientes esperan más tiempo en peores estados de salud. El CdR es el marco matemático más fuerte para presentar a las partes interesadas del NHS porque tasa la *ausencia* de tu software.

## El cálculo

```
CdR = beneficio por unidad de tiempo perdido mientras no se entrega   (£/semana o AVAC/semana)

Pérdida total de retraso = CdR × duración del retraso

Para priorización, ver wsjf-and-cd3.md: CD3 = CdR / duración.
```

Para software clínico, denomina tanto en salud como en dinero:

```
CdR_salud = pacientes afectados por semana × ganancia de AVAC por paciente
CdR_dinero  = CdR_salud × λ (umbral de disposición a pagar, £20k–30k/AVAC)
             + ahorros operativos por semana perdidos
```

## Ejemplo resuelto

**Operativo**: el software ahorra £200 por paciente en una vía; un fideicomiso procesa 50 pacientes así/semana.

```
CdR = 200 × 50 = £10.000/semana
Un retraso de contratación de 10 semanas cuesta 200 × 50 × 10 = £100.000 en desperdicio evitable.
```

**Clínico**: una mejora de triaje elimina 5 semanas de espera (utilidad 0,68 → 0,80 antes) para 100 pacientes/semana:

```
Ganancia de AVAC por paciente = (5/52) × 0,12 ≈ 0,0115
CdR_salud = 100 × 0,0115 = 1,15 AVAC/semana
CdR_dinero  = 1,15 × £20.000 ≈ £23.000/semana de valor de salud
```

Un retraso de despliegue de 6 meses "cuesta" ~30 AVAC — el argumento que reencuadra un desliz de puesta en marcha de TI como un evento clínico. (Punto de referencia de escala: el famoso análisis de Maersk de Black Swan Farming encontró funcionalidades individuales con CdR ≈ $200k/semana que habían esperado 38 semanas.)

## Conexión con la ingeniería de software

El CdR es la métrica que hace que el [tiempo de espera DORA](../métricas-dora/) y la [eficiencia de flujo](../métricas-de-flujo/) sean financieramente legibles: tiempo de espera × CdR = dinero (o salud) quemado en colas. Usos:

- **Priorización**: clasifica el trabajo por CdR/duración ([WSJF/CD3](../wsjf-y-cd3/)) en lugar del interesado más ruidoso.
- **Economía de procesos**: una cadencia de lanzamiento de 2 semanas tiene un coste de retraso esperado de ~1 semana × CdR por funcionalidad frente a la entrega continua — tasa el lote.
- **Adquisiciones**: los ciclos de adquisición del NHS de 6-18 meses tienen un CdR; mostrarlo cambia las conversaciones de urgencia (ver [análisis de impacto presupuestario](../análisis-de-impacto-presupuestario/) para la contraparte de asequibilidad).

## Errores comunes

- **Asumir CdR lineal**: algún trabajo tiene valor con forma de plazo (fechas regulatorias — CdR infinito después de la fecha, cero antes) o valor decreciente (ventanas de pionero). Clasifica el perfil de urgencia antes de multiplicar.
- **CdR sobre resultados que nadie quiere**: el retraso solo cuesta si la cosa tiene valor; la basura retrasada es gratis.
- **Doble contabilización de retraso y descuento**: el [descuento](../descuento-y-preferencia-temporal/) ya tasa el tiempo en horizontes de varios años; el CdR es la versión operativa dentro del horizonte. Usa el CdR para semanas/meses, el desplazamiento de VPN para años.

## Fuentes

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Coste de Retraso. <https://blackswanfarming.com/cost-of-delay/>
- Resumen del coste de retraso. <https://en.wikipedia.org/wiki/Cost_of_delay>

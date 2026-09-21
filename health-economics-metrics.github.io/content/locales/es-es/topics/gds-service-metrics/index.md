# Métricas de Servicio GDS

El Manual de Servicio del Government Digital Service (GDS) del Reino Unido exige cuatro KPI para todo servicio digital gubernamental: **coste por transacción, satisfacción del usuario, tasa de finalización y adopción digital (digital take-up)**. Juntos constituyen la economía mínima de un servicio digital público — y la plantilla que heredan los servicios digitales del NHS.

## Por qué importa

Las métricas GDS codifican el caso de negocio del cambio de canal que financió una década de digitalización gubernamental: el Digital Efficiency Report encontró que las transacciones digitales eran ~20 veces más baratas que el teléfono y ~50 veces más baratas que la atención presencial (cifras de administración local: web £0.15, teléfono £2.83, presencial £8.62). Pero los ahorros solo se materializan cuando las personas *completan* el recorrido digital (tasa de finalización) *en lugar de* usar el canal caro (adopción) — los cuatro KPI son un único modelo económico, no cuatro paneles independientes.

## Las matemáticas

```
Coste por transacción = coste total del servicio / transacciones completadas
Tasa de finalización  = completadas / transacciones iniciadas × 100
Adopción digital       = transacciones digitales / transacciones de todos los canales × 100
Satisfacción del usuario = % satisfechos+muy satisfechos (escala de 5 puntos, encuesta en servicio)

Ahorro por cambio de canal = volumen × cambio en la adopción × (coste_canal_antiguo − coste_digital)
… menos la demanda por fallo: (1 − tasa de finalización) × coste del canal de reserva
```

## Ejemplo práctico

Un servicio de gestión de citas del NHS: 2M de transacciones/año, actualmente 70 % teléfono (£3.20/llamada) / 30 % digital (£0.25). Un rediseño eleva la adopción digital al 55 % y la finalización del 84 % al 93 %:

```
Ahorro por cambio de adopción = 2M × 0.25 × (3.20 − 0.25) = £1,475,000/año

Ahorro por demanda de fallo: los recorridos digitales fallidos vuelven al teléfono
  antes: 2M × 0.30 × 0.16 × £3.20 = £307,200
  después: 2M × 0.55 × 0.07 × £3.20 = £246,400
  neto £60,800/año — las mejoras de finalización protegen las ganancias de adopción

La satisfacción es el indicador adelantado: los usuarios insatisfechos vuelven
al teléfono, así que una caída de la satisfacción pronostica el deterioro de
la adopción antes de que aparezca.
```

## Conexión con la ingeniería de software

Estos cuatro KPI son un ejemplo de grado de producción de una [tabla de coste-consecuencia](../cost-consequence-analysis/): una métrica de coste, tres métricas de resultado, nunca colapsadas en una sola puntuación. Para los ingenieros de producto, las lecciones operativas: **la tasa de finalización es un problema de instrumentación de embudo** (cada punto de abandono se puede localizar y corregir); **el coste por transacción es [economía unitaria en la nube](../cloud-unit-economics/)** más los costes del canal asistido por personal; **la adopción es una métrica de equidad disfrazada** — los usuarios que no pueden o no quieren cambiar de canal son desproporcionadamente mayores, con discapacidad y desfavorecidos, así que el cierre agresivo de canales convierte el "ahorro" en daño de acceso (véase [alcance y equidad](../reach-and-equity/)). Publicar los KPI (GOV.UK lo hace, por servicio) es en sí mismo un mecanismo: la transparencia disciplina las previsiones del mismo modo que lo hacen las auditorías de [realización de beneficios](../benefits-realization/).

## Escollos

- **Adopción por coacción**: cerrar la línea telefónica eleva la adopción y vuelca la demanda por fallo sobre el personal de primera línea; mida el coste total del sistema.
- **Finalización medida desde la página 2**: iniciar el embudo después del punto de abandono halaga la tasa.
- **Coste por transacción que ignora el soporte digital asistido** y la gestión de la demanda por fallo.
- **Encuestas de satisfacción solo al completar con éxito** — los insatisfechos en su mayoría nunca llegan a la encuesta.

## Fuentes

- GOV.UK Service Manual, medición del éxito / KPI obligatorios. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>

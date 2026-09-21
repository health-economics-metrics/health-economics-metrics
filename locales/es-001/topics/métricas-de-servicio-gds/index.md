# Métricas de Servicio GDS

El Manual de Servicio del Servicio Digital del Gobierno del Reino Unido (GDS) exige cuatro KPI para cada servicio digital gubernamental: **coste por transacción, satisfacción del usuario, tasa de finalización y adopción digital**. Juntos son la economía mínima de un servicio digital público — y la plantilla que heredan los servicios digitales del NHS.

## Por qué importa

Las métricas GDS codifican el caso de negocio de cambio de canal que financió una década de digitalización gubernamental: el Informe de Eficiencia Digital encontró que las transacciones digitales son ~20× más baratas que el teléfono y ~50× más baratas que presencial (cifras de gobierno local: web £0,15, teléfono £2,83, presencial £8,62). Pero los ahorros solo se materializan cuando la gente *completa* el recorrido digital (tasa de finalización) *en lugar de* el canal caro (adopción) — los cuatro KPI son un modelo económico, no cuatro paneles.

## El cálculo

```
Coste por transacción = coste total del servicio / transacciones completadas
Tasa de finalización      = completadas / transacciones iniciadas × 100
Adopción digital      = transacciones digitales / transacciones de todos los canales × 100
Satisfacción del usuario    = % satisfecho+muy satisfecho (5 puntos, encuesta dentro del servicio)

Ahorro de cambio de canal = volumen × cambio de adopción × (coste_canal_antiguo − coste_digital)
… menos la demanda de fallo: (1 − tasa de finalización) × coste del canal de respaldo
```

## Ejemplo resuelto

Un servicio de gestión de citas del NHS: 2M transacciones/año, actualmente 70% teléfono (£3,20/llamada) / 30% digital (£0,25). Un rediseño eleva la adopción digital al 55% y la finalización del 84% al 93%:

```
Ahorro de cambio de adopción = 2M × 0,25 × (3,20 − 0,25) = £1.475.000/año

Ahorro de demanda de fallo: los recorridos digitales fallidos vuelven al teléfono
  antes: 2M × 0,30 × 0,16 × £3,20 = £307.200
  después:  2M × 0,55 × 0,07 × £3,20 = £246.400
  neto £60.800/año — las mejoras de finalización protegen las ganancias de adopción

La satisfacción es el indicador principal: los usuarios insatisfechos vuelven al teléfono,
así que una caída de satisfacción pronostica el declive de adopción antes de que aparezca.
```

## Conexión con la ingeniería de software

Estos cuatro KPI son un ejemplo de grado de producción de una [tabla de coste-consecuencia](../análisis-de-coste-consecuencia/): una métrica de coste, tres métricas de resultado, nunca colapsadas en una puntuación. Para los ingenieros de producto las lecciones operativas: **la tasa de finalización es un problema de instrumentación de embudo** (cada punto de abandono es localizable y corregible); **el coste por transacción es [economía unitaria de la nube](../economía-unitaria-de-la-nube/)** más costes de canal asistido por personal; **la adopción es una métrica de equidad disfrazada** — los usuarios que no pueden o no quieren cambiar de canal son desproporcionadamente ancianos, discapacitados y desfavorecidos, así que el cierre agresivo de canales convierte los "ahorros" en daño de acceso (ver [alcance y equidad](../alcance-y-equidad/)). Publicar los KPI (GOV.UK lo hace, por servicio) es en sí mismo un mecanismo: la transparencia disciplina las previsiones de la misma forma que lo hacen las auditorías de [realización de beneficios](../realización-de-beneficios/).

## Errores comunes

- **Adopción por coerción**: cerrar la línea telefónica eleva la adopción y vuelca la demanda de fallo sobre el personal de primera línea; mide el coste total del sistema.
- **Finalización medida desde la página 2**: iniciar el embudo después del punto de abandono halaga la tasa.
- **Coste por transacción que ignora el soporte digital asistido** y el manejo de la demanda de fallo.
- **Encuestas de satisfacción solo en finalización exitosa** — los insatisfechos mayormente nunca llegan a la encuesta.

## Fuentes

- Manual de Servicio de GOV.UK, medición del éxito / KPI obligatorios. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Informe de Eficiencia Digital. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>

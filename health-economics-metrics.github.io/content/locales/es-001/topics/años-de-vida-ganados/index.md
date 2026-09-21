# Años de Vida Ganados (AVG)

Los años de vida ganados son la supervivencia adicional atribuible a una intervención, sin ajuste de calidad: el área entre las curvas de supervivencia con y sin ella. El año de vida ganado de valor igual (evLYG) es una variante moderna que acredita toda la extensión de vida por igual.

## Por qué importa

Los AVG son el resultado de salud más crudo: ¿cuánto más viven las personas? Importa cuando faltan datos de calidad, al comparar frente a audiencias escépticas de AVAC, y en oncología donde las curvas de supervivencia son el resultado principal del ensayo. El **evLYG** (usado por el instituto ICER de EE. UU. junto al coste/AVAC) existe por una razón ética: los AVAC valoran un año de vida extendida por la utilidad del paciente, así que extender la vida de alguien con una discapacidad "cuenta menos" — el evLYG valora cada año extendido a una utilidad fija, eliminando esa discriminación.

## El cálculo

```
AVG = supervivencia media_nueva − supervivencia media_comparador
    = área entre las curvas de supervivencia (restringida al horizonte temporal)

Vista AVAC de la extensión de vida:  extensión × utilidad del paciente
Vista evLYG de la extensión de vida: extensión × utilidad fija (ICER usa ~0,851,
                              la utilidad promedio de la población de EE. UU.)
```

Ambos son [descontados](../descuento-y-preferencia-temporal/) en los modelos económicos.

## Ejemplo resuelto

Un algoritmo de alerta temprana de sepsis en un hospital: el modelado muestra que los antibióticos más tempranos previenen 12 muertes/año; la edad promedio de esos pacientes da 8 años de vida restantes cada uno a una utilidad de 0,7.

```
AVG   = 12 × 8            = 96 años de vida/año
AVAC = 96 × 0,7          = 67,2
evLYG = 96 × 0,851        = 81,7
```

A £20.000 por AVAC, el encuadre AVAC valora la supervivencia en £1,34M/año; el encuadre evLYG en £1,63M. La brecha es exactamente el juicio ético sobre si un año de vida a utilidad 0,7 vale el 70% de uno "completo". Los dosieres serios informan ambos.

## Conexión con la ingeniería de software

- El análisis de supervivencia es el conjunto de herramientas compartido: las curvas de Kaplan-Meier para pacientes y para *servicios* (tiempo-hasta-fallo, tiempo-hasta-abandono) son la misma matemática. "Años de servicio ganados" de una inversión en fiabilidad = área entre las curvas de supervivencia con/sin el sistema — un encuadre más honesto que las reclamaciones puntuales de MTTF.
- El evLYG también conlleva una advertencia de diseño de métricas para la ingeniería: cualquier métrica de productividad que pondere el resultado por un factor de "calidad del equipo" subvalorará sistemáticamente las mejoras para equipos limitados o en dificultades — a veces quieres la variante de valor igual a propósito.

## Errores comunes

- **Mediana frente a media de supervivencia**: los modelos económicos necesitan la media (área bajo la curva); los ensayos a menudo destacan la mediana. Difieren mucho en distribuciones sesgadas.
- **La extrapolación más allá del seguimiento del ensayo** domina los AVG modelados en enfermedad crónica — declara el modelo de extrapolación y pruébalo en [análisis de sensibilidad](../análisis-de-sensibilidad/).
- **Reclamar muertes prevenidas de datos observacionales antes/después** sin ajustar por mezcla de casos y tendencias seculares.

## Fuentes

- Glosario del York Health Economics Consortium: años de vida ganados. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>

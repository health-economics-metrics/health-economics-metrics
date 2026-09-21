# Años de Vida Ganados (LYG)

Los años de vida ganados son la supervivencia adicional atribuible a una intervención, sin ajuste de calidad: el área entre las curvas de supervivencia con y sin ella. El equal-value life year gained (evLYG) es una variante moderna que atribuye el mismo valor a toda la extensión de vida.

## Por qué importa

El LYG es el resultado sanitario más elemental: ¿cuánto más viven las personas? Importa cuando faltan datos de calidad, al comparar con audiencias escépticas frente a los QALY, y en oncología, donde las curvas de supervivencia son el resultado primario del ensayo. El **evLYG** (utilizado por el instituto ICER de EE. UU. junto al coste/QALY) existe por una razón ética: los QALY valoran un año de vida extendida según la utilidad del paciente, de modo que extender la vida de alguien con una discapacidad «cuenta menos»; el evLYG valora cada año extendido con una utilidad fija, eliminando esa discriminación.

## Las matemáticas

```
LYG = supervivencia media_nueva − supervivencia media_comparador
    = área entre las curvas de supervivencia (restringida al horizonte temporal)

Visión QALY de la extensión de vida:  extensión × utilidad del paciente
Visión evLYG de la extensión de vida: extensión × utilidad fija (ICER usa ~0.851,
                                      la utilidad media de la población de EE. UU.)
```

Ambos se [descuentan](../discounting-and-time-preference/) en los modelos económicos.

## Ejemplo resuelto

Un algoritmo de alerta temprana de sepsis en un hospital: la modelización muestra que los antibióticos más tempranos evitan 12 muertes/año; la edad media de esos pacientes da 8 años de vida restantes cada uno con una utilidad de 0.7.

```
LYG   = 12 × 8            = 96 años de vida/año
QALYs = 96 × 0.7          = 67.2
evLYG = 96 × 0.851        = 81.7
```

A £20,000 por QALY, el enfoque QALY valora la supervivencia en £1.34M/año; el enfoque evLYG en £1.63M. La diferencia es exactamente el juicio ético sobre si un año de vida con una utilidad de 0.7 vale el 70% de uno «pleno». Los dosieres serios informan ambos.

## Conexión con la ingeniería de software

- El análisis de supervivencia es el conjunto de herramientas compartido: las curvas de Kaplan-Meier para pacientes y para *servicios* (tiempo hasta el fallo, tiempo hasta la pérdida de clientes) son las mismas matemáticas. Los «años de servicio ganados» de una inversión en fiabilidad = área entre las curvas de supervivencia con/sin el sistema: un planteamiento más honesto que las afirmaciones puntuales de MTTF.
- El evLYG conlleva también una advertencia de diseño de métricas para la ingeniería: cualquier métrica de productividad que pondere el resultado por un factor de «calidad del equipo» infravalorará sistemáticamente las mejoras de los equipos con limitaciones o dificultades; a veces se quiere la variante de valor igual a propósito.

## Trampas habituales

- **Mediana frente a media de supervivencia**: los modelos económicos necesitan la media (área bajo la curva); los ensayos suelen destacar la mediana. Difieren mucho en distribuciones sesgadas.
- **La extrapolación más allá del seguimiento del ensayo** domina el LYG modelizado en enfermedad crónica: indica el modelo de extrapolación y compruébalo en [análisis de sensibilidad](../sensitivity-analysis/).
- **Afirmar muertes evitadas a partir de datos observacionales antes/después** sin ajustar por casuística y tendencias seculares.

## Fuentes

- York Health Economics Consortium glossary: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>

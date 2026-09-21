# Duración de Estancia (EDM)

La duración de estancia es el número de días desde el ingreso hospitalario hasta el alta — la métrica central de eficiencia de flujo de la atención hospitalaria. Las medias agudas del Reino Unido rondan los 4-5 días; cada día de exceso consume una cama escasa y expone al paciente a riesgos adquiridos en el hospital.

## Por qué importa

La EDM impulsa casi todo en la economía hospitalaria aguda: capacidad de camas, rendimiento electivo, flujo de emergencias, personal. Reducir la EDM promedio incluso en fracciones de día a escala libera una capacidad enorme (ver [días-cama ahorrados](../días-cama-ahorrados/)). La EDM también es una señal de calidad en ambas direcciones — demasiado larga sugiere fallo de proceso (diagnóstico retrasado, papeleo de alta, esperas de atención social); demasiado corta puede significar alta prematura, que aparece después como [reingresos](../tasa-de-reingreso/).

## El cálculo

```
EDM (por episodio)  = fecha de alta − fecha de ingreso
EDM promedio         = días-cama ocupados / altas (informa media Y mediana;
                   la EDM está fuertemente sesgada a la derecha por valores
                   atípicos de larga estancia)

Las comparaciones requieren ajuste de mezcla de casos (edad, diagnóstico, agudeza),
o estás midiendo a quién admite el hospital, no cómo rinde.
```

La Ley de Little conecta las variables de flujo: `camas ocupadas = tasa de ingreso × EDM promedio` — la misma ley que rige las colas de software (ver [métricas de flujo](../métricas-de-flujo/)).

## Ejemplo resuelto

Un fideicomiso admite 40 pacientes médicos de emergencia/día con una EDM media de 6,0 días: 240 camas permanentemente ocupadas (40 × 6). El software de coordinación de altas (seguimiento de tareas, automatización de farmacia-para-llevar, reserva de transporte) recorta la cola no clínica de las estancias en 0,4 días en promedio.

```
Camas necesarias = 40 × 5,6 = 224 → 16 camas liberadas continuamente
            = 16 × 365 = 5.840 días-cama/año
```

Tasa los 5.840 días-cama por mecanismo (rellenar/cerrar/holgura) según [días-cama ahorrados](../días-cama-ahorrados/). Nota lo que se movió: no la medicina, sino la *espera* — el paciente estaba médicamente apto; el sistema todavía estaba haciendo papeleo. Eso es un problema de colas, y el software es bueno en problemas de colas.

## Conexión con la ingeniería de software

La EDM es el tiempo de ciclo del hospital, y el manual de mejora es idéntico al trabajo de flujo de entrega: instrumenta las etapas (ingreso → tratamiento → médicamente apto → realmente dado de alta), encuentra dónde se acumula el tiempo (son las transferencias), elimina los estados de espera en lugar de añadir capacidad. La cohorte "médicamente apto para el alta pero todavía ocupando una cama" es la versión hospitalaria de un PR aprobado pero no fusionado. Oportunidades directas de software: orquestación de tareas de alta, tiempo de respuesta diagnóstico, prescripción electrónica de medicamentos de alta, integración de derivación de atención social.

## Errores comunes

- **Informe solo de la media** — los valores atípicos dominan; una media decreciente puede ocultar una cola de estancia larga creciente.
- **Sin ajuste de mezcla de casos** en las reclamaciones antes/después: los umbrales de ingreso cambian estacional y seculamente.
- **Reducción de EDM que reaparece como reingreso** — combina siempre las reclamaciones de EDM con datos de reingreso a 30 días.

## Fuentes

- OCDE, indicador de duración de estancia hospitalaria. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, Colección Nacional de Costes. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>

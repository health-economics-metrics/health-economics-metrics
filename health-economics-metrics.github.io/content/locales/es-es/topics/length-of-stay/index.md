# Estancia Media (LOS)

La estancia (length of stay, LOS) es el número de días desde el ingreso hospitalario hasta el alta: la métrica central de eficiencia de flujo de la atención hospitalaria. Las medias agudas del Reino Unido rondan los 4-5 días; cada día de exceso consume una cama escasa y expone al paciente a riesgos asociados a la hospitalización.

## Por qué importa

La LOS impulsa casi todo en la economía hospitalaria aguda: capacidad de camas, flujo de pacientes electivos, flujo de urgencias, personal. Reducir la LOS media aunque sea en fracciones de día a escala libera una capacidad enorme (véase [bed days saved](../bed-days-saved/)). La LOS también es una señal de calidad en ambos sentidos: demasiado larga sugiere un fallo de proceso (pruebas diagnósticas retrasadas, papeleo del alta, esperas de atención social); demasiado corta puede significar un alta prematura, que se manifiesta después como [reingresos](../readmission-rate/).

## Las matemáticas

```
LOS (por episodio) = fecha de alta − fecha de ingreso
LOS media           = días-cama ocupados / altas (informa la media Y la mediana;
                      la LOS está muy sesgada a la derecha por valores atípicos de estancia larga)

Las comparaciones requieren ajuste por casuística (edad, diagnóstico, gravedad),
o lo que se está midiendo es a quién admite el hospital, no cómo rinde.
```

La ley de Little conecta las variables de flujo: `camas ocupadas = tasa de ingreso × LOS media`: la misma ley que rige las colas de software (véase [flow metrics](../flow-metrics/)).

## Ejemplo resuelto

Un trust admite 40 pacientes médicos de urgencia/día con una LOS media de 6.0 días: 240 camas ocupadas de forma permanente (40 × 6). Un software de coordinación del alta (seguimiento de tareas, automatización de la entrega de medicación de farmacia, reserva de transporte) reduce la cola no clínica de las estancias en 0.4 días de media.

```
Camas necesarias = 40 × 5.6 = 224 → 16 camas liberadas de forma continua
                 = 16 × 365 = 5,840 días-cama/año
```

Valora los 5,840 días-cama según el mecanismo (recuperar/cerrar/holgura) por [bed days saved](../bed-days-saved/). Fíjate en qué se movió: no la medicina, sino la *espera*: el paciente estaba clínicamente apto; el sistema seguía haciendo papeleo. Eso es un problema de colas, y el software es bueno resolviendo problemas de colas.

## Conexión con la ingeniería de software

La LOS es el tiempo de ciclo del hospital, y el manual de mejora es idéntico al trabajo de flujo de entrega: instrumenta las etapas (ingreso → tratamiento → clínicamente apto → alta efectiva), encuentra dónde se acumula el tiempo (son las transferencias), elimina los estados de espera en lugar de añadir capacidad. La cohorte de «clínicamente apto para el alta pero aún ocupando una cama» es la versión hospitalaria de una PR aprobada pero no fusionada. Oportunidades directas de software: orquestación de tareas del alta, tiempo de respuesta diagnóstico, prescripción electrónica de medicación del alta, integración de derivaciones a atención social.

## Trampas habituales

- **Informar solo la media**: los valores atípicos dominan; una media descendente puede ocultar una cola de estancia larga creciente.
- **Ausencia de ajuste por casuística** en afirmaciones de antes/después: los umbrales de ingreso cambian de forma estacional y secular.
- **Reducción de la LOS que reaparece como reingreso**: acompaña siempre las afirmaciones sobre LOS con datos de reingreso a 30 días.

## Fuentes

- OECD, length of hospital stay indicator. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>

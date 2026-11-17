# Esperanza de Vida Ajustada por Salud (EVAS)

La EVAS es un resumen a nivel poblacional: el número de años que una persona puede esperar vivir *con salud completa*, descontando los años pasados con enfermedad o discapacidad. La EVAS global al nacer era de aproximadamente 61,9 años frente a una esperanza de vida de 73,3 (OMS, datos de 2019) — la humanidad vive su última década, en promedio, con salud menos que completa.

## Por qué importa

La EVAS es la métrica estrella polar de la política de salud nacional y global — el numerador de los objetivos de "envejecimiento saludable" y la brecha que expone (esperanza de vida menos EVAS) es la carga que la prevención, la intervención temprana y la gestión de enfermedades crónicas buscan cerrar. Las estrategias de salud digital a nivel ministerial se justifican en términos de EVAS; una cartera de aplicaciones, servicios de cribado y programas de monitoreo finalmente se agrega aquí.

## El cálculo

El cálculo estándar es el **método de Sullivan**:

```
EVAS_edad_x = Σ (años-persona de tabla de vida en cada edad ≥ x × proporción con salud completa)
             / supervivientes a la edad x

"proporción con salud completa" = 1 − Σ (prevalencia_condición × peso de discapacidad)
```

Entradas: una tabla de vida estándar más la prevalencia y los pesos de discapacidad de los estados de salud (de datos de la Carga Global de Enfermedad). La EVAS se relaciona con los [AVAD](../año-de-vida-ajustado-por-discapacidad/) — la carga poblacional de AVAD y la brecha de EVAS son dos vistas de la misma salud perdida.

## Ejemplo resuelto

Un programa nacional digital de hipertensión: 500.000 inscritos, el control promedio de presión arterial mejora lo suficiente para reducir la incidencia de accidente cerebrovascular en 0,2 puntos porcentuales/año. Modelado durante la vida de la cohorte, los accidentes cerebrovasculares evitados ahorran 15.000 años ponderados por discapacidad (AVD con peso 0,32 más AVP de accidentes cerebrovasculares fatales).

```
Contribución a la EVAS ≈ 15.000 años sanos / 500.000 personas
                  ≈ 0,03 años (≈ 11 días) de EVAS por persona inscrita
```

Once días suena pequeño — pero a escala poblacional así es como realmente se mueven las métricas nacionales: los ministerios compran millones de pequeñas ganancias por persona. Esta aritmética también muestra por qué **el alcance domina**: una intervención dos veces más efectiva con un décimo de la inscripción mueve la EVAS cinco veces menos. Ver [alcance y equidad](../alcance-y-equidad/).

## Conexión con la ingeniería de software

La EVAS es un patrón de métrica de salud de flota: **vida útil de servicio esperada × proporción de esa vida pasada saludable**. Un equipo de plataforma puede calcular una "esperanza de vida de servicio saludable" a través de su parque — años que se espera que funcione un servicio, descontados por el tiempo pasado en estados degradados, obsoletos o de incidente (pesos de la deficiencia de ANS). Reencuadra la fiabilidad desde la disponibilidad puntual hacia la salud de por vida, y dirige la remediación hacia los sistemas que arrastran hacia abajo la EVAS del parque.

## Errores comunes

- **La EVAS se mueve lenta y multicausalmente** — ninguna intervención individual "mueve la EVAS" de forma medible; reclama la contribución modelada, no la estadística nacional.
- **Los datos de prevalencia se retrasan** años; las ganancias recientes no aparecerán en la EVAS oficial.
- **Comparar la EVAS entre países** con medición de estado de salud diferente es traicionero; úsala longitudinalmente dentro de un sistema.

## Fuentes

- Registro de indicadores de la OMS: EVAS. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Estudio de Carga Global de Enfermedad (IHME). <https://www.healthdata.org/research-analysis/gbd>

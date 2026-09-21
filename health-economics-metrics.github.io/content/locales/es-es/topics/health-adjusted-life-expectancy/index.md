# Esperanza de Vida Ajustada por Salud (HALE)

HALE es un resumen a nivel poblacional: el número de años que una persona puede esperar vivir *con plena salud*, descontando los años vividos con enfermedad o discapacidad. La HALE global al nacer era de unos 61.9 años frente a una esperanza de vida de 73.3 (OMS, datos de 2019) — la humanidad vive su última década, en promedio, en una salud inferior a la plena.

## Por qué importa

HALE es la métrica de referencia (north star) de la política sanitaria nacional y global — el numerador de los objetivos de "envejecimiento saludable", y la brecha que expone (esperanza de vida menos HALE) es la carga que la prevención, la intervención temprana y la gestión de enfermedades crónicas pretenden cerrar. Las estrategias de salud digital a nivel ministerial se justifican en términos de HALE; una cartera de aplicaciones, servicios de cribado y programas de monitorización termina consolidándose aquí.

## Las matemáticas

El cálculo estándar es el **método de Sullivan**:

```
HALE_edad_x = Σ (años-persona de la tabla de vida en cada edad ≥ x × proporción
              con plena salud) / supervivientes a la edad x

"proporción con plena salud" = 1 − Σ (prevalencia_condición × ponderación de discapacidad)
```

Entradas: una tabla de vida estándar más la prevalencia y las ponderaciones de discapacidad de los estados de salud (de datos de la Global Burden of Disease). HALE se relaciona con los [AVAD](../disability-adjusted-life-year/) — la carga poblacional de AVAD y la brecha de HALE son dos vistas de la misma salud perdida.

## Ejemplo práctico

Un programa nacional digital de hipertensión: 500,000 inscritos, el control de la presión arterial media mejora lo suficiente para reducir la incidencia de ictus en 0.2 puntos porcentuales/año. Modelado a lo largo de la vida de la cohorte, los ictus evitados ahorran 15,000 años ponderados por discapacidad (AVD con ponderación 0.32 más AVP por ictus mortales).

```
Contribución a HALE ≈ 15,000 años saludables / 500,000 personas
                  ≈ 0.03 años (≈ 11 días) de HALE por persona inscrita
```

Once días suena a poco — pero a escala poblacional es así como se mueven realmente las métricas nacionales: los ministerios compran millones de pequeñas ganancias por persona. Esta aritmética también muestra por qué **el alcance domina**: una intervención dos veces más efectiva con una décima parte de la inscripción mueve la HALE cinco veces menos. Véase [alcance y equidad](../reach-and-equity/).

## Conexión con la ingeniería de software

HALE es un patrón de métrica de salud de flota: **vida útil esperada del servicio × proporción de esa vida pasada saludable**. Un equipo de plataforma puede calcular la "esperanza de vida útil saludable del servicio" en toda su cartera: años que se espera que un servicio funcione, descontados por el tiempo pasado en estados degradados, obsoletos o de incidente (ponderaciones a partir del incumplimiento de SLO). Esto replantea la fiabilidad desde la disponibilidad puntual hasta la salud a lo largo de la vida, y dirige la corrección hacia los sistemas que más arrastran hacia abajo la HALE de la cartera.

## Escollos

- **HALE se mueve despacio y de forma multicausal** — ninguna intervención aislada "mueve la HALE" de forma medible; reclame la contribución modelada, no la estadística nacional.
- **Los datos de prevalencia se retrasan** años; las ganancias recientes no se reflejarán en la HALE oficial.
- **Comparar HALE entre países** con medición de estados de salud distinta es traicionero; úsela de forma longitudinal dentro de un mismo sistema.

## Fuentes

- Registro de indicadores de la OMS: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Estudio Global Burden of Disease (IHME). <https://www.healthdata.org/research-analysis/gbd>

# EQ-5D

EQ-5D es el cuestionario estandarizado del grupo EuroQol para medir la calidad de vida relacionada con la salud. Es el instrumento que produce las ponderaciones de utilidad dentro de la mayoría de los cálculos de [AVAC](../quality-adjusted-life-year/) — el caso de referencia de NICE lo designa como la medida preferida para adultos.

## Por qué importa

Cualquier producto de salud digital que quiera reclamar AVAC necesita utilidades de un instrumento validado, y EQ-5D es el predeterminado en el Reino Unido y buena parte de Europa. Es lo bastante breve para incrustarlo en una aplicación (5 preguntas + una escala visual), lo que significa que los productos de software pueden recopilar datos de resultados de grado HTA como efecto secundario del uso normal — una ventaja estructural frente a los medicamentos, que necesitan estudios dedicados.

## Las matemáticas

El EQ-5D-5L formula una pregunta en cada una de **5 dimensiones** — movilidad, autocuidado, actividades habituales, dolor/malestar, ansiedad/depresión — cada una respondida en **5 niveles** (sin problemas … problemas extremos), más una escala visual analógica de 0–100 (EQ VAS).

```
Estado de salud = perfil de 5 dígitos, p. ej. "21221"
Índice de utilidad = value_set(perfil)

El conjunto de valores es específico de cada país, derivado de encuestas de
intercambio temporal (time-trade-off) / elección discreta a la población
general. Anclas: 1 = salud plena, 0 = muerto; los estados peores que la
muerte son negativos (suelo del conjunto 3L del Reino Unido: −0.594).
```

La aritmética de AVAC procede entonces como `duración × utilidad`.

## Ejemplo práctico

Una aplicación de rehabilitación musculoesquelética mide EQ-5D-5L en el alta inicial y a los 6 meses para 1,000 usuarios que completan el proceso.

```
Utilidad media al inicio:   0.62
Utilidad media a los 6 meses: 0.71
Ganancia sostenida (asumida) 1 año: (0.71 − 0.62) × 1.0 = 0.09 AVAC por usuario
```

Frente a un cambio del grupo de control de 0.03 (recuperación natural), la ganancia atribuible es de 0.06 AVAC/usuario. Monetizado a £20,000–£30,000/AVAC: **£1,200–£1,800 de valor de salud por usuario que completa el proceso** — la cifra que ancla la negociación de precio de la aplicación con un pagador. (Las diferencias mínimas clínicamente importantes para el índice EQ-5D suelen situarse en el rango de 0.03–0.08, así que 0.06 es plausible pero debe superar la comparación de control; véase [resultados comunicados por el paciente](../patient-reported-outcomes/).)

## Conexión con la ingeniería de software

- **Instrumentarlo.** EQ-5D en el registro y en intervalos de seguimiento son unas pocas pantallas de interfaz; la recompensa es evidencia de grado HTA. Obtenga la licencia de EuroQol (obligatoria, gratuita para algunos usos).
- **Use el conjunto de valores correcto** para el país de despliegue — las mismas respuestas puntúan de forma distinta en el Reino Unido, Alemania o Japón.
- **Lección de diseño**: EQ-5D muestra cómo una pequeña encuesta estandarizada más una función de puntuación publicada producen un índice único comparable. Ese es el patrón también para cualquier índice creíble de experiencia del desarrollador — instrumento estandarizado, ponderaciones publicadas, no intuiciones improvisadas. Véase [SPACE y DevEx](../space-and-devex/).

## Escollos

- **Antes/después sin comparador** — la regresión a la media y la recuperación natural inflan las ganancias ingenuas.
- **Sesgo de supervivencia**: medir solo a los usuarios que permanecieron comprometidos (véase [retención y abandono](../retention-and-churn/)).
- **Mezclar versiones 3L y 5L o conjuntos de valores** entre estudios — cifras sistemáticamente distintas.
- **Efectos techo** en poblaciones levemente afectadas: muchos usuarios puntúan cerca de 1.0 al inicio, sin margen para demostrar la ganancia.

## Fuentes

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- Evaluaciones de tecnología sanitaria de NICE: el manual (PMG36). <https://www.nice.org.uk/process/pmg36>

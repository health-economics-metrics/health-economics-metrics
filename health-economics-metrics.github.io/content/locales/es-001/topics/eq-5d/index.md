# EQ-5D

EQ-5D es el cuestionario estandarizado del grupo EuroQol para medir la calidad de vida relacionada con la salud. Es el instrumento que produce los pesos de utilidad dentro de la mayoría de los cálculos de [AVAC](../año-de-vida-ajustado-por-calidad/) — el caso de referencia de NICE lo nombra la medida preferida para adultos.

## Por qué importa

Cualquier producto de salud digital que quiera reclamar AVAC necesita utilidades de un instrumento validado, y EQ-5D es el predeterminado en el Reino Unido y gran parte de Europa. Es lo suficientemente corto para integrarlo en una aplicación (5 preguntas + una escala visual), lo que significa que los productos de software pueden recopilar datos de resultados de nivel ETS como efecto secundario del uso normal — una ventaja estructural sobre los medicamentos, que necesitan estudios dedicados.

## El cálculo

El EQ-5D-5L hace una pregunta en cada una de **5 dimensiones** — movilidad, autocuidado, actividades habituales, dolor/malestar, ansiedad/depresión — cada una respondida en **5 niveles** (sin problemas … problemas extremos), más una escala visual analógica de 0-100 (EQ VAS).

```
Estado de salud = perfil de 5 dígitos, p. ej. "21221"
Índice de utilidad = conjunto_de_valores(perfil)

El conjunto de valores es específico del país, derivado de encuestas
de intercambio de tiempo/elección discreta de la población general. Anclas: 1 = salud
completa, 0 = muerte; los estados peores que la muerte son negativos (suelo del
conjunto 3L del Reino Unido: −0,594).
```

La aritmética de AVAC procede entonces como `duración × utilidad`.

## Ejemplo resuelto

Una aplicación de rehabilitación musculoesquelética mide EQ-5D-5L al registro y a los 6 meses para 1.000 usuarios que completan.

```
Utilidad media en línea base:  0,62
Utilidad media a los 6 meses:  0,71
Ganancia sostenida (asumida) durante 1 año: (0,71 − 0,62) × 1,0 = 0,09 AVAC por usuario
```

Frente a un cambio de grupo de control de 0,03 (recuperación natural), la ganancia atribuible es 0,06 AVAC/usuario. Monetizado a £20.000-£30.000/AVAC: **£1.200-£1.800 de valor de salud por usuario que completa** — la cifra que ancla la negociación de precio de la aplicación con un pagador. (Las diferencias mínimas clínicamente importantes para el índice EQ-5D suelen estar en el rango de 0,03-0,08, así que 0,06 es plausible pero debe superar la comparación de control; ver [resultados informados por el paciente](../resultados-informados-por-el-paciente/)).

## Conexión con la ingeniería de software

- **Instruméntalo.** EQ-5D al registro y en intervalos de seguimiento son unas pocas pantallas de interfaz; el retorno es evidencia de nivel ETS. Obtén licencia de EuroQol (requerida, gratuita para algunos usos).
- **Usa el conjunto de valores correcto** para el país de despliegue — las mismas respuestas puntúan de forma diferente en el Reino Unido frente a Alemania frente a Japón.
- **Lección de diseño**: EQ-5D muestra cómo una pequeña encuesta estandarizada más una función de puntuación publicada produce un índice único comparable. Ese es el patrón para cualquier índice creíble de experiencia de desarrollador también — instrumento estandarizado, pesos publicados, no vibraciones ad hoc. Ver [SPACE y DevEx](../space-y-devex/).

## Errores comunes

- **Antes/después sin comparador** — la regresión a la media y la recuperación natural inflan las ganancias ingenuas.
- **Sesgo de supervivencia**: medir solo a los usuarios que permanecieron comprometidos (ver [retención y abandono](../retención-y-abandono/)).
- **Mezclar versiones 3L y 5L o conjuntos de valores** entre estudios — cifras sistemáticamente diferentes.
- **Efectos de techo** en poblaciones levemente afectadas: muchos usuarios puntúan cerca de 1,0 en la línea base, sin dejar margen para demostrar ganancia.

## Fuentes

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>

# Déficit de QALY y Modificadores de Gravedad

El déficit de QALY (QALY shortfall) mide cuánta salud futura le quita una enfermedad a los pacientes en comparación con la población general. NICE lo usa para aplicar **modificadores de gravedad**: cuanto más enferma está la población, más vale cada QALY ganado, hasta 1.7× el umbral estándar.

## Por qué importa

Desde el manual de 2022 de NICE, la gravedad es un multiplicador explícito sobre el valor de las ganancias en salud, en sustitución de la antigua prima de fin de vida. Una tecnología para una enfermedad grave se juzga frente a un umbral efectivo de hasta ~51,000 £/QALY en lugar de 30,000 £. Si tu software atiende a una población gravemente afectada (insuficiencia cardiaca avanzada, enfermedad mental grave), el modificador de gravedad puede ser la diferencia entre un caso económico financiable y uno no financiable, y necesitas las matemáticas del déficit para reivindicarlo.

## Las matemáticas

Dos medidas, calculadas sobre la esperanza de vida restante con el estándar de cuidado actual:

```
Déficit absoluto       = QALYs_población_general − QALYs_con_la_enfermedad
Déficit proporcional   = Déficit absoluto / QALYs_población_general
```

Ponderaciones de NICE 2022 (se aplica la que dé la ponderación más alta):

```
Ponderación ×1.0: absoluto < 12 y proporcional < 0.85
Ponderación ×1.2: absoluto ≥ 12 o proporcional ≥ 0.85
Ponderación ×1.7: absoluto ≥ 18 o proporcional ≥ 0.95
```

La ponderación multiplica ΔE (o, equivalentemente, el umbral): la λ efectiva pasa a ser de 24k–36k £ con ×1.2 y de 34k–51k £ con ×1.7.

## Ejemplo trabajado

Pacientes con una enfermedad agresiva, edad media 60 años. La población general a los 60 espera 14.2 QALYs descontados; con la enfermedad y bajo el cuidado actual, 2.1.

```
Déficit absoluto     = 14.2 − 2.1 = 12.1  (≥ 12 → cualifica para ×1.2)
Déficit proporcional = 12.1 / 14.2 = 0.852 (≥ 0.85 → también ×1.2)
```

El ICER de tu plataforma de monitorización es de 26,000 £/QALY, por encima del punto medio estándar de juicio de 20k–30k £: un caso límite. Con la ponderación ×1.2: ICER efectivo = 26,000 / 1.2 ≈ **21,700 £/QALY**: cómodamente financiable. El cálculo del déficit acaba de mover la decisión.

## Conexión con la ingeniería de software

La ponderación por gravedad es una versión formal de algo que las organizaciones de ingeniería hacen por instinto: gastar más por unidad de mejora en los sistemas peor parados. El patrón trasladable: calcula el "déficit de SLO" de cada servicio (cuánto por debajo de su línea base sana esperada opera, en absoluto y en proporción), y pondera el valor de la remediación en consecuencia. Esto justifica, con aritmética en lugar de argumentos, por qué el sistema heredado en llamas recibe más inversión por hora ahorrada que uno sano. También conlleva la misma lección de gobernanza: publica las ponderaciones *antes* de la reunión de priorización, o todos los equipos reclamarán gravedad.

## Errores habituales

- **Calcular el déficit contra la línea base equivocada**: se mide bajo el *estándar de cuidado actual*, no la historia natural sin tratar.
- **Sensibilidad a la edad**: el déficit depende mucho de la edad de la población (los pacientes más jóvenes tienen más QALYs que perder → mayor déficit absoluto); usa la distribución de edad real de la población tratada.
- **Asumir que el modificador se aplica en cualquier sitio** — es un mecanismo de NICE (Inglaterra); otros organismos de HTA manejan la gravedad de forma distinta (o no la manejan en absoluto).

## Fuentes

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>

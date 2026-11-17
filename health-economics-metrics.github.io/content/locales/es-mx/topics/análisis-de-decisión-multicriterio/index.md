# Análisis de decisión multicriterio (MCDA)

El análisis de decisión multicriterio (MCDA) es un modelo de puntuación por suma ponderada que se usa en la evaluación de tecnologías sanitarias cuando un único umbral de ICER/disposición a pagar no recoge todo lo que importa a quien decide: equidad, necesidad no cubierta, innovación, impacto presupuestario, gravedad de la enfermedad. A cada criterio se le asigna un peso que refleja su importancia (obtenido de las partes interesadas, con suma 1), cada alternativa recibe una puntuación normalizada por criterio (normalmente de 0 a 1) y la puntuación total es la suma ponderada: la misma forma matemática que un cuadro de puntuación de evaluación de proveedores de software.

## Por qué importa

El MCDA se usa en marcos como EVIDEM y en algunas agencias de ETS para medicamentos huérfanos/enfermedades raras, donde el enfoque estricto de umbral de costo por QALY se considera demasiado estrecho para recoger todo lo que importa a la decisión. El grupo de trabajo ISPOR MCDA Emerging Good Practices Task Force formalizó las buenas prácticas para obtener pesos y puntuaciones defendibles, precisamente porque una decisión ponderada informal es fácil de construir y fácil de manipular. Cuando una tecnología sanitaria tiene dimensiones de valor que un único [umbral de disposición a pagar](../umbrales-de-disposición-a-pagar/) no puede representar (gravedad, innovación, equidad), el MCDA da a quienes deciden una estructura explícita y auditable para combinarlas, en lugar de un juicio sin enunciar.

## Las matemáticas

```
Puntuación MCDA = Σ_i (peso_i × puntuación_i)

los pesos deberían sumar 1 (obtenidos con métodos para partes interesadas
como swing weighting o Analytic Hierarchy Process)
```

## Ejemplo resuelto

Un comité de ETS evalúa una terapia digital con cuatro criterios:

```
Criterio                              Peso     Puntuación   Peso × Puntuación
Beneficio clínico                     0.4      0.8          0.32
Impacto en costos                     0.3      0.5          0.15
Gravedad / necesidad no cubierta      0.2      0.9          0.18
Innovación                            0.1      0.6          0.06
                                      ─────                 ─────
                                      1.0                   0.71
```

Los pesos suman 1.0 (0.4 + 0.3 + 0.2 + 0.1) y la puntuación MCDA es 0.71 (0.32 + 0.15 + 0.18 + 0.06). El comité compara 0.71 con un umbral acordado de antemano o lo clasifica frente a tecnologías competidoras puntuadas del mismo modo.

## Conexión con la ingeniería de software

Es exactamente la misma matemática que un cuadro de puntuación ponderado de selección de proveedores, una matriz de evaluación de RFP o un modelo de puntuación de priorización de funcionalidades; véase [construir frente a comprar](../construir-frente-a-comprar/) para el caso de uso clásico del cuadro de puntuación ponderado en la adquisición de software. También conviene contrastarlo con [WSJF y CD3](../wsjf-y-cd3/): WSJF/CD3 es un método de priorización basado en un *cociente* (costo del retraso dividido por el tamaño o la duración del trabajo), mientras que el MCDA es una *suma* ponderada. MCDA y WSJF/CD3 son dos respuestas estructuralmente distintas a la pregunta «¿cómo clasificamos opciones competidoras?», y saber cuál exige realmente una decisión dada (valor agregado sobre criterios independientes, o densidad de valor por unidad de capacidad escasa) importa más que qué fórmula parezca más rigurosa.

## Trampas habituales

- **Sesgo en la obtención de pesos**: quien fija los pesos prácticamente decide de antemano la clasificación, de modo que la «fórmula» puede blanquear una decisión política o comercial como un cálculo objetivo. Hay que documentar quién fijó los pesos y cómo.
- **Doble contabilización de un criterio ya recogido en otro**: puntuar la «costo-efectividad» como criterio *y además* puntuar por separado el «impacto en costos» pondera el dinero en exceso frente a los demás criterios, sin que nadie lo pretenda.
- **Falsa precisión**: una puntuación ponderada con dos decimales (0.71) sugiere más rigor del que respaldan realmente las valoraciones de las partes interesadas en una escala de 0–10, y la variabilidad entre evaluadores en esas valoraciones a menudo no se informa en absoluto.

## Fuentes

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.

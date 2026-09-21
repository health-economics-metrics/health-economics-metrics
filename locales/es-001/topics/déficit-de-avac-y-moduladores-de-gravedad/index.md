# Déficit de AVAC y Moduladores de Gravedad

El déficit de AVAC mide cuánta salud futura le quita una enfermedad a los pacientes en comparación con la población general. NICE lo usa para aplicar **moduladores de gravedad**: cuanto más enferma la población, más vale cada AVAC ganado — hasta 1,7× el umbral estándar.

## Por qué importa

Desde el manual de 2022 de NICE, la gravedad es un multiplicador explícito sobre el valor de las ganancias de salud, reemplazando la antigua prima de fin de vida. Una tecnología para una condición grave se juzga frente a un umbral efectivo de hasta ~£51.000/AVAC en lugar de £30.000. Si tu software sirve a una población gravemente afectada (insuficiencia cardíaca avanzada, enfermedad mental grave), el modulador de gravedad puede ser la diferencia entre un caso económico financiable y uno no financiable — y necesitas la matemática de déficit para reclamarlo.

## El cálculo

Dos medidas, calculadas sobre la vida restante con el estándar de atención actual:

```
Déficit absoluto     = AVAC_población_general − AVAC_con_condición
Déficit proporcional = Déficit absoluto / AVAC_población_general
```

Pesos de NICE 2022 (se aplica cualquier medida que dé el peso más alto):

```
Peso ×1,0: absoluto < 12 y proporcional < 0,85
Peso ×1,2: absoluto ≥ 12 o proporcional ≥ 0,85
Peso ×1,7: absoluto ≥ 18 o proporcional ≥ 0,95
```

El peso multiplica ΔE (o equivalentemente el umbral): la λ efectiva se convierte en £24k–£36k a ×1,2 y £34k–£51k a ×1,7.

## Ejemplo resuelto

Pacientes con una condición agresiva, edad promedio 60. La población general a los 60 espera 14,2 AVAC descontados; con la condición bajo atención actual, 2,1.

```
Déficit absoluto     = 14,2 − 2,1 = 12,1  (≥ 12 → califica para ×1,2)
Déficit proporcional = 12,1 / 14,2 = 0,852 (≥ 0,85 → también ×1,2)
```

El RCEI de tu plataforma de monitoreo es £26.000/AVAC — por encima del juicio de punto medio estándar de £20k–£30k, marginal. Con el peso ×1,2: RCEI efectivo = 26.000 / 1,2 ≈ **£21.700/AVAC** — cómodamente financiable. El cálculo de déficit acaba de mover la decisión.

## Conexión con la ingeniería de software

La ponderación de gravedad es una versión formal de algo que las organizaciones de ingeniería hacen por instinto: gastar más por unidad de mejora en los sistemas peor parados. El patrón transferible — calcula el "déficit de ANS" de cada servicio (cuán por debajo de su línea base saludable esperada funciona, absoluta y proporcionalmente), y pondera el valor de remediación en consecuencia. Esto justifica, con aritmética en lugar de argumentos, por qué el sistema heredado en llamas recibe más inversión por hora ahorrada que uno saludable. También conlleva la misma lección de gobernanza: publica los pesos *antes* de la reunión de priorización, o cada equipo reclama gravedad.

## Errores comunes

- **Calcular el déficit contra la línea base equivocada**: se mide bajo el *estándar de atención actual*, no la historia natural no tratada.
- **Sensibilidad a la edad**: el déficit depende mucho de la edad de la población (los pacientes más jóvenes tienen más AVAC que perder → mayor déficit absoluto); usa la distribución de edad de la población realmente tratada.
- **Asumir que el modulador se aplica en otro lugar** — es un mecanismo de NICE (Inglaterra); otros organismos de ETS manejan la gravedad de forma diferente (o no la manejan en absoluto).

## Fuentes

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>

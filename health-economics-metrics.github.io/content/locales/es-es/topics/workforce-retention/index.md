# Retención de Personal

La economía de la retención de personal cuantifica lo que la rotación de plantilla cuesta a un sistema de salud — contratación, incorporación, cobertura de vacantes — y, por tanto, lo que vale el software que reduce el desgaste administrativo. El agotamiento (burnout) derivado de tareas administrativas repetitivas de datos es un factor determinante de la rotación de personal y del absentismo por enfermedad en el NHS.

## Por qué importa

Cuando un clínico se marcha, el trust paga tres veces: para contratar a un sustituto (publicidad, comisiones de agencia, entrevistas), para incorporarlo (meses de productividad reducida, supervisión), y para cubrir la vacante mientras tanto — típicamente con personal de agencia o locum a 2–3× las tarifas sustantivas de Agenda for Change (véase [avoidable outsourcing costs](../avoidable-outsourcing-costs/) y [hard cash-releasing savings](../hard-cash-releasing-savings-deficit-defence/)). Dado que los costes de rotación son efectivo real, las mejoras en la retención se encuentran entre los pocos beneficios de plantilla que un director financiero puede contabilizar. La fricción administrativa figura sistemáticamente entre los factores más citados del agotamiento clínico, lo que la convierte en un coste abordable mediante software.

## Las matemáticas

```
Coste por baja = coste de contratación + coste de incorporación/rampa de productividad
                + prima de cobertura de vacante × duración de la vacante

Coste anual de rotación = plantilla × tasa de rotación × coste por baja

Valor del software  = plantilla × Δtasa de rotación × coste por baja
                   + reducción del absentismo por enfermedad × coste de cobertura/día
```

La cadena causal tiene dos eslabones estimados — software → agotamiento/fricción, y agotamiento → rotación — así que aportad evidencia de ambos (encuestas al personal antes/después; asociaciones publicadas entre agotamiento y desgaste) y mantened modesta la Δ reclamada.

## Ejemplo práctico

Un trust emplea a 1,200 enfermeras; rotación del 11%/año. Coste por baja:

```
Contratación ≈ £4,500; incorporación/rampa ≈ £6,000
Cobertura de vacante: 4 meses × 0.6 ETC cubierto por prima de agencia ≈ £8,000
Total ≈ £18,500 por baja
Coste de rotación base = 1,200 × 0.11 × 18,500 ≈ £2.44M/año
```

Un software que reduce la carga documental (valoraciones autocompletadas, inicio de sesión único, dictado) mueve de forma plausible la rotación 1 punto porcentual:

```
Valor = 1,200 × 0.01 × 18,500 = £222,000/año con relevancia en caja
```

Una afirmación de 1 punto respaldada por puntuaciones de fricción de encuestas al personal es creíble; una de 4 puntos no lo es. Ejecutad el [tornado](../sensitivity-analysis/) sobre Δrotación: domina todo lo demás en el modelo.

## Conexión con la ingeniería de software

Las matemáticas de retención en ingeniería son idénticas y están peor documentadas: sustituir a un ingeniero senior cuesta de 6 a 12 meses de salario cargado (contratación, rampa, contexto perdido), de modo que una organización de 200 personas con un 15% de desgaste quema millones anuales en rotación. La inversión en experiencia del desarrollador ([SPACE and DevEx](../space-and-devex/)) es el análogo directo del alivio de la carga documental para las enfermeras — y debería justificarse de la misma manera: puntuaciones de fricción medidas, un efecto modesto reclamado sobre el desgaste, coste por baja procedente de vuestros propios datos financieros. La disciplina de la economía de la salud que conviene copiar es *costear la baja con honestidad*, en lugar de discutir sobre si la gente «realmente» se marcha por culpa de las herramientas.

## Errores habituales

- **Atribuir todo el movimiento de rotación a vuestra intervención** — los mercados laborales mueven la rotación mucho más que el software; usad grupos de control o al menos un ajuste por tendencia sectorial.
- **Doble contabilización**: los ahorros de retención y los ahorros de gasto en agencia se solapan (la cobertura de vacante *es* gasto en agencia); conciliad las líneas.
- **Ignorar el retraso temporal**: el desgaste impulsado por el agotamiento responde a los cambios de fricción en 1–2 años, no en el próximo trimestre.

## Fuentes

- NHS England, reducing agency spend. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Staff Survey (burnout and intention-to-leave data). <https://www.nhsstaffsurveys.com/>

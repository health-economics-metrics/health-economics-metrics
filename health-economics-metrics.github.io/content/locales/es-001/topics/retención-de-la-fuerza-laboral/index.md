# Retención de la Fuerza Laboral

La economía de retención de la fuerza laboral cuantifica lo que le cuesta a un sistema de salud la rotación de personal — contratación, incorporación, cobertura de vacantes — y por lo tanto cuánto vale el software que reduce el agotamiento administrativo. El agotamiento por tareas de datos administrativas repetitivas es un impulsor principal de la rotación de personal y el ausentismo por enfermedad en el NHS.

## Por qué importa

Cuando un clínico se va, el fideicomiso paga tres veces: para contratar a un reemplazo (publicidad, tarifas de agencia, entrevistas), para incorporarlo (meses de productividad reducida, supervisión), y para cubrir la vacante mientras tanto — típicamente con personal de agencia o suplente a tarifas de 2-3× las tarifas sustantivas de Agenda for Change (ver [costes de externalización evitables](../costes-de-externalización-evitables/) y [ahorros duros liberadores de efectivo](../ahorros-duros-liberadores-de-efectivo-defensa-del-déficit/)). Debido a que los costes de rotación son efectivo real, las mejoras de retención están entre los pocos beneficios de fuerza laboral que un director financiero puede capitalizar. La fricción administrativa está consistentemente entre los principales impulsores citados del agotamiento clínico, lo que la convierte en un coste abordable con software.

## El cálculo

```
Coste por persona que se va = coste de contratación + coste de incorporación/rampa de productividad
                + prima de cobertura de vacante × duración de vacante

Coste anual de rotación = plantilla × tasa de rotación × coste por persona que se va

Valor del software  = plantilla × Δtasa de rotación × coste por persona que se va
                   + reducción de ausentismo por enfermedad × coste de cobertura/día
```

La cadena causal tiene dos vínculos estimados — software → agotamiento/fricción, y agotamiento → rotación — así que evidencia ambos (encuestas de personal antes/después; asociaciones publicadas agotamiento-atrición) y mantén la Δ reclamada modesta.

## Ejemplo resuelto

Un fideicomiso emplea a 1.200 enfermeras; rotación 11%/año. Coste por persona que se va:

```
Contratación ≈ £4.500;  incorporación/rampa ≈ £6.000
Cobertura de vacante: 4 meses × 0,6 ETC cubierto por prima de agencia ≈ £8.000
Total ≈ £18.500 por persona que se va
Coste base de rotación = 1.200 × 0,11 × 18.500 ≈ £2,44M/año
```

El software de carga de documentación (evaluaciones autocompletadas, inicio de sesión único, dictado) plausiblemente mueve la rotación 1 punto porcentual:

```
Valor = 1.200 × 0,01 × 18.500 = £222.000/año relevante en efectivo
```

Una reclamación de 1 punto respaldada por puntuaciones de fricción de encuesta de personal es creíble; una reclamación de 4 puntos no lo es. Ejecuta el [tornado](../análisis-de-sensibilidad/) en Δrotación: domina todo lo demás en el modelo.

## Conexión con la ingeniería de software

La matemática de retención de ingeniería es idéntica y peor documentada: reemplazar a un ingeniero senior cuesta 6-12 meses de salario cargado (contratación, rampa, contexto perdido), así que una organización de 200 personas con 15% de atrición quema millones anualmente en rotación. La inversión en experiencia del desarrollador ([SPACE y DevEx](../space-y-devex/)) es el análogo directo del alivio de carga de documentación para enfermeras — y debería justificarse de la misma manera: puntuaciones de fricción medidas, un efecto modesto reclamado sobre la atrición, coste por persona que se va de tus propios datos financieros. La disciplina de economía de la salud a copiar es *costear honestamente a la persona que se va* en lugar de discutir si la gente "realmente" se va por herramientas.

## Errores comunes

- **Atribuir todo el movimiento de rotación a tu intervención** — los mercados laborales mueven la rotación mucho más que el software; usa grupos de control o al menos ajuste de tendencia sectorial.
- **Doble contabilización**: los ahorros de retención y los ahorros de gasto en agencia se superponen (la cobertura de vacante *es* gasto de agencia); concilia las líneas.
- **Ignorar el retraso**: la atrición impulsada por el agotamiento responde a los cambios de fricción durante 1-2 años, no el próximo trimestre.

## Fuentes

- NHS England, reducing agency spend. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Staff Survey (datos de agotamiento e intención de irse). <https://www.nhsstaffsurveys.com/>

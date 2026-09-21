# Tiempo del Profesional Sanitario

El tiempo del profesional sanitario es el recurso más escaso en la mayoría de los sistemas de salud. Medir el valor de ahorrar minutos al día a un clínico exige pasar de una simple matemática salarial a **coste de oportunidad y capacidad del sistema**: dentro de un servicio nacional de salud, el tiempo de un profesional es un cuello de botella operativo rígido, no una partida de coste que se ajusta.

## Por qué importa

No se pueden formar rápidamente más médicos de cabecera, especialistas o enfermeras especializadas — los cauces de formación duran de 5 a 15 años, y las vacantes son crónicas. Así que una hora de tiempo de profesional ahorrada no es "salario evitado" (al profesional se le sigue pagando); es *capacidad de cuello de botella liberada*, y la capacidad de cuello de botella vale lo que el cuello de botella produce. Por eso las afirmaciones del tipo "ahorra 10 minutos por consulta" son, a la vez, la línea más habitual y la más mal valorada de la salud digital.

## Las matemáticas

Tres niveles de valoración, en orden creciente de honestidad:

```
1. Base salarial:        horas × tarifa salarial cargada (costes unitarios PSSRU)
                         — lo que cuesta el tiempo, no lo que produce
2. Base de producción:   horas → citas/procedimientos habilitados × valor del esquema
                         (véase national-tariff-and-unit-costs.md)
3. Base de cuello de     si este rol condiciona toda una vía asistencial, horas × valor
   botella:               del rendimiento de la vía liberado (teoría de las restricciones)
```

Descuento por fragmentación: el tiempo ahorrado en fragmentos por debajo de un cuanto utilizable (p. ej., 3 minutos dispersos a lo largo de una consulta) se redespliega mal; aplica un factor de utilización declarado.

## Ejemplo trabajado

La transcripción ambiental (ambient scribing) ahorra a un médico de cabecera 2 minutos por consulta, 30 consultas/día: 60 minutos/día, o **220 horas/año por médico** en 220 días laborables.

```
Base salarial:      220 × 80 £ (hora de médico cargada, región PSSRU) ≈ 17,600 £/médico/año
Base de producción: 60 min/día = 5 consultas extra de 12 min/día
                    = 1,100 citas extra/médico/año × 42 £ ≈ 46,200 £/médico/año
                    — o las mismas citas absorbidas como reducción de horas extra y
                    consultas más seguras y sin prisas (línea cualitativa)
```

En una federación de 50 médicos, la capacidad según la base de producción vale ~2.3 M £/año, siempre que los minutos sean reales (medidos, no reclamados por el proveedor), consolidados (consultas completas, no fragmentos) y redesplegados (véase [ahorros con liberación de caja frente a sin liberación de caja](../cash-releasing-vs-non-cash-releasing/)).

## Conexión con la ingeniería de software

El tiempo de un ingeniero senior se comporta de forma idéntica: es el cuello de botella por el que fluyen diseños, revisiones e incidentes, así que hay que valorarlo por lo que ese cuello de botella condiciona, no por el salario. La misma valoración de tres niveles se aplica a cualquier afirmación del tipo "la IA ahorra X minutos a cada desarrollador": la matemática salarial embellece los números pequeños; las preguntas honestas son si los minutos se consolidan en bloques utilizables y qué produce realmente la capacidad liberada. Véase [optimización de recursos aguas abajo](../downstream-resource-optimization/) para el multiplicador cuando la hora ahorrada pertenece a la persona a la que todos los demás esperan.

## Errores habituales

- **Minutos × salario = ahorro** — la inflación canónica; es capacidad, y solo al factor de utilización declarado.
- **Ignorar el problema del cuanto**: 12 ahorros de 5 minutos no son una hora libre.
- **Valorar todos los roles por igual**: una hora del cuello de botella de la vía vale muchas veces más que una hora de un rol que no condiciona el flujo.

## Fuentes

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>

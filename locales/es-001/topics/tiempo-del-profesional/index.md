# Tiempo del Profesional

El tiempo del profesional es el recurso más escaso en la mayoría de los sistemas de salud. Medir el valor de ahorrar minutos diarios a un clínico requiere pasar de la matemática de salarios simple a la **coste de oportunidad y capacidad del sistema**: dentro de un servicio de salud nacional, el tiempo de un profesional es un cuello de botella operativo rígido, no una línea de coste que se flexiona.

## Por qué importa

No puedes crear rápidamente más médicos de cabecera, consultores o enfermeras especialistas — los canales de formación duran 5-15 años, y las vacantes son crónicas. Así que una hora de tiempo de profesional ahorrada no es "salario evitado" (al profesional se le sigue pagando); es *capacidad de cuello de botella liberada*, y la capacidad de cuello de botella vale lo que produce el cuello de botella. Por eso las reclamaciones de "ahorra 10 minutos por consulta" son simultáneamente la línea más común y la peor tasada en salud digital.

## El cálculo

Tres niveles de valoración, en honestidad creciente:

```
1. Base salarial:        horas × tarifa salarial cargada (costes unitarios PSSRU)
                      — lo que cuesta el tiempo, no lo que produce
2. Base de resultado:      horas → citas/procedimientos habilitados × valor del esquema
                      (ver national-tariff-and-unit-costs.md)
3. Base de cuello de botella:  si este rol condiciona toda una vía, horas × valor del
                      rendimiento de vía liberado (teoría de restricciones)
```

Descuento de fragmentación: el tiempo ahorrado en fragmentos por debajo de un quantum utilizable (p. ej., 3 minutos dispersos en una clínica) se redespliega mal; aplica un factor de utilización declarado.

## Ejemplo resuelto

La transcripción ambiental ahorra a un médico de cabecera 2 minutos por consulta, 30 consultas/día: 60 minutos/día, o **220 horas/año por médico de cabecera** en 220 días laborables.

```
Base salarial:   220 × £80 (hora de médico de cabecera cargada, región PSSRU) ≈ £17.600/médico/año
Base de resultado: 60 min/día = 5 consultas extra de 12 min/día
              = 1.100 citas extra/médico/año × £42 ≈ £46.200/médico/año
              — o las mismas citas absorbidas como horas extra reducidas y
              consultas más seguras y sin prisas (línea cualitativa)
```

A través de una federación de 50 médicos de cabecera, la capacidad de base de resultado vale ~£2,3M/año — siempre que los minutos sean reales (medidos, no reclamados por el proveedor), consolidados (consultas completas, no fragmentos), y redesplegados (ver [ahorros liberadores de efectivo frente a no liberadores de efectivo](../ahorros-liberadores-de-efectivo-frente-a-no-liberadores-de-efectivo/)).

## Conexión con la ingeniería de software

El tiempo del ingeniero senior se comporta idénticamente: es el cuello de botella a través del cual fluyen los diseños, las revisiones y los incidentes, así que valóralo por lo que condiciona el cuello de botella, no por el salario. La misma valoración de tres niveles se aplica a cualquier reclamación de "la IA ahorra a cada desarrollador X minutos" — la matemática de salarios halaga los números pequeños; las preguntas honestas son si los minutos se consolidan en bloques utilizables y qué produce realmente la capacidad liberada. Ver [optimización de recursos posteriores](../optimización-de-recursos-posteriores/) para el multiplicador cuando la hora ahorrada pertenece a la persona a la que todos esperan.

## Errores comunes

- **Minutos × salario = ahorros** — la inflación canónica; es capacidad, y solo a la utilización declarada.
- **Ignorar el problema del quantum**: 12 × ahorros de 5 minutos ≠ una hora libre.
- **Valorar todos los roles por igual**: una hora del cuello de botella de vía vale muchas veces una hora de un rol no bloqueante.

## Fuentes

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, productividad del NHS. <https://www.england.nhs.uk/long-read/nhs-productivity/>

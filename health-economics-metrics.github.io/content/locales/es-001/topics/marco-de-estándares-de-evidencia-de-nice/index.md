# Marco de Estándares de Evidencia de NICE (MEE)

El MEE es el marco de NICE que especifica **cuánta evidencia necesita una tecnología de salud digital, proporcional a su riesgo**. Es lo más cercano a una respuesta oficial a "¿qué tenemos que probar antes de que el NHS compre nuestra aplicación?".

## Por qué importa

El MEE (publicado primero en 2019, actualizado en 2022 para cubrir la IA y los algoritmos adaptativos) clasifica las tecnologías de salud digital en niveles por función clínica, con estándares de evidencia **acumulativos** — 21 estándares en 5 grupos (factores de diseño, valor, rendimiento/efectividad, impacto económico, despliegue):

```
Nivel A — servicios de sistema, sin resultado directo en el paciente (p. ej., programación electrónica)
         → estándares básicos: credibilidad, protección de datos, garantía técnica
Nivel B — informar, monitoreo simple, comunicación (p. ej., diario de síntomas)
         → + evidencia de beneficio del usuario, fiabilidad apropiada
Nivel C — tratar, diagnosticar, o guiar activamente la gestión clínica
         → + evidencia de efectividad comparativa de alta calidad (idealmente ECA)
           y análisis económico
```

Para la evidencia económica, el [análisis de coste-consecuencia](../análisis-de-coste-consecuencia/) es aceptable para la mayoría de los niveles; se espera [análisis de coste-utilidad](../análisis-de-coste-utilidad/) en el mayor riesgo. El MEE define tu **coste de evidencia de entrada al mercado** — presupuéstalo como cualquier otro coste de construcción.

## El cálculo

Sin fórmulas — una tabla de decisión. El cálculo operativo es comercial:

```
Inversión en evidencia requerida = f(nivel)
  Nivel A: documentación + garantía ≈ £10k–50k
  Nivel B: estudio observacional/comparativo de beneficio del usuario ≈ £50k–250k
  Nivel C: estudio comparativo de grado ECA + modelo económico ≈ £250k–£2M+

Posiciona las reclamaciones de tu producto deliberadamente: reclamar "apoya
decisiones clínicas" en lugar de "informa a los pacientes" te mueve un nivel
y puede multiplicar la factura por 10×.
```

## Ejemplo resuelto

Un fabricante de aplicación de recordatorio de medicación considera añadir una función de recomendación de ajuste de dosis.

- Como aplicación de recordatorio: **Nivel B** — un estudio de cohorte mostrando mejora de adherencia basta.
- Con recomendaciones de dosis: **Nivel C** — evidencia de efectividad comparativa (probablemente un ECA frente a la atención habitual) más análisis económico.

Si el ECA cuesta £600k y el ingreso incremental de la función de dosis es £200k/año, la función debe mantener valor durante 3+ años antes de que los costes de evidencia se equilibren — una decisión de producto que se ve completamente diferente una vez que se incorpora el precio del nivel MEE. Muchos equipos envían el producto de Nivel B y escalonan la reclamación de Nivel C detrás de la financiación.

## Conexión con la ingeniería de software

El MEE es el patrón de gobernanza más transferible de este repositorio: **requisitos de evidencia escalonados por riesgo para la adopción de herramientas**. Versión interna: un formateador de código necesita una demostración (Nivel A); una herramienta de productividad que reclama horas ahorradas necesita un piloto medido (Nivel B); una puerta de IA que bloquea automáticamente los despliegues o escribe automáticamente código clínico necesita evidencia de grado de ensayo controlado antes del despliegue en toda la organización (Nivel C). La evidencia proporcional detiene ambos modos de fallo — la burocracia estrangulando herramientas triviales, y el envío por intuición de las consecuentes. Ver también [vía rápida DiGA](../vía-rápida-diga-de-alemania/) para el complemento de "adopción provisional con plazo de evidencia".

## Errores comunes

- **Clasificación errónea de nivel por pensamiento ilusorio** — los reguladores y compradores clasifican por lo que el producto *hace*, no lo que dice el marketing.
- **Evidencia construida después del producto**: adaptar retroactivamente un ECA a un producto enviado sin instrumentación o equilibrio es lento y a menudo imposible.
- **Cumplir el MEE y olvidar el resto**: el MEE se sitúa junto al DTAC (seguridad clínica, protección de datos, interoperabilidad) y, para la IA, la autorización regulatoria — ver [evaluación regulatoria de la IA](../evaluación-regulatoria-de-la-ia/).

## Fuentes

- Marco de Estándares de Evidencia de NICE (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- Tablas de estándares de evidencia del MEE. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>

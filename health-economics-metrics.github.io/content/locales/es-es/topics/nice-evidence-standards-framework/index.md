# Marco de Estándares de Evidencia de NICE (ESF)

El ESF es el marco de NICE que especifica **cuánta evidencia necesita una tecnología de salud digital, de forma proporcional a su riesgo**. Es lo más parecido a una respuesta oficial a «¿qué tenemos que demostrar antes de que el NHS compre nuestra app?».

## Por qué importa

El ESF (publicado por primera vez en 2019, actualizado en 2022 para cubrir la IA y los algoritmos adaptativos) clasifica las tecnologías de salud digital en niveles según la función clínica, con estándares de evidencia **acumulativos**: 21 estándares en 5 grupos (factores de diseño, valor, rendimiento/efectividad, impacto económico, despliegue):

```
Nivel A — servicios de sistema, sin resultado directo para el paciente (p. ej., planificación de turnos electrónica)
          → estándares básicos: credibilidad, protección de datos, garantía técnica
Nivel B — informar, monitorización simple, comunicación (p. ej., diario de síntomas)
          → + evidencia de beneficio para el usuario, fiabilidad adecuada
Nivel C — tratar, diagnosticar o guiar activamente el manejo clínico
          → + evidencia comparativa de efectividad de alta calidad (idealmente ECA)
            y análisis económico
```

Para la evidencia económica, el [cost-consequence analysis](../cost-consequence-analysis/) es aceptable para la mayoría de los niveles; se espera un [cost-utility analysis](../cost-utility-analysis/) en el riesgo más alto. El ESF define tu **coste de evidencia de entrada al mercado**: presupuéstalo como cualquier otro coste de construcción.

## Las matemáticas

Sin fórmulas: una tabla de decisión. El cálculo operativo es comercial:

```
Inversión en evidencia requerida = f(nivel)
  Nivel A: documentación + garantía ≈ £10k–50k
  Nivel B: estudio observacional/comparativo de beneficio para el usuario ≈ £50k–250k
  Nivel C: estudio comparativo de calidad ECA + modelo económico ≈ £250k–£2M+

Posiciona las afirmaciones de tu producto de forma deliberada: afirmar que
"apoya decisiones clínicas" en lugar de "informa a los pacientes" te mueve
de nivel y puede multiplicar la factura por 10.
```

## Ejemplo resuelto

El fabricante de una app de recordatorio de medicación se plantea añadir una función de recomendación de ajuste de dosis.

- Como app de recordatorio: **Nivel B**: basta un estudio de cohortes que muestre mejora de la adherencia.
- Con recomendaciones de dosis: **Nivel C**: evidencia comparativa de efectividad (probablemente un ECA frente a la atención habitual) más análisis económico.

Si el ECA cuesta £600k y el ingreso incremental de la función de dosis es £200k/año, la función debe mantener valor durante 3 años o más antes de que los costes de evidencia se amorticen: una decisión de producto que se ve completamente distinta una vez que el nivel del ESF tiene precio. Muchos equipos lanzan el producto de Nivel B y aplazan la afirmación de Nivel C hasta contar con financiación.

## Conexión con la ingeniería de software

El ESF es el patrón de gobernanza más transferible de este repositorio: **requisitos de evidencia escalonados por riesgo para la adopción de herramientas**. Versión interna: un formateador de código necesita una demo (Nivel A); una herramienta de productividad que afirma ahorrar horas necesita un piloto medido (Nivel B); una puerta de IA que bloquea automáticamente despliegues o escribe automáticamente código clínico necesita evidencia de calidad de ensayo controlado antes de un despliegue a nivel de toda la organización (Nivel C). La evidencia proporcional evita ambos modos de fallo: la burocracia estrangulando herramientas triviales y el despliegue por intuición de las que sí tienen consecuencias. Véase también [DiGA fast-track](../diga-fast-track/) para el complemento de «adopción provisional con plazo de evidencia».

## Trampas habituales

- **Clasificación errónea de nivel por deseo**: los reguladores y compradores clasifican según lo que el producto *hace*, no lo que dice el marketing.
- **Evidencia construida después del producto**: adaptar un ECA a un producto ya lanzado sin instrumentación ni equipoise es lento y a menudo imposible.
- **Cumplir el ESF y olvidar el resto**: el ESF convive con el DTAC (seguridad clínica, protección de datos, interoperabilidad) y, para la IA, con el visto bueno regulatorio; véase [AI regulatory evaluation](../ai-regulatory-evaluation/).

## Fuentes

- NICE Evidence Standards Framework (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>

# La Vía Rápida DiGA de Alemania

DiGA (Digitale Gesundheitsanwendungen) es la vía legal alemana de "aplicaciones por receta" — el primer sistema nacional del mundo en el que los médicos prescriben aplicaciones de salud aprobadas y el seguro obligatorio debe reembolsarlas. Es el principal experimento real en marcha sobre el pago de terapias digitales a escala nacional.

## Por qué importa

DiGA respondió a la pregunta que se hace toda empresa de salud digital —"¿quién va a pagar de verdad?"— con una ley (la DVG, 2019). El diseño es notable:

- **Decisión rápida**: el BfArM (el regulador) debe decidir en un plazo de 3 meses.
- **Listado provisional**: las aplicaciones pueden figurar en el listado durante 12 meses *mientras siguen generando evidencia* — obteniendo ingresos durante su estudio pivotal.
- **Plazo para la evidencia**: demostrar un "efecto sanitario positivo" (beneficio médico, o mejora estructural/de procedimiento relevante para el paciente) mediante un estudio comparativo —normalmente un ensayo aleatorizado (RCT)— o ser retirada del listado. Aproximadamente la mitad de las entradas provisionales no logran convertirse en definitivas.
- **Precios**: el fabricante fija libremente el precio del primer año; después se negocia con la federación de aseguradoras. Los precios trimestrales iniciales medianos rondan los 500 €; los elementos de precio basados en el rendimiento llegarán a partir de 2026.

Realidad del mercado (investigación hasta finales de 2024): ~68 aplicaciones listadas, más de 1 millón de prescripciones acumuladas, ~81 % de las prescripciones activadas, ~234 millones de euros de gasto acumulado de las aseguradoras — un mercado real, pero modesto frente al bombo publicitario, y la adherencia tras la activación sigue siendo el punto débil.

## Las matemáticas

El modelo comercial que ejecuta cualquier fundador de una DiGA:

```
Ingresos = prescripciones × tasa de activación × precio por periodo de prescripción
Coste de la evidencia = RCT pivotal (típicamente 1–3 millones de €) dentro
                         de la ventana de 12 meses
Valor esperado = P(la evidencia tiene éxito) × ingresos en estado estable
                  − coste de la evidencia

Con ~50 % de fracasos en la conversión, P debe evaluarse con honestidad — la
mitad del sector gasta el dinero del RCT y pierde el listado.
```

## Ejemplo resuelto

Una aplicación de gestión de la depresión se lista provisionalmente a 450 €/trimestre:

```
Año 1: 20,000 prescripciones × 81 % de activación × 450 € ≈ 7.3 millones de € de ingresos
Coste del RCT: 2 millones de €, en curso simultáneamente
Resultado A (evidencia positiva): listado permanente, precio negociado ~380 €,
  estado estable de 60,000 recetas/año ≈ 18.5 millones de €/año
Resultado B (la evidencia falla): retirada del listado en el mes 12; los ingresos cesan.
```

El año provisional financia la generación de evidencia — la innovación central de la vía. Contrasta con la secuencia tradicional (evidencia primero, ingresos años después), que asfixia precisamente a los productos que DiGA quiere que existan.

## Conexión con la ingeniería de software

El patrón de DiGA —**adopción provisional con una métrica de éxito preregistrada y una extinción automática**— es directamente trasladable a la gobernanza de herramientas de ingeniería: desplegar la herramienta a usuarios de producción durante 12 meses, preregistrar la métrica (tiempo ahorrado medido, reducción de incidencias), y que expire automáticamente a menos que llegue la evidencia. Resuelve la paradoja del piloto (las herramientas que necesitan escala para demostrar valor nunca consiguen escala) sin conceder permanencia a tecnología no probada. Los datos de 81 % de activación con baja adherencia también dejan una lección de producto: la prescripción (o el mandato ejecutivo) consigue instalaciones; solo la calidad del producto consigue un uso sostenido — véase [adherencia y persistencia](../adherence-and-persistence/).

## Errores habituales

- **Tratar el listado como la línea de meta** — las prescripciones requieren la confianza del prescriptor; muchas DiGA listadas registran un volumen insignificante.
- **Infradimensionar el estudio pivotal** para ahorrar dinero durante el año de ingresos — la falsa economía que explica buena parte de la tasa de fracaso del 50 %.
- **Trasladar el modelo sin el pagador**: DiGA funciona porque el reembolso es obligatorio por ley; una copia sin un pago mandatado es solo un programa piloto.

## Fuentes

- Analysis of the DiGA market, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- DiGA pricing trends, npj Digital Medicine 2025. <https://www.nature.com/articles/s41746-025-01879-6>
- BfArM, Digital Health Applications. <https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html>

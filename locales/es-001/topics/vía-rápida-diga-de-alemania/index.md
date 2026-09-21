# Vía Rápida DiGA de Alemania

DiGA (Digitale Gesundheitsanwendungen) es la vía estatutaria alemana de "aplicaciones con receta" — el primer sistema nacional del mundo donde los médicos recetan aplicaciones de salud aprobadas y el seguro estatutario debe reembolsarlas. Es el principal experimento en vivo de pago por terapéuticos digitales a escala nacional.

## Por qué importa

DiGA respondió a la pregunta que toda empresa de salud digital hace — "¿quién pagará realmente?" — con legislación (la DVG, 2019). El diseño es notable:

- **Decisión rápida**: BfArM (el regulador) debe decidir en 3 meses.
- **Listado provisional**: las aplicaciones pueden listarse durante 12 meses *mientras aún generan evidencia* — obteniendo ingresos durante su estudio pivotal.
- **Plazo de evidencia**: probar un "efecto sanitario positivo" (beneficio médico, o mejora estructural/procedimental relevante para el paciente) mediante un estudio comparativo — normalmente un ECA — o ser eliminado del listado. Aproximadamente la mitad de las entradas provisionales no logran convertirse.
- **Precios**: el fabricante fija libremente el precio del año 1; luego se negocia con la federación de aseguradoras. Precios medianos iniciales de 3 meses en torno a €500; elementos de precio basado en rendimiento llegando desde 2026.

Comprobación de la realidad del mercado (investigación hasta finales de 2024): ~68 aplicaciones listadas, >1M de prescripciones acumuladas, ~81% de las prescripciones activadas, ~€234M de gasto acumulado de aseguradoras — un mercado real, pero modesto frente al bombo, y la adherencia tras la activación sigue siendo el punto débil.

## El cálculo

El modelo comercial que ejecuta todo fundador de DiGA:

```
Ingreso = prescripciones × tasa de activación × precio por periodo de prescripción
Coste de evidencia = ECA pivotal (típicamente €1M–3M) dentro de la ventana de 12 meses
Valor esperado = P(la evidencia tiene éxito) × ingreso en estado estable − coste de evidencia

Con ~50% de fallo de conversión, P debe evaluarse honestamente — la mitad del
campo gasta el dinero del ECA y pierde el listado.
```

## Ejemplo resuelto

Una aplicación de gestión de depresión se lista provisionalmente a €450/trimestre:

```
Año 1: 20.000 prescripciones × 81% activación × €450 ≈ €7,3M de ingresos
Coste del ECA: €2M, ejecutándose simultáneamente
Resultado A (evidencia positiva): listado permanente, precio negociado ~€380,
  estado estable 60.000 recetas/año ≈ €18,5M/año
Resultado B (la evidencia falla): eliminado del listado al mes 12; los ingresos se detienen.
```

El año provisional financia la generación de evidencia — la innovación central de la vía. Contrasta con la secuencia tradicional (evidencia primero, ingresos años después), que priva exactamente de los productos que DiGA quiere que existan.

## Conexión con la ingeniería de software

El patrón de DiGA — **adopción provisional con una métrica de éxito preregistrada y una caducidad automática** — es directamente copiable para la gobernanza de herramientas de ingeniería: envía la herramienta a usuarios de producción durante 12 meses, preregistra la métrica (tiempo ahorrado medido, reducción de incidentes), caduca automáticamente a menos que llegue la evidencia. Resuelve la paradoja del piloto (las herramientas que necesitan escala para probar valor nunca obtienen escala) sin conceder tenencia permanente a tecnología no probada. Los datos de 81% de activación/baja adherencia también conllevan una lección de producto: la prescripción (o el mandato ejecutivo) consigue instalaciones; solo la calidad del producto consigue uso sostenido — ver [adherencia y persistencia](../adherencia-y-persistencia/).

## Errores comunes

- **Tratar el listado como la línea de meta** — las prescripciones requieren la confianza del prescriptor; muchos DiGA listados ven un volumen insignificante.
- **Infrapotenciar el estudio pivotal** para ahorrar dinero durante el año de ingresos — la economía falsa que explica gran parte de la tasa de fallo del 50%.
- **Trasladar el modelo sin el pagador**: DiGA funciona porque el reembolso es estatutario; una copia sin pago obligatorio es solo un programa piloto.

## Fuentes

- Análisis del mercado DiGA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- Tendencias de precios de DiGA, npj Digital Medicine 2025. <https://www.nature.com/articles/s41746-025-01879-6>
- BfArM, Digital Health Applications. <https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html>

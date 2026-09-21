# Umbrales de Disposición a Pagar

Un umbral de disposición a pagar (DAP) es el máximo que un tomador de decisiones pagará por unidad de ganancia de salud — la línea que convierte un [RCEI](../ratio-de-coste-efectividad-incremental/) en una decisión de adoptar/rechazar.

## Por qué importa

El umbral es donde la economía de la salud deja de ser medición y se convierte en política. Cada sistema nacional tiene uno, explícito o implícito, y conocer la cifra local te dice exactamente cómo tasar una reclamación de valor de salud:

| Organismo | Umbral (según investigado, 2024–2025) |
|---|---|
| NICE (Inglaterra) | £20.000–£30.000 por AVAC; umbral de decisión empírico promedio ≈ £24.400 (2022–24); los moduladores de gravedad elevan el techo efectivo a ~£36k–£51k; tecnologías altamente especializadas hasta £100k+ |
| ICER (EE. UU., no gubernamental) | puntos de referencia de precio de $100.000–$150.000 por AVAC/evLYG; informa rango de $50k–$200k |
| Canadá (CADTH / CDA-AMC) | ≈ CAD$50.000 por AVAC umbral de trabajo |
| OMS-CHOICE (histórico, global) | 1–3× PIB per cápita por AVAD evitado (ahora desaconsejado por ser demasiado tosco) |
| Lado de la oferta empírico del Reino Unido (Claxton et al.) | ≈ £13.000 por AVAC realmente desplazado en el margen del NHS |

## El cálculo

El umbral λ entra en cada regla de decisión:

```
Adopta si RCEI = ΔC/ΔE < λ
Equivalentemente: adopta si BMN = λ×ΔE − ΔC > 0
```

Dos teorías de lo que *es* λ:

- **Lado de la demanda**: lo que la sociedad está dispuesta a pagar por salud (un juicio de valor).
- **Lado de la oferta**: la salud que el presupuesto produce actualmente en el margen (una cantidad empírica — el ~£13k/AVAC de Claxton). Si la λ usada para las decisiones supera la tasa del lado de la oferta, aprobar nueva tecnología desplaza más salud de la que añade.

## Ejemplo resuelto

Tu terapéutico digital entrega 0,05 AVAC por paciente tratado a un coste neto (precio menos compensaciones) de £800.

```
RCEI = 800 / 0,05 = £16.000 por AVAC
```

- Inglaterra: por debajo de £20k → financiable. Precio máximo defendible: a λ = £20.000, precio_max = 0,05 × 20.000 + compensaciones = £1.000 + compensaciones.
- Encuadre comercial de EE. UU. a $150k/AVAC: el precio basado en valor es mucho más alto.
- Umbral de un país con PIB per cápita de $4.000: el mismo producto debe costar menos de ~$200 neto.

Mismo producto, tres mercados, tres precios — el umbral *es* el modelo de precios. Esto es precios basados en valor, ejecutado en reversa desde λ.

## Conexión con la ingeniería de software

Cada organización de ingeniería tiene una λ implícita: el obstáculo al cual financia herramientas por hora-ingeniero ahorrada. Hacerla explícita — "financiamos cualquier cosa bajo £40 por hora-ingeniero creíble ahorrada" — permite la comparación de tabla de clasificación de inversiones en plataforma, exactamente como las tablas de clasificación de coste-por-AVAC clasifican el gasto en salud. La lección del lado de la oferta también se traslada: tu verdadera λ interna es lo que tu atraso *actual* produce en el margen, no lo que dice el liderazgo que vale el tiempo.

## Errores comunes

- **Compra de umbrales** entre jurisdicciones o citar el techo HST para un producto ordinario.
- **Tratar λ como un piso de precio**: superar el umbral es necesario, no suficiente — el [impacto presupuestario](../análisis-de-impacto-presupuestario/) todavía puede hundir un producto asequible por unidad.
- **Ignorar que los umbrales se mueven**: los moduladores de gravedad de NICE (2022) y las revisiones periódicas cambian la λ efectiva; fecha tus reclamaciones.

## Fuentes

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>

# Umbrales de Disposición a Pagar

Un umbral de disposición a pagar (willingness-to-pay, WTP) es el máximo que un decisor pagará por unidad de ganancia en salud — la línea que convierte un [ICER](../incremental-cost-effectiveness-ratio/) en una decisión de adoptar o rechazar.

## Por qué importa

El umbral es el punto donde la economía de la salud deja de ser medición y se convierte en política. Todo sistema nacional tiene uno, explícito o implícito, y conocer la cifra local os dice exactamente cómo poner precio a una afirmación de valor en salud:

| Organismo | Umbral (según lo investigado, 2024–2025) |
|---|---|
| NICE (Inglaterra) | £20,000–£30,000 por QALY; umbral de decisión empírico medio ≈ £24,400 (2022–24); los modificadores de gravedad elevan el techo efectivo a ~£36k–£51k; tecnologías altamente especializadas hasta £100k+ |
| ICER (EE. UU., no gubernamental) | referencias de precio de $100,000–$150,000 por QALY/evLYG; reporta un rango de $50k–$200k |
| Canadá (CADTH / CDA-AMC) | umbral de trabajo ≈ CAD$50,000 por QALY |
| WHO-CHOICE (histórico, global) | 1–3× PIB per cápita por DALY evitado (actualmente desaconsejado por ser demasiado tosco) |
| Lado de la oferta empírico en el Reino Unido (Claxton et al.) | ≈ £13,000 por QALY realmente desplazado en el margen del NHS |

## Las matemáticas

El umbral λ interviene en toda regla de decisión:

```
Adoptar si ICER = ΔC/ΔE < λ
De forma equivalente: adoptar si NMB = λ×ΔE − ΔC > 0
```

Dos teorías sobre qué *es* λ:

- **Lado de la demanda**: lo que la sociedad está dispuesta a pagar por salud (un juicio de valor).
- **Lado de la oferta**: la salud que el presupuesto produce actualmente en el margen (una magnitud empírica — el ~£13k/QALY de Claxton). Si la λ utilizada para las decisiones supera la tasa del lado de la oferta, aprobar una nueva tecnología desplaza más salud de la que añade.

## Ejemplo práctico

Vuestro producto de terapéutica digital genera 0.05 QALY por paciente tratado a un coste neto (precio menos compensaciones) de £800.

```
ICER = 800 / 0.05 = £16,000 por QALY
```

- Inglaterra: por debajo de £20k → financiable. Precio máximo defendible: con λ = £20,000, precio_max = 0.05 × 20,000 + compensaciones = £1,000 + compensaciones.
- Planteamiento comercial en EE. UU. a $150k/QALY: el precio basado en valor es muy superior.
- Un país con umbral de PIB per cápita de $4,000: el mismo producto debe costar menos de ~$200 netos.

Mismo producto, tres mercados, tres precios — el umbral *es* el modelo de precios. Esto es fijación de precios basada en valor, ejecutada a la inversa desde λ.

## Conexión con la ingeniería de software

Toda organización de ingeniería tiene una λ implícita: el umbral a partir del cual financia herramientas por hora de ingeniero ahorrada. Hacerla explícita — «financiamos cualquier cosa por debajo de £40 por hora de ingeniero creíblemente ahorrada» — permite una comparación en forma de tabla de clasificación de las inversiones en plataforma, exactamente igual que las tablas de clasificación de coste por QALY ordenan el gasto en salud. La lección del lado de la oferta también se traslada: vuestra λ interna real es lo que produce vuestro backlog *actual* en el margen, no lo que la dirección dice que vale el tiempo.

## Errores habituales

- **Ir de compras de umbrales** entre jurisdicciones, o citar el techo de las HST para un producto ordinario.
- **Tratar λ como un precio mínimo**: superar el umbral es necesario, no suficiente — el [impacto presupuestario](../budget-impact-analysis/) puede seguir hundiendo un producto asequible por unidad.
- **Ignorar que los umbrales se mueven**: los modificadores de gravedad de NICE (2022) y las revisiones periódicas cambian la λ efectiva; fechad vuestras afirmaciones.

## Fuentes

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>

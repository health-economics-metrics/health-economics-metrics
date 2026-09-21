# Economía Unitaria de Aplicaciones de Salud

La aritmética comercial de los productos de salud de consumo: coste de adquisición de clientes (CAC), valor de vida del cliente (LTV), ingreso medio por usuario (ARPU), precios por miembro y mes (PMPM), y la distinción, en el mercado de empleadores, entre **ROI y VOI** (valor sobre la inversión).

## Por qué importa

Las aplicaciones de salud se enfrentan a una presión estructural: la adquisición es cara (reclamaciones reguladas, barreras de confianza, costes de cumplimiento) mientras que la retención es la peor de cualquier vertical de software (~90 % de abandono en 30 días — véase [retención y abandono](../retention-and-churn/)). La prueba de viabilidad estándar — **LTV:CAC ≥ 3:1** — es, por tanto, brutalmente difícil en la salud de consumo, razón por la que el sector migra hacia modelos B2B2C: empleadores, aseguradoras y sistemas de salud que pagan PMPM por poblaciones, donde el comprador no es el individuo que abandona.

## Las matemáticas

```
CAC   = gasto en ventas + marketing / nuevos clientes de pago
ARPU  = ingresos / usuarios activos (por periodo)
LTV   = ARPU × vida media  =  ARPU / tasa de abandono
Viabilidad: LTV : CAC ≥ 3, periodo de recuperación ≤ 12–18 meses

CAC efectivo por usuario retenido = CAC / retención(t)
  — con una retención D30 del 4 %, £5 por instalación = £125 por usuario
    retenido a 30 días

Ingresos PMPM = tarifa × miembros inscritos × meses
  margen del proveedor = PMPM − coste de servicio por miembro y mes
  — el engagement invierte el signo: bajo suscripciones B2C el engagement
    impulsa los ingresos; bajo PMPM, los miembros comprometidos CUESTAN más
    de atender que los inactivos, y los contratos por resultados lo
    invierten de nuevo
```

## Ejemplo práctico

Una aplicación de sueño B2C: £6.99/mes, abandono mensual del 18 %, CAC combinado £38.

```
LTV = 6.99 / 0.18 ≈ £38.8 → LTV:CAC ≈ 1.0 — no viable

Pivote a PMPM de empleador: £1.20 PMPM × 40,000 vidas cubiertas = £48k/mes
Coste de servicio: infraestructura £0.15 + soporte £0.10 + contenido £0.05
  por miembro ≈ £0.30 → margen ~75 %, ciclo de venta largo pero el abandono
  es a nivel de contrato (anual), no a nivel de usuario (diario)

La pregunta del empleador desplaza la métrica: el ROI en dólares duros
(reducción de reclamaciones, absentismo) rara vez es demostrable para
productos de bienestar — la respuesta del sector es el VOI: productividad,
atractivo de contratación, engagement — que solo es honesto cuando se
etiqueta como VOI, no disfrazado de ROI (véase return-on-investment.md
y social-return-on-investment.md).
```

## Conexión con la ingeniería de software

Las decisiones de ingeniería fijan ambos lados de la ratio: el **coste de servicio** es arquitectura ([economía unitaria en la nube](../cloud-unit-economics/) — el margen PMPM vive o muere según el coste de infraestructura por miembro), y el **LTV** es ingeniería de retención (cada punto de abandono es ingreso aritmético — las matemáticas de AVAC del documento de [retención](../retention-and-churn/) tienen un gemelo exacto en ingresos). Para los productos de salud en particular, el panel de economía unitaria debería llevar una tercera línea junto a LTV y CAC: **valor de salud por usuario adquirido** (AVAC ponderados por retención × umbral) — porque los mercados de tipo pagador y DiGA lo valoran cada vez más, y porque un producto cuya economía unitaria comercial y clínica diverge (rentable pero clínicamente inerte, o efectivo pero infinanciable) necesita saber qué problema tiene.

## Escollos

- **LTV a partir del abandono de cohortes tempranas**: el abandono se estabiliza a la baja; pero también hay sesgo de supervivencia — los adoptantes tempranos retienen mejor que las audiencias a escala. Use datos de cohortes maduras.
- **CAC combinado entre canales**: el CAC de pago en redes sociales y el de derivación clínica difieren 10×, con perfiles de retención opuestos — segmente o se engañará.
- **PMPM sin topes de utilización**: los miembros con engagement atípico pueden invertir los márgenes; modele la distribución, no la media.
- **VOI presentado como ROI** a un director financiero — el fallo de credibilidad que el sector del bienestar para empleados tardó una década en ganarse.

## Fuentes

- Introducciones a la economía unitaria de tecnología sanitaria. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- Marcos de precios PMPM para la salud digital. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>

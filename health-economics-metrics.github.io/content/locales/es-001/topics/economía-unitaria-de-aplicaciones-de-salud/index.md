# Economía Unitaria de Aplicaciones de Salud

La aritmética comercial de los productos de salud de consumo: coste de adquisición de cliente (CAC), valor de vida (LTV), ingreso promedio por usuario (ARPU), precios por miembro por mes (PMPM), y la distinción del mercado de empleadores entre **ROI y VOI** (valor sobre la inversión).

## Por qué importa

Las aplicaciones de salud enfrentan una presión estructural: la adquisición es cara (reclamaciones reguladas, barreras de confianza, costes de cumplimiento) mientras que la retención es la peor de cualquier vertical de software (~90% de abandono en 30 días — ver [retención y abandono](../retención-y-abandono/)). La prueba de viabilidad estándar — **LTV:CAC ≥ 3:1** — es por lo tanto brutalmente difícil en la salud de consumo, por lo que la industria migra hacia modelos B2B2C: empleadores, aseguradoras y sistemas de salud que pagan PMPM por poblaciones, donde el comprador no es el individuo que abandona.

## El cálculo

```
CAC   = gasto en ventas + marketing / nuevos clientes de pago
ARPU  = ingreso / usuarios activos (por periodo)
LTV   = ARPU × vida promedio  =  ARPU / tasa de abandono
Viabilidad: LTV : CAC ≥ 3, periodo de recuperación ≤ 12–18 meses

CAC efectivo por usuario retenido = CAC / retención(t)
  — a 4% de retención D30, £5 por instalación = £125 por usuario retenido a 30 días

Ingreso PMPM = tarifa × miembros inscritos × meses
  margen del proveedor = PMPM − coste de servicio por miembro por mes
  — el compromiso invierte el signo: bajo suscripciones B2C el compromiso impulsa
    el ingreso; bajo PMPM, los miembros comprometidos CUESTAN más servir que
    los inactivos, y los contratos de resultados lo invierten de nuevo
```

## Ejemplo resuelto

Una aplicación de sueño B2C: £6,99/mes, abandono mensual 18%, CAC combinado £38.

```
LTV = 6,99 / 0,18 ≈ £38,8 → LTV:CAC ≈ 1,0 — no viable

Pivote a PMPM de empleador: £1,20 PMPM × 40.000 vidas cubiertas = £48k/mes
Coste de servicio: infraestructura £0,15 + soporte £0,10 + contenido £0,05
  por miembro ≈ £0,30 → margen ~75%, ciclo de ventas largo pero el abandono es
  a nivel de contrato (anual), no a nivel de usuario (diario)

La pregunta del empleador cambia la métrica: el ROI en dólares duros (reclamaciones
reducidas, absentismo) rara vez es demostrable para productos de bienestar —
la respuesta de la industria es VOI: productividad, atractivo de reclutamiento,
compromiso — que es honesto solo cuando se etiqueta como VOI, no disfrazado
como ROI (ver return-on-investment.md y social-return-on-investment.md).
```

## Conexión con la ingeniería de software

Las decisiones de ingeniería fijan ambos lados de la ratio: el **coste de servicio** es arquitectura ([economía unitaria de la nube](../economía-unitaria-de-la-nube/) — el margen PMPM vive o muere en el coste de infraestructura por miembro), y el **LTV** es ingeniería de retención (cada punto de abandono es aritmética de ingreso — la matemática de AVAC del documento de [retención](../retención-y-abandono/) tiene un gemelo exacto de ingreso). Para productos de salud específicamente, el panel de economía unitaria debería llevar una tercera línea junto al LTV y CAC: **valor de salud por usuario adquirido** (AVAC ponderados por retención × umbral) — porque los mercados de pagadores y estilo DiGA lo tasan cada vez más, y porque un producto cuya economía unitaria comercial y clínica diverge (rentable pero inerte en salud, o efectivo pero no financiable) necesita saber cuál problema tiene.

## Errores comunes

- **LTV de abandono de cohorte temprana**: el abandono se estabiliza a la baja; pero también sesgo de supervivencia — los adoptantes tempranos retienen mejor que las audiencias escaladas. Usa datos de cohorte madurada.
- **CAC combinado entre canales**: el CAC de redes sociales pagadas y el CAC de derivación clínica difieren 10×, con perfiles de retención opuestos — segmenta o serás engañado.
- **PMPM sin límites de utilización**: los miembros con compromiso atípico pueden invertir los márgenes; modela la distribución, no la media.
- **VOI presentado como ROI** a un CFO — el fallo de credibilidad que la industria de bienestar de empleadores tardó una década en ganarse.

## Fuentes

- Introducciones a la economía unitaria de tecnología sanitaria. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- Marcos de precios PMPM para salud digital. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>

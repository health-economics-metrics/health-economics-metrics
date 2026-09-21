# Descuento y Preferencia Temporal

El descuento convierte los costes y beneficios futuros en valores presentes, porque un beneficio hoy vale más que el mismo beneficio dentro de cinco años.

## Por qué importa

Toda evaluación de economía de la salud y todo caso de negocio serio del sector público descuenta flujos de varios años. El Green Book de HM Treasury del Reino Unido exige una tasa de preferencia temporal social anual del 3,5%; el caso de referencia de NICE descuenta tanto los costes como los efectos en salud al 3,5% anual (con una tasa de no-referencia del 1,5% para terapias cercanas a la cura con beneficios a más de 30 años). Si el caso de negocio de tu software reclama "£5 millones de ahorros en 10 años", un revisor financiero pedirá inmediatamente la cifra descontada.

## El cálculo

Valor presente de una cantidad futura:

```
VP = VF / (1 + r)^t

VP = valor presente
VF = valor futuro en el año t
r  = tasa de descuento (NICE/Green Book: 0,035)
t  = años desde ahora
```

Para un beneficio anual constante B durante n años (una anualidad):

```
VP = B × [1 − (1 + r)^(−n)] / r
```

## Ejemplo resuelto

Tu software ahorra a un fideicomiso del NHS £100.000 por año durante 5 años, comenzando un año después de la puesta en marcha.

Total no descontado: £500.000.

Descontado al 3,5%:

```
Año 1: 100.000 / 1,035^1 = £96.618
Año 2: 100.000 / 1,035^2 = £93.351
Año 3: 100.000 / 1,035^3 = £90.194
Año 4: 100.000 / 1,035^4 = £87.144
Año 5: 100.000 / 1,035^5 = £84.197

VP total ≈ £451.505
```

El titular honesto es de aproximadamente £451.000, aproximadamente un 10% menos que la suma ingenua. Ahora supón que la entrega se retrasa un año: cada término se desplaza un año más tarde, y el VP cae a aproximadamente £436.000 — la visión de descuento del [coste de retraso](../coste-de-retraso/).

## Conexión con la ingeniería de software

- **El pago de deuda técnica y las migraciones de plataforma** prometen flujos de beneficio años después; descuéntalos antes de compararlos con trabajo que se paga este trimestre.
- **Costes cargados al frente, beneficios cargados al final** es la forma estándar de una migración. El descuento penaliza esa forma, correctamente: tasa el valor temporal libre de riesgo de comprometer capacidad ahora para obtener valor después.
- **Las reclamaciones de "ahorros en el año 5"** merecen escepticismo dos veces — están fuertemente descontadas y son altamente inciertas (ver [análisis de sensibilidad](../análisis-de-sensibilidad/)).

## Errores comunes

- **Descontar costes pero no beneficios** (o viceversa) — el caso de referencia descuenta ambos, a la misma tasa.
- **Usar una tasa comercial (8-12%) en un caso del sector público**, o 3,5% en uno respaldado por capital de riesgo. Ajusta la tasa al tomador de decisiones.
- **Confundir el descuento con la inflación.** El descuento se aplica a valores *reales* (ajustados por inflación); no hagas ambos implícitamente.

## Fuentes

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, guía suplementaria de descuento. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>

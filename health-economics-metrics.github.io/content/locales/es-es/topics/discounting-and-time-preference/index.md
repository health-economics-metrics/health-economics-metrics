# Descuento y Preferencia Temporal

El descuento convierte los costes y beneficios futuros en valores presentes, porque un beneficio hoy vale más que el mismo beneficio dentro de cinco años.

## Por qué importa

Toda evaluación de economía de la salud y todo caso de negocio serio del sector público descuenta flujos plurianuales. El Green Book del HM Treasury del Reino Unido exige una tasa social de preferencia temporal del 3.5 % anual; el caso de referencia de NICE descuenta tanto los costes como los efectos en salud al 3.5 % anual (con una tasa no de referencia del 1.5 % para terapias casi curativas con beneficios a más de 30 años). Si el caso de negocio de tu software afirma "5 millones de libras de ahorro en 10 años", un revisor financiero pedirá de inmediato la cifra descontada.

## Las matemáticas

Valor presente de un importe futuro:

```
PV = FV / (1 + r)^t

PV = valor presente
FV = valor futuro en el año t
r  = tasa de descuento (NICE/Green Book: 0.035)
t  = años desde ahora
```

Para un beneficio anual constante B durante n años (una anualidad):

```
PV = B × [1 − (1 + r)^(−n)] / r
```

## Ejemplo resuelto

Tu software ahorra a un trust del NHS £100,000 al año durante 5 años, empezando un año después de la puesta en marcha.

Total sin descontar: £500,000.

Descontado al 3.5 %:

```
Año 1: 100,000 / 1.035^1 = £96,618
Año 2: 100,000 / 1.035^2 = £93,351
Año 3: 100,000 / 1.035^3 = £90,194
Año 4: 100,000 / 1.035^4 = £87,144
Año 5: 100,000 / 1.035^5 = £84,197

PV total ≈ £451,505
```

La cifra honesta es de unas £451,000, aproximadamente un 10 % menos que la suma ingenua. Supón ahora que la entrega se retrasa un año: cada término se desplaza un año más tarde, y el PV cae a unas £436,000 — la lectura, desde el descuento, del [coste del retraso](../cost-of-delay/).

## Conexión con la ingeniería de software

- **La amortización de la deuda técnica y las migraciones de plataforma** prometen flujos de beneficio a años vista; descuéntalos antes de compararlos con trabajo que se amortiza este trimestre.
- **Costes por delante, beneficios por detrás** es la forma habitual de una migración. El descuento penaliza esa forma, correctamente: pone precio al valor temporal libre de riesgo de comprometer capacidad ahora por valor futuro.
- **Las afirmaciones de "ahorros en el año 5"** merecen escepticismo por partida doble — están fuertemente descontadas y son muy inciertas a la vez (véase [análisis de sensibilidad](../sensitivity-analysis/)).

## Errores habituales

- **Descontar los costes pero no los beneficios** (o al revés) — el caso de referencia descuenta ambos, a la misma tasa.
- **Usar una tasa comercial (8–12 %) en un caso del sector público**, o el 3.5 % en uno financiado por capital riesgo. Ajusta la tasa a quien toma la decisión.
- **Confundir el descuento con la inflación.** El descuento se aplica a valores *reales* (ajustados por inflación); no hagas ambas cosas de forma implícita.

## Fuentes

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>

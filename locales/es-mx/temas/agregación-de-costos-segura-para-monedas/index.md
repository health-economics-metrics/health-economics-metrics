# Agregación de costos segura para monedas

Sumar muchas partidas monetarias (facturas mensuales, costos por emplazamiento, cifras de impacto presupuestario plurianuales) con números de coma flotante binaria corrientes (`f64`) acumula pequeños errores de representación, porque la mayoría de las fracciones decimales (como $1,234.56) no pueden representarse con exactitud en coma flotante binaria. Cada error es diminuto, pero un modelo grande que suma cientos o miles de partidas a lo largo de años puede desviarse una fracción de céntimo, y la desviación depende del *orden* de la suma, de modo que no es reproducible. La agregación monetaria hecha con aritmética decimal exacta (o con enteros en la unidad menor) suma con exactitud, en consonancia con cómo los sistemas contables y la partida doble deben cuadrar al céntimo.

## Por qué importa

Es un tipo de error de software bien documentado y fundamental: el artículo de Goldberg de 1991 en ACM Computing Surveys, "What Every Computer Scientist Should Know About Floating-Point Arithmetic", es la referencia estándar de por qué la coma flotante binaria no puede representar con exactitud la mayoría de los importes decimales y por qué sumar muchos de ellos acumula el error. Los modelos de economía de la salud y de finanzas del NHS suman habitualmente varios años y varias categorías de costo: tanto el [costo total de propiedad](../costo-total-de-propiedad/) como el [análisis de impacto presupuestario](../análisis-de-impacto-presupuestario/) suman muchas partidas de costo `f64` a lo largo de años. Cuando un modelo debe cuadrar al céntimo (una auditoría que calcula el total a mano debe llegar a la cifra *exacta*), la propia aritmética debe ser decimal exacta, no de coma flotante.

## Las matemáticas

```
Agregación ingenua:            total = Σ f64(partida_i)       — deriva dependiente del orden
Agregación segura para monedas: total = Σ Decimal(partida_i)  — exacta, reproducible

Aplicar un ajuste porcentual (por ejemplo, una contingencia):
  ajustado = total × multiplicador    — resultado Decimal exacto, puede tener más
                                        decimales que el exponente de la unidad
                                        menor de la moneda
  redondeado = redondear(ajustado, exponente_moneda, regla_de_redondeo)
                                      — la regla de redondeo (half-up frente a
                                        half-even/redondeo bancario) debe
                                        indicarse de forma explícita
```

Obsérvese la disciplina en dos pasos: multiplicar un `Decimal` exacto por un multiplicador puede dar más decimales de los que la moneda usa realmente (por ejemplo, tres decimales a partir de un importe de dos decimales por un multiplicador de dos decimales); esa precisión intermedia *no* se descarta automáticamente: solo un paso de redondeo explícito, con una regla de redondeo indicada, la reduce al exponente real de la unidad menor de la moneda.

## Ejemplo resuelto

Doce facturas mensuales idénticas de $1,234.56 sumadas con aritmética decimal exacta: $1,234.56 × 12 = **$14,814.72** exactos, frente a sumar doce veces la constante `f64` `1234.56` en doble precisión IEEE-754, que puede desviarse una fracción de céntimo según el orden de la suma: un tipo de error real y documentado, que no supone problema para un modelo construido sobre aritmética `Money` decimal exacta.

Ahora aplicamos una contingencia estándar de impacto presupuestario del 5 % (multiplicador 1.05) a ese total de $14,814.72: $14,814.72 × 1.05 = $15,555.456, tres decimales, porque la multiplicación es exacta y no se redondea automáticamente a los dos decimales de la moneda. Redondeando explícitamente a 2 decimales con redondeo bancario (half-even) se obtiene exactamente **$15,555.46**.

## Conexión con la ingeniería de software

Es la lección fundamental directa tras el principio de que «el software financiero usa `Decimal`, no `float`», vinculada explícitamente a los módulos de [costo total de propiedad](../costo-total-de-propiedad/) y de [análisis de impacto presupuestario](../análisis-de-impacto-presupuestario/) de este repositorio, que hoy agregan costos en coma flotante corriente. El argumento de corrección no exige migrar esos modelos de inmediato; señala con precisión *cuándo* un sistema debe cuadrar al céntimo y, por tanto, no debe usar coma flotante binaria para su aritmética monetaria. Véase [asignación exacta de costos al céntimo](../asignación-exacta-de-costos-al-céntimo/) para el problema complementario de *repartir* (en lugar de sumar) un total sin perder ni un céntimo.

## Trampas habituales

- **Convertir a `float` a mitad de cadena**: extraer un valor monetario como número de coma flotante a mitad de un cálculo (algunas bibliotecas `Money` llaman incluso «lossy» al método de conversión, como advertencia explícita) abandona en silencio la garantía de exactitud para todo cálculo posterior.
- **«Decimal es demasiado lento para importar»**: descartar la aritmética decimal exacta como una carga innecesaria, cuando la información financiera necesita corrección y auditabilidad, no rendimiento bruto.
- **Aplicar un porcentaje de contingencia sin indicar la regla de redondeo**: half-up frente a half-even (redondeo bancario) puede cambiar el último céntimo; el propio convenio de redondeo debe ser una decisión declarada y auditable. Véase [análisis de costo-beneficio](../análisis-de-costo-beneficio/) para la orientación del Green Book del HM Treasury sobre ajustes de contingencia y sesgo de optimismo, el tipo de cifras a las que se aplica este paso de redondeo.

## Fuentes

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — el patrón `Money`.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — orientación sobre sesgo de optimismo y contingencia para la modelización del impacto presupuestario. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>

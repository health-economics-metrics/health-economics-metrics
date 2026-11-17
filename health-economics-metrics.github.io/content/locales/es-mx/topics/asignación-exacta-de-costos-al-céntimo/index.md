# Asignación exacta de costos al céntimo

Repartir un total monetario (una subvención compartida, una factura de infraestructura, una cifra de impacto presupuestario) entre varios destinatarios con aritmética porcentual ingenua suele dar partes que no suman el total original. La asignación exacta al céntimo es el remedio: un método con enteros/decimales que trabaja en la unidad menor de la moneda (el céntimo) y garantiza que las partes suman *exactamente* el total, por desigual que sea la división. Todo ingeniero de software que necesite que un total repartido cuadre al céntimo (nóminas, pago de subvenciones, imputación de servicios compartidos) necesita este patrón, no porcentajes en coma flotante.

## Por qué importa

Es un patrón fundamental con nombre en la ingeniería de software empresarial: *Patterns of Enterprise Application Architecture* de Martin Fowler (2002) documenta `Money` y `Allocate` precisamente porque «repartir $100 en tres» es un problema que el código ingenuo resuelve mal de forma sistemática, y en silencio: el error aparece cuando alguien concilia las cuentas y descubre que las partes suman un céntimo menos (o más) que el total. En el trabajo de economía de la salud y finanzas del NHS no es algo académico: una cifra de impacto presupuestario se reparte por emplazamiento, año u organismo; los costos de infraestructura y licencias compartidas se distribuyen entre departamentos según el número de empleados o la proporción de actividad. Cada uno de esos repartos debe cuadrar exactamente, porque un director financiero que recibe partes que no suman el total dejará de fiarse de todo el modelo.

## Las matemáticas

```
Método ingenuo (erróneo):
  parte_i = redondear(total × proporción_i / Σ proporciones)     — redondea cada parte por separado

Método exacto (resto mayor / "largest remainder allocation"):
  1. base_i = suelo(total_en_unidad_menor × proporción_i / Σ proporciones)   — solo unidades menores enteras (céntimos)
  2. resto = total_en_unidad_menor − Σ base_i                                  — céntimos sobrantes, siempre < número de destinatarios
  3. repartir 1 unidad menor adicional a cada uno de los `resto` destinatarios con
     mayor parte fraccionaria del paso 1, hasta agotar el resto

Resultado: Σ parte_i == total siempre, por construcción
```

El método exacto nunca redondea una parte individual por separado: redondea *toda la asignación* como una sola operación, y eso es lo que hace verdadero el invariante de la suma.

## Ejemplo resuelto

Repartir $100.00 en tres partes iguales (`proporciones = [1, 1, 1]`).

Método ingenuo: $100.00 ÷ 3 = $33.333…; redondeando cada resultado por separado al céntimo más próximo se obtiene $33.33 por destinatario. Suma: $33.33 × 3 = $99.99: falta un céntimo, y ninguna partida individual es lo bastante «errónea» como para notarlo a simple vista.

Método exacto: `base` = $33.33 para los tres (9,999 unidades menores en total, de `suelo(10,000 / 3) = 3,333` céntimos por destinatario). Sobra 1 céntimo (10,000 − 9,999). Ese único céntimo restante va al destinatario con la mayor parte fraccionaria en la división; cuál sea en concreto es un detalle interno del desempate, no algo en lo que deba apoyarse quien llama. Dos destinatarios reciben $33.33 y uno $33.34, y las tres partes suman exactamente $100.00.

Es la aritmética que necesita el [análisis de impacto presupuestario](../análisis-de-impacto-presupuestario/) siempre que una cifra total de impacto presupuestario deba repartirse por emplazamiento, grupo de población o ejercicio fiscal y conciliarse con el total publicado. Véase [agregación de costos segura para monedas](../agregación-de-costos-segura-para-monedas/) para el problema complementario de sumar muchas partidas así sin deriva.

## Conexión con la ingeniería de software

Es exactamente el «patrón Money» de la arquitectura de software empresarial: el patrón fundamental con nombre para este tipo concreto de error, no un truco puntual. Han llegado a producción fallos reales de conciliación financiera por este mismo error: un reparto proporcional calculado en `f64`, redondeado por destinatario y nunca contrastado con el total original. Se vincula directamente con el módulo de [costo total de propiedad](../costo-total-de-propiedad/) de este repositorio, que hoy agrega costos en coma flotante corriente a lo largo de años y opciones: la misma disciplina de exactitud se aplica cuando un total de TCO o de impacto presupuestario hay que *asignarlo*, no solo sumarlo.

## Trampas habituales

- **Porcentaje y luego redondeo en lugar del resto mayor**: asignar con porcentajes en coma flotante y redondear cada destinatario por separado, lo que acumula errores de redondeo y rara vez vuelve a sumar el total, sobre todo con muchos destinatarios.
- **Ignorar el exponente de la unidad menor de la moneda**: dar por hecho que todas las monedas tienen 2 decimales (el yen japonés tiene 0, algunas monedas 3); un reparto proporcional escrito a mano suele dejar fijo el 2 y falla en silencio con otras monedas. La rutina de asignación exacta lee el exponente de la propia moneda (ISO 4217).
- **Reasignar un resto ya asignado**: volver a ejecutar la rutina de asignación sobre lo que queda de una asignación anterior sin comprobación de idempotencia, lo que puede acreditar el mismo céntimo dos veces al mismo destinatario.

## Fuentes

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — los patrones `Money` y `Allocate`.
- ISO 4217 — el estándar de códigos de moneda y fondos, que define el exponente de la unidad menor de cada moneda.

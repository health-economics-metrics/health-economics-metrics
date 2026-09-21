# Retorno Social de la Inversión (RSI)

El RSI extiende el [ROI](../retorno-de-la-inversión/) a resultados que los mercados no tasan — bienestar, conexión social, impacto ambiental — monetizándolos con proxies financieros, para *todos* los interesados afectados.

## Por qué importa

Gran parte de lo que producen las intervenciones de salud y comunidad nunca toca una línea de presupuesto: menor soledad, alivio del cuidador, ganancias de empleo, dignidad. El RSI, regido por los siete principios de Social Value International (involucrar a los interesados, valorar lo que importa, no sobreestimar, ser transparente, verificar…), produce declaraciones como "£3,20 de valor social por £1 invertida". Los requisitos de valor social de la contratación pública del Reino Unido hacen que la evidencia estilo RSI sea comercialmente relevante: las ofertas para contratos públicos (incluido el NHS) puntúan por valor social demostrado.

## El cálculo

```
Ratio RSI = VP(resultados sociales monetizados) / VP(inversión)

Para cada resultado:
  valor = cantidad × proxy financiero × atribución × (1 − peso muerto) × (1 − desplazamiento)

peso muerto   = habría pasado de todos modos
atribución  = parte causada por otros
desplazamiento = beneficio movido de otro lugar en lugar de creado
decaimiento     = decadencia del resultado a lo largo de los años
```

Los factores de ajuste son la integridad del método: sin ellos, el RSI es ficción con un signo de moneda.

## Ejemplo resuelto

Una aplicación de acompañamiento que conecta a adultos mayores aislados con voluntarios; coste del programa £200.000/año; 1.500 parejas activas.

```
Resultado: menor soledad para 1.500 personas
  proxy: valoración de bienestar de "alivio de la soledad" ≈ £1.800/persona/año
  peso muerto 25% (algunos habrían encontrado conexión de todos modos)
  atribución 80% (algo de crédito a otros servicios)

Valor = 1.500 × 1.800 × 0,80 × 0,75 = £1.620.000

Resultado: menos visitas al médico de cabecera, 1.500 × 1,2 visitas × £42 = £75.600 (real para el pagador)

RSI = (1.620.000 + 75.600) / 200.000 ≈ 8,5 : 1
```

Nota que la ratio es 96% bienestar tasado por proxy y 4% efectivo duro. Eso es RSI legítimo — pero debe presentarse como valor social, nunca dejando implicar que £1,7M es capitalizable.

## Conexión con la ingeniería de software

El RSI es el marco honesto para el trabajo de ingeniería cuyos beneficiarios están fuera del equipo pagador: mantenimiento de código abierto, mejoras de accesibilidad, trabajo de plataforma consumido por otros equipos, inversión en la comunidad de desarrolladores. La mecánica transferible: identifica a todos los interesados, monetiza con proxies declarados, y aplica descuentos de peso muerto/atribución (¿esa corrección de OSS habría pasado de todos modos? ¿cuánto de la ganancia es tu trabajo frente al del ecosistema?). La disciplina de *descontar tus propias reclamaciones de impacto* es lo que separa el RSI de una cifra de marketing.

## Errores comunes

- **Compra de proxies**: elegir la valoración de bienestar más generosa disponible.
- **Omitir el peso muerto/atribución** — la inflación más común, a menudo duplicando la ratio.
- **Comparación de ratios entre estudios**: las ratios de RSI son sensibles al método; compara solo dentro de un marco consistente.
- **Presentar el valor social como ahorros capitalizables** a un titular de presupuesto.

## Fuentes

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- UK Government guide to SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>

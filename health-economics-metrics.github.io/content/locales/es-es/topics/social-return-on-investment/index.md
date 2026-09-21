# Retorno social de la inversión (SROI)

El SROI extiende el [ROI](../return-on-investment/) a resultados que los mercados no fijan como precio — bienestar, conexión social, impacto ambiental — monetizándolos mediante proxies financieros, para *todas* las partes interesadas afectadas.

## Por qué importa

Buena parte de lo que producen las intervenciones sanitarias y comunitarias nunca toca una línea presupuestaria: reducción de la soledad, alivio para los cuidadores, ganancias de empleo, dignidad. El SROI, regido por los siete principios de Social Value International (implicar a las partes interesadas, valorar lo que importa, no exagerar las afirmaciones, ser transparente, verificar...), produce declaraciones como "3.20£ de valor social por cada 1£ invertida". Los requisitos de valor social de la contratación pública del Reino Unido hacen que la evidencia de tipo SROI sea comercialmente relevante: las ofertas para contratos públicos (incluido el NHS) puntúan por el valor social demostrado.

## Las matemáticas

```
Ratio SROI = VP(resultados sociales monetizados) / VP(inversión)

Para cada resultado:
  valor = cantidad × proxy financiero × atribución × (1 − peso muerto) × (1 − desplazamiento)

peso muerto   = habría ocurrido de todos modos
atribución    = parte causada por otros
desplazamiento = beneficio trasladado desde otro lugar en lugar de creado
decaimiento    = pérdida del resultado a lo largo de los años
```

Los factores de ajuste son la integridad del método: sin ellos, el SROI es ficción con un símbolo de moneda.

## Ejemplo práctico

Una aplicación de acompañamiento que conecta a adultos mayores aislados con voluntarios; coste del programa 200,000£/año; 1,500 parejas activas.

```
Resultado: reducción de la soledad para 1,500 personas
  proxy: valoración del bienestar por "alivio de la soledad" ≈ 1,800£/persona/año
  peso muerto 25% (algunos habrían encontrado conexión de todos modos)
  atribución 80% (parte del mérito corresponde a otros servicios)

Valor = 1,500 × 1,800 × 0.80 × 0.75 = 1,620,000£

Resultado: reducción de visitas al médico de cabecera, 1,500 × 1.2 visitas × 42£ = 75,600£ (caja real para el pagador)

SROI = (1,620,000 + 75,600) / 200,000 ≈ 8.5 : 1
```

Obsérvese que el ratio es un 96% bienestar valorado por proxy y un 4% caja real. Eso es un SROI legítimo — pero debe presentarse como valor social, sin permitir nunca que dé a entender que 1.7 M£ son ingresables.

## Conexión con la ingeniería de software

El SROI es el marco honesto para el trabajo de ingeniería cuyos beneficiarios están fuera del equipo que paga: mantenimiento de código abierto, mejoras de accesibilidad, trabajo de plataforma consumido por otros equipos, inversión en la comunidad de desarrolladores. La mecánica transferible: identificar a todas las partes interesadas, monetizar con proxies declarados, y aplicar descuentos de peso muerto/atribución (¿esa corrección de código abierto habría ocurrido de todos modos? ¿cuánta parte de la ganancia es tuya frente al ecosistema?). La disciplina de *descontar tus propias afirmaciones de impacto* es lo que separa al SROI de una cifra de marketing.

## Escollos

- **Búsqueda del proxy más favorable**: elegir la valoración de bienestar más generosa disponible.
- **Saltarse el peso muerto/la atribución** — la inflación más habitual, que a menudo duplica el ratio.
- **Comparar ratios entre estudios**: los ratios SROI son sensibles al método; compara solo dentro de un marco coherente.
- **Presentar el valor social como ahorros ingresables** ante un responsable presupuestario.

## Fuentes

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- Guía del Gobierno del Reino Unido sobre el SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>

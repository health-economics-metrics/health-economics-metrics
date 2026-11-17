# Economía Unitaria de la Nube (FinOps)

La economía unitaria de la nube traduce el gasto bruto en la nube a **costo por unidad de resultado** — por cliente, por transacción, por caso resuelto, por token. Es la capacidad de FinOps que convierte "nuestra factura de AWS es £400k/mes" en "atender a un paciente cuesta £0,83".

## Por qué importa

Las cifras de gasto total no pueden responder las preguntas que importan: ¿el producto se está volviendo más o menos eficiente? ¿El crecimiento mejora o destruye el margen? ¿Qué deberíamos cobrar? Los costos unitarios responden a las tres. Para la salud digital específicamente, "costo por caso resuelto" *es* un costo unitario del servicio de salud — directamente comparable a las cifras de la [Colección Nacional de Costos](../tarifa-nacional-y-costos-unitarios/) que un comisionado usa para cualquier otro servicio, lo que lo convierte en el lenguaje natural para tasar vías digitales frente a las tradicionales.

## El cálculo

```
Costo unitario = costo total asignado (incl. costos compartidos/de plataforma) / unidades entregadas

Dos familias:
  unidades de eficiencia de recursos: costo/GB almacenado, costo/hora-vCPU, costo/token,
                             costo/minuto-de-compilación
  unidades de negocio:            costo/cliente, costo/transacción, costo/consulta,
                             costo/caso-resuelto

Se aplica la disciplina marginal frente a promedio (marginal-vs-average-cost.md):
el gasto comprometido/reservado hace que el costo unitario marginal ≈ 0 hasta el
siguiente paso de compromiso — tasa las decisiones de expansión a marginal, las
tendencias de eficiencia a promedio.
```

## Ejemplo resuelto

Un servicio de triaje digital: gasto en la nube £62.000/mes (cómputo £30k, datos £18k, asignación de plataforma compartida £14k), manejando 380.000 episodios de triaje/mes:

```
Costo promedio por episodio = 62.000 / 380.000 ≈ £0,163

Comparación del comisionado: triaje telefónico ≈ £8–12/llamada, consulta de médico de cabecera ≈ £42
→ el episodio digital funciona a ~2% de la alternativa humana más barata — la
economía de cambio de canal de gds-service-metrics.md, desde el lado del costo.

Comprobación de tendencia: el año pasado £0,21/episodio a 240k episodios → mejora de
economía de escala (costos de plataforma fijos amortizándose), digno de titular en el QBR.
```

## Conexión con la ingeniería de software

La economía unitaria es donde las decisiones de ingeniería se vuelven legibles financieramente: una arquitectura que reduce a la mitad el costo-por-episodio es una ventaja de precios; una que escala superlinealmente es una bomba de tiempo visible solo en esta métrica. Prácticas que se trasladan desde el costeo sanitario: **publica las reglas de asignación** (los costos compartidos distorsionaron las cifras unitarias hasta que PLICS estandarizó el costeo a nivel de paciente — la asignación de costo de tu plataforma necesita el mismo rigor); **elige unidades en las que piensa el comprador** (los comisionados compran episodios, no vCPUs); y alimenta los costos unitarios en cada modelo de [RCEI](../ratio-de-costo-efectividad-incremental/) y [impacto presupuestario](../análisis-de-impacto-presupuestario/) como el denominador de costo autorizado. Para funciones de IA, la unidad es el token — ver [economía unitaria de inferencia](../economía-unitaria-de-inferencia/).

## Errores comunes

- **Ignorar costos compartidos**: los costos unitarios que excluyen asignaciones de plataforma/seguridad/guardia subestiman en 30-50% y colapsan en auditoría.
- **Denominadores de vanidad**: "costo por llamada API" halaga; "costo por episodio de paciente completado" informa.
- **Precios a costo promedio de decisiones marginales**: cobrar a los equipos el costo unitario promedio por uso que es marginalmente gratuito impulsa el teatro de evitación de desperdicio (ver [tarifa nacional](../tarifa-nacional-y-costos-unitarios/) para la versión del NHS de este error de incentivo).

## Fuentes

- FinOps Foundation, economía unitaria. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introducción a la economía unitaria de la nube. <https://www.finops.org/wg/introduction-cloud-unit-economics/>

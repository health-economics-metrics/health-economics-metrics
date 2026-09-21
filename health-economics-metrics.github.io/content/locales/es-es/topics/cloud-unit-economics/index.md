# Economía unitaria de la nube (FinOps)

La economía unitaria de la nube traduce el gasto bruto en la nube a **coste por unidad de resultado** — por cliente, por transacción, por caso resuelto, por token. Es la capacidad de FinOps que convierte "nuestra factura de AWS es de £400k/mes" en "atender a un paciente cuesta £0.83".

## Por qué importa

Las cifras de gasto total no pueden responder a las preguntas que importan: ¿el producto se está volviendo más o menos eficiente? ¿El crecimiento mejora o destruye el margen? ¿Qué deberíamos cobrar? Los costes unitarios responden a las tres. Para la salud digital en concreto, el "coste por caso resuelto" *es* un coste unitario de servicio sanitario — directamente comparable con las cifras de la [National Cost Collection](../national-tariff-and-unit-costs/) que un comisionador usa para cualquier otro servicio, lo que lo convierte en el lenguaje natural para comparar el precio de las vías digitales frente a las tradicionales.

## Las matemáticas

```
Coste unitario = coste total asignado (incl. costes compartidos/de plataforma) / unidades entregadas

Dos familias:
  unidades de eficiencia de recursos: coste/GB almacenado, coste/hora-vCPU, coste/token,
                             coste/minuto de build
  unidades de negocio:            coste/cliente, coste/transacción, coste/consulta,
                             coste/caso-resuelto

Se aplica la disciplina de marginal frente a medio (marginal-vs-average-cost.md):
el gasto comprometido/reservado hace que el coste unitario marginal ≈ 0 hasta el siguiente
escalón de compromiso — valora las decisiones de expansión a coste marginal, las
tendencias de eficiencia a coste medio.
```

## Ejemplo resuelto

Un servicio de triaje digital: gasto en la nube £62,000/mes (cómputo £30k, datos £18k, asignación de plataforma compartida £14k), gestionando 380,000 episodios de triaje/mes:

```
Coste medio por episodio = 62,000 / 380,000 ≈ £0.163

Comparación con el comisionador: triaje telefónico ≈ £8–12/llamada, consulta de GP ≈ £42
→ el episodio digital funciona a ~2% de la alternativa humana más barata — la
economía del channel-shift de gds-service-metrics.md, desde el lado del coste.

Comprobación de tendencia: el año pasado £0.21/episodio con 240k episodios → mejora de la
economía de escala (los costes fijos de plataforma se amortizan), digno de un titular en la QBR.
```

## Conexión con la ingeniería de software

La economía unitaria es donde las decisiones de ingeniería se vuelven legibles para finanzas: una arquitectura que reduce a la mitad el coste por episodio es una ventaja de precios; una que escala de forma superlineal es una bomba de relojería visible solo en esta métrica. Prácticas que se transfieren desde el costeo sanitario: **publica las reglas de asignación** (los costes compartidos distorsionaron las cifras por unidad hasta que el PLICS estandarizó el costeo a nivel de paciente — la asignación de costes de tu plataforma necesita el mismo rigor); **elige unidades en las que piense el comprador** (los comisionadores compran episodios, no vCPUs); y alimenta los costes unitarios en cada modelo de [ICER](../incremental-cost-effectiveness-ratio/) y de [impacto presupuestario](../budget-impact-analysis/) como el denominador de coste autorizado. Para las funcionalidades de IA, la unidad es el token — véase [economía unitaria de la inferencia](../inference-unit-economics/).

## Escollos

- **Ignorar los costes compartidos**: los costes unitarios que excluyen las asignaciones de plataforma/seguridad/guardia infravaloran un 30–50% y se colapsan al auditarlos.
- **Denominadores de vanidad**: "coste por llamada a la API" favorece; "coste por episodio de paciente completado" informa.
- **Precios de decisiones marginales a coste medio**: cobrar a los equipos el coste unitario medio por un uso que es marginalmente gratuito impulsa un teatro de evitación de despilfarro (véase [tarifa nacional](../national-tariff-and-unit-costs/) para la versión del NHS de este fallo de incentivos).

## Fuentes

- FinOps Foundation, economía unitaria. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introducción a la economía unitaria de la nube. <https://www.finops.org/wg/introduction-cloud-unit-economics/>

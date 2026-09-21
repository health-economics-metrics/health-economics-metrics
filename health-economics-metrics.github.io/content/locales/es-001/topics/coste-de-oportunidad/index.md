# Coste de Oportunidad

El coste de oportunidad es el valor de la mejor alternativa a la que renuncias cuando comprometes un recurso. En un sistema de salud con un presupuesto fijo, gastar £1 millón en una cosa significa £1 millón de salud que *no* se produce en otro lugar.

## Por qué importa

El coste de oportunidad es la idea más profunda en economía de la salud, y la que los ingenieros de software más a menudo omiten. Los presupuestos de salud son fijos en cualquier año dado, así que una nueva tecnología nunca se financia con dinero "extra" — desplaza algo. La pregunta que realmente hace un pagador no es "¿es esto bueno?" sino "¿es esto mejor que lo que el mismo dinero compra actualmente?"

Por eso existen los umbrales de coste-efectividad: el umbral es una estimación de la salud que el dinero compra en el margen del sistema actual. Ver [umbrales de disposición a pagar](../umbrales-de-disposición-a-pagar/).

## El cálculo

No hay una fórmula única; el coste de oportunidad es una disciplina de comparación:

```
Coste de oportunidad de elegir A = valor de la mejor alternativa renunciada B
Ganancia neta de A = valor(A) − valor(B)
```

El punto de referencia empírico: Claxton et al. (2015) estimaron que el NHS produce un AVAC por aproximadamente **£13.000** en el margen. Así que £13.000 gastados en una tecnología que produce menos de un AVAC hacen a la nación *menos* saludable, incluso si la tecnología "funciona".

## Ejemplo resuelto

El presupuesto de transformación de un fideicomiso del NHS puede financiar exactamente una de:

- **Opción A**: software de programación electrónica — ahorra £400.000/año en gasto de personal de agencia.
- **Opción B**: software de coordinación de altas — ahorra 2.000 días-cama/año. A un coste marginal de aproximadamente £150 por día-cama realmente liberado, eso son £300.000/año, más tratamiento más temprano para pacientes en espera.

Financiar A significa renunciar a B. El coste de oportunidad de A son los £300.000 de B + el beneficio del paciente; el caso *neto* de A es solo la diferencia, no el titular de £400.000 de A. Cualquier caso de negocio que compare una propuesta con "no hacer nada" en lugar de con la mejor alternativa sobreestima su valor.

## Conexión con la ingeniería de software

La capacidad de ingeniería también es un presupuesto fijo — franjas de hoja de ruta, no libras. Un equipo de plataforma que financia la herramienta A ahorrando horas-ingeniero a £500/hora cuando la herramienta B entrega lo mismo a £200/hora está destruyendo capacidad, exactamente como un sistema de salud que financia un medicamento de £40.000/AVAC desplaza atención de £13.000/AVAC. La disciplina se traslada directamente:

- Nombra siempre el comparador ("¿frente a qué?").
- Valora el tiempo de ingeniero por lo que de otro modo produciría, no solo por el salario.
- Trata "nos queda presupuesto" como el comienzo del análisis, no el final.

## Errores comunes

- **Comparar contra nada.** El comparador correcto es el siguiente mejor uso del dinero, que rara vez es "no hacer nada".
- **Asumir que el tiempo ahorrado tiene coste de oportunidad cero.** El tiempo ahorrado solo es valioso si se redespliega a algo valioso — ver [ahorros liberadores de efectivo frente a no liberadores de efectivo](../ahorros-liberadores-de-efectivo-frente-a-no-liberadores-de-efectivo/).
- **Ignorar el desplazamiento.** "El presupuesto se expandirá para encajar" casi nunca es cierto en un servicio de salud nacional dentro del año.

## Fuentes

- Claxton K, et al. "Methods for the estimation of the NICE cost effectiveness threshold." Health Technology Assessment 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- Glosario del York Health Economics Consortium. <https://yhec.co.uk/glossary/opportunity-cost/>

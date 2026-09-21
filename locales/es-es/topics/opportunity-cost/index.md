# Coste de Oportunidad

El coste de oportunidad es el valor de la mejor alternativa a la que se renuncia al comprometer un recurso. En un sistema de salud con presupuesto fijo, gastar 1 millón de libras en una cosa significa 1 millón de libras de salud que *no* se produce en otro sitio.

## Por qué importa

El coste de oportunidad es la idea más profunda de la economía de la salud, y la que los ingenieros de software se saltan con más frecuencia. Los presupuestos sanitarios son fijos en un año dado, así que una nueva tecnología nunca se financia con dinero "extra": desplaza a otra cosa. La pregunta que realmente se hace un pagador no es "¿es esto bueno?", sino "¿es esto mejor que lo que ese mismo dinero compra actualmente?"

Por eso existen los umbrales de coste-efectividad: el umbral es una estimación de la salud que el dinero compra en el margen del sistema actual. Véase [umbrales de disposición a pagar](../willingness-to-pay-thresholds/).

## Las matemáticas

No existe una fórmula única; el coste de oportunidad es una disciplina de comparación:

```
Coste de oportunidad de elegir A = valor de la mejor alternativa B a la que se renuncia
Ganancia neta de A = valor(A) − valor(B)
```

El referente empírico: Claxton et al. (2015) estimaron que el NHS produce un QALY por aproximadamente **13,000 £** en el margen. Así que 13,000 £ gastados en una tecnología que produce menos de un QALY hacen que la nación esté *menos* sana, aunque la tecnología "funcione".

## Ejemplo trabajado

El presupuesto de transformación de un trust del NHS puede financiar exactamente una de estas opciones:

- **Opción A**: software de gestión de turnos electrónico (e-rostering) — ahorra 400,000 £/año en gasto de personal de agencia.
- **Opción B**: software de coordinación del alta — ahorra 2,000 días-cama/año. A un coste marginal de unas 150 £ por día-cama efectivamente liberado, son 300,000 £/año, más un tratamiento más temprano para los pacientes en espera.

Financiar A implica renunciar a B. El coste de oportunidad de A son los 300,000 £ de B más el beneficio para el paciente; el argumento *neto* a favor de A es solo la diferencia, no los 400,000 £ que anuncia A. Cualquier caso de negocio que compare una propuesta con "no hacer nada" en lugar de con la mejor alternativa sobrestima su valor.

## Conexión con la ingeniería de software

La capacidad de ingeniería también es un presupuesto fijo: espacios en el roadmap, no libras. Un equipo de plataforma que financia la herramienta A, que ahorra horas de ingeniero a 500 £/hora, cuando la herramienta B ofrece lo mismo a 200 £/hora, está destruyendo capacidad, exactamente igual que un sistema de salud que financia un medicamento de 40,000 £/QALY desplaza cuidados de 13,000 £/QALY. La disciplina se traslada directamente:

- Nombra siempre el comparador ("¿frente a qué?").
- Valora el tiempo de ingeniería por lo que produciría en otro caso, no solo por el salario.
- Trata "nos queda presupuesto" como el principio del análisis, no como el final.

## Errores habituales

- **Comparar contra nada.** El comparador correcto es el siguiente mejor uso del dinero, que rara vez es "no hacer nada".
- **Asumir que el tiempo ahorrado tiene coste de oportunidad cero.** El tiempo ahorrado solo tiene valor si se redespliega hacia algo valioso; véase [ahorros con liberación de caja frente a sin liberación de caja](../cash-releasing-vs-non-cash-releasing/).
- **Ignorar el desplazamiento.** "El presupuesto se ampliará para encajarlo" casi nunca es cierto dentro del mismo ejercicio en un servicio nacional de salud.

## Fuentes

- Claxton K, et al. "Methods for the estimation of the NICE cost effectiveness threshold." Health Technology Assessment 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/opportunity-cost/>

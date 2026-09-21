# Tarifa Nacional y Costes Unitarios

El NHS paga a los proveedores por actividad bajo una lista de precios nacional basada en reglas — históricamente la Tarifa Nacional / Pago por Resultados, reemplazada por el **Esquema de Pago del NHS (NHSPS)** el 1 de abril de 2023. Detrás de los precios se sitúa una infraestructura nacional de costeo unitario: la **Colección Nacional de Costes (NCC)** y el compendio **PSSRU Unit Costs of Health and Social Care**.

## Por qué importa

Estos son los denominadores de cada caso de negocio creíble del NHS. Cuando una reclamación dice "una asistencia ambulatoria vale £160" o "una hora-enfermera de Banda 6 cuesta £31", esas cifras provienen de esta infraestructura — y usar las cifras oficiales en lugar de inventadas es lo que hace que las evaluaciones independientes sean comparables y los equipos financieros cooperativos. Para un proveedor, la tarifa también define el lado de los *ingresos*: la actividad que tu software habilita (clínicas extra, camas rellenadas) se tasa a precios del esquema.

## El cálculo

```
Precio de tarifa por unidad de actividad (episodio codificado HRG, asistencia ambulatoria)
  = coste unitario promedio nacional (de NCC) × Factor de Fuerzas de Mercado (ajuste local)
  bajo NHSPS: elementos combinados fijos + variables ("pago e incentivo alineados")

Coste unitario NCC = coste total reportado por el fideicomiso de un tipo de actividad / volumen de actividad
                (construido sobre Sistemas de Información y Costeo a Nivel de Paciente, PLICS)

Compendio PSSRU: ~80 costes unitarios estándar (consulta de médico de cabecera, hora-enfermera
por banda, asistencia a urgencias…) — la fuente predeterminada en evaluaciones económicas del Reino Unido.
```

## Ejemplo resuelto

Tu software libera 1 hora/día del tiempo de una enfermera de Banda 6 en un año laboral de 250 días:

```
Coste de Banda 6 basado en PSSRU incl. gastos generales ≈ £31/hora (comprueba la edición actual)
Valor de capacidad = 250 × £31 = £7.750/enfermera/año (no libera efectivo)
```

Alternativamente la enfermera realiza 2 citas de seguimiento ambulatorio extra/día a ~£160 de valor del esquema: 500 × £160 = **£80.000/año de actividad financiada** — una diferencia de diez veces en el valor reclamado dependiendo del redespliegue, todo a partir de costes unitarios oficiales. Ambas reclamaciones son auditables porque los denominadores están publicados; ese es todo el punto.

## Conexión con la ingeniería de software

Este es el patrón del **libro de precios interno**. La economía de la salud del Reino Unido funciona porque cada evaluación usa los mismos costes unitarios publicados; las organizaciones de ingeniería en su mayoría carecen de esto, así que cada caso de negocio inventa su propio coste de una hora-ingeniero, un incidente, un despliegue. Un equipo de plataforma puede publicar exactamente ese libro — coste cargado por hora-ingeniero por nivel, por incidente por severidad, por minuto de compilación — y exigir su uso en todas las propuestas. Los sistemas de facturación interna también replican los modos de fallo conocidos de la tarifa: el precio a coste promedio impulsa la manipulación de volumen, los pagos fijos impulsan la infraprovisión. La evolución del NHSPS desde el pago de actividad pura hacia fijo+variable combinado son veinte años de lecciones en diseño de incentivos para precios de plataforma interna.

## Errores comunes

- **Cifras obsoletas**: los precios de NCC, PSSRU y NHSPS se actualizan anualmente — fecha cada cifra.
- **Precio de tarifa ≠ coste**: los precios son promedios nacionales con ajustes; tu coste marginal local difiere (ver [coste marginal frente a promedio](../coste-marginal-frente-a-promedio/)).
- **Valorar la capacidad a tarifa sin un mecanismo** para realmente entregar y ser pagado por la actividad extra.

## Fuentes

- NHS England, Esquema de Pago del NHS. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, Colección Nacional de Costes. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>

# Tarifa Nacional y Costes Unitarios

El NHS paga a los proveedores por la actividad según una lista de precios nacional basada en reglas: históricamente la National Tariff / Payment by Results, sustituida por el **NHS Payment Scheme (NHSPS)** el 1 de abril de 2023. Detrás de los precios hay una infraestructura nacional de costeo unitario: la **National Cost Collection (NCC)** y el compendio **PSSRU Unit Costs of Health and Social Care**.

## Por qué importa

Estos son los denominadores de cualquier business case creíble del NHS. Cuando una afirmación dice «una consulta ambulatoria vale £160» o «una hora de enfermera de Banda 6 cuesta £31», esas cifras proceden de esta infraestructura, y usar las cifras oficiales en lugar de inventadas es lo que hace que las evaluaciones independientes sean comparables y los equipos financieros cooperativos. Para un proveedor, la tarifa también define el lado de los *ingresos*: la actividad que tu software habilita (consultas adicionales, camas recuperadas) se valora a precios del sistema.

## Las matemáticas

```
Precio de tarifa por unidad de actividad (episodio codificado por HRG, consulta ambulatoria)
  = coste unitario medio nacional (de la NCC) × Market Forces Factor (ajuste local)
  bajo NHSPS: elementos combinados fijos + variables ("aligned payment and incentive")

Coste unitario NCC = coste total declarado por el trust de un tipo de actividad / volumen de actividad
                     (construido sobre Patient-Level Information and Costing Systems, PLICS)

Compendio PSSRU: ~80 costes unitarios estándar (consulta de médico de cabecera, hora de
enfermera por banda, atención en urgencias…): la fuente por defecto en las evaluaciones
económicas del Reino Unido.
```

## Ejemplo resuelto

Tu software libera 1 hora/día del tiempo de una enfermera de Banda 6 en un año laboral de 250 días:

```
Coste de Banda 6 según PSSRU incl. gastos generales ≈ £31/hora (comprueba la edición actual)
Valor de capacidad = 250 × £31 = £7,750/enfermera/año (no genera efectivo)
```

Alternativamente, la enfermera realiza 2 consultas de seguimiento ambulatorias adicionales/día a un valor del sistema de ~£160: 500 × £160 = **£80,000/año de actividad financiada**: una diferencia de diez veces en el valor reclamado según la redistribución, todo a partir de costes unitarios oficiales. Ambas afirmaciones son auditables porque los denominadores están publicados; ese es precisamente el objetivo.

## Conexión con la ingeniería de software

Este es el patrón del **libro de precios interno**. La economía de la salud del Reino Unido funciona porque cada evaluación usa los mismos costes unitarios publicados; las organizaciones de ingeniería en su mayoría carecen de esto, así que cada business case inventa su propio coste de una hora-ingeniero, un incidente, un despliegue. Un equipo de plataforma puede publicar exactamente ese libro —coste totalmente cargado por hora-ingeniero según nivel, por incidente según gravedad, por minuto de build— y exigir su uso en todas las propuestas. Los sistemas de chargeback/showback también replican los modos de fallo conocidos de la tarifa: el precio al coste medio impulsa la manipulación del volumen, los pagos fijos impulsan la infraprovisión. La evolución del NHSPS desde el pago puro por actividad hasta el combinado fijo+variable son veinte años de lecciones sobre diseño de incentivos para el precio interno de plataforma.

## Trampas habituales

- **Cifras desactualizadas**: los precios de NCC, PSSRU y NHSPS se actualizan anualmente: fecha cada cifra.
- **El precio de tarifa ≠ coste**: los precios son medias nacionales con ajustes; tu coste marginal local difiere (véase [marginal vs average cost](../marginal-vs-average-cost/)).
- **Valorar la capacidad a precio de tarifa sin un mecanismo** para realmente entregar y cobrar por la actividad adicional.

## Fuentes

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>

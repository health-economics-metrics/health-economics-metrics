# Costes de externalización evitables

Cuando un trust no puede cumplir sus objetivos con capacidad interna, compra capacidad a precios premium: horas extra de fin de semana para su propio personal, o externalización de procedimientos a proveedores privados. El valor económico del software que libera capacidad incluye el **coste evitable de ese trabajo a precio premium**.

## Por qué importa

Bajo la presión de la recuperación electiva, los trusts pagan habitualmente precios spot del sector privado (a menudo 1.2-1.5× el precio del esquema del NHS) o tarifas premium de iniciativa de lista de espera a sus propios especialistas por listas de fin de semana. A diferencia de las afirmaciones de capacidad ordinarias, la externalización evitada **libera caja**: la factura al proveedor privado sencillamente no se emite. Eso la convierte en una de las líneas de beneficio más sólidas disponibles para el software que aumenta el rendimiento interno — y una de las más fáciles de evidenciar, porque el gasto en externalización ya es una línea presupuestaria visible.

## Las matemáticas

```
Coste de externalización evitable = actividad internalizada × (precio unitario externalizado
                             − coste marginal interno por caso)

Coste marginal interno: consumibles + personal variable para la actividad adicional
— el patrimonio fijo ya está pagado (véase marginal-vs-average-cost.md).
```

La reclamación requiere que la capacidad interna liberada absorba realmente la actividad: quirófanos, camas y personal deben estar todos disponibles (la restricción vinculante manda — de nuevo, la teoría de las restricciones).

## Ejemplo resuelto

Un trust externaliza 800 procedimientos de cataratas/año a £900 cada uno: £720,000/año de gasto externo, frente a un precio de esquema de ~£750.

El software de programación de quirófanos (optimización de listas, relleno de huecos por cancelaciones, seguimiento del tiempo de rotación) eleva la utilización interna de quirófanos lo suficiente como para repatriar 500 procedimientos:

```
Coste marginal interno por caso ≈ £350 (consumibles + personal de sesión)
Ahorro = 500 × (900 − 350) = £275,000/año — libera caja
Externalización restante: 300 × £900 = £270,000 (antes era £720,000)
```

El software cuesta £90,000/año → neto ≈ **+£185,000/año en caja contabilizable**, más los beneficios de calidad interna y formación de mantener el trabajo dentro de la organización.

## Conexión con la ingeniería de software

El análogo directo es la **prima de contratistas y consultoría**: cuando la capacidad de ingeniería interna no puede cumplir compromisos, las organizaciones compran capacidad externa a 1.5-3× las tarifas internas cargadas. Las inversiones en plataforma y productividad que elevan el rendimiento interno deberían reclamar el gasto en contratistas evitado exactamente como arriba — tarifa diaria externa menos coste marginal interno, multiplicado por el trabajo repatriado — porque es una de las pocas líneas genuinamente liberadoras de caja en un caso de negocio de productividad de desarrolladores. Se aplica la misma advertencia: la capacidad interna debe existir realmente y estar programada sobre el trabajo repatriado, o la reclamación es ficción.

## Trampas habituales

- **Reclamar repatriación sin la cadena de capacidad completa** — cirujanos liberados pero sin plazas de quirófano (o ingenieros liberados pero sin ancho de banda de gestión de producto) no repatria nada.
- **Comparar el precio externalizado con el coste medio interno** en lugar del coste marginal — subestima el ahorro, curiosamente; los costes fijos se pagan de todos modos.
- **Asimetría de calidad/complejidad**: los casos externalizados suelen ser los sencillos; repatriarlos cambia la combinación de casos interna y los costes unitarios.

## Fuentes

- NHS England, plan de recuperación de atención electiva. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>

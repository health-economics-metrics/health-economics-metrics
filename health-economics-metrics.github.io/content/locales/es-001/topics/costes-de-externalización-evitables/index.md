# Costes de Externalización Evitables

Cuando un fideicomiso no puede cumplir objetivos con capacidad interna, compra capacidad a tarifas premium: horas extra de fin de semana para su propio personal, o externalizando procedimientos a proveedores privados. El valor económico del software que libera capacidad incluye el **coste evitable de ese trabajo a tarifa premium**.

## Por qué importa

Bajo la presión de recuperación electiva, los fideicomisos pagan rutinariamente precios al contado del sector privado (a menudo 1,2-1,5× el precio del esquema del NHS) o tarifas premium de iniciativa de lista de espera a sus propios consultores por listas de fin de semana. A diferencia de las reclamaciones de capacidad ordinarias, la externalización evitada **libera efectivo**: la factura al proveedor privado genuinamente no se emite. Eso la convierte en una de las líneas de beneficio más sólidas disponibles para el software que aumenta el rendimiento interno — y una de las más fáciles de demostrar, porque el gasto de externalización ya es una línea de presupuesto visible.

## El cálculo

```
Coste de externalización evitable = actividad trasladada internamente × (precio unitario externalizado
                             − coste marginal interno por caso)

Coste marginal interno: consumibles + personal variable para la actividad extra
— el inmueble fijo ya está pagado (ver marginal-vs-average-cost.md).
```

La reclamación requiere que la capacidad interna liberada absorba realmente la actividad: las sesiones de quirófano, las camas y el personal deben estar todos disponibles (la restricción vinculante gobierna — teoría de restricciones de nuevo).

## Ejemplo resuelto

Un fideicomiso externaliza 800 procedimientos de cataratas/año a £900 cada uno: £720.000/año de gasto externo, frente al precio del esquema ~£750.

El software de programación de quirófanos (optimización de listas, relleno de huecos por cancelaciones, seguimiento del tiempo de rotación) eleva el uso interno del quirófano lo suficiente para repatriar 500 procedimientos:

```
Coste marginal interno por caso ≈ £350 (consumibles + personal de sesión)
Ahorro = 500 × (900 − 350) = £275.000/año — libera efectivo
Externalización restante: 300 × £900 = £270.000 (era £720.000)
```

El coste del software fue £90.000/año → neto ≈ **+£185.000/año en efectivo capitalizable**, más los beneficios de calidad interna y formación de mantener el trabajo internamente.

## Conexión con la ingeniería de software

El análogo directo es la **prima de contratistas y consultorías**: cuando la capacidad interna de ingeniería no puede cumplir compromisos, las organizaciones compran capacidad externa a tarifas internas cargadas de 1,5-3×. Las inversiones en plataforma y productividad que elevan el rendimiento interno deberían reclamar el gasto en contratistas evitado exactamente como arriba — tarifa diaria externa menos coste marginal interno, multiplicado por el trabajo repatriado — porque es una de las pocas líneas genuinamente liberadoras de efectivo en un caso de negocio de productividad de desarrolladores. Se aplica la misma advertencia: la capacidad interna debe existir realmente y estar programada en el trabajo repatriado, o la reclamación es ficción.

## Errores comunes

- **Reclamar repatriación sin la cadena de capacidad completa** — cirujanos liberados pero sin franjas de quirófano (o ingenieros liberados pero sin ancho de banda de gestión de producto) no repatria nada.
- **Comparar el precio externalizado con el coste medio interno** en lugar del coste marginal — subestima el ahorro, curiosamente; los costes fijos corren de todos modos.
- **Asimetría de calidad/complejidad**: los casos externalizados suelen ser los simples; repatriarlos cambia la mezcla de casos interna y los costes unitarios.

## Fuentes

- NHS England, plan de recuperación de atención electiva. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
- NHS England, Esquema de Pago del NHS. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>

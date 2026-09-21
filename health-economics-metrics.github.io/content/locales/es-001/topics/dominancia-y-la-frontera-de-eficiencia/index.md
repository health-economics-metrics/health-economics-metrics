# Dominancia y la Frontera de Eficiencia

Una opción está **dominada** si otra opción cuesta menos *y* entrega más. La **frontera de eficiencia** es lo que queda tras eliminar las opciones dominadas: el conjunto de elecciones donde obtener más requiere pagar más.

## Por qué importa

Antes de cualquier debate sobre umbrales o presupuestos, la evaluación de tecnología sanitaria primero elimina las opciones que nadie debería elegir jamás. Trazar cada opción en un plano coste-frente-efecto y dibujar la frontera es un ejercicio de cinco minutos que rutinariamente mata la mitad de una lista corta. Las comparaciones incrementales ([RCEI](../ratio-de-coste-efectividad-incremental/)) se calculan entonces solo *a lo largo de la frontera*, cada opción frente a la siguiente más barata no dominada — nunca frente a "no hacer nada" cuando existen opciones intermedias mejores.

## El cálculo

```
Dominancia estricta:   A domina a B si Coste_A ≤ Coste_B y Efecto_A ≥ Efecto_B
                    (con al menos una desigualdad estricta)

Dominancia extendida: B queda descartado si una mezcla de A y C logra más efecto
                    por libra — detectado cuando los RCEI disminuyen al subir
                    la frontera. Los RCEI válidos de la frontera deben ir aumentando.
```

Procedimiento: ordena las opciones por efecto; elimina las estrictamente dominadas; calcula los RCEI por pares entre vecinas; elimina cualquier opción cuyo RCEI supere el de la siguiente opción más efectiva (dominancia extendida); repite hasta que los RCEI aumenten monótonamente.

## Ejemplo resuelto

Cuatro opciones para reducir citas perdidas (efecto = citas recuperadas/año):

```
Opción          Coste/año  Recuperadas
No hacer nada   £0         0
Recordatorios SMS  £20.000    2.000
Llamadas telefónicas  £120.000   2.200
SMS + triaje con IA £90.000    3.500
```

Las llamadas telefónicas están **estrictamente dominadas** por SMS + triaje con IA (cuestan más, recuperan menos). Frontera: nada → SMS → SMS + IA.

```
RCEI(SMS vs nada)   = 20.000 / 2.000  = £10 por cita recuperada
RCEI(SMS+IA vs SMS)    = (90.000 − 20.000) / (3.500 − 2.000) = £46,67 por cita
```

RCEI crecientes → frontera válida. A ~£160 ahorrados por cita hospitalaria recuperada (ver [tasa de no presentación](../tasa-de-no-presentación/)), ambos pasos de la frontera merecen tomarse; la propuesta del centro de llamadas telefónicas nunca debería llegar al comité.

## Conexión con la ingeniería de software

Construye el mismo gráfico para cualquier decisión de herramientas: coste por año en un eje, resultado medido (horas ahorradas, incidentes evitados, despliegues habilitados) en el otro. Los puntos arriba-y-a-la-izquierda de la frontera se eliminan antes de que nadie discuta sobre el presupuesto. Esto reencuadra la selección de proveedores de debates de lista de funcionalidades a "estás dominado; la reunión ha terminado". También expone el patrón empresarial común de comprar la opción más cara por una ganancia marginal — legítimo solo si el precio incremental por unidad incremental es uno que la organización pagaría a sabiendas.

## Errores comunes

- **Comparar todo con la línea base** en lugar de con la siguiente opción en la frontera — esto halaga a las opciones caras ocultando equivalentes más baratos cercanos.
- **Puntuaciones de efecto de dimensión única** que ocultan lo que importa; si cuentan dos resultados, o combínalos defendiblemente (ver [análisis de coste-utilidad](../análisis-de-coste-utilidad/)) o muestra dos fronteras.
- **Olvidar la incertidumbre**: las opciones cerca de la frontera pueden intercambiar posiciones bajo [análisis de sensibilidad](../análisis-de-sensibilidad/).

## Fuentes

- Glosario del York Health Economics Consortium: dominancia. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>

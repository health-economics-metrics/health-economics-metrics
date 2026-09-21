# Dominancia y la Frontera de Eficiencia

Una opción está **dominada** si otra opción cuesta menos *y* aporta más. La **frontera de eficiencia** es lo que queda tras eliminar las opciones dominadas: el conjunto de elecciones en las que conseguir más exige pagar más.

## Por qué importa

Antes de cualquier debate sobre umbrales o presupuestos, la evaluación de tecnologías sanitarias elimina primero las opciones que nadie debería elegir nunca. Representar cada opción en un plano coste-efecto y trazar la frontera es un ejercicio de cinco minutos que habitualmente elimina la mitad de una lista corta. Las comparaciones incrementales ([ICER](../incremental-cost-effectiveness-ratio/)) se calculan entonces solo *a lo largo de la frontera*, cada opción frente a la siguiente más barata no dominada — nunca frente a "no hacer nada" cuando existen mejores opciones intermedias.

## Las matemáticas

```
Dominancia estricta:  A domina a B si Coste_A ≤ Coste_B y Efecto_A ≥ Efecto_B
                       (con al menos una desigualdad estricta)

Dominancia extendida: B queda descartada si una combinación de A y C consigue
                       más efecto por libra — se detecta cuando los ICER
                       disminuyen al avanzar por la frontera. Los ICER válidos
                       de la frontera deben ser crecientes.
```

Procedimiento: ordena las opciones por efecto; elimina las estrictamente dominadas; calcula los ICER por pares entre opciones vecinas; elimina cualquier opción cuyo ICER supere el de la siguiente opción más efectiva (dominancia extendida); repite hasta que los ICER crezcan de forma monótona.

## Ejemplo resuelto

Cuatro opciones para reducir las citas perdidas (efecto = citas recuperadas/año):

```
Opción                 Coste/año   Recuperadas
No hacer nada           £0          0
Recordatorios SMS       £20,000     2,000
Llamadas telefónicas    £120,000    2,200
SMS + triaje con IA     £90,000     3,500
```

Las llamadas telefónicas están **estrictamente dominadas** por SMS + triaje con IA (cuestan más y recuperan menos). Frontera: nada → SMS → SMS + IA.

```
ICER(SMS frente a nada)     = 20,000 / 2,000  = £10 por cita recuperada
ICER(SMS+IA frente a SMS)   = (90,000 − 20,000) / (3,500 − 2,000) = £46.67 por cita
```

ICER crecientes → frontera válida. A ~£160 ahorradas por cita hospitalaria recuperada (véase la [tasa de inasistencia](../did-not-attend-rate/)), ambos pasos de la frontera merecen la pena; la propuesta del centro de llamadas nunca debería llegar al comité.

## Conexión con la ingeniería de software

Construye el mismo gráfico para cualquier decisión de herramientas: coste al año en un eje, resultado medido (horas ahorradas, incidencias evitadas, despliegues habilitados) en el otro. Los puntos arriba y a la izquierda de la frontera se eliminan antes de que nadie discuta sobre presupuesto. Esto reformula la selección de proveedores, pasando de debates de lista de funcionalidades a "estás dominado; se acabó la reunión". También expone el patrón habitual en las grandes organizaciones de comprar la opción más cara por una ganancia marginal — legítimo solo si el precio incremental por unidad incremental es uno que la organización pagaría a sabiendas.

## Errores habituales

- **Comparar todo con la línea base** en lugar de con la siguiente opción de la frontera — esto favorece a las opciones caras al ocultar alternativas casi equivalentes más baratas.
- **Puntuaciones de efecto de una sola dimensión** que ocultan lo que importa; si cuentan dos resultados, combínalos de forma defendible (véase el [análisis de coste-utilidad](../cost-utility-analysis/)) o muestra dos fronteras.
- **Olvidar la incertidumbre**: las opciones cerca de la frontera pueden intercambiar posiciones bajo un [análisis de sensibilidad](../sensitivity-analysis/).

## Fuentes

- Glosario del York Health Economics Consortium: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>

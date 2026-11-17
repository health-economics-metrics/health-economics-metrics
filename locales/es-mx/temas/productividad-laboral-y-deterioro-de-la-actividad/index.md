# Productividad laboral y deterioro de la actividad (WPAI)

El WPAI es un cuestionario autoinformado validado (Reilly, Zbrozek, Dasbach, 1993) que mide cuánto afecta un problema de salud al trabajo remunerado y a las actividades diarias, normalmente durante los últimos 7 días. Divide la pérdida en *absentismo* (absenteeism), el tiempo de trabajo perdido en sentido literal, y *presentismo* (presenteeism), la productividad reducida mientras se está físicamente en el trabajo, y este último suele ser el componente de costo mayor y más oculto.

## Por qué importa

Un simple recuento de bajas por enfermedad solo ve el absentismo. Un médico o un trabajador del conocimiento que nunca falta pero rinde al 60 % de su capacidad por una enfermedad crónica no añade nada al registro de ausencias y, aun así, genera una pérdida de productividad grande y real; el WPAI se diseñó precisamente para hacer visible ese costo invisible. Como es un instrumento validado y no una encuesta ad hoc, sus puntuaciones pueden usarse en los paquetes de evidencia de [resultados reportados por el paciente](../resultados-informados-por-el-paciente/) y en los estudios de costo de la enfermedad sin que el evaluador tenga que revalidar la medida. Como instrumento autoinformado, es en sí una forma de PROM, que se distingue sobre todo por centrarse en el trabajo y la actividad en lugar de en los síntomas o la calidad de vida.

## Las matemáticas

```
Absentismo % = horas_perdidas_por_salud / (horas_perdidas_por_salud + horas_trabajadas) × 100

Presentismo % = deterioro autoinformado 0–10 mientras se trabaja × 10
                  (tomado directamente del cuestionario, no derivado aquí)

Deterioro laboral total % =
    Absentismo% + (1 − Absentismo%/100) × Presentismo%
    (combina las dos partes para que la suma nunca supere el 100 %)

costo_de_productividad = Deterioro_laboral_total% / 100 × ingresos_del_periodo
```

La fórmula del deterioro total no es deliberadamente una suma simple: sumar directamente los dos porcentajes podría superar el 100 %, así que el presentismo se aplica solo a la fracción *restante* (no ausente) del tiempo de trabajo.

## Ejemplo resuelto

Un empleado con migraña tiene programada una semana de 40 horas pero falta 4 de ellas:

```
horas_perdidas = 4, horas_trabajadas = 36
Absentismo% = 4 / (4 + 36) × 100 = 10 %
```

Valora por separado en el cuestionario WPAI su impacto en la productividad mientras trabaja con un 3 sobre 10, es decir, `Presentismo% = 30 %` (este paso es la respuesta en bruto del cuestionario, no derivada de las demás cifras):

```
Deterioro_laboral_total% = 10 + (1 − 10/100) × 30
                         = 10 + 0.9 × 30
                         = 10 + 27
                         = 37 %
```

En una semana laboral de 5 días con unos ingresos de £800 (£160/día):

```
costo_de_productividad = 37/100 × 800 = £296
```

Obsérvese que un recuento ingenuo de bajas por enfermedad solo habría registrado las 4 horas perdidas (10 %); el componente de presentismo casi triplica el deterioro real cuando se tiene en cuenta.

## Conexión con la ingeniería de software

Se corresponde directamente con las métricas de salud de un equipo de ingeniería:

- **El absentismo** son las bajas por enfermedad y las vacaciones pagadas: la parte visible, ya registrada y fácil.
- **El presentismo** es el ingeniero quemado o agotado por los cambios de contexto que está en cada stand-up pero rinde a capacidad reducida: normalmente el costo mayor y más oculto, invisible en los datos de plantilla o de asistencia. Aparece, en cambio, como una menor capacidad de entrega en [DORA](../métricas-dora/) y en las [métricas de flujo](../métricas-de-flujo/), o como una resolución más lenta de esa misma [deuda técnica](../deuda-técnica/) cuyo «interés» agrava el deterioro.
- La lección de ingeniería es la misma que la clínica: medir solo el absentismo y llamarlo «pérdida de productividad» infravalora de forma sistemática el costo real, porque pasa por alto a todos los que están presentes pero mermados.

## Trampas habituales

- **Sesgo de recuerdo en el autoinforme.** La ventana de recuerdo de 7 días está sujeta a las mismas distorsiones de notificación que cualquier autoevaluación retrospectiva.
- **Tratar la escala 0–10 como una medida física real.** Es una escala ordinal derivada de una autoevaluación, no una magnitud física validada; tratar las diferencias sobre ella como lineales o de intervalo estrictas es una comodidad de modelización, no un hecho físico validado.
- **Agregar puntuaciones entre variantes del WPAI.** El WPAI tiene varias versiones específicas por situación (WPAI:GH, de salud general; WPAI:SHP, de un problema de salud específico, y variantes específicas de enfermedad), y no deben agregarse ni compararse puntuaciones de variantes distintas sin comprobar antes que son la misma versión del instrumento.

## Fuentes

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- Documentación del instrumento WPAI, Reilly Associates — la referencia oficial de puntuación. <https://www.reillyassociates.net/>

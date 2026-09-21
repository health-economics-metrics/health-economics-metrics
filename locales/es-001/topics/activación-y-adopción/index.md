# Activación y Adopción

La tasa de activación es la proporción de registros que alcanzan el primer valor significativo (la acción "aha" — primera lectura registrada, primera lección completada). La adopción es la versión poblacional: la proporción de la población *elegible* que adopta la solución en absoluto. Juntas son las puertas de entrada del embudo de valor: adquisición → adopción → activación → [retención](../retención-y-abandono/) → resultado.

## Por qué importa

Los usuarios no activados son coste puro: gasto de adquisición, aprovisionamiento, superficie de soporte — cero valor clínico. Los puntos de referencia sitúan la activación del software sanitario *por debajo* de la media intersectorial (≈24% frente a ≈37% para la activación de nuevos usuarios en un conjunto de referencia SaaS; finalización de la lista de incorporación ~20%), lo que refleja una incorporación más pesada (identidad, consentimiento, seguridad clínica). La adopción conlleva las apuestas poblacionales: en el [marco RE-AIM](../alcance-y-equidad/), el impacto en salud pública ≈ alcance × efectividad — una aplicación excelente adoptada por el 3% de la población elegible mueve la aguja poblacional solo un 3%. Para los terapéuticos digitales prescritos, la puerta de adopción es visible en los datos nacionales: **~81% de las prescripciones alemanas de DiGA se activan** — una de cada cinco prescripciones y pagadas nunca comienza (ver [vía rápida DiGA](../vía-rápida-diga-de-alemania/)).

## El cálculo

```
Tasa de activación = usuarios que completan la acción clave dentro del plazo / registros × 100
Tasa de adopción    = adoptantes / población elegible × 100
Tasa de cobertura DTx = códigos de prescripción activados / prescripciones emitidas × 100

Modelo de valor del embudo:
  elegibles × adopción × activación × beneficio ponderado por retención = valor poblacional
  — cuatro multiplicaciones; mejorar el factor más pequeño suele
  dominar (teoría de restricciones aplicada a embudos)
```

## Ejemplo resuelto

Un comisionado ofrece una aplicación de prevención de diabetes a 80.000 residentes elegibles:

```
Invitados → registrados:  80.000 → 12.000  (adopción 15%)
Registrados → activados (primera sesión + objetivo fijado, 7 días): 12.000 → 5.400 (45%)
Activados → completaron el programa de 6 meses: 5.400 → 1.600 (30%)

Efecto del programa (ensayo, quienes completan): 0,03 AVAC + £180 costes evitados
Valor poblacional = 1.600 × (0,03 × £20.000 + £180) ≈ £1,25M
Valor por persona elegible = £15,6 — frente a £780 si cada persona elegible completara.

¿Dónde invertir? Duplicar la adopción (15→30%) duplica el valor;
elevar la activación de 45→65% añade ~44%; ambas superan a seguir
puliendo el contenido del programa que las 1.600 ya completan.
```

## Conexión con la ingeniería de software

La activación es la etapa del embudo más tratable desde la ingeniería: la fricción de verificación de identidad, los flujos de consentimiento, el diseño de estados vacíos y el tiempo hasta el primer valor son código, no política (el tiempo mediano hasta el valor en sanidad ≈ 1 día 7 horas en datos de referencia — cada hora de ello es exposición a la deserción). La adopción es un problema de sistemas de distribución: integración en vías de derivación (el momento de la prescripción), invitaciones avaladas por el médico de cabecera (transferencia de confianza) y accesibilidad (idioma, competencias digitales — ver [alcance y equidad](../alcance-y-equidad/)). El modelo de valor del embudo anterior es el generador del caso de negocio para ambas cosas: multiplica los factores, encuentra la restricción, tasa la solución frente al valor poblacional que libera.

## Errores comunes

- **Definir la activación como conveniencia** (correo verificado) en lugar de significado clínico (primera acción terapéutica) — infla la métrica, rompe la cadena de valor.
- **Juegos con el denominador de adopción**: "de quienes visitaron el sitio" frente a la población realmente elegible — a los comisionados les importa lo segundo.
- **Efectos de selección**: los usuarios fáciles de activar son los menos enfermos y menos desfavorecidos; las mejoras del embudo pueden ampliar las brechas de equidad mientras mejoran las medias.

## Fuentes

- Puntos de referencia de activación (SaaS sanitario). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- Datos de activación de DiGA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- Marco RE-AIM. <https://re-aim.org/>

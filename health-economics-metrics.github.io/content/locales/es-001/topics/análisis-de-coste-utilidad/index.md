# Análisis de Coste-Utilidad (ACU)

El ACU es un análisis de coste-efectividad con un **resultado genérico, ponderado por preferencia** — casi siempre el [AVAC](../año-de-vida-ajustado-por-calidad/) (o [AVAD](../año-de-vida-ajustado-por-discapacidad/) evitado). Debido a que la unidad de resultado es universal, el ACU puede comparar intervenciones entre enfermedades completamente diferentes.

## Por qué importa

Un sistema de salud nacional debe elegir entre un medicamento contra el cáncer, una aplicación de salud mental y un robot quirúrgico de un solo presupuesto. Las unidades naturales no pueden compararlos; los AVAC sí. Por lo tanto, el ACU es el método de caso de referencia en NICE y la mayoría de los organismos de ETS: su resultado — coste por AVAC, juzgado frente a un [umbral](../umbrales-de-disposición-a-pagar/) — es lo más parecido que tiene la política sanitaria a un tipo de cambio universal. Si quieres que tu software sea financiado *en lugar de otra cosa*, el ACU es la arena.

## El cálculo

```
RCUI = ΔCoste / ΔAVAC      (el RCEI con AVAC como unidad de efecto)

ΔAVAC = Σ (duración_i × utilidad_i)_nueva − Σ (duración_i × utilidad_i)_antigua
```

Utilidades de instrumentos validados ([EQ-5D](../eq-5d/)); costes y AVAC ambos [descontados](../descuento-y-preferencia-temporal/) al 3,5% (caso de referencia de NICE); incertidumbre vía [ASP](../análisis-de-sensibilidad-probabilístico/).

## Ejemplo resuelto

Una aplicación de TCC para ansiedad moderada frente a lista de espera para terapia presencial, por paciente:

```
Costes:  licencia de la aplicación + soporte        £250
        terapia desplazada            −£680   (40% de usuarios ya no la necesita)
        ΔC = 250 − 680 = −£430 (ahorra dinero)

AVAC:  6 meses con utilidad 0,76 en lugar de 0,68 mientras espera
        ΔE = 0,5 × (0,76 − 0,68) = +0,04 AVAC
```

ΔC < 0 y ΔE > 0: la aplicación **domina** — mejor y más barata, no se necesita razón. Si el supuesto de desplazamiento de terapia hubiera sido solo del 10%, ΔC = 250 − 170 = +£80, y RCUI = 80 / 0,04 = **£2.000/AVAC** — todavía muy por debajo de £20.000. El caso sobrevive incluso con el supuesto clave recortado: así es como se ve un ACU robusto (y el [diagrama de tornado](../análisis-de-sensibilidad/) lo demuestra).

## Conexión con la ingeniería de software

La idea profunda del ACU — *una unidad compuesta, ponderada por preferencia, para comparar cosas diferentes* — es el patrón para comparar inversiones de ingeniería diferentes (seguridad frente a experiencia del desarrollador frente a fiabilidad). Las opciones honestas son o una unidad compuesta defendible (rara) o una [tabla de coste-consecuencia](../análisis-de-coste-consecuencia/) explícita (habitual). Lo que el ACU advierte contra es el compuesto falso: una "puntuación de impacto" ponderada cuyos pesos se ajustaron después del hecho para hacer ganar a la opción preferida. La economía de la salud pasó décadas estandarizando la obtención de utilidades precisamente para que los pesos precedan a la comparación.

## Errores comunes

- **Ganancias de utilidad por debajo de la sensibilidad del instrumento** (ver diferencia mínima clínicamente importante en [resultados informados por el paciente](../resultados-informados-por-el-paciente/)) — un ΔE diminuto multiplicado por grandes poblaciones es un truco de blanqueo clásico.
- **Falta de desplazamiento de atención del comparador** — el mayor término de coste para los productos digitales a menudo es lo que reemplazan.
- **Mapear puntuaciones sin preferencia a utilidades** con conversiones no validadas.

## Fuentes

- Glosario del York Health Economics Consortium: análisis de coste-utilidad. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>

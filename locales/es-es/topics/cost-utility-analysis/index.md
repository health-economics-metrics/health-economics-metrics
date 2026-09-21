# Análisis de Coste-Utilidad (CUA)

El CUA es un análisis de coste-efectividad con un **resultado genérico, ponderado por preferencias** — casi siempre el [QALY](../quality-adjusted-life-year/) (o los [DALY](../disability-adjusted-life-year/) evitados). Como la unidad de resultado es universal, el CUA puede comparar intervenciones entre enfermedades completamente distintas.

## Por qué importa

Un servicio nacional de salud debe elegir entre un fármaco oncológico, una aplicación de salud mental y un robot quirúrgico con un único presupuesto. Las unidades naturales no permiten compararlos; los QALY sí. Por eso el CUA es el método de referencia en NICE y en la mayoría de los organismos de evaluación de tecnologías sanitarias (HTA): su resultado —coste por QALY, valorado frente a un [umbral](../willingness-to-pay-thresholds/)— es lo más parecido a un tipo de cambio universal que existe en política sanitaria. Si quieres que tu software se financie *en lugar de otra cosa*, el CUA es el terreno de juego.

## Las matemáticas

```
ICUR = ΔCoste / ΔQALY      (el ICER con los QALY como unidad de efecto)

ΔQALY = Σ (duración_i × utilidad_i)_nuevo − Σ (duración_i × utilidad_i)_anterior
```

Utilidades a partir de instrumentos validados ([EQ-5D](../eq-5d/)); costes y QALY, ambos [descontados](../discounting-and-time-preference/) al 3.5 % (caso de referencia de NICE); incertidumbre mediante [análisis de sensibilidad probabilístico](../probabilistic-sensitivity-analysis/).

## Ejemplo resuelto

Una aplicación de TCC (terapia cognitivo-conductual) para la ansiedad moderada frente a la lista de espera para terapia presencial, por paciente:

```
Costes: licencia de la app + soporte        £250
        terapia desplazada                  −£680   (el 40 % de los usuarios ya no la necesita)
        ΔC = 250 − 680 = −£430 (ahorra dinero)

QALY:   6 meses con una utilidad de 0.76 en lugar de 0.68 mientras se espera
        ΔE = 0.5 × (0.76 − 0.68) = +0.04 QALY
```

ΔC < 0 y ΔE > 0: la app **domina** — mejor y más barata, no hace falta ningún ratio. Si el supuesto de desplazamiento de la terapia hubiera sido solo del 10 %, ΔC = 250 − 170 = +£80, y el ICUR = 80 / 0.04 = **£2,000/QALY** — muy por debajo de las £20,000 igualmente. El caso sobrevive incluso recortando drásticamente el supuesto clave: así es como se ve un CUA robusto (y el [diagrama de tornado](../sensitivity-analysis/) lo demuestra).

## Conexión con la ingeniería de software

La idea profunda del CUA —*una única unidad compuesta, ponderada por preferencias, para comparar cosas distintas*— es el patrón para comparar inversiones de ingeniería dispares (seguridad frente a experiencia del desarrollador frente a fiabilidad). Las opciones honestas son o bien una unidad compuesta defendible (poco frecuente) o una [tabla de coste-consecuencia](../cost-consequence-analysis/) explícita (lo habitual). Lo que el CUA advierte es contra la falsa unidad compuesta: una "puntuación de impacto" ponderada cuyos pesos se ajustaron a posteriori para que ganara la opción preferida. La economía de la salud pasó décadas estandarizando la obtención de utilidades precisamente para que los pesos precedan a la comparación.

## Errores habituales

- **Ganancias de utilidad por debajo de la sensibilidad del instrumento** (véase la diferencia mínima clínicamente importante en los [resultados comunicados por el paciente](../patient-reported-outcomes/)): una ΔE minúscula multiplicada por poblaciones grandes es un truco clásico de blanqueo.
- **Ignorar el desplazamiento de la atención comparadora**: el mayor componente de coste de los productos digitales suele ser aquello que sustituyen.
- **Trasladar puntuaciones sin preferencias a utilidades** mediante equivalencias (crosswalks) no validadas.

## Fuentes

- Glosario del York Health Economics Consortium: cost-utility analysis. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>

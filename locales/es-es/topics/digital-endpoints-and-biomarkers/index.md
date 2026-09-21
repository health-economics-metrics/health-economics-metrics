# Endpoints y Biomarcadores Digitales

Un biomarcador digital es una medida fisiológica o conductual objetiva recogida mediante sensores (velocidad de la marcha desde un teléfono, sueño desde un wearable, temblor mediante acelerometría). Un endpoint digital es una medida de este tipo elevada a **resultado de ensayo clínico** — utilizada para demostrar el efecto del tratamiento. La promoción de "datos que emite el dispositivo" a "evidencia que acepta un regulador" recorre una escalera de validación definida.

## Por qué importa

Los endpoints de ensayo tradicionales son episódicos (visitas a la clínica cada 3 meses) y caros; los endpoints digitales son continuos, ecológicos (vida real, no rendimiento en consulta) y baratos por observación — pueden reducir el tamaño de los ensayos, detectar efectos antes y permitir estudios descentralizados. La trampa es la validación: el marco aceptado (alineado con la FDA, de tres pilares) exige **verificación/validación analítica** (el sensor mide con precisión la magnitud física), **validación clínica** (la medida refleja el estado clínico que dice reflejar) y un **aspecto significativo de la salud** demostrado (a los pacientes les importa lo que capta). Un endpoint sin los tres pilares es telemetría, no evidencia.

## Las matemáticas

```
Validación analítica: concordancia con la referencia (véase wearable-validation.md —
                       MAPE, CCC, Bland-Altman)
Validación clínica:    correlación/discriminación frente a anclas clínicas
                       (validez de grupos conocidos, capacidad de respuesta al cambio)
Economía del endpoint:
  eventos detectados por paciente-año (continuo) frente a muestreo por visita
  potencia del ensayo: las medidas continuas reducen el tamaño muestral cuando
  domina la varianza entre visitas — N ∝ σ²/Δ², y σ² cae con el muestreo denso
```

## Ejemplo resuelto

Un ensayo de Parkinson considera la velocidad de la marcha desde un sensor de muñeca frente a puntuaciones trimestrales evaluadas en consulta:

```
Endpoint en consulta:  4 mediciones/paciente/año, alto ruido día a día
Endpoint digital:      ~200 mediciones pasivas/paciente/año

La varianza de la estimación del cambio anual cae ~5× con el muestreo denso →
el tamaño de efecto detectable con potencia fija mejora ~√5 ≈ 2.2×, o
de forma equivalente el tamaño muestral se reduce ~40–60 % para la misma hipótesis.
A £25,000 por paciente incluido, reducir 200 pacientes ≈ £5M ahorrados
por ensayo — el caso comercial para la inversión en validación
(quizá £1–2M en sí misma) a lo largo de la cartera de un promotor.
```

## Conexión con la ingeniería de software

Los endpoints digitales son una disciplina de ingeniería de datos disfrazada de clínica: **procedencia y control de versiones** (las actualizaciones del algoritmo a mitad de estudio amenazan la comparabilidad — el problema del [PCCP](../ai-regulatory-evaluation/) en forma de ensayo clínico; fija la versión y valida el puente entre versiones); **diseño frente a datos ausentes** (los huecos de tiempo de uso son informativos, no aleatorios — véase [validación de wearables](../wearable-validation/); las decisiones de imputación son afirmaciones científicas); y **decisiones de reparto edge/nube** que cambian qué señal en bruto es siquiera recuperable después. Los equipos que tratan la canalización de medición como software regulado desde el primer día —probado, versionado, documentado— compran barata la credibilidad de sus endpoints; adaptar la validación a posteriori sobre una canalización construida deprisa es donde mueren los programas de endpoints digitales.

## Errores habituales

- **La correlación con la consulta como validación completa**: igualar una medida de consulta defectuosa demuestra herencia, no verdad; valida frente al aspecto significativo de la salud.
- **Riesgo regulatorio del endpoint novedoso**: un endpoint sin precedentes puede ser científicamente superior y aun así hundir una solicitud — involucra a los reguladores pronto (existen programas de cualificación).
- **Desajuste sensor-población**: validación en muñecas jóvenes y sanas, despliegue en pacientes mayores con temblor y diferencias de pigmentación que el PPG nunca vio.
- **Deriva de características (feature drift)**: reentrenar el algoritmo de marcha con datos nuevos redefine silenciosamente el endpoint a mitad de estudio.

## Fuentes

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>

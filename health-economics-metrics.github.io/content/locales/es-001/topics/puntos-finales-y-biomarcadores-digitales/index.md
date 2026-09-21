# Puntos Finales y Biomarcadores Digitales

Un biomarcador digital es una medida fisiológica o conductual objetiva recopilada mediante sensores (velocidad de marcha desde un teléfono, sueño desde un wearable, temblor desde acelerometría). Un punto final digital es tal medida elevada a un **resultado de ensayo** — usado para demostrar el efecto del tratamiento. La promoción de "datos que emite el dispositivo" a "evidencia que un regulador acepta" recorre una escalera de validación definida.

## Por qué importa

Los puntos finales tradicionales de ensayos son episódicos (visitas clínicas cada 3 meses) y caros; los puntos finales digitales son continuos, ecológicos (vida real, no rendimiento en clínica), y baratos por observación — pueden reducir los ensayos, detectar efectos antes y permitir estudios descentralizados. La trampa es la validación: el marco aceptado (alineado con la FDA, tres pilares) requiere **verificación/validación analítica** (el sensor mide la cantidad física con precisión), **validación clínica** (la medida refleja el estado clínico que dice reflejar), y un **aspecto significativo de la salud** demostrado (a los pacientes les importa lo que captura). Un punto final sin los tres es telemetría, no evidencia.

## El cálculo

```
Validación analítica: acuerdo con la referencia (ver wearable-validation.md —
                       MAPE, CCC, Bland-Altman)
Validación clínica:   correlación/discriminación frente a anclas clínicas
                       (validez de grupos conocidos, capacidad de respuesta al cambio)
Economía del punto final:
  eventos detectados por paciente-año (continuo) frente a muestreo por visita
  potencia del ensayo: las medidas continuas reducen el tamaño de la muestra cuando
  la varianza entre visitas domina — N ∝ σ²/Δ², y σ² cae con el muestreo denso
```

## Ejemplo resuelto

Un ensayo de Parkinson considera la velocidad de marcha desde un sensor de muñeca frente a puntuaciones trimestrales calificadas en clínica:

```
Punto final clínico:  4 medidas/paciente/año, alto ruido día a día
Punto final digital: ~200 medidas pasivas/paciente/año

La varianza de la estimación de cambio anual cae ~5× con el muestreo denso →
el tamaño de efecto detectable a potencia fija mejora ~√5 ≈ 2,2×, o
equivalentemente el tamaño de muestra se reduce ~40–60% para la misma hipótesis.
A £25.000 por paciente inscrito, reducir 200 pacientes ≈ £5M ahorrados
por ensayo — el caso comercial para la inversión en validación
(en sí misma quizás £1–2M) a través de la cartera de un patrocinador.
```

## Conexión con la ingeniería de software

Los puntos finales digitales son una disciplina de ingeniería de datos con ropa clínica: **procedencia y versionado** (las actualizaciones de algoritmo a mitad del estudio amenazan la comparabilidad — el problema [PCCP](../evaluación-regulatoria-de-la-ia/) en forma de ensayo; bloquea la versión y valida el puente); **diseño de datos faltantes** (los huecos de tiempo de uso son informativos, no aleatorios — ver [validación de wearables](../validación-de-wearables/); las elecciones de imputación son afirmaciones científicas); y **decisiones de división edge/nube** que cambian qué señal cruda es siquiera recuperable más tarde. Los equipos que tratan la canalización de medición como software regulado desde el día uno — probado, versionado, documentado — compran barata la credibilidad de sus puntos finales; adaptar retroactivamente la validación a una canalización de movimiento rápido es donde mueren los programas de puntos finales digitales.

## Errores comunes

- **Correlación-con-clínica como validación completa**: coincidir con una medida clínica defectuosa demuestra herencia, no verdad; valida contra el aspecto significativo de la salud.
- **Riesgo regulatorio de punto final novedoso**: un punto final sin precedentes puede ser científicamente superior y aun así hundir una presentación — involucra a los reguladores temprano (existen programas de calificación).
- **Desajuste sensor-población**: validación en muñecas jóvenes y sanas, despliegue en pacientes ancianos con temblor y diferencias de pigmentación que el PPG nunca vio.
- **Deriva de características**: reentrenar el algoritmo de marcha con nuevos datos redefine silenciosamente el punto final a mitad del estudio.

## Fuentes

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), recursos de puntos finales digitales. <https://dimesociety.org/>

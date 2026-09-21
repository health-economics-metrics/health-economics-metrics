# Análisis de coste-beneficio (CBA)

El CBA valora tanto los costes *como* los resultados en términos monetarios. Es el único tipo de análisis que puede responder "¿merece la pena hacer esto en absoluto?" — no solo "¿cuál opción es mejor?" — porque los beneficios monetizados pueden compararse directamente con los costes.

## Por qué importa

El CBA es el estándar del **Green Book** de HM Treasury del Reino Unido para toda evaluación del gasto público, incluida la sanidad cuando los resultados pueden monetizarse. Donde el [CEA](../cost-effectiveness-analysis/)/[CUA](../cost-utility-analysis/) se detienen en "coste por unidad de salud", el CBA pone precio a la propia salud (QALY × valor umbral) y a todo lo demás — tiempo, desplazamiento, carbono — y reporta una única cifra neta. Todo caso de negocio digital completo del NHS contiene un caso económico con forma de CBA.

## Las matemáticas

```
NPV (valor social neto presente) = Σ_t [ (Beneficios_t − Costes_t) / (1 + r)^t ]
BCR (ratio beneficio-coste)       = PV(beneficios) / PV(costes)

Adoptar si NPV > 0 (equivalentemente BCR > 1); ordenar por NPV, no por BCR.
r = 3.5% (tasa de preferencia temporal social del Green Book)
```

Los efectos en salud pueden introducirse monetizados como QALYs × λ (véase [umbrales de disposición a pagar](../willingness-to-pay-thresholds/)). El Green Book también exige **ajustes por sesgo de optimismo** — incrementando las estimaciones de coste y recortando los beneficios en porcentajes basados en evidencia, porque las evaluaciones son sistemáticamente optimistas.

## Ejemplo resuelto

Un sistema de derivación electrónica, horizonte a 5 años, descuento del 3.5%:

```
Costes:    construcción £1.2M (año 0), funcionamiento £300k/año (años 1–5)
Beneficios: ahorros administrativos £250k/año, pruebas diagnósticas duplicadas evitadas £280k/año,
          tiempo de paciente ahorrado 40,000 horas/año × £15 = £600k/año → £1,130k/año

PV costes    = 1,200k + 300k × 4.515 (factor de anualidad) = £2,555k
PV beneficios = 1,130k × 4.515                          = £5,102k

NPV = 5,102 − 2,555 = +£2,547k     BCR = 2.0
```

Aplicando el sesgo de optimismo del Green Book (digamos +40% en el coste de construcción, −20% en los beneficios): PV costes ≈ £3,035k, PV beneficios ≈ £4,082k, NPV ≈ **+£1,047k** — sigue siendo positivo, que es precisamente el objetivo del ajuste: los casos deben sobrevivir a su propio optimismo.

## Conexión con la ingeniería de software

Los casos de negocio de ingeniería son CBA informales. Las mejoras del Green Book que merece la pena adoptar:

- **El sesgo de optimismo como incremento estándar** — los ingenieros subestiman el coste de migración con la misma fiabilidad con la que los ministerios subestiman el coste de infraestructura; aplica un incremento declarado en lugar de fingir que esta vez es diferente.
- **Monetiza el beneficio dominante con honestidad o no lo monetices en absoluto** — el tiempo de pacientes/usuarios se monetiza a tasas defendibles; el "valor de marca" no.
- **El NPV ordena, el BCR no**: un proyecto pequeño con BCR 5 puede importar menos que uno grande con BCR 1.6.

## Escollos

- **Monetizar lo no monetizable** para inflar los beneficios (moral, "alineación estratégica") — mantenlos como cualitativos, según el [análisis de coste-consecuencia](../cost-consequence-analysis/).
- **Contar las transferencias como beneficios**: el dinero que se mueve entre organismos públicos se anula a cero desde la [perspectiva](../analysis-perspective/) social.
- **Ausencia de contrafactual**: los beneficios se miden frente a la opción de mínima actuación, no frente a cero.

## Fuentes

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Guía de descuento del Green Book. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>

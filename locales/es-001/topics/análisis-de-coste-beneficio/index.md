# Análisis de Coste-Beneficio (ACB)

El ACB tasa tanto los costes *como* los resultados en dinero. Es el único tipo de análisis que puede responder "¿merece la pena hacer esto en absoluto?" — no solo "¿qué opción es mejor?" — porque los beneficios monetizados pueden compararse directamente con los costes.

## Por qué importa

El ACB es el estándar del **Green Book** de HM Treasury del Reino Unido para toda evaluación de gasto público, incluida la salud cuando los resultados pueden monetizarse. Donde el [AEC](../análisis-de-coste-efectividad/)/[ACU](../análisis-de-coste-utilidad/) se detiene en "coste por unidad de salud", el ACB tasa la propia salud (AVAC × valor umbral) y todo lo demás — tiempo, viaje, carbono — e informa una única cifra neta. Cada caso de negocio digital completo del NHS contiene un caso económico con forma de ACB.

## El cálculo

```
VPN (valor social presente neto) = Σ_t [ (Beneficios_t − Costes_t) / (1 + r)^t ]
RCB (ratio coste-beneficio)       = VP(beneficios) / VP(costes)

Adopta si VPN > 0 (equivalentemente RCB > 1); clasifica por VPN, no por RCB.
r = 3,5% (tasa de preferencia temporal social del Green Book)
```

Los efectos en salud pueden entrar monetizados como AVAC × λ (ver [umbrales de disposición a pagar](../umbrales-de-disposición-a-pagar/)). El Green Book también exige **ajustes de sesgo de optimismo** — elevando las estimaciones de coste y recortando los beneficios en porcentajes basados en evidencia, porque las evaluaciones son sistemáticamente optimistas.

## Ejemplo resuelto

Un sistema de derivación electrónica, horizonte de 5 años, descuento del 3,5%:

```
Costes:    construcción £1,2M (año 0), funcionamiento £300k/año (años 1–5)
Beneficios: ahorros administrativos £250k/año, diagnósticos duplicados evitados £280k/año,
          tiempo de paciente ahorrado 40.000 h/año × £15 = £600k/año → £1.130k/año

VP costes    = 1.200k + 300k × 4,515 (factor de anualidad) = £2.555k
VP beneficios = 1.130k × 4,515                          = £5.102k

VPN = 5.102 − 2.555 = +£2.547k     RCB = 2,0
```

Aplica el sesgo de optimismo del Green Book (digamos +40% en coste de construcción, −20% en beneficios): VP costes ≈ £3.035k, VP beneficios ≈ £4.082k, VPN ≈ **+£1.047k** — sigue siendo positivo, que es el propósito del ajuste: los casos deberían sobrevivir a su propio optimismo.

## Conexión con la ingeniería de software

Los casos de negocio de ingeniería son ACB informales. Las actualizaciones del Green Book que vale la pena robar:

- **Sesgo de optimismo como incremento estándar** — los ingenieros subestiman el coste de migración tan fiablemente como los ministerios subestiman el coste de infraestructura; aplica un incremento declarado en lugar de fingir que esta vez es diferente.
- **Monetiza el beneficio dominante honestamente o no en absoluto** — el tiempo del paciente/usuario se monetiza a tarifas defendibles; el "valor de marca" no.
- **VPN clasifica, RCB no**: un proyecto pequeño con RCB 5 puede importar menos que uno grande con RCB 1,6.

## Errores comunes

- **Monetizar lo no monetizable** para inflar beneficios (moral, "alineación estratégica") — mantén eso cualitativo, según [análisis de coste-consecuencia](../análisis-de-coste-consecuencia/).
- **Contar transferencias como beneficios**: el dinero que se mueve entre organismos públicos se neta a cero en la [perspectiva](../perspectiva-del-análisis/) social.
- **Sin contrafactual**: los beneficios se miden frente a la opción de mínimo esfuerzo, no frente a cero.

## Fuentes

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Guía de descuento del Green Book. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>

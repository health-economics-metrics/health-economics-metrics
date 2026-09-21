# Economía del Monitoreo Remoto de Pacientes

La economía de reembolso y compensación de costes del monitoreo de pacientes en casa: en EE. UU., una pila de ingresos definida por código CPT; en servicios de salud nacionales, economía de evitación de ingresos y sala virtual hasta la sustitución completa de **hospital-en-casa**.

## Por qué importa

El PMR es donde los datos del dispositivo se convierten en atención sanitaria facturable. La estructura de Medicare de EE. UU. (promedios nacionales de 2025) es inusualmente explícita:

```
99453  configuración y educación del paciente     ~$19,73  único (tras 16 días de datos)
99454  suministro de dispositivo + transmisión     ~$43,03  por 30 días — REQUIERE ≥16 días
                                              de lecturas en los 30
99457  primeros 20 min/mes de gestión ~$47,87  requiere ≥20 minutos registrados
99458  cada 20 min adicionales        ~$38,49
```

Un mes-paciente cumplidor se acumula a aproximadamente **$90–130 PMPM**. En el lado de la compensación de coste, los programas de hospital-en-casa (exención CMS Acute Hospital Care at Home: 300+ hospitales) muestran ~$1.800–$3.000 ahorrados por encuentro frente a la atención hospitalaria con menos reingresos e infecciones — la demostración más clara de que el monitoreo más la atención virtual pueden sustituir el recurso más caro del sistema, la cama con personal.

## El cálculo

```
Ingreso PMR (EE. UU.)  = inscritos × fracción cumplidora de facturación × pila de código PMPM
  — la regla de 16 días hace que el cumplimiento de tiempo de uso (wearable-validation.md)
    sea una variable de ingreso, y la regla de 20 minutos hace que el registro
    de tiempo clínico sea un requisito de ingeniería

Valor estilo NHS   = ingresos evitados × coste marginal de ingreso
                  + días-cama sustituidos × (coste de día hospitalario − coste de día en sala virtual)
                  − coste del servicio (dispositivos, plataforma, personal de monitoreo)
  (ver emergency-attendance-avoidance.md y bed-days-saved.md para las
   reglas de atribución y coste marginal)
```

## Ejemplo resuelto

Una consulta de EE. UU. inscribe a 400 pacientes de hipertensión; 70% cumple el umbral de 16 días en un mes típico; minutos de gestión registrados para el 60%:

```
Ingreso mensual ≈ 400 × [0,70 × 43,03 + 0,60 × 47,87] = 400 × 58,84 ≈ $23.500
Anual ≈ $282.000; coste del servicio (dispositivos $12/mes, personal 0,8 FTE) ≈ $180.000
Margen ≈ $100k/año — y nota que las palancas son palancas de ingeniería:
elevar el cumplimiento de 16 días de 70% → 85% añade ~$31k/año
(comodidad del dispositivo, fiabilidad de sincronización, diseño de recordatorio).
```

Espejo NHS: una sala virtual de 50 camas al 80% de ocupación sustituyendo días hospitalarios a £150 de ahorro neto/día ≈ 50 × 0,8 × 365 × 150 ≈ **£2,19M/año** bruto — frente a la plataforma, los dispositivos y el equipo de enfermería comunitaria que la dota de personal.

## Conexión con la ingeniería de software

Las plataformas de PMR son el raro producto donde **el tiempo de actividad y la fiabilidad de sincronización se convierten directamente en ingresos** (una semana de sincronizaciones fallidas rompe la puerta de 16 días para una cohorte) y donde el seguimiento de tiempo de grado auditoría (la regla de 20 minutos) es una funcionalidad de primera clase, no una ocurrencia tardía. Construye para: paneles de cumplimiento por paciente que muestren meses de facturación en riesgo mientras son recuperables; rastros de datos con marca de tiempo a prueba de manipulación (las auditorías de pagador son rutinarias); y ajuste de economía de alertas — cada alerta consume minutos del equipo de monitoreo, que son tanto la unidad facturable como el recurso escaso (la [economía del cribado](../economía-del-cribado/) rige la elección del umbral).

## Errores comunes

- **Inscripción ≠ ingreso**: la fracción cumplidora es la cifra; modélala, no la asumas.
- **Códigos de EE. UU. trasplantados a casos del NHS** — los servicios de salud nacionales compran evitación de ingresos, no pilas CPT; ejecuta el segundo modelo.
- **Reclamaciones de compensación a coste promedio** para ingresos cuyos costes fijos permanecen (ver [coste marginal frente a promedio](../coste-marginal-frente-a-promedio/)).
- **Saturación del equipo de monitoreo**: el volumen de alertas escala con la inscripción; la línea de personal es la restricción vinculante que la mayoría de los modelos omiten.

## Fuentes

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, facturación para PMR. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>

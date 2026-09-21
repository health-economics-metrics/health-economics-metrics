# Economía de la monitorización remota de pacientes

La economía de reembolso y compensación de costes de monitorizar a pacientes en su domicilio: en EE. UU., una cadena de ingresos definida por códigos CPT; en los servicios nacionales de salud, la economía de evitación de ingresos y de la sala virtual hasta la sustitución completa mediante **hospitalización a domicilio**.

## Por qué importa

La RPM (monitorización remota de pacientes) es donde los datos de los dispositivos se convierten en asistencia sanitaria facturable. La estructura de Medicare en EE. UU. (medias nacionales de 2025) es inusualmente explícita:

```
99453  configuración y educación del paciente     ~$19.73  pago único (tras 16 días de datos)
99454  suministro del dispositivo + transmisión    ~$43.03  cada 30 días — REQUIERE ≥16 días
                                                              de lecturas en esos 30
99457  primeros 20 min/mes de gestión              ~$47.87  requiere ≥20 minutos registrados
99458  cada 20 min adicionales                     ~$38.49
```

Un mes-paciente que cumple los requisitos suma aproximadamente **90-130 $ PMPM** (por miembro y mes). En el lado de la compensación de costes, los programas de hospitalización a domicilio (la exención de CMS "Acute Hospital Care at Home": más de 300 hospitales) muestran un ahorro de ~1,800-3,000 $ por episodio frente a la atención hospitalaria, con menos reingresos e infecciones: la demostración más clara de que la monitorización combinada con la atención virtual puede sustituir al recurso más caro del sistema, la cama con personal asignado.

## Las matemáticas

```
Ingresos por RPM (EE. UU.)  = pacientes inscritos × fracción que cumple la facturación × cadena de códigos PMPM
  — la regla de los 16 días convierte el cumplimiento del tiempo de uso (wearable-validation.md)
    en una variable de ingresos, y la regla de los 20 minutos convierte el registro
    del tiempo clínico en un requisito de ingeniería

Valor al estilo NHS   = ingresos evitados × coste marginal del ingreso
                      + días de cama sustituidos × (coste día hospitalario − coste día en sala virtual)
                      − coste del servicio (dispositivos, plataforma, personal de monitorización)
  (véanse emergency-attendance-avoidance.md y bed-days-saved.md para las
   reglas de atribución y de coste marginal)
```

## Ejemplo práctico

Una consulta estadounidense inscribe a 400 pacientes hipertensos; el 70% cumple el umbral de 16 días en un mes típico; los minutos de gestión se registran en el 60%:

```
Ingresos mensuales ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Anual ≈ $282,000; coste del servicio (dispositivos $12/mes, personal 0.8 FTE) ≈ $180,000
Margen ≈ $100.000/año — y obsérvese que las palancas son palancas de ingeniería:
elevar el cumplimiento de los 16 días del 70% al 85% añade ~$31.000/año
(comodidad del dispositivo, fiabilidad de sincronización, diseño de recordatorios).
```

Reflejo en el NHS: una sala virtual de 50 camas al 80% de ocupación que sustituye días de hospitalización con un ahorro neto de 150 £/día ≈ 50 × 0.8 × 365 × 150 ≈ **2.19 M£/año** en bruto, frente a la plataforma, los dispositivos y el equipo de enfermería comunitaria que la dota de personal.

## Conexión con la ingeniería de software

Las plataformas de RPM son el raro producto en el que **el tiempo de actividad y la fiabilidad de sincronización se convierten directamente en ingresos** (una semana de sincronizaciones fallidas rompe el umbral de 16 días para una cohorte) y donde el registro de tiempo con calidad de auditoría (la regla de los 20 minutos) es una funcionalidad de primer orden, no un añadido. Hay que construir para: paneles de cumplimiento por paciente que muestren los meses de facturación en riesgo mientras aún son recuperables; rastros de datos con marca de tiempo y a prueba de manipulaciones (las auditorías de los pagadores son rutinarias); y el ajuste de la economía de las alertas — cada alerta consume minutos del equipo de monitorización, que son a la vez la unidad facturable y el recurso escaso ([la economía del cribado](../screening-economics/) rige la elección del umbral).

## Escollos

- **Inscripción ≠ ingresos**: la fracción que cumple los requisitos es la cifra que importa; modélala, no la des por supuesta.
- **Códigos de EE. UU. trasplantados a casos del NHS** — los servicios nacionales de salud compran evitación de ingresos, no cadenas de códigos CPT; aplica el segundo modelo.
- **Reclamaciones de compensación a coste medio** para ingresos cuyos costes fijos permanecen (véase [coste marginal frente a coste medio](../marginal-vs-average-cost/)).
- **Saturación del equipo de monitorización**: el volumen de alertas escala con las inscripciones; la línea de personal es la restricción vinculante que la mayoría de los modelos omiten.

## Fuentes

- Códigos CPT de RPM y tarifas de 2025. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- Informes de resultados de hospitalización a domicilio de CMS. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, facturación de la RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>

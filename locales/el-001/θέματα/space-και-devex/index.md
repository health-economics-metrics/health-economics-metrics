# SPACE και DevEx

Τα SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow) και DevEx (βρόχοι ανάδρασης, γνωστικό φορτίο, κατάσταση ροής) είναι πλαίσια μέτρησης της παραγωγικότητας των προγραμματιστών **πολυδιάστατα** — η απάντηση του χώρου στην ανακάλυψη ότι κανένας μεμονωμένος δείκτης δεν επιβιώνει της επαφής με την πραγματικότητα.

## Γιατί έχει σημασία

Και τα δύο πλαίσια κωδικοποιούν το ίδιο σκληρά κερδισμένο μάθημα που έμαθε η έρευνα εκβάσεων υγείας δεκαετίες νωρίτερα: ένας μεμονωμένος αριθμός (γραμμές κώδικα· αρτηριακή πίεση) παραποιεί μια πολυδιάστατη πραγματικότητα, και η βελτιστοποίησή του παράγει παραπλάνηση, όχι βελτίωση. Το SPACE ορίζει τον συνδυασμό δεικτών από τουλάχιστον τρεις διαστάσεις, με μείξη τηλεμετρίας και αυτοαναφοράς — δομικά πανομοιότυπο με το πώς το [EQ-5D](../eq-5d/) προφίλ πέντε διαστάσεων προηγείται κάθε υπολογισμού δείκτη, και γιατί τα [PROM](../εκβάσεις-αναφερόμενες-από-τον-ασθενή/) υπάρχουν παράλληλα με τα κλινικά μέτρα. Η ικανοποίηση/ευεξία δεν είναι ούτε «μαλακό» γαρνίρισμα: τροφοδοτεί την οικονομική της [διατήρησης εργατικού δυναμικού](../διατήρηση-εργατικού-δυναμικού/), όπου η αποχώρηση τιμολογείται σε μήνες πλήρως επιβαρυμένου μισθού.

## Τα μαθηματικά

Κανένα από τα δύο πλαίσια δεν είναι τύπος· και τα δύο είναι σχεδιασμοί μέτρησης:

```
SPACE rule: ≥ 3 dimensions, ≥ 1 perceptual (survey) + ≥ 1 system (telemetry) metric

DevEx dimensions and example pairings:
  feedback loops  → CI duration (telemetry) + "waiting feels slow" (survey)
  cognitive load  → docs findability, onboarding time + perceived effort
  flow state      → meeting/interrupt density + self-reported focus

Derived indices (e.g., DX's DXI) map survey composites to time:
vendor claim ≈ 13 min/dev/week per index point — treat as a vendor
benchmark to validate locally, not a constant of nature.
```

## Αναλυτικό παράδειγμα

Μια ομάδα πλατφόρμας δικαιολογεί μια επένδυση DevEx (επιτάχυνση CI + ανανέωση τεκμηρίωσης) για 300 προγραμματιστές:

```
Baseline: CI p75 = 28 min; survey "I lose focus waiting for builds": 62% agree
After:    CI p75 = 9 min;  agreement 24%

Time reclaimed (telemetry): 6 builds/day × 19 min × 0.4 usable = ~45 min/day/dev
Capacity value: 300 × 0.75h × 220d × £60/h ≈ £2.97M/year (non-cash-releasing —
see cash-releasing-vs-non-cash-releasing.md; the 0.4 usability factor is the
fragmentation discount from practitioner-time.md)
Perceptual corroboration is what makes the telemetry claim credible — either
alone is gameable; together they triangulate.
```

## Σύνδεση με τη μηχανική λογισμικού

Αυτό το κείμενο *είναι* η πλευρά του λογισμικού· η μεταφορά κατευθύνεται προς την οικονομική της υγείας. Ένα «προσαρμοσμένο ως προς την ποιότητα έτος μηχανικού» — χρόνος σταθμισμένος με έναν τυποποιημένο δείκτη εμπειρίας — είναι η κατασκευή του [QALY](../έτος-ζωής-προσαρμοσμένο-ως-προς-την-ποιότητα/) εφαρμοσμένη στη δυναμικότητα μηχανικής, και κληρονομεί τους κανόνες του QALY: σταθμίσεις από επικυρωμένο όργανο (συνεπής έρευνα, δημοσιευμένη βαθμολόγηση), που αποσπώνται *πριν* από τη σύγκριση, ποτέ ρυθμισμένες ώστε να κολακεύουν ένα αγαπημένο εργαλείο. Ισχύει και το δίδαγμα [SF-6D έναντι EQ-5D](../eq-5d/): διαφορετικά όργανα δίνουν συστηματικά διαφορετικούς αριθμούς, άρα μη συγκρίνετε ποτέ δείκτες DevEx μεταξύ οργάνων διαφορετικών προμηθευτών.

## Παγίδες

- **Κατάρρευση σε έναν δείκτη**: πίνακες ελέγχου που ανάγουν το SPACE σε μία βαθμολογία αναπαράγουν το πρόβλημα που το πλαίσιο υπάρχει για να αποτρέψει.
- **Δείκτες δραστηριότητας ως εκβάσεις**: τα commits, τα PR και οι story points είναι Activity — η διάσταση που το SPACE προειδοποιεί ρητά ότι είναι η πιο εύκολα παραποιήσιμη (αντίστοιχο στην υγεία: μέτρηση διαδικασιών, όχι αναρρώσεων).
- **Κόπωση ερευνών και φαινόμενα Hawthorne**: τριμηνιαία ελαφριά όργανα υπερτερούν της εβδομαδιαίας ανάκρισης.
- **Σύγκριση ομάδων**: όπως οι κατατάξεις νοσοκομείων χωρίς προσαρμογή για σύνθεση περιστατικών — οι διαφορές πλαισίου (τομέας, φορτίο παλαιού κώδικα, on-call) κυριαρχούν.

## Πηγές

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>

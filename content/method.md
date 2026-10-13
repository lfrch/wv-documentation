---
title: Methode
sidebar_position: 3
---

# Methode

## Inhalt

Dokumentiere das Forschungsdesign, die Datenerhebung, die Analyseschritte sowie eingesetzte Werkzeuge oder Verfahren.

## Forschungsdesign

Die Arbeit ist als systematische Literaturanalyse mit Meta-Review-Charakter angelegt. Untersucht wird, wie Zustandstransparenz in Conversational-AI-Systemen beschrieben und gestaltet wird. Im Mittelpunkt stehen nicht nur einzelne UI-Elemente, sondern die Zustände eines Systems, die Übergänge zwischen ihnen und die Frage, welche Informationen für Nutzende in einer konkreten Situation sichtbar und verständlich werden sollten.

Das Forschungsdesign folgt einer Trichterlogik:

1. **RQ1 – Bestandsaufnahme:** Relevante Interaktionszustände und Zustandsübergänge werden aus der Forschung zu Conversational AI herausgearbeitet.
2. **RQ1.1 – Systematisierung:** Die gefundenen Zustände werden anhand wiederkehrender Merkmale, beispielsweise Initiator, Sichtbarkeit, Zeitpunkt, Kontextabhängigkeit, Nutzerkontrolle und erwartete Wirkung, vergleichbar beschrieben.
3. **RQ1.2 – Transfer:** Die Merkmale werden auf Domänen und Use Cases bezogen, in denen Transparenz, Kontrolle oder kalibriertes Vertrauen besonders wichtig sind.

Damit verbindet die Methode eine deskriptive Literaturübersicht mit einer analytischen Verdichtung. Die Literatur liefert zunächst die Fälle und Begriffe; daraus entsteht ein Merkmalsraster, das anschließend zur Bewertung von Forschungslücken und Anwendungspotenzialen genutzt wird.

## Literatursuche und Screening

Die Recherche wurde über kombinierte Suchstrings zu Conversational AI, Dialog- und Interaktionszuständen, Transparenz, Sichtbarkeit, Reasoning, Tool-Use und Systemstatus strukturiert. Die Suchstrategie ist auf der Seite [Literaturanalyse](literature-analysis) dokumentiert. Die Treffer wurden anschließend über ein PRISMA-orientiertes Screening reduziert und nach ihrer Relevanz für die Forschungsfragen eingeordnet.

Für die Synthese wurden insbesondere Arbeiten berücksichtigt, die mindestens einen der folgenden Aspekte behandeln:

- einen expliziten oder impliziten Interaktionszustand beziehungsweise einen Zustandsübergang;
- eine sichtbare oder erklärbare Systemaktivität, etwa Reasoning, Tool-Aufruf, Quellenbezug oder Unsicherheit;
- eine Nutzerkontrolle, ein mentales Modell oder eine Vertrauenswirkung;
- ein Modell, eine Taxonomie, ein Interface oder einen empirischen Befund mit Bezug zu Conversational AI.

Die Kriterien dienen der inhaltlichen Abgrenzung. Sie schließen weder technische Frameworks noch Nutzerstudien oder konzeptionelle Beiträge grundsätzlich aus, solange diese einen nachvollziehbaren Beitrag zur Zustandstransparenz leisten.

## Datenextraktion

Für jede eingeschlossene Arbeit werden die folgenden Informationen erfasst:

| Dimension | Leitfrage |
| --- | --- |
| Interaktionszustand | Welcher System-, Dialog-, Reasoning- oder Nutzerzustand wird beschrieben? |
| Übergang | Was löst den Wechsel aus, wer initiiert ihn und wie wird er beendet? |
| Transparenzobjekt | Welche Aktivität, Fähigkeit, Unsicherheit, Quelle oder interne Repräsentation wird sichtbar? |
| System- und UI-Merkmale | Welche technische Struktur oder welches Interface macht den Zustand beobachtbar oder steuerbar? |
| Nutzerwirkung | Welche Folgen werden für Verständnis, Vertrauen, Agency, Anthropomorphie, Effizienz oder Over-Reliance berichtet? |
| Kontext und Domäne | In welchem Nutzungskontext tritt der Zustand besonders deutlich hervor? |
| Evidenztyp | Handelt es sich um ein Framework, einen Prototyp, eine technische Evaluation, eine Nutzerstudie oder einen Review? |

Diese Extraktion trennt das **Was** des Zustands vom **Wie** seiner Darstellung und vom **Warum** seiner Relevanz. Dadurch lassen sich Arbeiten mit sehr unterschiedlichen Methoden und Systemtypen trotzdem entlang eines gemeinsamen Rasters vergleichen.

## Analyseschritte

Die Auswertung erfolgt in vier Schritten:

1. **Kodieren:** Zustände, Übergänge, Transparenzobjekte und Gestaltungsmittel werden aus den Arbeiten extrahiert.
2. **Clustern:** Ähnliche Beiträge werden zu übergeordneten Gruppen wie Dialogmodus-Wechsel, Proaktivität, Reasoning-Sichtbarkeit, explizite Zustandsmodelle, Autonomie oder Vertrauenskalibrierung gebündelt.
3. **Vergleichen:** Innerhalb der Cluster werden Gemeinsamkeiten, Unterschiede, Evidenztypen und mögliche Zielkonflikte herausgearbeitet. Dazu gehören insbesondere die Spannung zwischen maximaler Transparenz und kognitiver Belastung sowie zwischen Automatisierung und Nutzerkontrolle.
4. **Verdichten:** Die Cluster werden zu einem Merkmalsraster und einer Domänenbewertung für RQ1.1 und RQ1.2 zusammengeführt.

Das Ergebnis ist deshalb keine Rangliste einzelner Systeme. Es ist eine strukturierte Landkarte, die sichtbar macht, welche Zustände in der Literatur vorkommen, wie sie vermittelt werden und unter welchen Bedingungen ein Übergang für Nutzende nachvollziehbar und angemessen sein kann.

## Qualität und Grenzen

Die Vergleichbarkeit wird erhöht, indem technische Beiträge, Reviews, Frameworks, Prototypen und empirische Studien als unterschiedliche Evidenztypen ausgewiesen werden. Aussagen über Nutzerwirkungen werden daher nicht automatisch auf alle Systemtypen übertragen. Eine technische Implementierung belegt beispielsweise die Existenz eines Zustands, aber nicht ohne Weiteres dessen Verständlichkeit oder Wirkung auf Vertrauen.

Die Synthese ist außerdem durch die Auswahl der Datenbanken, Suchbegriffe, Publikationsjahre und die subjektive Bewertung von Relevanz begrenzt. Die Ergebnisse sind als methodisch begründete Kartierung des Forschungsfeldes zu lesen, nicht als vollständige Erfassung jeder Arbeit zu Conversational AI. Diese Begrenzung wird bei der Ableitung von Forschungs- und Anwendungspotenzialen berücksichtigt.
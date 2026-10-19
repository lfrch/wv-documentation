---
title: Artefakte
sidebar_position: 5
---

# Artefakte

## Inhalt

Sammle hier Abbildungen, Tabellen, Auszüge, Datensätze, Anhänge und andere unterstützende Materialien.

## Literaturauswertung und ergänzende Artefakte

<details>
<summary><strong>Synthese: Zustandstransparenz (n=51)</strong></summary>

Synthese der als **High** eingestuften Arbeiten des Literatur-Screenings (Ansicht Relevanz = High, aktueller Stand). Ausgerichtet an den Forschungsfragen: **RQ1** (relevante Interaktionszustände/-übergänge), **RQ1.1** (Merkmale zur Unterscheidung), **RQ1.2** (Domänen mit besonderer Ausprägung und Forschungs-/Anwendungspotenzial).

**51 High-Paper** · **10 Zustands-Cluster**

## Querbefunde über alle Cluster

**Gemeinsamkeiten**

- Transparenz ist zu dosieren, nicht zu maximieren — kontextabhängiges „Goldilocks"-Niveau je Aufgabe, Expertise und kognitiver Last (Pareek, Chromik & Butz, Becker & Fischer; konzeptioneller Rahmen: Liao & Vaughan).
- Sichtbare interne Prozesse und Zustände (CoT, Reasoning Traces, Actions, Rationale, Quellen, internes Nutzermodell) steigern Verständnis, Vertrauen und wahrgenommene Anthropomorphie (Ebrahimi, Chang, Brachman, He, Chen, Cox, Gao & Sang).
- Sichtbares „Denken" wirkt jedoch kontextabhängig: förderlich in nicht-produktiven bzw. sensiblen Kontexten, abgeschwächt oder kontraproduktiv bei Produktiv-/Effizienzaufgaben (Gao & Sang, Cox, Do).
- Unsicherheits-, Konfidenz- und Fehlertransparenz als zentraler Hebel gegen Over-Reliance und für kalibriertes Vertrauen (Kim 2024, Steyvers, von Reeken, Dey, Tutul).
- Wiederkehrende Zustandsübergänge: Moduswechsel TOD↔ODD, reaktiv→proaktiv, Dialog→Tool-Ausführung — system-initiiert, aber nachvollziehbar.
- Vertrauen als kalibrierbarer, zustandsabhängiger Wert, der mit Fehlern, Kontingenz und Unsicherheitsanzeige steigt oder fällt.

**Unterschiede**

- Zustandsbegriff variiert: explizite Modelle (FSM, stateful orchestration, Dialogmodi) vs. implizite/relationale Zustände (Common Ground, mentale Modelle, Vertrauen).
- Methodik: technische System-/Benchmark-Beiträge vs. empirische Nutzerstudien vs. Reviews/konzeptionelle Frameworks.
- Wirkung uneinheitlich: dieselbe Prozesssichtbarkeit fördert teils kalibriertes Vertrauen, teils Over-Reliance (He, Ebrahimi) oder wirkt kontraproduktiv (Do).
- Transparenz-Objekt unterschiedlich: Reasoning, Fähigkeiten, Datennutzung, Herkunft/Quellen, Turn-Taking-Timing, internes Nutzermodell (Chen) oder die Verlagerung von Nutzer-Agency (Wu & Yao).
- Zunehmend rückt neben der Sichtbarkeit auch die **Kalibrierung** ins Zentrum: die Lücke zwischen tatsächlicher Modellkonfidenz und wahrgenommener Zuverlässigkeit (Steyvers) und die sprachliche Kommunikation von Unsicherheit (Kim 2024).

## Tabellarische Synthese - Interaktionszustände & -übergänge

### 1. Dialogmodus-Wechsel (TOD ↔ ODD)  (3 Paper)

| Arbeit | Zustände & Übergänge (transparent zu machen) | Systemische / UI-Merkmale | Gemeinsamkeiten | Unterschiede |
| --- | --- | --- | --- | --- |
| **Young et al. (2022)** — FusedChat: Inter-Mode-Dialoge | Zwei Dialogmodi als Zustände – aufgabenorientiert (TOD) vs. offen/Chit-Chat (ODD); transparent gemacht wird der nahtlose Inter-Mode-Übergang innerhalb einer Konversation, den das System selbst erkennen und vollziehen muss. | Automatische Modus-Erkennung und kontextsensitiver Moduswechsel; modusübergreifende Kontextauflösung (Koreferenz, Ellipse); FusedChat-Datensatz (auf MultiWOZ-Basis) als Benchmark für Inter-Mode-Dialoge. | Vereint TOD und ODD in einem System für natürlichere Interaktion; teilt mit Zhao und Liu (2023) das Ziel flüssiger Moduswechsel. | Fokus auf modusübergreifende Kontextabhängigkeit (Koreferenz, Ellipse) und stellt mit FusedChat einen eigenen Inter-Mode-Benchmark bereit. |
| **Liu et al. (2023)** — System-Initiated Mode Transitions | TOD- und Chit-Chat-Zustand; Fokus auf system-initiierte Übergänge und die Initiative beim Moduswechsel – impliziter Einstieg über Task-Themen sowie Wechsel zu Small Talk nach Informationsübergabe. | Proaktiv generierte Übergangssätze via Prompt-Modelle lösen die Moduswechsel aus; zwei definierte Wechselszenarien für flüssige, natürliche Übergänge, auch in Multi-Domain-Settings. | Teilt mit Young und Zhao die TOD/ODD-Vereinigung und das Ziel natürlicher Moduswechsel. | Isoliert gezielt die bislang kaum erforschte System-Initiative beim Wechsel und erzeugt Übergänge über generierte Übergangssätze. |
| **Zhao et al. (2022)** — UniDS: Unified Dialogue System | Chit-Chat (ODD) und aufgabenorientiert (TOD) als Interaktionszustände in einem einheitlichen System; Ziel ist ein natürlicherer Wechsel zwischen Plaudern und Aufgabenerfüllung innerhalb einer Konversation. | Einheitliches Framework bewältigt beide Modi ohne zusätzliche Parameter, trainiert auf gemischten Dialogdaten; keine separaten Systeme nötig. | Teilt mit Young und Liu (2023) das Ziel, TOD und ODD zu vereinen für flüssigere Mensch-Agent-Interaktion. | Betont die parameterfreie Vereinheitlichung in einem einzigen Modell, trainiert auf gemischten Dialogdaten. |

## 02 · Proaktivität, Initiative & Turn-Taking  (6 Paper)

| Arbeit | Zustände & Übergänge (transparent zu machen) | Systemische / UI-Merkmale | Gemeinsamkeiten | Unterschiede |
| --- | --- | --- | --- | --- |
| **Liu et al. (2025)** — Inner Thoughts | Übergang von reaktivem Antworten zu eigeninitiativem Beitragen; das System modelliert proaktives Turn-Taking und sucht den richtigen Moment für einen Beitrag statt nur auf Turn-Taking-Signale zu reagieren. | Kontinuierlicher, verdeckter Inner-Thoughts-Reasoning-Strom parallel zur Konversation; nachvollziehbar gemachter interner Strom steigert wahrgenommene Intelligenz und Angemessenheit des Turn-Takings. | Teilt mit Lee, Deng und Kuang den Fokus auf angemessen getimte, nicht aufdringliche Proaktivität. | Rahmt Proaktivität als Timing-Problem und nutzt einen kontinuierlichen internen Reasoning-Strom zur Bestimmung des richtigen Beitragsmoments. |
| **Lee et al. (2025)** — Sensible Agent (proaktive AR) | Übergang von störenden expliziten Sprachprompts zu minimal-intrusiver, kontextangepasster Zustellung; proaktive Assistenz über zwei Achsen – was angeboten wird (Aktion) und wie es zugestellt wird (Modalität). | Multimodales Echtzeit-Kontextsensing (egozentrische Kamera, LMMs) löst Zustandsübergänge aus und steuert Zeitpunkt und Form der Intervention; senkt wahrgenommenen Interaktionsaufwand. | Teilt mit Liu (2025), Deng und Kuang das Ziel unaufdringlicher, kontextangepasster Proaktivität. | Koppelt Aktion (was) und Modalität (wie) und nutzt egozentrisches multimodales Sensing im AR-Kontext gegen sprachbasierte Baselines. |
| **Deng et al. (2024)** — Human-centered PCA-Taxonomie | Unterscheidet proaktive von reaktiven Systemzuständen über die Initiativergreifung; verortet Zustände/Übergänge entlang fünf Stufen der PCA-Konstruktion. Kritischer Übergang: unbedacht gestaltete Proaktivität wirkt aufdringlich. | Taxonomie mit drei Dimensionen – Intelligence, Adaptivity, Civility; Adaptivität und Civility als Hebel, um Aufdringlichkeit zu vermeiden. | Teilt mit Liu (2025) und Lee die Sorge um nicht aufdringliche Proaktivität. | Liefert einen konzeptuellen Taxonomie-/Framework-Beitrag (nutzerzentriert, ethisch-sozial) statt eines konkreten Systems. |
| **Kim et al. (2026)** — Let Me Finish (Voice CA) | Unvorhersehbare Turn-Übergänge und Brüche der Gesprächskontinuität bei LLM-Voice-Agents lösen Sprechhemmung bei Nutzenden mit Communication Apprehension aus; transparent zu machen sind kontextsensitive Turn-Übergänge. | Aus Breakdown-Episoden abgeleitete Design-Cues: kontextuelles Turn-Taking, aktive Zuhör-Signale, explizite Nutzerkontrolle und sichere Voice-Interaktion. | Teilt mit Brandt den Fokus auf Turn-Taking und Sequenzorganisation in Sprachschnittstellen. | Adressiert spezifisch angstbetroffene Nutzende (Communication Apprehension) und leitet Cues aus einem Co-Design-Workshop mit Breakdown-Episoden ab. |
| **Kuang et al. (2024)** — Proaktive UX-Evaluation & Timing | Übergang vom passiven zum vorschlagenden System; proaktive, systeminitiierte Dialogzustände mit automatischen Vorschlägen zu drei Zeitpunkten (davor, synchron, danach) relativ zu erkannten Usability-Problemen. | Systeminitiierte Vorschläge mit variiertem Timing als Designvariable; Vorschläge nach dem Problem bevorzugt, steigern Vertrauen und Effizienz. | Teilt mit Liu (2025), Lee und Deng die Relevanz von Timing und wahrgenommener Kompetenz proaktiver Initiative. | Empirischer Vergleich dreier Timing-Bedingungen; Vorschläge nach dem Problem optimal, menschliche Expertise bleibt unersetzlich. |
| **Brandt et al. (2023)** — Conversation Analysis für VUIs | Rückt Turn-Taking, Sequenzorganisation und die interaktive Herstellung von Gesprächszuständen in den Fokus; kritisiert skriptbasiertes Design und plädiert für an realer Interaktion orientierte Dialoginfrastruktur. | Konversationsanalyse natürlicher Gesprächssequenzen des Einsatzkontexts als empirische Grundlage für naturalistische Turn-Taking- und Sequenzgestaltung. | Teilt mit Kim den Fokus auf naturalistisches Turn-Taking und Sequenzorganisation in Sprachschnittstellen. | Methodischer Beitrag: Konversationsanalyse statt skriptbasiertem VUI-Design als Gestaltungsgrundlage. |

## 03 · Prozess- & Reasoning-Sichtbarkeit / sichtbares Denken (CoT, Reasoning Traces, interne Zustände)  (7 Paper)

| Arbeit | Zustände & Übergänge (transparent zu machen) | Systemische / UI-Merkmale | Gemeinsamkeiten | Unterschiede |
| --- | --- | --- | --- | --- |
| **Liao & Vaughan (2023)** — AI-Transparency-Roadmap | Kein Zustandsmodell, sondern konzeptioneller Anker: Transparenz als stakeholder- und kontextabhängiges, mehrdimensionales Designproblem – gebündelt aus Model Reporting, Evaluationsergebnissen, Erklärungen und Unsicherheitskommunikation. | Human-zentrierte Roadmap für LLM-Transparenz; ordnet die vier Transparenzansätze und betont Kontext-/Zielabhängigkeit. | Rahmt die Prozesssichtbarkeits-Beiträge (Pareek, Chang, Ebrahimi) konzeptionell und teilt die Goldilocks-/Kontextlogik. | Übergreifender Roadmap-/Review-Beitrag statt eines konkreten Mechanismus; liefert die Forschungsagenda für Zustandstransparenz bei LLMs. |
| **Pareek et al. (2026)** — Sensemaking Multi-Agent-Transparenz | Transparenz als dynamischer Zustand; Übergänge zwischen zu geringer, genau richtiger und zu hoher Prozesssichtbarkeit. Der angemessene Grad verschiebt sich mit Aufgabentyp, Interface und Nutzermerkmalen; Reasoning-Schritte werden als Vertrauenssignale gedeutet. | Sichtbar gemachte Reasoning-Schritte in Multi-Agent-LLM-Interfaces; Nutzer wägen Prozesssichtbarkeit, Informationsausreichung und kognitiven Aufwand gegeneinander ab (Goldilocks-Niveau). | Teilt mit Ebrahimi und Chang die Sichtbarmachung von Reasoning als Transparenz- und Vertrauenssignal. | Betont adaptive, kontextabhängige Dosierung (Goldilocks) statt maximaler Transparenz; Fokus auf Nutzer-Sensemaking von Cues. |
| **Chang et al. (2026)** — Criticality: Reasoning Traces | Operationalisiert den Paul-Elder-Rahmen für kritisches Denken über interaktive Elements of Thought (z. B. Ziel, Annahmen, Perspektiven und Implikationen) und Intellectual Standards (z. B. Klarheit, Fairness und Logik). Jede Behauptung wird mit Evidenz verknüpft und als stützend, neutral oder widersprüchlich klassifiziert. | Interaktive Reasoning Traces, Guidance-/Recommendation-Loop und Decision Matrix; Abbildungen 1 und 7 zeigen die Strukturierung des kritischen Denkens und die Evidenz-Behauptungs-Verknüpfung. | Teilt mit Pareek und Ebrahimi die Sichtbarmachung des Reasoning-Prozesses zur nachvollziehbaren Entscheidungsunterstützung. | Betont evidenzbasiertes Scaffolding und positive Reibung, angepasst an Kompetenz, Aufgabenkomplexität und kognitive Last. |
| **Ebrahimi et al. (2026)** — Opening the Black Box (CoT) | Sichtbarmachung des Reasoning-Prozesses (Chain-of-Thought) als Transparenzmechanismus – die Black Box wird geöffnet; macht die Herleitung von Empfehlungen transparent und kohärent, wichtig bei Unsicherheit und wertbehafteten Trade-offs. | Sichtbares CoT-Reasoning eines Chatbots vs. Standardversion; erhöht wahrgenommenes Wissen, Nützlichkeit, Vertrauen, Personalisierung und Verhaltensintention. | Teilt mit Pareek und Chang, dass sichtbares Reasoning Transparenz, Vertrauen und Nützlichkeit stärkt. | Empirischer Vergleich CoT- vs. Standard-Chatbot in nachhaltigem Konsum; Mediatoren überwiegen Inhibitoren (kognitive Last, Privacy). |
| **Chen et al. (2024)** — TalkTuner: Transparenz-/Kontroll-Dashboard | Der interne „User-Model"-Zustand des LLM (Alter, Geschlecht, Bildung, SES) wird sichtbar gemacht; Übergang vom verdeckten internen Zustand zu einem einsehbaren und aktiv steuerbaren Zustand am Chat-Interface. | Echtzeit-Dashboard neben dem Chat via Linear Probes; Abbildung 2 zeigt das User-Model-Dashboard. Nutzer können das interne Modell und damit das Systemverhalten kontrollieren. | Teilt mit Cox und Gao & Sang das Sichtbarmachen interner Prozesse/Zustände als Transparenz- und Vertrauenshebel. | Macht nicht Reasoning, sondern die interne Nutzerrepräsentation sichtbar – und koppelt Transparenz erstmals mit direkter Nutzerkontrolle. |
| **Cox et al. (2026)** — Watching AI Think | Sichtbarer „Thinking"-/Reflexionszustand vor der Antwort (None vs. emotional- vs. expertise-unterstützend); wertorientierte Reflexion signalisiert Absicht/Haltung des Systems – kontextabhängig (Habit- vs. Feelings-bezogene Anliegen). | 3×2-Experiment in Help-Seeking-Dialogen; Sichtbarkeit und Framing des „Denkens" prägen Empathie, Wärme und Kompetenz, während None unengagiert wirkt. | Teilt mit Gao & Sang und Chen das Sichtbarmachen des „Denkens"/interner Prozesse und dessen kontextabhängige Wirkung. | Fokus auf sensible Help-Seeking-Dialoge und wertorientierte statt deduktiver Reflexion. |
| **Gao und Sang (2026)** — Effekt sichtbaren CoT | Sichtbar gemachter Reasoning-/CoT-Zustand vor der finalen Antwort (angezeigt vs. nicht); Übergang vom reinen Output zum sichtbaren Denkprozess. | 2×2×2-Experiment; sichtbares CoT erhöht wahrgenommenen Anthropomorphismus und darüber Einstellung und Weiternutzung – jedoch kontextmoderiert. | Teilt mit Cox und Ebrahimi die Wirkung sichtbaren Reasonings auf Wahrnehmung und Nutzung. | Zeigt die Kontextgrenze: förderlich bei nicht-produktiven, abgeschwächt bei produktiven Aufgaben (Media Evocation statt Media Equation). |

## 04 · Explizite Zustandsmodelle & Dialogue Management (FSM, stateful orchestration, Dialogfluss-Design)  (4 Paper)

| Arbeit | Zustände & Übergänge (transparent zu machen) | Systemische / UI-Merkmale | Gemeinsamkeiten | Unterschiede |
| --- | --- | --- | --- | --- |
| **Rateria & Singh (2024)** — FSM-basierte Dialogsteuerung | Finite-State-Machines als zentrale Struktur der Dialogsteuerung; explizite Zustände und Übergänge strukturieren die Konversation und machen Ablauf und Verantwortlichkeiten sichtbar, um Nachvollziehbarkeit und Kontrolle in dynamischen Situationen zu gewährleisten. | Explizite FSM/State-Machine mit Workflow (Figure 2), systematisch modellierte Übergänge, Kontext- und Metadaten-Nutzung, Offenlegung der Entscheidungswege, modulare Architektur. | Teilt mit Brabra, Valtolina und Wu die Steuerung über explizite Zustandsmodelle für Transparenz und Nachvollziehbarkeit. | Verbindet FSM-Dialogsteuerung mit transparenter, ressourcenarmer, kontextsensitiver Retrieval aus geschlossener Wissensbasis. |
| **Brabra et al. (2021)** — Dialogue-Management-Review | Kernthema ist die Steuerung des Dialogflusses (Dialogue Management), also das Verwalten von Interaktionszuständen und -übergängen; systematisiert aus Design-Perspektive Ansätze, Herausforderungen und Perspektiven. | Vergleich und Systematisierung zeitgenössischer DM-Ansätze; unterstützt Auswahl skalierbarer, robuster DM-Strategien je nach Anforderung. | Teilt mit Rateria, Valtolina und Wu den Fokus auf explizite Dialogsteuerung als zentrale Funktion. | Review-Charakter: liefert Landkarte der DM-Ansätze und Herausforderungen statt eines eigenen Zustandsmodells oder Systems. |
| **Valtolina et al. (2021)** — Visuelle Dialogfluss-Gestaltung | Explizit visuell repräsentierter Dialogfluss macht Zustände und Transitionen der Konversation sichtbar; adressiert Prozesstransparenz auf Gestaltungsebene, indem Intents, Aktionen, Entitäten und Parameter visuell spezifiziert werden. | Visuelle Entwicklungsumgebung, in der Domänenexperten Dialogflüsse ohne tiefe Programmierkenntnisse gestalten; automatische Übersetzung nach DialogFlow. | Teilt mit Rateria, Brabra und Wu die explizite Zustands-/Transitionsmodellierung für sichtbare Interaktionszustände. | Zielt auf Gestaltende (Domänenexperten) und senkt die Einstiegshürde über eine visuelle No-/Low-Code-Modellierungsumgebung. |
| **Wu et al. (2023)** — PROMISE: Stateful Prompt Orchestration | Modelliert Konversationen explizit über State-Machine-Konzepte: hierarchisch verschachtelte Zustände und Übergänge steuern modellgetrieben die dynamische Prompt-Orchestrierung und machen komplexe Dialogverläufe kontrollierbar und nachvollziehbar. | State-Machine-Modellierung für LLM-Verhalten, hierarchisch verschachtelte Zustände/Übergänge, modellgetriebene Prompt-Orchestrierung inkl. mitgelieferter Default-UIs. | Teilt mit Rateria und Valtolina die explizite State-Machine-/Zustandsstruktur zur transparenten Dialogsteuerung. | Wendet State-Machine-Modellierung auf LLM-Prompt-Orchestrierung an (persuasive Interaktionen, z. B. Gesundheitsinformationssysteme). |

## 05 · Automatisierung vs. Kontrolle & Nutzer-Autonomie (Tool-Calling, Agency)  (3 Paper)

| Arbeit | Zustände & Übergänge (transparent zu machen) | Systemische / UI-Merkmale | Gemeinsamkeiten | Unterschiede |
| --- | --- | --- | --- | --- |
| **Hennekeuser et al. (2026)** — Tool-Invocation-Wahrnehmung | Kritischer Zustand ist der Moment des Tool-Aufrufs – der Übergang vom Dialog zur Ausführung einer externen Funktion; hier entscheidet sich, wie transparent und selbstbestimmt die Interaktion wahrgenommen wird. | Vergleich zweier Gestaltungsstrategien des Übergangs: automatische, kontextbasierte Ausführung vs. nutzerbestätigte Ausführung (Bestätigungsdialog); gemessen an Vertrauen, Autonomie, Transparenz, Ease-of-Use, Nützlichkeit. | Teilt mit Wang & Wang und Wu & Yao den Fokus auf die Balance zwischen Automatisierung und Nutzerkontrolle/Autonomie. | Empirischer Vergleich am konkreten Tool-Call-Moment; demografische Faktoren (v. a. Alter) moderieren die Wahrnehmung, adaptives Design nötig. |
| **Wang & Wang (2026)** — User-Autonomy Scoping Review | Untersucht, wie Nutzer-Autonomie in der Mensch-LLM-Interaktion konzeptualisiert und operationalisiert wird, da automations-zentrierte Frameworks die Komplexität nicht erfassen; Ziel ist Empowerment statt Entmachtung/Kontrollverlust. | Identifiziert fünf Kategorien mit zwölf Design-Mechanismen zur Unterstützung selbstbestimmter LLM-Interaktion. | Teilt mit Hennekeuser und Wu & Yao das Anliegen, Kontrolle/Autonomie gegen reine Automatisierung zu wahren. | Review-Beitrag: denkt Autonomie über die automations-zentrierte Sicht hinaus und liefert zwölf Design-Mechanismen in fünf Kategorien. |
| **Wu & Yao (2026)** — After the Interface: Agency-Verlagerung | Nutzer-Agency schwindet nicht, sondern verlagert sich – vom Interface hin zu Zielartikulation, Output-Bewertung und Ergebnis-Aushandlung; Kontrolle als Diagnoselinse (Prozess- vs. Ergebniskontrolle). | Konzeptioneller Rahmen; plausible, aber unverifizierbare Outputs machen Ergebniskontrolle ohne Prozesssichtbarkeit illusorisch. | Teilt mit Hennekeuser und Wang & Wang den Fokus auf Kontrolle/Autonomie statt reiner Automatisierung. | Rahmt Agency als verlagert statt verloren und verknüpft Kontrolle explizit mit Prozesstransparenz bei unverifizierbaren Outputs. |

## 06 · Capability-/Mental-Model-Kommunikation & Theory of Mind  (4 Paper)

| Arbeit | Zustände & Übergänge (transparent zu machen) | Systemische / UI-Merkmale | Gemeinsamkeiten | Unterschiede |
| --- | --- | --- | --- | --- |
| **Reimann et al. (2025)** — Capability Communication | Kein Übergangsmodell, aber Transparenz über Systemfähigkeiten: der Agent kommuniziert seine Capabilities explizit vs. nicht; Nutzer richten ihr mentales Modell über die Interaktionen hinweg zunehmend korrekt aus. | Explizite Fähigkeitskommunikation zur Erwartungssteuerung; führt zu längeren Nutzeräußerungen und signifikant unterschiedlichen mentalen Modellen. | Teilt mit Brachman, Wang (2025) und Do den Fokus auf Kommunikation von Fähigkeiten/Erwartungen zur Bildung angemessener mentaler Modelle. | Kontrollierte Studie (N=56) zeigt: mentale Modelle richten sich auch ohne explizite Kommunikation aus, frühe Kommunikation beschleunigt dies. |
| **Brachman et al. (2025)** — Mental Models agentischer KI | Transparenz agentischer KI: das System zerlegt Probleme in Aktionen, liefert je Aktion ein Rationale, bindet externe Informationen ein und zitiert Quellen; Nutzer bewerten Genauigkeit über Action-Beschreibungen, verstehen generative/agentische Abläufe aber kaum. | Sichtbare Actions, Rationale und Quellenzitate je Schritt; reicht laut Befund nicht – Einblick in zugrundeliegende generative/agentische Abläufe fehlt Nutzern. | Teilt mit Reimann und Do das Ziel angemessener mentaler Modelle über Transparenz systemischer Fähigkeiten. | Zeigt Grenzen sichtbarer agentischer Schritte: Action-/Quellen-Transparenz genügt nicht zur Bewertung der Genauigkeit. |
| **Wang et al. (2025)** — ToMinHAI: Mutual Theory of Mind | Wechselseitige Zuschreibung mentaler Zustände (Intentionen, Ziele, Emotionen) zwischen Mensch und CUI im Paradigma Mutual Theory of Mind; beide Seiten interpretieren iterativ die internen Zustände des Gegenübers. | CUIs sollen interne Zustände sichtbar machen und mentale Modelle beider Seiten wechselseitig kalibrieren für sozial abgestimmte Kommunikation. | Teilt mit Reimann und Brachman den Fokus auf Sichtbarkeit/Kalibrierung mentaler Modelle. | Workshop-Beitrag zur wechselseitigen (mutual) ToM – beidseitige, iterative Zustandsinterpretation statt einseitiger Fähigkeitskommunikation. |
| **Do et al. (2023)** — Inform, Explain, or Control | Kalibrierung von Erwartungen an einen moderierenden Agenten, der unterbeteiligte Gruppenmitglieder erkennt; Nutzer sollen den Detektionszustand und die Leistungsfähigkeit des Agenten korrekt verstehen. | Vergleich dreier Transparenzmechanismen – Information (Genauigkeitsangabe), Erklärung (Algorithmus/Daten-Überblick) und Kontrolle (Anpassbarkeit); Erklärung am wirksamsten. | Teilt mit Reimann und Brachman die Kalibrierung von Erwartungen/mentalen Modellen über Transparenzmechanismen. | Zeigt Rangfolge der Mechanismen: Erklärung senkt Verlegenheit und erhöht Verständnis; Information senkte Beiträge, Kontrolle wirkte negativer. |

## 07 · Dialogische Erklärungen & XAI-Design (Conversational XAI)  (11 Paper)

| Arbeit | Zustände & Übergänge (transparent zu machen) | Systemische / UI-Merkmale | Gemeinsamkeiten | Unterschiede |
| --- | --- | --- | --- | --- |
| **Mindlin et al. (2026)** — CoCoXplain: Co-Constructed Explanations | Macht den kognitiven Zustand des Nutzers und dessen Verständnisfortschritt transparent; beobachtet Reaktionen auf Erklärungen und kommuniziert Anpassungen und aktuellen Verständnisstand, sodass der interaktive Erklärprozess nachvollziehbar wird. | Multi-Agent-Reasoning, Wissensbasis mit kognitivem Nutzerzustand, kontinuierliches Monitoring- und Scaffolding, Hinweise zum Verständnisstand und gezielte Nachfragen zur Aufdeckung von Unsicherheiten. | Teilt mit Chromik & Butz und Klowait die adaptive, ko-konstruktive Gestaltung dialogischer Erklärungen. | Modelliert den Nutzer-Verständniszustand explizit und passt Erklärschritte über Monitoring/Scaffolding kontinuierlich an. |
| **Chromik & Butz (2021)** — Design-Prinzipien für XUIs | Kein Zustandsmodell, aber Prinzipien für responsive, gestufte Erklärungsprozesse: Detailtiefe und Nachfragen als transparent gestaltbare Interaktionsverläufe interaktiver Explanation-User-Interfaces. | Vier Prinzipien: komplementäre Natürlichkeit, Progressive Disclosure (hierarchische Detailtiefe + Nachfragen), mehrere Erklärwege/-modalitäten, Sensibilität für mentales Modell und Kontext. | Teilt mit Mindlin, Berman und Hernandez-Bocanegra den Fokus auf interaktive, adaptive Erklärungen statt statischer Ausgabe. | Review-Beitrag (91 Publikationen) mit generellen XUI-Designprinzipien, insbesondere Progressive Disclosure und Triangulation mehrerer Methoden. |
| **Ehsan et al. (2024)** — Seamful XAI | Statt Fehler durch Black-Boxing zu verbergen, werden soziotechnische Brüche („seams") und Fehlerzustände bewusst sichtbar gemacht, damit Nutzer Fehlerfolgen antizipieren und abmildern können. | Seamful-Design-Prozess für XAI; Systemgrenzen/Fehlerquellen als gestaltbare Nahtstellen und Ressource für Nutzer-Handlungsfähigkeit statt nahtloser Illusion. | Teilt mit Chromik & Butz und Berman den XAI-Designfokus jenseits reiner Frage-Antwort-Erklärung. | Konzeptioneller Design-Beitrag: macht Fehlerzustände/Systemgrenzen bewusst sichtbar statt sie zu verdecken. |
| **Klowait et al. (2024)** — Can AI Explain AI? | Die partizipative Rolle der KI ist kein fixer Zustand, sondern wird situativ zwischen KI-als-Werkzeug und KI-als-dialogischem-Ko-Teilnehmer ausgehandelt; Erklärungen entstehen ko-konstruktiv, geprägt von Interface-Konfiguration, Asynchronität und Nutzervorannahmen. | Räumliche und zeitliche Interface-Gestaltung, die dialogisches Engagement einlädt; Nutzer etablieren eigene Evidenzkonventionen, die vom intendierten Design abweichen können. | Teilt mit Mindlin und Hernandez-Bocanegra (2021) die Sicht auf Erklärung als ko-konstruierten, dialogischen Prozess. | Konversationsanalytisch: zeigt, dass Erklärungs-KI nur wirkt, wenn Nutzer sie aktiv als Ko-Konstrukteur behandeln (abweichende Evidenzpraktiken). |
| **He et al. (2025)** — Conversational XAI Assistant | Kein Übergangsmodell, sondern Wirkung dialogischer vs. Dashboard-Erklärungen auf Verständnis, Vertrauen und (Über-)Verlass in der Entscheidungsfindung; dialogische Erklärungen als eigener Interaktionsmodus. | Konversationelle XAI-Schnittstelle vs. Dashboard-Variante; dialogische, v. a. LLM-gestützte Erklärungen verbessern Verständnis/Vertrauen, verschärfen aber Over-Reliance. | Teilt mit Hernandez-Bocanegra und Guo den Vergleich dialogischer gegen statische Erklärformate zur Entscheidungsunterstützung. | Warnt vor Over-Reliance (illusion of explanatory depth), verstärkt mit LLM-Agenten; fordert kalibriertes Vertrauen und menschliche Kontrolle. |
| **Hernandez-Bocanegra et al. (2023)** — Erklärungen via Dialogmodell | Interaktive, konversationsbasierte Erklärungen in Empfehlungssystemen auf Basis eines Dialogmodells und formaler Argumentstrukturen; Interaktivitätsgrad und Interface-Typ steuern, wie stark Nutzende Systementscheidungen prüfen können. | Vergleich GUI-gestützter Schritt-Dialog vs. chatbotartige Natural-Language-Schnittstelle; höhere Interaktivität verbessert wahrgenommene Transparenz, Vertrauen und Effektivität. | Teilt mit Guo, Polleti und Wilkinson die dialogische Erklärung von Empfehlungen zur Transparenz-/Vertrauenssteigerung. | Systematischer Vergleich von Interface-Typ und Interaktivitätsgrad; Argumentprüfung durch höhere Interaktivität als Wirkhebel. |
| **Hernandez-Bocanegra et al. (2021)** — Review-basierte Erklärungen | Dialogische, review-basierte Erklärungen für Empfehlungssysteme; Transparenz entsteht ko-konstruktiv über das Frageverhalten der Nutzenden, die Systementscheidungen aktiv hinterfragen. Aus dem Frageverhalten werden erklärende Zustandsübergänge (Intents) abgeleitet. | Wizard-of-Oz-Studie erhebt Nutzerfragen; daraus abgeleitete Dialog-Management-Policy und Intents für bedarfsgerechte, interaktive Erklärungen. | Teilt mit Klowait und Hernandez-Bocanegra (2023) die ko-konstruktive, am Nutzerbedarf orientierte dialogische Erklärung. | Leitet Dialog-Policy und Intents empirisch aus tatsächlichem Frageverhalten (Wizard-of-Oz) ab. |
| **Berman und Larrson (2025)** — Taxonomie erklärender Dialogfähigkeiten | Kein Übergangsmodell; Taxonomie erklärender Dialogfähigkeiten als Bewertungsrahmen für CXAI – u. a. Kontexterhalt bei Themenwechsel, verschachtelte Erklärungen und Grounding/Meta-Kommunikation (Nachfragen, Umgang mit Nicht-Verstehen). | 19 Items in drei Kategorien (Question Answering & Information Delivery, Context Management, Grounding & Meta-Communication); binäre Bewertung je System via automatisierte Dialog-Tests. | Teilt mit Chromik & Butz die Sicht, dass erklärender Dialog mehr als Frage-Antwort erfordert (inkrementelle Zusatzinfos, Grounding). | Taxonomie/Benchmark: getestete Systeme (TalkToModel, Glass-Box, BKOS) decken nur wenig ab; Slot-Filling und Grounding-Nachfragen fehlen überall. |
| **Guo et al. (2023)** — E-ReDial: Explainable CRS | Im Dialog müssen mehrere kontextabhängige Erklärungen generiert werden; definiert zehn Bewertungsperspektiven für Erklärbarkeit in konversationellen Empfehlungssystemen zur Förderung von Transparenz und Nachvollziehbarkeit von Empfehlungsentscheidungen. | Datensatz E-ReDial mit hochwertigen, kontextualisierten Erklärungen; misst und verbessert deren Qualität. | Teilt mit Hernandez-Bocanegra und Polleti das Ziel qualitativ hochwertiger dialogischer Erklärungen für Empfehlungen. | Beitrag ist ein Benchmark-Datensatz plus zehn Bewertungsperspektiven für Erklärungsqualität. |
| **Polleti et al. (2025)** — Knowledge-aware CRS-Erklärungen | Erklärungen für wissensbasierte dialogische Empfehlungssysteme; Transparenz über die Empfehlungsgrundlage als expliziter Erklärmechanismus, ausbalancierte Argumente für und gegen eine Empfehlung zur Vertrauenskalibrierung. | Wissensgraph mit Embeddings, Plausibilitäts-Score zur Begründungserzeugung, ausbalancierte Pro-/Contra-Argumente nach Snedegars For/Against-Theorie. | Teilt mit Guo und Wilkinson die Erklärung von Empfehlungen zur Transparenz-/Vertrauenssteigerung. | Nutzt Wissensgraph-Embeddings und liefert bewusst ausbalancierte Gegenargumente (For/Against) zur Interpretierbarkeit. |
| **Wilkinson et al. (2021)** — Justification Styles (Why/Why not) | Kein Übergangsmodell; prüft, wie Begründungsstile (Warum vs. Warum nicht) in einem Film-Empfehlungschatbot die wahrgenommene Systemtransparenz und damit Kontrolle, Vertrauen und Folgebereitschaft beeinflussen. | Warum- vs. Warum-nicht-Begründungen als Erklärungsmechanismus; Warum-Begründungen erhöhen Transparenz, wahrgenommene Kontrolle und Vertrauensüberzeugungen. | Teilt mit Guo, Polleti und Hernandez-Bocanegra die dialogische Erklärung von Empfehlungen zur Vertrauens-/Transparenzsteigerung. | Online-Experiment (n=310) isoliert den Begründungsstil als Design-Hebel; Warum-Erklärungen wirksamer als Warum-nicht. |

## 08 · Vertrauenskalibrierung, Over-Reliance & Unsicherheits-/Fehlertransparenz  (9 Paper)

| Arbeit | Zustände & Übergänge (transparent zu machen) | Systemische / UI-Merkmale | Gemeinsamkeiten | Unterschiede |
| --- | --- | --- | --- | --- |
| **Marconi et al. (2026)** — Multi-Layer-Interaktionsqualität | Kein diskretes Zustandsmodell; drei Bewertungsebenen der Interaktion – pragmatisch, sozial-affektiv und Accountability-Inklusion (Transparenz, Fairness). Interaktionsqualität als ko-orchestriertes, dialogisches Konstrukt, Erfolg/Fehler in Capacity-×-Alignment-Matrix verortet. | Multi-Layer-Framework; Anthropomorphismus und Rollen-Framing als bewusste Designstrategien; Bewertung von Transparenz/Fairness auf der Accountability-Ebene. | Teilt mit Becker & Fischer und Ng & Zhang den integrativen Review-Blick auf Vertrauen, Transparenz und Accountability. | Fasst Qualität über drei Ebenen inkl. Capacity-×-Alignment-Matrix statt reiner Vertrauens-Faktorlisten. |
| **Becker & Fischer (2024)** — Trust-Building-Faktoren-Review | Kein Zustandsmodell; systematisiert vertrauensbildende Faktoren und betont, dass komplexe KI nicht vollständig transparent sein kann, was ohne gute Gestaltung Misstrauen erzeugt – Transparenz ist zu dosieren. | Concept-Matrix von 14 Trust-Faktoren (u. a. Controllability, Adaptability, Transparency, Intelligence, Empathy, Anthropomorphism, Security) als Design-Raster mit kontextspezifischen Best Practices. | Teilt mit Ng & Zhang und Marconi den Review-Ansatz zur Systematisierung von Vertrauensfaktoren. | Konkrete 14-Faktoren-Matrix (v. a. Service-Sektor) und die These, dass vollständige Transparenz bei komplexer KI unrealistisch ist. |
| **Cao et al. (2025)** — Conversational Contingency & Trust | Konversationale Kontingenz – die Abstimmung der Antworten auf vorherige Nutzereingaben – als kontextsensitiver Interaktionszustand; responsive, kontextbezogene Anschlusskommunikation als relationaler Pfad vertrauenswürdiger Interaktion. | Sichtbarer Bezug auf frühere Eingaben (Kontingenz) erhöht soziale Präsenz und Engagement, die wiederum Vertrauen steigern (Zwei-Wellen-Panel, N=391). | Teilt mit Becker & Fischer und Tutul den Fokus auf Vertrauensdynamik in der Mensch-KI-Interaktion. | Identifiziert Kontingenz/kontextuelle Responsivität als mediierten (soziale Präsenz, Engagement) Vertrauenspfad in einer Panelstudie. |
| **Kim et al. (2024)** — Unsicherheitsausdruck & Reliance | Übergang von unkritischem Vertrauen zu kalibrierter Verlässlichkeit, ausgelöst durch sprachliche Unsicherheitsmarker im Dialog („Ich bin nicht sicher, aber…"). | Experiment (N=404); Ich-Perspektiv-Unsicherheitsausdrücke senken Übervertrauen und erhöhen die Genauigkeit der Nutzerentscheidungen. | Teilt mit Steyvers, von Reeken und Dey das Sichtbarmachen von Unsicherheit zur Senkung von Overreliance. | Isoliert die konkrete sprachliche Formulierung der Unsicherheit im Antworttext als Design-Hebel (Gesundheitskontext). |
| **Steyvers et al. (2025)** — Kalibrierungslücke LLM ↔ Nutzer | „Kalibrierungslücke" zwischen tatsächlicher Modellkonfidenz und wahrgenommener Zuverlässigkeit; Erklärungen, die interne Konfidenz und Diskriminationsfähigkeit widerspiegeln, verringern die Lücke. | Zeigt: Standarderklärungen und längere Antworten überhöhen das Vertrauen; Konfidenz muss in Erklärungen akkurat abgebildet werden. | Teilt mit Kim (2024) und Tutul das Ziel kalibrierten Vertrauens über akkurate Unsicherheits-/Konfidenzsignale. | Belegt die Konfidenz-Wahrnehmungs-Lücke und den verzerrenden Effekt der Erklärungslänge auf das Vertrauen. |
| **Tutul et al. (2025)** — Vertrauenskalibrierung Speech-XAI | Vertrauen verändert sich zustandsabhängig: steigt über Zeit, sinkt kurzfristig nach Systemfehlern, variiert je Fall; manche Nutzende über- oder untervertrauen, was angemessene Kalibrierung des Systemzustands als Designziel unterstreicht. | Erklärbare KI (Angstschätzung aus Sprache) mit Human-in-the-Loop; Fehlerzustände und Konfidenz sichtbar machen, um Vertrauenseinbrüche abzufedern. | Teilt mit von Reeken und Dey das Ziel kalibrierten Vertrauens über sichtbar gemachte Unsicherheit/Fehler. | Misst Vertrauen längs (Fragebögen + Verhaltensübereinstimmung) in einer sprachbasierten Analytik-Aufgabe; zeigt fehlerbedingte Einbrüche. |
| **Dey et al. (2025)** — Accountability-Modellierung (TOD) | Kritischer Zustand ist der erkannte Fehler-/Unsicherheitszustand im Dialogue State Tracking; dessen Sichtbarmachung ermöglicht Selbstkorrektur und kalibriertes Vertrauen und senkt Overreliance auf aufgabenorientierte Dialogsysteme. | Zusätzlicher Accountability-Head (Binärklassifikator) erkennt Unsicherheit/Fehler und macht sie über Friction-Turns (Erklärung bzw. Nutzerbestätigung) sichtbar; DST-Genauigkeit steigt (67,13 → 70,51). | Teilt mit von Reeken und Tutul das Ziel, Unsicherheit/Fehler sichtbar zu machen, um Overreliance zu senken. | Architektureller Beitrag: Accountability-Head plus Friction-Turns verbessern zugleich Vertrauenskalibrierung und DST-Genauigkeit. |
| **von Reeken et al. (2025)** — Calibrated Trust in RAG | Kalibriertes Vertrauen in Retrieval-Augmented-Konversationen; sichtbar gemacht werden Retrieval-Herkunft und Systemunsicherheit, damit der Antwort-/Retrieval-Zustand nachvollziehbar wird – gegen Überschätzung nicht prüfbarer Antworten unter Zeitdruck. | Farbcodierte Quellenzitate, nicht-numerische Relevanzsignale und kontextsensible Sprache zur Kommunikation von Systemunsicherheit (Co-Design-Workshops). | Teilt mit Dey und Tutul das Sichtbarmachen von Unsicherheit/Herkunft für kalibriertes Vertrauen. | Liefert konkrete UI-Mechanismen (farbcodierte Zitate, nicht-numerische Relevanz) speziell für RAG-Konversationen im Arbeitskontext. |
| **Ng und Zhang (2025)** — Trust-in-Chatbots-Review | Kein diskretes Zustandsmodell; Vertrauen als dynamischer, zustandsabhängiger Wert (provisorisches swift trust, das sich über Folgeinteraktionen verstärkt oder abschwächt), systematisiert über fünf Prädiktor-Gruppen. | Fünf Faktor-Gruppen (nutzer-, maschinen-, interaktions-, sozial-, kontextbezogen); interaktions- und kontextbezogene Faktoren besonders einschlägig für Zustandstransparenz. | Teilt mit Becker & Fischer und Marconi den Review-Ansatz zu Vertrauensfaktoren und -dynamik. | Betont Vertrauensdynamik (swift trust) und ruft nach Längsschnittstudien; strukturiert Prädiktoren in fünf Gruppen. |

## 09 · Common Ground, geteiltes Verständnis & Identität  (2 Paper)

| Arbeit | Zustände & Übergänge (transparent zu machen) | Systemische / UI-Merkmale | Gemeinsamkeiten | Unterschiede |
| --- | --- | --- | --- | --- |
| **Tolzin und Janson (2023)** — Common-Ground-Mechanismen | Kein diskretes Zustandsmodell; Common Ground als Mechanismus, der abgestimmte, nachvollziehbare Mensch-Agent-Interaktion herstellt und aktualisiert und gegen typische Interaktionsfehler abgesichert werden muss. | Fünf Mechanismen – Embodiment, soziale Merkmale, Joint Action, Wissensbasis und mentales Modell des Agenten – mit gerichteten/bidirektionalen Beziehungen (nomologisches Netz). | Teilt mit Ivarsson den Fokus auf geteiltes Verständnis/Verständnissicherung als Grundlage tragfähiger Interaktion. | Systematisches Review (38 Artikel) mit fünf Grounding-Mechanismen als Orientierungsrahmen für Gestaltung und Forschung. |
| **Ivarsson et al. (2023)** — Suspicious Minds: Identität & Vertrauen | Zustand der Ungewissheit über die Identität des Partners (Mensch vs. KI): wird Verdacht geweckt, bricht das geteilte Verstehen zusammen; im Zentrum stehen Folgen für Vertrauen und Verständnissignale. | Ethnomethodologisch-konversationsanalytische Analyse; Empfehlung, den Agentenstatus transparent zu signalisieren, um Verdacht und Vertrauensbrüche zu vermeiden. | Teilt mit Tolzin & Janson den Fokus auf Herstellung/Zusammenbruch geteilten Verstehens in der Mensch-Agent-Interaktion. | Fokus auf Identitäts-Ungewissheit (Mensch vs. KI) als Auslöser von Verdacht und Grounding-Zusammenbruch. |

## 10 · Verhaltens-/Datentransparenz & Darstellungsdynamik (Plattform/UI)  (2 Paper)

| Arbeit | Zustände & Übergänge (transparent zu machen) | Systemische / UI-Merkmale | Gemeinsamkeiten | Unterschiede |
| --- | --- | --- | --- | --- |
| **Bhat (2025)** — Dynamic vs. Static Presentation | Dynamische Textausgabe macht den Verarbeitungszustand des Systems sichtbar; Prozesssichtbarkeit über die Darstellungsdynamik (inkrementell erscheinender Text) ist der zentrale Hebel gegenüber statischer Ausgabe. | Tipp-Simulation / inkrementell erscheinender Text vs. statische Ausgabe (Within-Subjects, N=103); erhöht wahrgenommene Kompetenz, Wärme, Vertrauen, Engagement und adaptives Verhalten. | Teilt mit Nordberg den Fokus darauf, wie das Darstellungs-/Präsentationsformat Wahrnehmung, Vertrauen und Transparenz prägt. | Isoliert die Darstellungsdynamik (Tipp-Simulation) als Hebel; benennt zugleich Manipulations-/Fehlinformationsrisiken. |
| **Nordberg et al. (2026)** — Retelling the News | KI-Agenten-Format, das Nachrichten dialogisch nacherzählt statt fix zu präsentieren; die Interaktion wird als klar/nachvollziehbar erlebt, doch treten Spannungen um Vertrauen, Genauigkeit und Transparenz (Herkunft) auf. | LLM-Probe in Co-Speculation-Workshop und Feldstudie; fünf Dimensionen des konversationellen Nachrichtenformats; Bedarf an sichtbaren Herkunfts- und Genauigkeitssignalen. | Teilt mit Bhat den Fokus auf das Präsentationsformat (dialogisch vs. fix) und dessen Transparenz-/Vertrauenswirkung. | Explorativer Beitrag im Nachrichtenkontext; identifiziert Spannungen um Herkunft/Genauigkeit statt kontrollierter Effektmessung.

</details>

<details>
<summary><strong>Domänen & potentielle Use Cases</strong></summary>

| Anwendungsbereich | Arbeiten | Transparenzbedarf | Zustandscluster | Gemeinsamkeiten | Unterschiede / Begründung |
| --- | ---: | --- | --- | --- | --- |
| **Bereichsübergreifend** | 32 | Nicht domänenspezifisch; untersucht grundlegende Transparenzmechanismen und Zustandsübergänge. | – | Die Beiträge behandeln domänenneutrale Fragen wie Dialogmodi, Proaktivität, Reasoning-Sichtbarkeit, Fähigkeitenkommunikation und Common Ground. | Die hohe Zahl zeigt, dass viele Erkenntnisse zunächst konzeptionell oder technisch bleiben. Die Übertragung der Merkmale auf konkrete Nutzungskontexte bleibt eine zentrale Aufgabe. |
| **Wissensarbeit und Unternehmenskontext** | 6 | Kontrolle bei der Delegation von Aufgaben, Vermeidung von Kontrollverlust sowie Umgang mit Überlastung und kognitiver Belastung. | 2, 3, 4, 6, 8 | Transparenz wird an Automatisierungs- und Kontrollpunkten relevant, insbesondere bei Toolaufrufen, Delegation und zustandsbehafteter Orchestrierung. | Im Vordergrund stehen Steuerbarkeit und die Begrenzung von Übervertrauen bzw. Überlastung; damit unterscheidet sich der Bereich von stärker akzeptanzorientierten Anwendungskontexten. |
| **Vertrieb und Kundenservice** | 6 | Verständlichkeit und Akzeptanz der Interaktion sowie ein natürlicher Gesprächsverlauf. | 1, 3, 7 | Transparenz soll den Dialogfluss unterstützen und die Interaktion nachvollziehbar machen, ohne ihn unnötig zu unterbrechen. | Im Vergleich zu Hochrisikokontexten stehen weniger Fehlerkritikalität und mehr Gesprächsqualität, Akzeptanz und Vertrauen im Vordergrund. |
| **Gesundheitswesen und Wohlbefinden** | 4 | Fehlerkritikalität, Nachvollziehbarkeit, Dialogablauf und angemessenes Vertrauen. | 2, 5 | Transparenz unterstützt die Kontrolle über potenziell folgenreiche Ausgaben und hilft, Systemgrenzen und Unsicherheit einzuordnen. | Der erhöhte Transparenzbedarf ergibt sich aus den möglichen direkten Folgen fehlerhafter Ausgaben; ein für andere Bereiche ausreichendes Transparenzniveau kann hier unzureichend sein. |
| **Medien und Kommunikation** | 3 | Angemessene Einschätzung der Systemkompetenz. | 10 | Transparenz betrifft insbesondere die Einordnung von Herkunft, Genauigkeit und Darstellungsform systemgenerierter Inhalte. | Der Schwerpunkt liegt auf der Einschätzung kommunikativer Verlässlichkeit und Kompetenz, nicht primär auf der Kontrolle von Toolaufrufen oder Entscheidungen. |

</details>

<details>
<summary><strong> AI Powertool Provider Statements</strong></summary>

Praktische Perspektiven und Handlungsansätze führender AI-Anbieter zur Transparenzvermittlung in konversativen Systemen:

---

### 🔗 Google — PAIR Guidebook

**People + AI Research Initiative**

Die Google PAIR Initiative bietet ein umfassendes Guidebook für die Gestaltung verantwortungsvoller, nutzerzentrischer KI-Systeme. Im Kontext der Zustandstransparenz adressiert PAIR die Balance zwischen Systemfähigkeiten, Nutzererwartungen und ethischen Designprinzipien – zentral für die Kalibrierung von Vertrauen in Conversational AI.

[📖 PAIR Guidebook öffnen](https://pair.withgoogle.com/guidebook/)

---

### 🔗 Microsoft — Hax Toolkit

**Human-AI eXperience Toolkit**

Das Microsoft Hax Toolkit bietet praxisorientierte Werkzeuge und Patterns für die Gestaltung transparenter, kontrollierbarer menschlich-KI-Interaktionen. Der Fokus liegt auf expliziten Kontrollmechanismen, nachvollziehbaren Systemzuständen und Nutzerempowerment – zentrale Merkmale kalibrierter Zustandstransparenz.

[🛠️ Hax Toolkit öffnen](https://www.microsoft.com/en-us/haxtoolkit/)

---

### 🔗 OpenAI — Evaluating Chain-of-Thought Monitorability

**Transparente Reasoning-Prozesse in LLMs**

OpenAI adressiert die Sichtbarmachung interner Reasoning-Prozesse (Chain-of-Thought, CoT) und deren Auswirkungen auf die Vertrauensbildung und Fehlerdiagnose. Der Leitfaden thematisiert, wie strukturierte, nachvollziehbare Denkprozesse die Monitorbarkeit von KI-Entscheidungen verbessern – ein Kernaspekt der Zustandstransparenz in konversativen Systemen.

[🧠 OpenAI CoT-Evaluierung öffnen](https://openai.com/de-DE/index/evaluating-chain-of-thought-monitorability/)

---

### 🔗 Anthropic — Transparency Hub

**Model Reports, Evaluationen und Safety Assessments**

Der Anthropic Transparency Hub dokumentiert Sicherheitsbewertungen, Systemkarten und Evaluationsergebnisse für Claude-Modelle. Er zeigt, wie Anthropic Zustandstransparenz durch externe Red-Teaming, Alignment-Tests und kontinuierliche Evaluationen verankert – ein praktisches Modell für nachvollziehbare KI-Entwicklung.

[🔍 Transparency Hub öffnen](https://www.anthropic.com/transparency)

</details>


## Beispiele aus verbreiteten Tools

* Visible Thinking wird in vielen Tools durch ein animiertes Icon (häufig eigenes Logo), mit Denken assoziierten Verben oder ähnliches umgesetzt
* CoT wird in vielen CAI Systemen und gängigen AI Tools eingesetzt, um die Transparenz zu erhöhen und v.a. aber den sog. First-Answer-Bias zu minimieren

<div className="artifact-process" aria-label="Prozess der sichtbaren Zustände">
	<span><b>●</b> Zustand</span>
	<span aria-hidden="true">→</span>
	<span><b>●</b> Aktivität</span>
	<span aria-hidden="true">→</span>
	<span><b>●</b> Verarbeitung</span>
	<span aria-hidden="true">→</span>
	<span><b>●</b> Ergebnis</span>
</div>

<div className="artifact-gallery">
	<figure className="artifact-gallery__item">
		<img src="/img/chatgpt-logo.svg" alt="Selbst erstelltes ChatGPT-inspiriertes Logo als Platzhalter" />
		<figcaption>
			<strong>ChatGPT</strong>
			<ul>
				<li><b>Verarbeitung anzeigen</b> – Der Nutzer sieht, dass die Anfrage aktuell bearbeitet wird.</li>
				<li><b>Websuche durchführen</b> – Bei Suchaufgaben wird die Recherche als Aktivität sichtbar.</li>
				<li><b>Tools verwenden</b> – Je nach Aufgabe können beispielsweise Suche, Datenanalyse oder andere Werkzeuge eingesetzt werden.</li>
				<li><b>Informationen verarbeiten</b> – Die gesammelten Informationen werden für die Antwort zusammengeführt.</li>
				<li><b>Antwort generieren</b> – Das System erstellt die finale Antwort.</li>
				<li><b>Ergebnis darstellen</b> – Das fertige Ergebnis wird im Chat angezeigt.</li>
			</ul>
		</figcaption>
	</figure>
	<figure className="artifact-gallery__item">
		<img src="https://cdn.simpleicons.org/anthropic/D97757" alt="Anthropic-Logo als Platzhalter für Claude" />
		<figcaption>
			<strong>Claude</strong>
			<ul>
				<li><b>Thinking-Status anzeigen</b> – Das System signalisiert, dass es die Anfrage aktiv verarbeitet.</li>
				<li><b>Denkprozess zusammenfassen</b> – Eine Zusammenfassung der Überlegungen wird sichtbar.</li>
				<li><b>Thinking-Bereich öffnen</b> – Nutzer können zusätzliche Informationen zum Reasoning ein- und ausblenden.</li>
				<li><b>Antwort generieren</b> – Die eigentliche Antwort wird anschließend erstellt und ausgegeben.</li>
				<li><b>Ergebnis darstellen</b> – Das fertige Resultat erscheint als reguläre Antwort.</li>
			</ul>
		</figcaption>
	</figure>
	<figure className="artifact-gallery__item">
		<img src="https://cdn.simpleicons.org/googlegemini/8E75B2" alt="Google-Gemini-Logo als Platzhalter für Gemini" />
		<figcaption>
			<strong>Google Gemini</strong>
			<ul>
				<li><b>Thinking-Status anzeigen</b> – Der aktuelle Verarbeitungszustand wird signalisiert.</li>
				<li><b>Problemlösung durchführen</b> – Das System verarbeitet die Anfrage in mehreren internen Schritten.</li>
				<li><b>Thoughts zusammenfassen</b> – Teile des Reasoning-Prozesses können als Zusammenfassung dargestellt werden.</li>
				<li><b>Informationen / Tools nutzen</b> – Je nach Aufgabe werden zusätzliche Informationen verarbeitet oder externe Funktionen eingesetzt.</li>
				<li><b>Antwort generieren</b> – Das Ergebnis wird anschließend als Antwort ausgegeben.</li>
			</ul>
		</figcaption>
	</figure>
	<figure className="artifact-gallery__item">
		<img src="/img/copilot-logo.svg" alt="Selbst erstelltes Copilot-inspiriertes Logo als Platzhalter" />
		<figcaption>
			<strong>GitHub Copilot</strong>
			<ul>
				<li><b>Aufgabe analysieren</b> – Copilot untersucht die Anfrage und den vorhandenen Code bzw. das Repository.</li>
				<li><b>Plan erstellen</b> – Im Plan-Modus wird zunächst ein strukturierter Implementierungsplan mit einzelnen Arbeitsschritten erstellt.</li>
				<li><b>Dateien und Kontext untersuchen</b> – Der Agent zeigt bzw. protokolliert, welche Dateien und Repository-Inhalte für die Aufgabe herangezogen werden.</li>
				<li><b>Tools ausführen</b> – Copilot kann beispielsweise Dateien bearbeiten, Terminalbefehle ausführen und Tests starten.</li>
				<li><b>Fortschritt anzeigen</b> – Der Nutzer kann die laufende Agent-Sitzung und ihre einzelnen Aktivitäten in Echtzeit verfolgen.</li>
				<li><b>Änderungen durchführen</b> – Der Agent implementiert die geplanten Änderungen direkt im Code.</li>
				<li><b>Fehler erkennen und iterieren</b> – Copilot kann Tests bzw. Validierungen durchführen und bei Problemen weitere Änderungen vornehmen.</li>
				<li><b>Diff überprüfen</b> – Die vorgenommenen Codeänderungen werden als Diff zur Kontrolle dargestellt.</li>
				<li><b>Pull Request erstellen</b> – Nach der Überprüfung kann aus der Agent-Sitzung ein Pull Request erstellt werden.</li>
			</ul>
		</figcaption>
	</figure>
	<figure className="artifact-gallery__item">
		<img src="https://cdn.simpleicons.org/perplexity/1FB8CD" alt="Perplexity-Logo als Platzhalter" />
		<figcaption>
			<strong>Perplexity</strong>
			<ul>
				<li><b>Recherche starten</b> – Das System beginnt mit der Suche nach relevanten Informationen.</li>
				<li><b>Quellen durchsuchen</b> – Mehrere Webquellen werden recherchiert und ausgewertet.</li>
				<li><b>Informationen zusammenführen</b> – Inhalte aus verschiedenen Quellen werden miteinander kombiniert.</li>
				<li><b>Rechercheprozess anzeigen</b> – Der Nutzer kann nachvollziehen, dass und wie recherchiert wurde.</li>
				<li><b>Quellen verknüpfen</b> – Aussagen werden direkt mit den verwendeten Quellen verbunden.</li>
				<li><b>Antwort generieren</b> – Aus den recherchierten Informationen wird eine zusammengefasste Antwort erstellt.</li>
			</ul>
		</figcaption>
	</figure>
	<figure className="artifact-gallery__item">
		<img src="https://cdn.simpleicons.org/notion/000000" alt="Notion-Logo als Platzhalter für Notion AI" />
		<figcaption>
			<strong>Notion AI</strong>
			<ul>
				<li><b>Aufgabe interpretieren</b> – Die Anfrage wird innerhalb des aktuellen Workspace-Kontexts verarbeitet.</li>
				<li><b>Workspace durchsuchen</b> – Relevante Inhalte aus vorhandenen Notion-Seiten können einbezogen werden.</li>
				<li><b>Informationen zusammenführen</b> – Gefundene Inhalte werden für die jeweilige Aufgabe kombiniert.</li>
				<li><b>Inhalte generieren oder bearbeiten</b> – Texte, Zusammenfassungen oder andere Inhalte werden erstellt bzw. verändert.</li>
				<li><b>Änderungen im Workspace darstellen</b> – Das Ergebnis erscheint direkt im bestehenden Dokument oder Datenbankkontext.</li>
				<li><b>Aufgabe weiterführen</b> – Bei komplexeren Aufgaben kann die Interaktion iterativ fortgesetzt werden.</li>
			</ul>
		</figcaption>
	</figure>
	<figure className="artifact-gallery__item">
		<img src="https://cdn.simpleicons.org/figma/F24E1E" alt="Figma-Logo als Platzhalter" />
		<figcaption>
			<strong>Figma AI</strong>
			<ul>
				<li><b>Designaufgabe verarbeiten</b> – Die eingegebene Designbeschreibung wird interpretiert.</li>
				<li><b>Layout generieren</b> – Figma AI erstellt daraus erste Screens bzw. Layoutstrukturen.</li>
				<li><b>Komponenten und Inhalte erzeugen</b> – UI-Elemente, Texte und weitere Designbestandteile werden automatisch erstellt.</li>
				<li><b>Varianten erstellen</b> – Auf Basis der Anfrage können unterschiedliche Designlösungen entstehen.</li>
				<li><b>Ergebnis als Design darstellen</b> – Das generierte Ergebnis wird direkt als bearbeitbares Figma-Artefakt sichtbar.</li>
				<li><b>Iterieren und verändern</b> – Nutzer können das Ergebnis anschließend weiter anpassen.</li>
			</ul>
		</figcaption>
	</figure>
</div>

## Ansätze und Prototypen aus der Literatur

### TalkTuner

**Prototype:** [TalkTuner – A dashboard UI for chatbot LLMs](https://yc015.github.io/TalkTuner-a-dashboard-ui-for-chatbot-llm/)

**Video / Demo:** [TalkTuner-Demo auf der Projektseite](https://yc015.github.io/TalkTuner-a-dashboard-ui-for-chatbot-llm/)

**In a nutshell:** TalkTuner macht das interne Nutzermodell eines Chatbots sichtbar und steuerbar. Das Dashboard zeigt, welche Merkmale das LLM aus dem Gespräch über die Nutzerin oder den Nutzer ableitet, und ermöglicht es, diese Repräsentationen gezielt zu korrigieren oder zu verändern. Chen et al. (2024) zeigen damit einen konkreten Ansatz, Interpretierbarkeit mit User-Experience-Design zu verbinden und Transparenz sowie Nutzerkontrolle in Conversational AI zu stärken.

<figure>
	<img src="/img/dashboard_overview_v8.png" alt="TalkTuner dashboard showing the chatbot conversation, user model, and controllable profile attributes" />
	<figcaption> Abbildung 2: TalkTuner dashboard overview.</figcaption>
</figure>

**Referenz:** Chen, Y., Wu, A., DePodesta, T., Yeh, C., Li, K., Castillo Marin, N., Patel, O., Riecke, J., Raval, S., Seow, O., Wattenberg, M., et al. (2024). *TalkTuner: A dashboard UI for chatbot LLMs*. [Projektseite](https://yc015.github.io/TalkTuner-a-dashboard-ui-for-chatbot-llm/).

**Abbildung:** Figure 2 zeigt das Dashboard mit dem in Echtzeit sichtbaren User Model. [Projektseite](https://bit.ly/talktuner-project-page)

### Criticality

**In a nutshell:** Criticality (Chang et al., 2026) operationalisiert den Paul-Elder-Rahmen für kritisches Denken. Interaktive Elements of Thought wie Ziel, Annahmen, Perspektiven und Implikationen werden mit Intellectual Standards wie Klarheit, Fairness und Logik strukturiert. Für jede Behauptung wird Evidenz abgerufen, als stützend, neutral oder widersprüchlich klassifiziert und die Verbindung zwischen Behauptung und Evidenz erklärt.

<figure>
	<img src="/img/iui26-18-fig1.jpg" alt="Criticality guidance loop with reasoning traces, elements of thought, intellectual standard evaluation, evidence retrieval, and guidance recommendations" />
	<figcaption>Abbildung 1: Criticality guidance loop</figcaption>
</figure>

<figure>
	<img src="/img/iui26-18-fig7.jpg" alt="Criticality interface showing interactive elements of thought, evidence, and reasoning guidance" />
	<figcaption>Abbildung 7: Criticality interface</figcaption>
</figure>

**Referenz:** Chang, M., Srinivasan, A., & Palani, S. (2026). *Criticality: Scaffolding Decision-Making with Interactive Critical Thinking and Evidence-Based Reasoning Traces*. In *31st International Conference on Intelligent User Interfaces (IUI '26)*, March 23–26, 2026, Paphos, Cyprus. ACM, New York, NY, USA, 21 pages. [https://doi.org/10.1145/3742413.3789077](https://doi.org/10.1145/3742413.3789077)

### Inner Thoughts Framework

**In a nutshell:** Das Inner Thoughts Framework (Liu et al., 2025) stattet KI mit einem kontinuierlichen, verdeckten Gedankenstrom parallel zur sichtbaren Kommunikation aus. Über die Modellierung intrinsischer Motivation kann das System proaktiv passende Beiträge initiieren. Die Umsetzung in einer Web-App und einem Chatbot übertrifft in technischer Evaluation und Nutzerstudien bestehende Baselines bei Anthropomorphie, Kohärenz, Intelligenz und Angemessenheit des Turn-Takings.

**Verfügbarkeit:** Die frühere Projektseite [liubruce.me/inner_thoughts](https://www.liubruce.me/inner_thoughts) ist nicht mehr verfügbar.

<figure>
	<img src="/img/chi25-674-fig3.jpg" alt="Inner Thoughts framework with a continuous covert train of thoughts running in parallel to overt communication" />
	<figcaption> Abbildung 3: Inner Thoughts framework.</figcaption>
</figure>

<figure>
	<img src="/img/chi25-674-fig6.jpg" alt="Inner Thoughts system interface for proactive conversational agents" />
	<figcaption>Abbildung 6: Inner Thoughts system interface.</figcaption>
</figure>

**Referenz:** Liu, X. B., Fang, S., Shi, W., Wu, C.-S., Igarashi, T., & Chen, X. A. (2025). *Proactive Conversational Agents with Inner Thoughts*. In *CHI Conference on Human Factors in Computing Systems (CHI '25)*, April 26–May 01, 2025, Yokohama, Japan. ACM, New York, NY, USA, 19 pages. [https://doi.org/10.1145/3706598.3713760](https://doi.org/10.1145/3706598.3713760)

### Visuelle Dialogfluss-Gestaltung

**In a nutshell:** Valtolina und Neri (2021) beschreiben eine visuelle Entwicklungsumgebung auf Basis von Draw.io, mit der Domänenexperten Dialogflüsse ohne Programmierkenntnisse gestalten. Intents, Kontexte und API-Aufrufe werden grafisch modelliert; eine Node.js-Engine verarbeitet die XML-Dateien und erzeugt über die DialogFlow-API funktionsfähige Bots. Damit wird eine End-User-Development-Strategie für Conversational Interfaces umgesetzt.

**Referenz:** Valtolina, S., & Neri, L. (2021). *Visual design of dialogue flows for conversational interfaces*. *Behaviour & Information Technology*, *40*(10), 1008–1023. [https://doi.org/10.1080/0144929X.2021.1918249](https://doi.org/10.1080/0144929X.2021.1918249)

### PROMISE

**In a nutshell:** PROMISE (Wu et al., 2023) unterstützt komplexe sprachbasierte Interaktionen mit Informationssystemen. State-Machine-Konzepte ermöglichen eine modellgetriebene, dynamische Prompt-Orchestrierung über hierarchisch verschachtelte Zustände und Übergänge und verbessern so die Kontrolle über das Verhalten von Sprachmodellen.

**Projekt:** [PROMISE auf GitHub](https://github.com/zhaw-iwi/promise)

**Referenz:** Wu, W., Heierli, J., Meisterhans, M., Moser, A., Färber, A., Dolata, M., ... & Schwabe, G. (2023). *Promise: A framework for developing complex conversational interactions (technical report)*. *arXiv preprint arXiv:2312.03699*.


---
title: Systematische Literaturanalyse
sidebar_position: 4
---

# Literaturanalyse

## Vorgehen

Die Literaturanalyse bildet die praktische Umsetzung des im [methodischen
Rahmen](method) beschriebenen Forschungsdesigns. Die Recherche deckte vier
Konzeptbereiche ab: *Conversational Systems*, *State Concepts*,
*Transition Concepts* und *Transparency Concepts*. Aufgrund der uneinheitlichen
Begriffsverwendung wurde die Suche auf fünf Suchstrings verteilt. So sollte
vermieden werden, dass ein zu breiter Suchstring unpassende Treffer liefert
oder ein zu enger Suchstring relevante Arbeiten ausschließt.

## Suchstrategie

<div className="row">
	<div className="col col--6 margin-bottom--md">
		<div className="card">
			<div className="card__header">
				<h3>Suchstring A</h3>
			</div>
			<div className="card__body">
				<p>("conversational agent" OR "conversational user interface" OR "conversational AI") AND ("interaction state" OR "dialogue state" OR "process state" OR "state transition" OR "mode switching")</p>
			</div>
		</div>
	</div>
	<div className="col col--6 margin-bottom--md">
		<div className="card">
			<div className="card__header">
				<h3>Suchstring B</h3>
			</div>
			<div className="card__body">
				<p>("conversational agent" OR "conversational user interface" OR "conversational AI") AND (interaction OR dialogue OR conversation) AND ("transparency cue" OR transparency OR visibility OR "mental model")</p>
			</div>
		</div>
	</div>
	<div className="col col--12 margin-bottom--md">
		<div className="card">
			<div className="card__header">
				<h3>Suchstring AB kombiniert</h3>
			</div>
			<div className="card__body">
				<p>("conversational agent" OR "conversational user interface" OR "conversational AI") AND ("interaction state" OR "dialogue state" OR "process state" OR "state transition") AND ("mode switching" OR "context switch" OR "mixed-initiative interaction") AND ("transparency cue" OR transparency OR visibility)</p>
			</div>
		</div>
	</div>
	<div className="col col--6 margin-bottom--md">
		<div className="card">
			<div className="card__header">
				<h3>Suchstring C</h3>
			</div>
			<div className="card__body">
				<p>("conversational agent" OR "conversational AI" OR chatbot OR "dialogue system" OR "LLM agent") AND ("state transparency" OR "system status" OR "status indicator" OR "process transparency" OR "state disclosure" OR "visibility of system status") AND (taxonomy OR framework OR typology OR dimensions OR classification OR "systematic review")</p>
			</div>
		</div>
	</div>
	<div className="col col--6 margin-bottom--md">
		<div className="card">
			<div className="card__header">
				<h3>Suchstring D</h3>
			</div>
			<div className="card__body">
				<p>("conversational agent" OR "conversational AI" OR chatbot OR "dialogue system" OR "voice assistant") AND ("chain-of-thought" OR "reasoning trace" OR "thinking indicator" OR "tool use" OR "tool calling" OR "function calling" OR "typing indicator" OR "progress indicator") AND ("user-facing" OR "human-AI interaction" OR "user trust" OR "user understanding" OR "user experience" OR explainability OR "system status") NOT (("prompt engineering") AND (accuracy OR benchmark OR "few-shot"))</p>
			</div>
		</div>
	</div>
</div>

## Screening und Dokumentation

Die Literaturrecherche erfolgte in Web of Science, der ACM Digital Library,
SpringerLink und IEEE Xplore und wurde von vornherein auf Publikationen der
letzten fünf Jahre beschränkt; der Suchzeitraum endete am 20.08.2026. Die
Dokumentation des Auswahlprozesses folgt dem PRISMA-Flussdiagramm (Abbildung
1).

![PRISMA-Flussdiagramm](img/prisma-aktuell-211026.png)
<figcaption>Abbildung 1: PRISMA-Flussdiagramm des Literaturauswahlprozesses.</figcaption>

Insgesamt wurden 618 Treffer identifiziert (Web of Science: 249, ACM
Digital Library: 254, SpringerLink: 74, IEEE Xplore: 41). Nach Entfernung von
zehn Duplikaten (sechs zwischen ACM Digital Library und Web of Science, vier
zwischen IEEE Xplore und den übrigen Datenbanken) sowie acht weiteren
Datensätzen aus sonstigen Gründen (falscher Dokumenttyp: n = 5, nicht
empirisch: n = 2, Sprache: n = 1) verblieben 600 Datensätze für das
Screening. Im Titel- und Abstract-Screening wurden 350 Arbeiten als
fachfremd ausgeschlossen, da sie Conversational AI rein technisch oder
algorithmisch evaluierten. Die übrigen 250 Arbeiten wurden im Volltext auf
Eligibilität geprüft; alle Volltexte waren verfügbar. Ausgeschlossen wurden
207 Arbeiten anhand von vier Kriterien: keine Zustandstransparenz (n = 146),
verminderte Relevanz im Vergleich zum Hauptkorpus (n = 33), veraltete
Übersichtsarbeiten (n = 16) und eine zu spezifische Zielgruppe (n = 12).
Aus der Datenbanksuche gingen somit 43 Arbeiten (250 − 207) in den Korpus ein.
Ergänzend wurden über eine Zitationssuche (Research Rabbit) 17 und über Websites drei weitere
Quellen identifiziert. Die Websites schieden als Nicht-Primärliteratur aus.
Von den 17 Quellen aus der Zitationssuche waren drei nicht abrufbar; von den
verbleibenden 14 wurden sechs wegen verminderter Relevanz ausgeschlossen.
Damit kamen acht Arbeiten (14 − 6) hinzu und der finale Korpus umfasst 51
Publikationen (43 + 8).

Jeder Datensatz und die daraus hervorgehenden Erkenntnisse wurden in einer
strukturierten Tabelle dokumentiert. Erfasst wurden:

| Feld | Inhalt |
| --- | --- |
| Referenz | Autorinnen und Autoren sowie Erscheinungsjahr |
| Titel | Titel der Publikation |
| Interaktionszustand | Untersuchter Zustand oder Zustandsübergang |
| Merkmale | Identifizierte Eigenschaften des Zustandsübergangs |
| Implikationen für HCI und Design | Folgerungen für Gestaltung und Interaktion |
| Domäne | Anwendungskontext der Untersuchung |
| Relevanz | Beitrag zur Beantwortung der Forschungsfragen |
| Modalität(en) | Eingesetzte Interaktionsmodalitäten |
| Publikationsart | Typ der Publikation |

Die Tabelle diente nicht nur der Dokumentation einzelner Treffer, sondern auch
der fortlaufenden Sicherung und Vergleichbarkeit neu entstehender Einsichten.

## Kodierung und Synthese

Die eingeschlossenen Arbeiten wurden induktiv codiert und in einer
Konzeptmatrix nach Webster und Watson (2002) erfasst. Die beschriebenen
Interaktionszustände und -übergänge wurden anschließend zu zehn thematisch
ähnlichen Zustandsclustern verdichtet.

Die Merkmale der Zustandsübergänge wurden in Anlehnung an Nickerson et al.
empirisch-konzeptuell abgeleitet. Leitend war die Frage nach den Eigenschaften
eines Übergangs und danach, ob und wie er für Nutzende sichtbar gemacht werden
muss. Auf formale Abbruchbedingungen wurde verzichtet.

Die Auswertung erfolgte entlang der drei Forschungsfragen:

1. Für **RQ1** wurden die codierten Arbeiten zu Zustandsclustern verdichtet.
2. Für **RQ1.1** wurden Merkmale der Zustandsübergänge abgeleitet und mit den
   Zustandsclustern zu einer tabellarischen Taxonomie verbunden.
3. Für **RQ1.2** wurden die Arbeiten anhand ihres Anwendungskontexts einer
   induktiv abgeleiteten Domäne oder einer bereichsübergreifenden Kategorie
   zugeordnet. Die Begründungen des Transparenzbedarfs je Domäne wurden
   zusätzlich den Zustandsclustern aus RQ1 zugeordnet.

## Ergebnisse der Synthese

Die Literaturanalyse liefert eine konzeptzentrierte Synthese und eine
Taxonomie, die Zustände, Übergänge, ihre Unterscheidungsmerkmale und den
jeweils begründeten Transparenzbedarf in einem gemeinsamen Ordnungsrahmen
zusammenführt. Damit werden die in der Forschung diskutierten Zustände und
Übergänge systematisch vergleichbar und die Grundlage für
kontextabhängige Transparenzentscheidungen geschaffen.

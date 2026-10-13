---
title: Systematische Literaturanalyse
sidebar_position: 4
---

# Literaturanalyse

## Vorgehen

Fasse die relevanteste Literatur, zentrale Konzepte und Forschungslücken zusammen und vergleiche sie im Hinblick auf das Projekt.

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


## PRISMA
![PRISMA-Flussdiagramm](img/prisma.png)

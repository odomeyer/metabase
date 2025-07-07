---
Titel: Barrierefreiheit in der Metabase
redirect_from:
- /docs/latest/accessibility
- /docs/latest/personen-und-gruppen/zugänglichkeit
---


# Barrierefreiheit in Metabase


Obwohl wir daran arbeiten, ein Produkt zu entwickeln, das einfach zu benutzen ist und alle Menschen einbezieht, sind wir noch nicht vollständig konform mit den [Section 508 Standards der US-Bundesregierung](https://www.section508.gov/) oder den [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/) auf Stufe AA. Wir gehen davon aus, dass wir unseren derzeitigen Stand in Zukunft weiter ausbauen werden:


- **Navigation und Bildschirmleser:** Die meisten Informationen werden so präsentiert, dass sie für Bildschirmleser zugänglich sind. Die Metabase verfügt nicht über einen Mechanismus, der es Screenreadern ermöglicht, sich wiederholende Navigationselemente effizient zu umgehen. Viele interaktive Elemente, Funktionalitäten, Tooltip-Inhalte, nicht-modale Dialoge und benutzerdefinierte Formularsteuerungen sind für Screenreader-Benutzer nicht bedienbar.
- **Nicht-textliche Inhalte:** Während Metabase für die meisten nicht-textlichen Elemente Textalternativen bereitstellt, fehlen bei einigen funktionalen Bildern entweder Beschreibungen oder der Alt-Text ist unvollständig.
-**Tastaturnavigation:** Die meisten Formularelemente sind über die Tastatur bedienbar, aber bestimmte interaktive Komponenten, wie z. B. benutzerdefinierte Steuerelemente und nichtmodale Dialoge, sind möglicherweise nicht vollständig über die Tastatur bedienbar.
- **Fokusmanagement:** In einigen Fällen folgt der Tastaturfokus keiner logischen Reihenfolge, und bestimmten interaktiven Elementen fehlt ein sichtbarer Fokusindikator.
-Tabellen und Datenvisualisierung:** Datentabellen enthalten nicht durchgängig programmatisch definierte Zeilen- und Spaltenüberschriften, was die Interpretation durch Screenreader beeinträchtigt.
- **Bewegung und Animationen:** Die Metabase enthält minimale Übergangsanimationen. Wenn dieCSS-Einstellung [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion#user_preferences) im Betriebssystem aktiviert ist, deaktiviert Metabase die Animationen. Wir haben jedoch noch keine vollständigen Tests durchgeführt, um zu bestätigen, dass alle Animationen den empfohlenen Grenzwert für die Flimmerrate (zwischen 2 Hz und 55 Hz) einhalten.
- **Sprache und Beschriftungen:** Bei einigen Formularelementen fehlen explizite Beschriftungen, und die primären Spracheinstellungen werden bei Änderungen nicht programmatisch aktualisiert.
-Kompatibilität mit unterstützenden Technologien:** Metabase ist eine React-basierte Webanwendung, was bedeutet, dass sie JavaScript benötigt, um zu funktionieren, und möglicherweise nicht mit allen unterstützenden Technologien voll funktionsfähig ist.
- **Fehlerbehandlung und Formularvalidierung:** Einige Formularfelder bieten keine eindeutigen Fehlermeldungen, und erforderliche Felder werden nicht immer programmatisch als obligatorisch gekennzeichnet. Dies kann sich auf Benutzer auswirken, die auf Bildschirmlesegeräte oder andere unterstützende Technologien angewiesen sind.
- **Kontrast und visuelle Zugänglichkeit:** Während die meisten Elemente der Benutzeroberfläche die Anforderungen an den Kontrast erfüllen, weisen einige Texte und interaktive Elemente einen unzureichenden Farbkontrast auf, so dass sie für Benutzer mit Sehschwäche oder Farbenblindheit schwer zu lesen sind.
- **Größenanpassung und reaktionsfähiges Verhalten:** Die meisten Inhalte können ohne Informationsverlust um bis zu 200 % vergrößert werden, aber einige Elemente werden nicht richtig umbrochen, was zu Überlappungen oder abgeschnittenen Inhalten führen kann, wenn der Textabstand angepasst wird.
- **Hover- und Tooltip-Verhalten:** Einige Tooltips und zusätzliche Informationselemente erscheinen beim Hover, lassen sich aber nicht ohne Weiteres mit der Tastatur ausblenden, was für Benutzer, die nur über eine Tastatur verfügen, und für Screenreader eine Herausforderung darstellen kann.
- **Statusmeldungen und Benachrichtigungen:** Während einige dynamisch generierte Statusmeldungen zugänglich sind, werden andere nicht konsistent an unterstützende Technologien wie Bildschirmlesegeräte übermittelt, was es für Benutzer schwierig machen könnte, wichtiges Systemfeedback zu erhalten.
-Einheitliche Seitentitel und Überschriften:** Einigen Seiten fehlen beschreibende oder eindeutige Titel, was die Navigation für Benutzer von Bildschirmlesegeräten, die auf eine eindeutige Seitenidentifizierung angewiesen sind, erschweren kann.


Wenn Sie daran interessiert sind, uns bei der Beseitigung dieser Lücken zu helfen, sehen Sie sich [unseren Entwicklerleitfaden](../developers-guide/start.md) an.


Um ein Exemplar unserer VPAT anzufordern, kontaktieren Sie uns unter [help@metabase.com](mailto:help@metabase.com).


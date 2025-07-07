---
Titel: Frontend
---


# Frontend


## Entity Loader


Wenn Sie eine neue Funktion entwickeln oder einfach nur auf einige der Anwendungsdaten auf dem Frontend zugreifen müssen, sind Entity Loader Ihr Freund. Sie abstrahieren den Aufruf der API, die Behandlung von Lade- und Fehlerzuständen, zwischenspeichern zuvor geladene Objekte, machen den Cache ungültig (in einigen Fällen) und lassen Sie einfach Aktualisierungen durchführen oder neue Elemente erstellen.


### Gute Anwendungen für Entity Loader


- Ich muss ein bestimmtes X (Benutzer, Datenbank usw.) abrufen und anzeigen.
- Ich muss eine Liste von X (Datenbanken, Fragen, etc.) abrufen und anzeigen.


### Derzeit verfügbare Entitäten:


- Fragen, Dashboards, Pulse
- Sammlungen
- Datenbanken, Tabellen, Felder, Segmente, Metriken
- Benutzer, Gruppen
- Vollständige aktuelle Liste der Entitäten hier: https://github.com/metabase/metabase/tree/master/frontend/src/metabase/entities


Es gibt zwei Möglichkeiten, Lader zu verwenden, entweder als React "render prop"-Komponenten oder als React-Komponentenklassendekoratoren ("higher order components").


### Laden von Objekten


In diesem Beispiel werden wir Informationen über eine bestimmte Datenbank für eine neue Seite laden.


````js
import React aus "react";
import Databases from "metabase/entities/databases";


@Databases.load({ id: 4 })
class MyNewPage extends React.Component {
render() {
const { database } = this.props;
return (
<div>
<h1>{Datenbank.Name}</h1>
</div>
);
}
}
```


In diesem Beispiel wird ein Klassendekorator verwendet, um eine Datenbank mit der ID 4 abzufragen und dann anzuzeigen. Wenn Sie stattdessen eine Renderprop-Komponente verwenden wollten, würde Ihr Code wie folgt aussehen.


````js
import React aus "react";
import Databases from "metabase/entities/databases";


class MyNewPage extends React.Component {
render() {
const { database } = this.props;
return (
<div>
<Databases.Loader id={4}>
{({ Datenbank }) => <h1>{Datenbank.Name}</h1>}
</Databases.Loader>
</div>
);
}
}
```


Da Sie wahrscheinlich nicht nur ein statisches Element anzeigen möchten, können Sie für Fälle, in denen einige der benötigten Werte dynamisch sind, eine Funktion verwenden, um auf die Requisiten zuzugreifen und den benötigten Wert zurückzugeben. Wenn Sie den Komponentenansatz verwenden, können Sie die Requisiten einfach wie bei dynamischen Werten übergeben.

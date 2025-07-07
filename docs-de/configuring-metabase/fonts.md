---
Titel: Schriftarten
redirect_from:
- /docs/latest/enterprise-guide/fonts
- /docs/latest/einbettung/schriftarten
---


# Schriftarten


{% include plans-blockquote.html feature="Anpassbare Schriftart" %}


Bei Pro- und Enterprise-Paketen können Sie die von Metabase verwendete Schriftart anpassen (die Standardeinstellung ist [Lato](https://fonts.google.com/specimen/Lato)). Sie können aus einer Reihe von Google-Schriftarten wählen, die die normalen, fetten und schweren Schriftarten enthalten, die Metabase für die verschiedenen Elemente der Benutzeroberfläche verwendet.


## Enthaltene Schriftarten


Um die Schriftart der Metabase zu ändern, klicken Sie auf das**Zahnradsymbol** oben rechts auf dem Bildschirm und wählen Sie**Admin-Einstellungen** >**Einstellungen** >**Erscheinungsbild**. Wählen Sie unter**Schriftart** aus einer Liste der enthaltenen Schriftarten aus.


- [Benutzerdefinierte Schriftart](#custom-fonts)
- [Lato](https://fonts.google.com/specimen/Lato)
- [Lora](https://fonts.google.com/specimen/Lora)
- [Merriweather](https://fonts.google.com/specimen/Merriweather)
- [Montserrat](https://fonts.google.com/specimen/Montserrat)
- [Noto Sans](https://fonts.google.com/specimen/Noto+Sans)
- [Open Sans](https://fonts.google.com/specimen/Open+Sans)
- [Oswald](https://fonts.google.com/specimen/Oswald)
- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
- [Poppins](https://fonts.google.com/specimen/Poppins)
- [PT Sans](https://fonts.google.com/specimen/PT+Sans)
- [PT Serif](https://fonts.google.com/specimen/PT+Serif)
- [Raleway](https://fonts.google.com/specimen/Raleway)
- [Roboto](https://fonts.google.com/specimen/Roboto)
- [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed)
- [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)
- [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab)
- [Slabo 27px](https://fonts.google.com/specimen/Slabo+27px)
- Source Sans Pro
- [Ubuntu](https://fonts.google.com/specimen/Ubuntu)


Comic Sans ist derzeit nicht enthalten.


## Benutzerdefinierte Schriftarten


Um eine benutzerdefinierte Schriftart einzustellen, klicken Sie auf das**Zahnradsymbol** in der oberen rechten Ecke des Bildschirms und wählen Sie**Admin-Einstellungen** >**Einstellungen** >**Erscheinungsbild**.


Wählen Sie unter**Schriftart** die Option**Benutzerdefiniert...** und geben Sie die URLs zu Ihren Schriftdateien ein.


## Optionen für den Schriftstil


Sie können drei verschiedene Schriftarten mit drei verschiedenen URLs einstellen, eine für jede Schriftart (Größe und Gewicht), die Metabase für die korrekte Darstellung der Benutzeroberfläche verwendet. Die Schriftstärken sind:


- Normal 400
- Bold 700
- Heavy 900 (manchmal auch Black 900 genannt)


Sie müssen nur die erste Formatvorlage (Regular 400) festlegen; die anderen Formatvorlagen werden vom Browser ausgefüllt.


Die besten Ergebnisse erzielen Sie, wenn Sie mindestens die Stile 400 und 700 einstellen. Wenn Sie eine einzelne Schriftdatei haben, die mehrere Schriftstile innerhalb derselben Familie enthält, geben Sie die URL in mehrere Felder ein, um Metabase mitzuteilen, dass die Schnitte in dieser Schriftdatei bevorzugt werden sollen. Metabase verwendet diese Stile, um die vom Browser eingestellten Schriftstile zu überschreiben.


### Unterstützte Schriftdateiformate


Für benutzerdefinierte Schriftarten unterstützt Metabase die Dateiformate woff, woff2 und ttf. Wenn die von Ihnen angegebene URL keine spezifische Dateierweiterung enthält, geht Metabase davon aus, dass es sich um eine woff2-Datei handelt.

---
Titel: Entwicklungsinstanzen
Zusammenfassung: Erstellen Sie Entwicklungsinstanzen von Metabase zum Testen, ohne pro Benutzer zu bezahlen. Perfekt, um Änderungen auszuprobieren, bevor sie in die Produktion übernommen werden.
---


# Entwicklungsinstanzen


{% include plans-blockquote.html feature="Entwicklungsinstanzen" %}


> Eine Entwicklungsinstanz **kann nicht in der Produktion verwendet werden** und muss auf **Metabase Version 55 oder höher** sein.


Bei Pro- und Enterprise-Tarifen können Sie eine Entwicklungsinstanz oder ein Entwicklungs-Token als Add-on zu Ihrem Tarif erwerben.


-Selbst gehostet**: Sie können einen Entwicklungs-Token erwerben, den Sie für eine oder mehrere selbst gehostete Entwicklungsinstanzen verwenden können (d. h. Sie können denselben Token ohne zusätzliche Kosten für mehrere Entwicklungsinstanzen wiederverwenden). Der Entwicklungs-Token hat Zugang zu denselben kostenpflichtigen Funktionen wie Ihr Produktions-Token.
-Cloud**: Sie können eine Entwicklungsinstanz erwerben, die auf [Metabase Cloud](https://www.metabase.com/cloud/) gehostet wird. Die Entwicklungsinstanz hat Zugriff auf die gleichen kostenpflichtigen Funktionen wie Ihr Produktions-Token.


Entwicklungsinstanzen sind nur für Pro- und Enterprise-Pläne verfügbar; sie sind nicht in den Basisplänen enthalten. Dev-Instanzen müssen als Add-on zu Ihrem Plan erworben werden, nachdem Sie Ihre Testphase abgeschlossen und Ihre erste Zahlung geleistet haben.


## Sie zahlen eine Pauschalgebühr, nicht pro Testbenutzer.


Das ist das grundlegende Nutzenversprechen. Im Gegensatz zu Produktionsinstanzen, bei denen Sie pro Benutzerkonto zahlen, können Sie für eine Entwicklungsinstanz nur eine Pauschalgebühr zahlen. Auf diese Weise können Sie mit Dashboards, Berechtigungen usw. herumspielen, ohne für Benutzerkonten zu bezahlen, die Sie nur zum Testen verwenden.


Sobald Sie mit den Änderungen in Ihrer Entwicklungsinstanz zufrieden sind, können Sie [Ihre Änderungen exportieren und in Ihre Produktionsmetabasisimportieren](./serialization.md).


## Sie können Entwicklungsinstanzen nicht in der Produktion verwenden.


Die Benutzeroberfläche für Entwicklungsinstanzen, einschließlich der Benutzeroberfläche für alle Exporte und Benachrichtigungen, ist mit einem Wasserzeichen versehen.


[Wasserzeichen-Banner](./images/watermark-banner.png)


## Erstellen einer Entwicklungsinstanz


Wenn Sie über einen Pro- oder Enterprise-Plan verfügen, können Sie im Metabase Store eine Entwicklungsinstanz von Metabase erwerben.


1. Loggen Sie sich in Ihr [Shop-Konto](https://store.metabase.com) ein.
2. Gehen Sie auf die Registerkarte Instanzen.
3. Klicken Sie auf **+ Neue Instanz**.
4. Wählen Sie **Entwicklungsinstanz**.


[Entwicklungsinstanz erstellen](./images/create-development-instance.png)


Sie können eine Cloud-Instanz wählen oder ein Token für eine selbst gehostete Entwicklungsinstanz erhalten.


## Downgrading mit Entwicklungsinstanzen


Wenn Sie einen Pro Cloud-Tarif haben und ein Downgrade auf einen Starter-Tarif durchführen, löschen wir alle von Ihnen erstellten Entwicklungsinstanzen. Alle Ihre Produktionsinstanzen bleiben intakt (abzüglich der Pro-Funktionen).


Wenn Sie ein Downgrade durchführen und einen selbst gehosteten Plan haben, ist der Token nicht mehr gültig und Sie verlieren den Zugang zu den bezahlten Funktionen.


## Daten von der Entwicklung in die Produktion übertragen


Sie können Änderungen, die Sie in Ihrer Entwicklungsinstanz vorgenommen haben, exportieren und in Ihre Produktionsinstanz importieren. Sehen Sie sich [serialization](../installation-and-operation/serialization.md) an.

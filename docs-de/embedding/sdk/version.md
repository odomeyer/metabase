---
Titel: SDK für eingebettete Analytik - Versionen
---


# Embedded analytics SDK - Versionen


{% include plans-blockquote.html feature="Embedded analytics SDK" sdk=true %}


Die stabile Version des SDK ist an die Version der Metabase gebunden.


Wenn Sie also zum Beispiel Metabase 53(`0.53.x`, `1.53.x`) verwenden, ist _jede_ Version 0.53.x des @metabase/embedding-sdk-react npm-Pakets kompatibel.


Um die Dinge zu vereinfachen, veröffentlichen wir dist-tags für jede stabile Metabase-Version. Um zum Beispiel die neueste Version des SDK zu installieren, die mit Metabase 53 kompatibel ist, führen Sie aus:


``sh
npm install @metabase/embedding-sdk-react@53-stable
```


Um die neueste Version des SDK zu erhalten, die mit nächtlichen Metabase-Builds funktioniert, verwenden Sie das Dist-Tag "canary".


## Minimale SDK-Version


52 ist die Mindestversion, die für das Embedded Analytics SDK unterstützt wird.


## Pinning der Version bei Verwendung des SDK mit Metabase Cloud


Um Ihre Metabase-Version zu pinnen, gehen Sie zu**Admin-Einstellungen > Einstellungen > Einbettung**. Gehen Sie zur SDK-Karte "Eingebettete Analysen", blättern Sie zu**Versionsanbindung** und klicken Sie auf**Versionsanbindung anfordern**.


## Anforderungen für die Versionsanbindung


Um eine Version der Metabase zu pinnen, müssen Sie:


- Sie müssen Metabase Cloud nutzen (natürlich)
- Sie haben einen Pro- oder Enterprise-Plan


## Warum Sie Ihre Metabase Cloud-Version anheften sollten


Normalerweise aktualisiert Metabase Cloud Ihre Metabase, sobald neue Versionen auf den Markt kommen, damit Sie sich nicht mit Upgrades beschäftigen müssen.


Wenn Sie jedoch das SDK mit Metabase Cloud verwenden, sollten Sie ein manuelles Upgrade durchführen, um sicherzustellen, dass Ihre Einbettungen nicht beschädigt werden, wenn Sie sowohl Ihre Metabase als auch Ihre SDK-Version aktualisieren.


Für ein manuelles Upgrade können Sie Ihre Metabase-Version mit der SDK-Version synchronisieren, die Sie verwenden. Auf diese Weise können Sie selbst entscheiden, wann Sie Ihre Metabase aktualisieren möchten.


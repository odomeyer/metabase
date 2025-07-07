---


Angesichts der obigen Erklärung, wie die JVM mit Speicher umgeht, sollten Sie bei Leistungsproblemen mit der Metabase, die nicht auf Ihr Data Warehouse zurückzuführen sind, auf die folgenden Warnhinweise achten:


## Metabase stürzt aufgrund von Java-Heap-Speicherplatz ab `OutOfMemoryError`


Die JVM kann normalerweise herausfinden, wie viel RAM auf dem System verfügbar ist, und automatisch eine sinnvolle Obergrenze für die Heap-Speicherverwendung festlegen. In bestimmten Shared-Hosting-Umgebungen funktioniert dies jedoch nicht immer wie gewünscht. Das übliche Symptom dafür ist eine Fehlermeldung wie:


```
java.lang.OutOfMemoryError: Java Heap-Speicher
```


Wenn Sie diesen "Out of memory" (OOM) Fehler sehen, müssen Sie [der JVM mehr Speicher zuweisen](#allocating-more-memory-to-the-jvm).


### Wenn Sie die Speichernutzung über die Zeit als Liniendiagramm betrachten, sehen Sie ein Sägezahnmuster.


Sie können Tools verwenden, um zu sehen, wie die Metabase den ihr zur Verfügung stehenden Speicher im Laufe der Zeit nutzt. Sehen Sie sich das an:


- [Beobachtbarkeit mit Prometheus](../installation-und-betrieb/beobachtbarkeit-mit-prometheus.md)
- [Überwachung der Metabasis](../installation-und-betrieb/monitoring-metabase.md)


Die spezifische Prometheus-Metrik, die Sie überprüfen müssen, ist jvm_memory_bytes_used{area="heap"}


Eine rote Flagge, auf die Sie achten sollten: das Sägezahnmuster. Die Metabase verbraucht schnell viel Speicher, was die Garbage Collection auslöst, die wiederum Speicher freigibt, den die Metabase schnell wieder verbraucht. Dieses Auf-ab-auf-ab-Muster der Speichernutzung ist das Kennzeichen von häufigen Garbage Collection-Zyklen. Die Garbage Collection bindet CPU-Zyklen, was Ihre Anwendung verlangsamen kann.


Wenn Sie dies feststellen, müssen Sie [die Menge des der JVM zugewiesenen Speichers erhöhen](#allocating-more-memory-to-the-jvm).


## Mehr Speicher für die JVM zuweisen


Sie können eine JVM-Option setzen, um der JVM mehr Speicher auf dem Heap zuzuweisen. Zum Beispiel könnte Ihre Java-Laufzeitumgebung die Option `-X` verwenden, um dies zu tun:


``sh
java -Xmx2g -jar metabase.jar
```


Passen Sie die Speicherzuteilung nach oben an, bis Metabase zufrieden zu sein scheint. Achten Sie aber darauf, dass die Zahl niedriger ist als der gesamte auf Ihrem Rechner verfügbare Arbeitsspeicher, da Metabase nicht der einzige laufende Prozess sein wird. In der Regel reichen 1 bis 2 GB RAM für andere Prozesse auf dem Rechner aus, so dass Sie `-Xmx` auf einem Rechner mit 2 GB RAM auf ` 1g`, auf einem Rechner mit 4 GB RAM auf ` 2g` und so weiter einstellen können. Möglicherweise müssen Sie mit diesen Einstellungen experimentieren, um eine Einstellung zu finden, bei der Metabase und alles andere gut zusammenspielen (und dieses Experimentieren kann ein Upgrade auf einen Rechner mit mehr Arbeitsspeicher erfordern).


Sie können auch die Umgebungsvariable `JAVA_OPTS` verwenden, um JVM-Args zu setzen, anstatt sie direkt an `java` zu übergeben. Dies ist besonders nützlich, wenn Sie das Docker-Image ausführen:


```sh
docker run -d -p 3000:3000 -e "JAVA_OPTS=-Xmx2g" metabase/metabase
```


## Diagnose von Speicherproblemen, die OutOfMemoryErrors verursachen


Wenn die Metabase-Instanz gestartet wird und für eine beträchtliche Zeit läuft, bevor sie keinen Speicher mehr hat, gibt es möglicherweise ein bestimmtes Ereignis, wie z. B. eine große Abfrage, das den`OutOfMemoryError` auslöst. Eine Möglichkeit zu diagnostizieren, wo der Speicher verwendet wird, ist die Aktivierung von Heap-Dumps, wenn ein "OutOfMemoryError" ausgelöst wird. Um dies zu ermöglichen, müssen Sie zwei Flags zum`java`-Aufruf hinzufügen:


```
java -Xmx2g -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/path/to/a/directory -jar metabase-jar
```


Das `-XX:HeapDumpPath` Flag gibt an, wo der Dump abgelegt werden soll - das aktuelle Verzeichnis ist die Vorgabe. Wenn ein "OutOfMemoryError" auftritt, wird die JVM eine "hprof" -Datei in das angegebene Verzeichnis ablegen. Diese "hprof" -Dateien können groß sein (die Größe des "-Xmx"- Arguments), also stellen Sie sicher, dass Ihre Festplatte genug Platz hat. Diese "hprof" -Dateien können mit vielen verschiedenen Tools gelesen werden, z.B. mit "jhat" (das im JDK enthalten ist) oder dem [Eclipse Memory Analyzer Tool][eclipse-memory-analyzer].


## Metabase kann nicht von einer Datei oder einem Ordner lesen oder schreiben (IOError)


Wenn Sie einen Fehler in Bezug auf Dateiberechtigungen sehen, z. B. dass Metabase eine SQLite-Datenbank oder eine benutzerdefinierte GeoJSON-Kartendatei nicht lesen kann, lesen Sie den Abschnitt "Metabase can't read to/from a file or directory" in unserem [Docker troubleshooting guide](./docker.md).


## WARNUNG: sun.reflect.Reflection.getCallerClass wird nicht unterstützt


Machen Sie sich darüber keine Sorgen.


```
WARNUNG: sun.reflect.Reflection.getCallerClass wird nicht unterstützt. Dies wird die Leistung beeinträchtigen.
```


Wenn Sie den obigen Fehler sehen, ignorieren Sie ihn. Ihre Metabase ist vollkommen gesund und funktioniert wie sie sollte.


[eclipse-memory-analyzer]: https://www.eclipse.org/mat/


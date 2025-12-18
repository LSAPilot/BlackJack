# Das Spiel Blackjack

Jeder Spieler setzt gegen die Bank und versucht, mit seinen Karten 21 Punkte zu erreichen oder an diesen Wert so nahe wie möglich heranzukommen, ohne ihn zu überschreiten.

Dabei zählen Asse elf Punkte oder ein Punkt, Bilder zehn Punkte und alle anderen Karten ihren aufgedruckten Punktewert. Gespielt wird mit mehreren Kartenspielen mit jeweils 52 Blatt. Vor Spielbeginn mischt der Dealer die Karten und lässt sie von einem Spieler mit einer neutralen Karte schneiden. Bevor der Dealer die Karten in den Schlitten gibt, trennt er mit einer neutralen Karte einen Teil des Kartenpakets ab. Sobald die Schneidekarte im Spiel erscheint, wird nur mehr das laufende Spiel beendet und dann neu gemischt. Beim Einsatz von Kartenmischmaschinen entfällt diese Vorgehensweise.

# Spielregeln
Nachdem die Einsätze getätigt sind, gibt der Dealer die Spielkarten im Uhrzeigersinn offen aus: zuerst eine an jeden Spieler, zuletzt eine an sich selbst. Danach erhält jeder Spieler in der gleichen Reihenfolge offen eine zweite Karte.

Hat der Spieler einen Black Jack (ein Ass mit einem Bild oder einer zehn), so wird im Verhältnis 3:2 ausbezahlt, es sei denn, der Dealer kann mit einem Black Jack gleichziehen (stand off, en carte, égalité). In diesem Fall gewinnt der Einsatz nicht, geht aber auch nicht verloren. Der Spieler kann den Einsatz stehen lassen, in seiner Höhe verändern oder zurückziehen.

Erreicht der Spieler keinen Black Jack, so versucht er mit weiteren Karten so nahe wie möglich an den Punktwert 21 heranzukommen. Mit »Karte« fordert er beliebig viele Karten, mit »nein« gibt er zu verstehen, dass er keine weiteren Karten wünscht.

Der Dealer muss bei einem Punktwert von 16 oder weniger weitere Karten ziehen. Bei einem Punktwert von 17 oder mehr darf er nicht mehr ziehen.

Liegt der Spieler mit seinem Punktwert näher an 21 als der Dealer, gewinnt er in der Höhe seines Einsatzes. Ist der Punktwert niedriger als der des Dealers, verliert er seinen Einsatz. Ergibt sich eine Punktegleichheit (stand off), kann der Spieler über seinen Einsatz verfügen. Überschreitet der Spieler während des Spiels den Wert 21, verliert er sofort. Überschreitet der Dealer den Wert 21, haben alle noch im Spiel befindlichen Einsätze gewonnen.

Der Mindest- und Höchsteinsatz pro Box ist am Spieltisch angegeben. Alle Einsätze müssen durch den Minimumeinsatz pro Box teilbar sein.

# Designdokument

Jeweils Klasse für: 
    - Karte
    - Deck
    - Spieler
    - Dealer

Klasse Karte: 

Attribute:  - Famile (Karo, Pike, Kreuz, Herz)
            - Bezeichnung (2,3,4,5,6,7,8,9,10,Bube,Dame,König,Ass)
            - Wert (2,3,4,5,6,7,8,9,10,11)

Klasse Deck: 

Attribute:  - Karten
Methoden: Mischen, Dealen, 

Klasse Spieler: 

Attribute:  - erhaltene Karten
            - Siege
            - Niederlagen
            
Klasse Dealer: 

Attribute:  - erhaltene Karten




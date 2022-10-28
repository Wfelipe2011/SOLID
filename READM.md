## Single Responsibility

O que é bound context?

## O que é um bound context?

Um bound context é um contexto de domínio que é limitado por um contexto de domínio superior.
Para descobrir o bound context de um contexto de domínio, você deve pensar em mundaça

* Que pode sofrer mudanças?
* Que é afetado pelas mudanças?
* Que não deveria ser afetado pelas mudanças?

Isso vai alem de uma classe ou um metodo, mas quando voce entende que uma mudança deveria afetar apenas aquilo que deveria ser mudado. Evitando efeitos colaterais.

## Liskov Substitution

 Se S (Beer, Whisky e Water) é subclasse de T (Item) entao objetos de tipo T (Item) podem ser substituidos por objetos de tipo S (Beer, Whisky e Water) sem quebrar o programa.

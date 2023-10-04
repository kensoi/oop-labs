class Питомец {
    тип = "Питомец"
    constructor(Имя) {
        this.Имя = Имя;
    }

    говорит() {
        return "РРР";
    }
}

class Кошка extends Питомец {
    тип = "Кошка"
    говорит() {
        return "Мяу";
    }
}

class Лиса extends Питомец {
    тип = "Лиса"
    говорит() {
        return "Фыр-фыр";
    }

    // кстати она не говорит Фыр Фыр
    // Она ехидно смеётся, https://youtu.be/1ljrtP2Wepk
}

class Гибрид extends (Кошка, Лиса) {
    тип = "Гибрид"
    // Гибрид сначала наследует класс от кошки, и затем поверх наследованного наследует ещё и от Лисы
    // Поэтому гибрид будет говорить "фыр фыр"
}

export {
    Питомец, Кошка, Лиса, Гибрид
}
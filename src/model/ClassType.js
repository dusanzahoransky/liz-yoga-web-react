export class ClassType {
    static GroupsInPerson = new ClassType('groups-in-person', 'la Clase Grupal')
    static GroupsOnline = new ClassType('groups-online', 'la Clase Grupal online')
    static PrivateInPerson = new ClassType('private-in-person', 'la Clase privada personalizada')
    static PrivateOnline = new ClassType('private-online', 'la Clase privada online')
    static WorkshopInPerson = new ClassType('workshop-in-person', 'el Workshop')
    static WorkshopOnline = new ClassType('workshop-online', 'el Workshop online')
    static SessionEspecial = new ClassType('session-especial-mosman', 'Sesión Dirigida a Calmar tu Sistema Nervioso')
    static WomenDay = new ClassType('women-day', 'Conmemoración Día Internacional de la Mujer')

    constructor(value, label) {
        this.value = value
        this.label = label
    }
}
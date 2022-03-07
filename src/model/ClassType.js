export class ClassType {
    static GroupsInPerson = new ClassType('groups-in-person', 'la Clase Grupal')
    static GroupsOnline = new ClassType('groups-online', 'la Clase Grupal online')
    static PrivateInPerson = new ClassType('private-in-person', 'la Clase privada personalizada')
    static PrivateOnline = new ClassType('private-online', 'la Clase privada online')
    static WorkshopInPerson = new ClassType('workshop-in-person', 'el Workshop')
    static WorkshopOnline = new ClassType('workshop-online', 'el Workshop online')

    constructor(value, label) {
        this.value = value
        this.label = label
    }
}
export class ClassType {
    static GroupsInPerson = new ClassType("la Clase Grupal")
    static GroupsOnline = new ClassType("la Clase Grupal online")
    static PrivateInPerson = new ClassType("la Clase privada personalizada")
    static PrivateOnline = new ClassType("la Clase privada online")
    static WorkshopInPerson = new ClassType("el Workshop")
    static WorkshopOnline = new ClassType("el Workshop online")

    constructor(label) {
        this.label = label
    }
}
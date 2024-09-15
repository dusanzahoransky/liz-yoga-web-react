export class ClassType {
    static GroupsInPerson = new ClassType('groups-in-person', 'la Clase Grupal')
    static GroupsOnline = new ClassType('groups-online', 'la Clase Grupal online')
    static PrivateInPerson = new ClassType('private-in-person', 'la Clase privada personalizada')
    static PrivateOnline = new ClassType('private-online', 'la Clase privada online')
    static WorkshopInPerson = new ClassType('workshop-in-person', 'el Workshop')
    static WorkshopOnline = new ClassType('workshop-online', 'el Workshop online')
    static RetreatBaliSept2024 = new ClassType('retreat-bali-sept-2024', 'Nuestro Retiro de Yoga y Bienestar')
    static RetreatBaliMarch2025 = new ClassType('retreat-bali-march-2025', 'Nuestro Retiro de Yoga y Bienestar')
    static SessionEspecial = new ClassType('session-especial-mosman', 'Sesión Dirigida a Calmar tu Sistema Nervioso')
    static WomenCircle = new ClassType('women-circle', 'Circulo de Mujeres')

    constructor(value, label) {
        this.value = value
        this.label = label
    }
}
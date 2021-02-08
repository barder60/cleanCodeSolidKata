class UserRole {
    constructor(role) {
        this.role = role
    }

    verifyRole() {

    }
}

class UserSettings {
    constructor(id, role) {
        this.id = id
        this.role = new Role(role)
    }
}
export class User {
    private id: string = "";
    get Id(): string {
        return this.id;
    }
    set Id(id: string) {
        this.id = id;
    }

    private username: string = "";
    get Username(): string {
        return this.username;
    }
    set Username(username: string) {
        this.username = username;
    }

    private firstName: string = "";
    get FirstName(): string {
        return this.firstName;
    }
    set FirstName(firstName: string) {
        this.firstName = firstName;
    }

    private lastName: string = "";
    get LastName(): string {
        return this.lastName;
    }
    set LastName(lastName: string) {
        this.lastName = lastName;
    }

    copy(user: User) {
        this.username = user.username;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
    }
}
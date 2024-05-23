// class Client {
//     #login;
//     #email;

//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }

//     // Геттер для отримання значення login
//     getLogin() {
//         return this.#login;
//     }

//     // Сеттер для встановлення значення login
//     setLogin(newLogin) {
//         this.#login = newLogin;
//     }

//     // Геттер для отримання значення email
//     getEmail() {
//         return this.#email;
//     }

//     // Сеттер для встановлення значення email
//     setEmail(newEmail) {
//         this.#email = newEmail;
//     }
// }
//створення класу в завданні через #, але вірно через _ https://learn.javascript.ru/property-accessors 
class Client {
    _login;
    _email;
    //конструктор
    constructor(login, email) {
        this._login = login;
        this._email = email;
    }

    // Геттер для отримання значення login
    getLogin() {
        return this._login;
    }

    // Сеттер для встановлення значення login
    setLogin(newLogin) {
        this._login = newLogin;
    }

    // Геттер для отримання значення email
    getEmail() {
        return this._email;
    }

    // Сеттер для встановлення значення email
    setEmail(newEmail) {
        this._email = newEmail;
    }
}

// Приклад використання:
const client = new Client("user123", "user@example.com");
console.log("Login:", client.getLogin());
console.log("Email:", client.getEmail());
client.setLogin("newUser123");
client.setEmail("newuser@example.com");

console.log("Updated Login:", client.getLogin());
console.log("Updated Email:", client.getEmail());
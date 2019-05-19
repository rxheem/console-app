class User {
  constructor() {
    // Credentials
    this.username = '';
    this.password = '';

    // Basic info
    this.firstName = '';
    this.lastName = '';
    this.fullName = this.firstName + ' ' + this.lastName;

    // Misc data
    this.position = '';
    this.church = '';
    this.churchCode = '';
  }
}

export default new User();

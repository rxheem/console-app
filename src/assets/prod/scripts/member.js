class Member {
  constructor() {
    // Personal Data
    this.firstName = '';
    this.lastName = '';
    this.fullName = this.firstName + ' ' + this.lastName;

    // Misc data
    this.church = '';
    this.churchCode = '';
  }
}

export default new Member();

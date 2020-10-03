export class Contact {
  constructor(_id = "", firstname = "", lastname = "", celular = 0, email = "") {
    this._id = _id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.celular = celular;
    this.email = email;
  }

  _id: string;
  firstname: string;
  lastname: string;
  celular: number;
  email: String;
}

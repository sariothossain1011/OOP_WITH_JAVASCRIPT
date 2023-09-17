const _id = Symbol("id");
const _email = Symbol("email");
const _phone = Symbol("phone");
const _alterNativePhone = Symbol("alterNativePhone");
const _address = Symbol("address");

class Contact {
  constructor({id, email, phone, alterNativePhone, address}) {
    this[_id] = id;
    this[_email] = email;
    this[_phone] = phone;
    this[_alterNativePhone] = alterNativePhone;
    this[_address] = address;
  }

  get email() {
    return this[_email];
  }
  set email(value) {
    this[_email] = value;
  }

  get phone() {
    return this[_phone];
  }
  set phone(value) {
    this[_phone] = value;
  }

  get alterNativePhone() {
    return this[_alterNativePhone];
  }
  set alterNativePhone(value) {
    this[_alterNativePhone] = value;
  }

  get address() {
    return this[_address];
  }
  set address(value) {
    this[_address] = value;
  }

  toString() {
    return `
    ID: ${this[_id]}
    Email: ${this[_email]}
    Phone: ${this[_phone]}
    AlterNativePhone: ${this[_alterNativePhone]}
    Address: ${this[_address]}
    `;
  }
}

module.exports = Contact;

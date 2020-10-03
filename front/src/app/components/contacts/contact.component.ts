import { Component, OnInit } from "@angular/core";

import { ContactService } from "../../services/contact.service";
import { NgForm } from "@angular/forms";
import { Contact } from "../../models/contact";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
  providers: [ContactService],
})
export class ContactComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.getContacts();
  }

  addContact(form?: NgForm) {
    if (form.value._id) {
      this.contactService.putContact(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getContacts();
      });
    } else {
      this.contactService.postContact(form.value).subscribe((res) => {
        this.getContacts();
        this.resetForm(form);
      });
    }
  }

  getContacts() {
    this.contactService.getContacts().subscribe((res) => {
      this.contactService.contacts = res;
    });
  }

  editEmployee(contact: Contact) {
    this.contactService.selectedContact = contact;
  }

  deleteContact(_id: string, form: NgForm) {
    if (confirm("Estas seguro de borrarlo?")) {
      this.contactService.deleteContact(_id).subscribe((res) => {
        this.getContacts();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.contactService.selectedContact = new Contact();
    }
  }
}

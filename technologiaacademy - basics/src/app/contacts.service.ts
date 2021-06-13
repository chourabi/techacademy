import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts = [
    { fullname:"taherchourabi",phone:"93863732" },
    { fullname:"taherchourabi",phone:"93863732" },
    { fullname:"taherchourabi",phone:"93863732" },
    
  ];

  constructor() { }


  getContactsList(){
    return this.contacts;
  }

  addNewContact(c){
    this.contacts.push(c);
  }
}

import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  phoneNumber: string = '+66 6 1389 2320';
  isShowPhoneNumber: boolean = false;

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle("Contact!!");
  }

  ngOnInit() {
  }

  showPhoneNumber(e) {
    e.preventDefault();
    this.isShowPhoneNumber = true;
  }

}

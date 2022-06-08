import { Component, OnInit } from '@angular/core';
import { randomInt } from 'crypto';
import { Model } from '../Model';
import { Workerrr } from '../Worker';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css'],
})
export class WorkerComponent implements OnInit {
  model = new Model();
  namee = '';
  surnamee = '';
  agee;
  datee;
  ind = 616161661616161616161661;
  constructor() {
    this.model.items = JSON.parse(localStorage.getItem('items'));
  }

  getItems() {
    return this.model.items;
  }
  Add(id: any, name: any, surname: any, age: any, date: any) {
    this.model.items.push(
      new Workerrr(
        this.model.items.length,
        name.value,
        surname.value,
        age.value,
        date.value
      )
    );
    this.Set();
  }
  SetUpdate(id: any, name: any, surname: any, age: any, date: any, inde: any) {
    this.ind = inde;
    id.value = inde;
    name.value = this.model.items[inde].Name;
    surname.value = this.model.items[inde].Surname;
    age.value = this.model.items[inde].Age;
    date.value = this.model.items[inde].HireDate;
  }
  Set() {
    localStorage.setItem('items', JSON.stringify(this.model.items));
  }
  SpecialClass() {
    return {
      disabled:
        this.namee == '' ||
        this.agee == '' ||
        this.datee == '' ||
        this.surnamee == '',
      'bg-secondary':
        this.namee == '' ||
        this.agee == '' ||
        this.datee == '' ||
        this.surnamee == '',
    };
  }
  BorderColor(name) {
    return {
      'bd-green': name.value != '',
      'bd-red': name.value == '',
    };
  }
  ngOnInit() {}
}

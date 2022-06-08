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
  constructor() {
    this.model.items = JSON.parse(localStorage.getItem('items'));
  }

  getItems() {
    return this.model.items;
  }
  Add(name: any, surname: any, age: any, date: any) {
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

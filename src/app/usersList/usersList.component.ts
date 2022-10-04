import { Component } from "@angular/core";

@Component({
  selector: 'app-users-list',
  templateUrl: './usersList.component.html'
})
export class UsersListComponent {
  //testUsers = ['Jack', 'John', 'Sam'] usually don't store data as list of strings, better as an array of objects
  users = [
    {
      id: '1',
      name: 'Jack',
      age: 21
    },
    {
      id: '2',
      name: 'John',
      age: 30
    },
    {
      id: '3',
      name: 'Sam',
      age: 25

    }
  ]
}

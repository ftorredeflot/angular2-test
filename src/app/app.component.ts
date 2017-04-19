import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works a lot!';
  addUser(nnombre: HTMLInputElement, nedat:HTMLInputElement): boolean{
    console.log(`Adding article title: ${nnombre.value} and link:`);
    return false;
  }
}

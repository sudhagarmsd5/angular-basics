import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.scss']
})
export class PipeExampleComponent implements OnInit {

  today:Date = new Date();

  languages = ['Java','PHP', '.Net','JQuery', 'JavaScript','Angular','AngularJS']
  
  data = {
    'id': 20,
    'name': {
      'firstname': 'Angular',
      'lastname': 'Pipes'
    }
};
time = new Observable<string>((observer: Subscriber<string>) => {
  setInterval(() => observer.next(new Date().toString()), 1000);
});
  constructor() { }

  ngOnInit(): void {
  }

}

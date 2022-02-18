import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //eventsSubject: Subject<void> = new Subject<void>();
  @Output() newItemEvent = new EventEmitter<boolean>();
  value = true;
  showHideNav() {
    this.value = !this.value;
    this.newItemEvent.emit(this.value); 
  }
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Greeting],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  homeMessage = signal('Message from Home component!')

  keyUpHandler(event: KeyboardEvent){
    console.log(`user pressed the ${event.key} key` );
  }
}

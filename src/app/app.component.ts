// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'todolist';
// }
import { Component } from '@angular/core';
import { MytodolistComponent } from './mytodolist/mytodolist.component'; // ✅ Import the component

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Ensure it's standalone
  imports: [MytodolistComponent],  // ✅ Import the component here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
}

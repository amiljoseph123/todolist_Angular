// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-mytodolist',
//   imports: [],
//   templateUrl: './mytodolist.component.html',
//   styleUrl: './mytodolist.component.css'
// })
// export class MytodolistComponent {

// }
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-mytodolist',  
  
  standalone: true,  // ✅ This tells Angular it's a standalone component
  imports:[FormsModule],
  templateUrl:'./mytodolist.component.html',
  styleUrls: ['./mytodolist.component.css']
})
export class MytodolistComponent { 

  taskArray=[{taskName: 'brush',iscompleted: false}]

  onSubmit(form:NgForm){}
}


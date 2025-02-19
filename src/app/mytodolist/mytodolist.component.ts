// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-mytodolist',
// //   imports: [],
// //   templateUrl: './mytodolist.component.html',
// //   styleUrl: './mytodolist.component.css'
// // })
// // export class MytodolistComponent {

// // }
// import { Component } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-mytodolist',  
  
//   standalone: true,  // ✅ This tells Angular it's a standalone component
//   imports:[FormsModule],
//   templateUrl:'./mytodolist.component.html',
//   styleUrls: ['./mytodolist.component.css']
// })
// export class MytodolistComponent { 

//   taskArray=[{taskName: 'brush',iscompleted: false}]

//   onSubmit(form:NgForm){}
// }
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';  // ✅ Import CommonModule for ngClass

@Component({
  selector: 'app-mytodolist',  
  standalone: true,  
  imports: [FormsModule, CommonModule], // ✅ Add CommonModule
  templateUrl: './mytodolist.component.html',
  styleUrls: ['./mytodolist.component.css']
})
export class MytodolistComponent { 

  // ✅ Initialize with a sample task
  taskArray = [{ taskName: 'Brush', iscompleted: false }];

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.taskArray.push({ taskName: form.value.task, iscompleted: false });
      form.reset(); // ✅ Reset the form after submission
    }
  }

  deleteTask(index: number) {
    this.taskArray.splice(index, 1); // ✅ Delete the selected task
  }

  toggleComplete(index: number) {
    this.taskArray[index].iscompleted = !this.taskArray[index].iscompleted; // ✅ Toggle completed status
  }
}

import {Component,OnInit} from '@angular/core'
import {Todo} from '../../model/todo.model'


@Component({
  selector:"todo-list",
  styleUrls:["todo.list.component.scss"],
  template:`<div>
            <div>

            <h2> Todo descriptions </h2>
              <div *ngFor="let todo of todos">
                {{todo.desc}}
              </div>
             
            <h2> Todo Status </h2>

         <todos-status [items]="todos"></todos-status>
               <!--  <todo-detail></todo-detail>-->
        
           
              <h2> Todo Details </h2>
              <div *ngFor="let todo of todos">
                  <todo-details [todo]="todo" (onUpdate)="handleUpdate($event)" ></todo-details>

              </div>

            </div>
        </div>`

})

export class TodoListComponent implements OnInit{

    todos:Todo[];

    /*
      $onInit()
    */
    ngOnInit(){
      this.todos = [{id:1, desc:"Pickup Groceries", date: new Date("03/12/2017"), completed:false},
          {id:2, desc:"Cooking" , date: new Date("03/12/2017"),completed:true }];

    }
    /*

    String str = "Siva Allu";
    String str1 = str.replace(' ','');
    */

    handleUpdate(event:Todo){
      this.todos = this.todos.map((todo:Todo)=>{
            if(todo.id === event.id){
              todo = Object.assign({},todo,event);
            }

            return todo;

      });
    }


}


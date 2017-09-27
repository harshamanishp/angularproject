import {Component,Input} from '@angular/core'
import {Todo} from '../../model/todo.model'

@Component({
    selector:'todos-status',
    template:`<div>
                <div>
                    
                    Total todos: {{items.length}}
                </div>
                <div>
                    
                    Completed: {{completedTodos()}} / {{items.length}}
                </div>


              </div>
    `

})
export class TodosStausComponent{
   @Input() items:Todo[];
/*
    bindings:{
        items: '<'
    }
*/
   completedTodos():number{
      return  this.items.filter((todo:Todo)=>{
            return todo.completed;
        }).length;
   }


}


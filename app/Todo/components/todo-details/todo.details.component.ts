import {Component,Input,Output,EventEmitter,OnChanges} from '@angular/core'
import {Todo} from '../../model/todo.model'

@Component({
    selector:'todo-details',
    template:`<div>
                
                <span class="status" [ngClass]="{completed:todo.completed,
                                                 notcompleted:!todo.completed}"></span>
                <span>{{todo.id}}</span>
                <span>
                    <input type="text" #desc [value]="todo.desc" (input)="changeOnInput(desc.value)">
                </span>
                 <span>{{todo.date | date}}</span>
                 <span><button (click)="changeDesc(desc.value)"> Edit </button></span>

              </div>
    `

})
export class TodoDetailsComponent implements OnChanges{
   @Input() todo:Todo;
   @Output() onUpdate:EventEmitter<Todo> = new EventEmitter();

   changeDesc(desc:string){
    this.todo.desc = desc;
    this.onUpdate.emit(this.todo);

   }

   ngOnInit(){
       console.log("On init is called");
   }

   changeOnInput(desc:string){
       this.todo.desc = desc;
   }

   ngOnChanges(changes){
        if(changes.todo){
            this.todo = Object.assign({},changes.todo.currentValue);
        }

        console.log("On changes is called");

   }



}


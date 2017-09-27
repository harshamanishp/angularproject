import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {TodoListComponent} from './container/todo-list/todo.list.component'
import {TodosStausComponent} from './components/todos-status/todos.status.component'
import {TodoDetailsComponent} from './components/todo-details/todo.details.component'


@NgModule({
    declarations:[TodoListComponent,TodosStausComponent,TodoDetailsComponent],
    imports:[CommonModule],
    exports:[TodoListComponent]

})

export class TodoModule {}
import { NotFoundException } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { Todos } from "./todos.model";


@Injectable()
export class TodosService{
    private todos: Todos [] = [];
    
    insertTodos(description: string, feedbackBy: string, createdDate: string){
        const createddate = new Date().toString(); 
        var id = 0;
        if(this.todos.length==0){
           id = 1;
        }
        else if(this.todos.length >= 1) {
           id = this.todos.length+1;
        }
        const newTodo= new Todos(id, description, feedbackBy, createddate);  
        this.todos.push(newTodo);
        console.log(newTodo);
        
        return createddate;

    }

    getTodos(){
        return this.todos; 
    }

    updatetodo(id: number, description: string, feedbackBy: string, createdDate: string){
        console.log(id);
        
        const [todo, index] = this.findTodo(id);
        const updatedTodo = { ...todo };
            
        if (description) {
              updatedTodo.description = description;
            }
        if (feedbackBy) {
              updatedTodo.feedbackBy = feedbackBy;
            }
            this.todos[index] = updatedTodo;
        }

    private findTodo(id: number): [Todos, number] {
        console.log(id);
        const todoIndex = this.todos.findIndex(td => td.id === id);       
        const todo = this.todos[todoIndex];
        if (!todo) {
          throw new NotFoundException('Could not find todo.');
        }
        console.log(todoIndex);
        return [todo, todoIndex];        
      }

      deleteTodo(id: number) {
        console.log(id);
          
        const index = this.findTodo(id)[1];
        this.todos.splice(index, 1);
    }
}
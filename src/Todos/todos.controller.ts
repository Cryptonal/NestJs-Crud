import { Delete } from "@nestjs/common";
import { Body, Controller, Get, Post, Param, Patch } from "@nestjs/common";
import { TodosService } from "./todos.service";



@Controller('todos')
export class TodosController{

    constructor(private readonly todosService: TodosService){

    }
    @Post('createTodos')
    addTodos(
    @Body('id') id: number,
    @Body('description') description: string,
    @Body('feedbackBy') feedback: string,
    @Body('createdDate') createddate: string,
    
    ) { 
        this.todosService.insertTodos(description, feedback, createddate);     
        return "Success";
    }

    @Get('getTodos')
    getTodos(){
        return this.todosService.getTodos();
    }

    @Patch(':id')
    updateTodos(
    @Body('id') id: number,
    @Body('description') description: string,
    @Body('feedbackBy') feedback: string,
    @Body('createdDate') createddate: string,

  ) {
      console.log(id);
      
    this.todosService.updatetodo(id, description, feedback, createddate);
    return "Todo Updated";
  }

  @Delete(':id')
  removeProduct(@Body('id') id: number) {     
    console.log(id);
     
      this.todosService.deleteTodo(id);
      return "Todo Deleted";
  }


}
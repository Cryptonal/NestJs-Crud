export class Todos{
    id: number;
    description: string;
    feedbackBy: string;
    createdDate: string;

    constructor( id: number, description: string, feedbackBy: string, createdDate: string){
        this.id = id;
        this.description = description;
        this.feedbackBy = feedbackBy;
        this.createdDate = createdDate;

    }


}
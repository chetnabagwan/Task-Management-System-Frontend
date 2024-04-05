export interface MyTasks{
    task_id:number;
    user_id:number;
    task_name:string;
    task_desc:string;
    date_created:Date;
    due_date:Date;
    is_completed:number;
    category:string;
    assigned_by:number;
}
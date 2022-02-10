import { action, makeObservable, observable } from "mobx";
import moment from 'moment'

// a data tava funfando

class TaskStore {

    constructor() {
        makeObservable(this);
    };

    @observable tasks = [];
    @observable user = {};


    @action.bound
    getTasks() {
        return this.tasks;
    };

    @action.bound
    addTasks(task) {

        if (task.id != undefined) {
            
            let index = this.tasks.findIndex(t => t.id = task.id);

            if (index > -1) {
                let index = this.tasks.findIndex(t => t.id = task.id);
                this.tasks[index] = task;
            }

        } else {
            task.id = this.tasks.length + 1;
            task.data = moment(new Date()).format('DD/MM/YYYY');
            this.tasks.push(task);
        }
    };





    @action.bound
    deleteTasks(id) {
        const index = this.tasks.findIndex((item) => item.id === id);
        this.tasks.splice(index, 1);
    };
}

const store = new TaskStore();
export default store;


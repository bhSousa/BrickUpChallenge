import TaskStore from './components/TaskStore';

class RootStore {

    constructor(){
        this.taskStore = TaskStore;
    }

}

export default new RootStore();
import Realm from 'realm';

const TaskSchema = {

    name: 'Task',
    primaryKey: 'id',
    properties: {
        id: 'int',
        data: 'string',
        nome: 'string?',
        descricao: 'string',
    }
};
const databaseOptions = {
    path: 'Task.realm',
    schema: [TaskSchema],
    schemaVersion: 0,

};

export const insertNewTask = newTask => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create("Task", newTask);
            resolve(newTask);

        });

    }).catch((error) => reject(error));

});

export const updatingTask = updatingTask => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let updating = realm.objectForPrimaryKey("Task", updatingTask.id);
            updatingTask.name = updating.name;
            updatingTask.descricao = updating.descricao;
            updatingTask.data = updating.data;
            resolve();

        });

    }).catch((error) => reject(error));

});

export const deleteTask = deleteTask => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let deleteT = realm.objectForPrimaryKey("Task", deleteTask);
            realm.delete(deleteT);
            resolve();

        });

    }).catch((error) => reject(error));

});

export default TaskSchema;
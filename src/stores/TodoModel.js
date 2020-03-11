import {observable ,action} from 'mobx'

export default class TodoModle{

    store
    id
    @observable tilte
    @observable completed
    @observable destroy;

    constructor(store, title, completed, id, destroy){
        this.title = title
        this.completed = completed
        this.id = id 
        this.store = store
        this.destroy = destroy;
    }

    
    toggle(){
        this.completed =!this. complete
    }
}


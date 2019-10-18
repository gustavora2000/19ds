class Queue {
    constructor(){
        this.cliente
        this.queue = [];
    }

    enqueue(cliente){
        this.queue.push(cliente);
        return this.queue;
    }

    dequeue(){
        return this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }

    size(){
        return this.queue.length;
    }

    isEmpty(){
        return this.queue.length===0;
    }

    print(){
        return this.queue;
    }
}

function useClass(){
    let x = new Queue();
    console.log(x.enqueue("Cintya"));
    console.log(x.enqueue("Gabriela"));
    console.log(x.enqueue("Oscar"));
    console.log(x.enqueue("Gustavo"));
    console.log(x.dequeue());
    console.log(x.peek());
    console.log(x.isEmpty());
    console.log(x.print());
};
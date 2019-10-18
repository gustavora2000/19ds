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
x.enqueue("Cintya");
x.enqueue("Gabriela");
x.enqueue("Oscar");
x.enqueue("Gustavo");
x.dequeue();
x.peek();
x.isEmpty();
x.print();
};
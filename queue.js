class Queue {
    queue = [];
    constructor(array) {
      this.queue = array;
    }
  
    enQueue(name) {
      this.queue[this.queue.length] = name;
    }
  
    deQueue() {
      this.queue.splice(0, 1);
    }
  
    countQueue = () => this.queue.length;
  
    getQueue = () => this.queue;
  
    print(){
      document.getElementById("nombre").innerHTML = this.queue[0];
      print();
      this.deQueue();
    }
  }
  
  const queue = new Queue(["Erick", "Cesar", "Jose Luis", "Jaime", "Marcos"]);
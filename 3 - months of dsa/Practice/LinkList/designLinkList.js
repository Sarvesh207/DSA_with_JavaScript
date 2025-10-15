class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addAtHead(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addAtTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = val;
    } else {
      let currNode = this.head;
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
    }
    this.size++;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      currNode = currNode.next;
    }

    return currNode.val;
  }

  addAtIndex(index, val) {
    const newNode = new Node(val);

    if (index < 0 || index >= this.size) return -1;

    let currNode = this.head;

    for (let i = 0; i < index; i++) {
      currNode = currNode.next;
    }
    newNode.next = currNode.next;
    currNode.next = newNode;
    this.size++;
  }
  deleteAtIndex(index) {
    if (index < 0 || index <= this.size) return;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let curr = this.head;

      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }

      curr.next = curr.next.next;
    }
  }
  print() {
    let curr = this.head;
    let list = "";

    while (curr) {
      list = list + curr.val + "->";
      curr = curr.next;
    }

    console.log("MyLinkList", list);
  }
}

const list = new LinkList();

list.addAtHead(10);
list.addAtHead(5);
list.addAtTail(20);
list.addAtIndex(2, 15); // Insert between 10 and 20
list.addAtHead(250)
list.deleteAtIndex(0);
list.print();

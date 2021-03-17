class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    insert(index, n) {
        if (index <= this.getSize()) {
            let count = 1
            let node = this.head
            while (count < index - 1) {
                node = node.next
                count++
            }
            let temp = node.next
            node.next = n
            n.next = temp
        } else {
            return 'out of bound'
        }
    }

    getSize() {
        let count = 0
        let node = this.head
        while (node) {
            count++
            node = node.next
        }
        return count
    }

    getLast() {
        let node = this.head
        while (node.next) {
            node = node.next
        }

        return node
    }
}

let n1 = new ListNode(5)

let n2 = new ListNode(15)
let n3 = new ListNode(25)
let n4 = new ListNode(35)

n1.next = n2
n2.next = n3
n3.next = n4

let list = new LinkedList(n1)
list.insert(4, new ListNode(11))
console.log(list.getLast())
//console.log(list.head.next.val)

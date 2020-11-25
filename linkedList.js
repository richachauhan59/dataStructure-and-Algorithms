// Linked List Cycle

// Givenhead, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached 
// again by continuously following thenextpointer. Internally,posis used to denote the index 
// of the node that the tail'snextpointer is connected to.
// Note-posis not passed as a parameter.
// Complete the function below. No need to take any input, just return if the given
// linked list has a cycle in it or not.Returntrueif there is a cycle in the linked list.
// Otherwise, returnfalse.

// input = `1
// 3
// 1
// 2
// 3
// -1`

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
    if(!head){
       return false 
    } 
    var pointer1=head
    var pointer2=head.next;
    while(pointer1!=pointer2){
        if(!pointer2 || !pointer2.next){
            return false
        }
        pointer1=pointer1.next
        pointer2=pointer2.next.next
        
    }
    return true;
};

// Import local stored data object
import { Data } from "./ls.js";
const store = new Data();
// Export utility functions
export class Utility {
    // Generates items to array
    constructor() {
        // Gets toDoList from store class localstorage and returns array of objects
        this.todoList = store.get('toDoList');
        // Checks if todoList is empty
        if (!this.todoList) {
            // If empty returns blank array
            this.todoList = [];
        }
        // Sets displayList to the same value as todoList array
        this.displayList = this.todoList;
    }
    // Creates object with defined variables and pushes the object to the todoList array
    addTodo(todoContent) {
        this.todoList.push(
            {
                id: Date.now(), // Assigns Date.now number as id of object
                content: todoContent, // sets function's content string to content of object
                completed: false // Assignes default false booglan to completed object
            }
        );
        // Takes todoList array and sents it to set function in ls.js to store in localstorage with key 'toDoList' to update localStorage 
        store.set('toDoList', this.todoList);
    }                                      
    // Uses splice to cut off the selected index value from todoList Array
    removeTodo(i) {
        this.todoList.splice(i, 1);
        // Takes todoList array and sents it to set function in ls.js to store in localstorage with key 'toDoList' to update localStorage 
        store.set('toDoList', this.todoList);
    }
    // Update todoList if and item is marked complete or not
    updateTodo(i) {
        this.todoList[i] = {
            // Reassigns current values of id and content on update
            id: this.todoList[i].id,
            content: this.todoList[i].content,
            // Updates completed to the opposite false if true or true if false
            completed: !this.todoList[i].completed,
        }
        // Takes todoList array and sents it to set function in ls.js to store in localstorage with key 'toDoList' to update localStorage 
        store.set('toDoList', this.todoList);
    }
    // Updates the displayList array to only display view value list
    updateDisplayList(view) {
        // Checks view for all value 
        if (view === 'all') {
            // Displays all if value is all
            this.displayList = this.todoList;
        } else {
            // Set the display list to the elements that have the completed value that is the same as
            // the view value. true/false
            this.displayList = this.todoList.filter((element) =>  element.completed === view);
        }
    }
}
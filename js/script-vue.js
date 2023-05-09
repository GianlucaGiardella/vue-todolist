const app = Vue.createApp({
    data() {
        return {
            todoArr: [
                {
                    text: "Fare la spesa",
                    done: true,
                },
                {
                    text: "Finire questo esercizio",
                    done: false,
                },
            ],
            newTodo: "",
            inputValidity: false,
        }
    },
    methods: {
        checkTodo(i, todo) {
            this.todoArr[i].done = !todo;
        },
        addTodo() {
            const newTodoObj = {
                text: this.newTodo.trim(),
                done: false
            };

            if (newTodoObj.text.length >= 5) {
                this.todoArr.unshift(newTodoObj);
                this.inputValidity = false;
            } else {
                this.inputValidity = true;
            }
            this.newTodo = "";
        },
        deleteTodo(i){
            this.todoArr.splice(i, 1);
        },
        removeError() {
            this.inputValidity = false;
        }
    },
})

app.mount("#app");
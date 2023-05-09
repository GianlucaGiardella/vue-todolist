const app = Vue.createApp({
    data() {
        return {
            todoArr: [
                {
                    text: "Fare la spesa",
                    done: true
                },
                {
                    text: "Finire questo esercizio",
                    done: false
                },
            ],
        }
    },
    methods: {
        checkTodo(i, todo) {
            console.log("fatto");
            console.log(todo);
            this.todoArr[i].done = !todo;
        },
    },
})

app.mount("#app");
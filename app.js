Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

new Vue({
    el: '#post',

    data: {
        isVisible: true,
        liked: false,
        message: 'Chao cac ban !',
        todos: [
            {text: 'Vue JS'},
            {text: 'React Js'},
            {text: 'PHP'}
        ]
    },
    method: {
        doList: function () {
            this.todos.map((item, index) => {
                console.log(item)
            })
            // this.todos[1] = {text: 'Nodejs'}
        }
    }
})


new Vue({
    el: '#app-3',
    data: {
        seen: false
    }
})

new Vue({
    el: '#app-4',
    data: {
        textInput: "Hãy sửa text trong input này !"
    }
})
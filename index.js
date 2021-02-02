let todo = [];

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

const onClick = function () {
    if ( this.seen ) { 
        this.seen = false;
        this.buttonText = 'show';
    } else {
        this.seen = true;
        this.buttonText = 'hide';
    }
}

const onEnter = function () {
    let idList = Object.keys(todo);
    let max = Math.max(...idList);
    max++;
    todo.push({
        id: max, 
        text: this.message,
    });
    this.message = '';
}

let app = new Vue({
    el: '#app',
    data: {
        info: 'Todo List',
        infoText: 'Add items by clicking "add". Hide menu by clicking "Hide".',
        buttonText: 'hide',
        message: 'Hello Vue!',
        seen: true,
        entryList: todo,
    },
    created: function () {
        console.log("check " + this.a);
    },
    methods: { 
        onClick: onClick,
        onEnter: onEnter,
    },
});

app.$watch('message', function (newValue, oldValue) {
    console.log(newValue);
    console.log(oldValue);
})
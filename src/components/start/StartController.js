import StartModel from './StartModel.js';

const todo = [];

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
    if (!this.message) return false;
    let idList = Object.keys(todo);
    let max = Math.max(...idList);
    max++;
    todo.push({
        id: max, 
        text: this.message,
    });
    this.message = '';
}

export default {
  name: 'StartView',
  props: {
    msg: String
  },
  data: function () {
    return StartModel
  },
  methods: { 
    onClick: onClick,
    onEnter: onEnter
  }
}
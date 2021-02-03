<template>
  <div class="StartView">
    <p class="w3-padding">
        <span v-if="seen"> {{ infoText }} </span>
    </p>
    <p class="w3-padding"> 
        <button class="w3-button w3-teal" v-on:click="onClick"> {{ buttonText }} </button>
    </p>
    <hr /> 
    <p class="w3-padding">
        <input class="w3-input w3-border" v-model="message" />
        <button  class="w3-button w3-margin-top w3-teal" v-on:click="onEnter"> Add </button>
        <ul v-for="item in entryList" :key="item.id" class="w3-ul w3-border">
          <li>{{ item.text }}</li>
        </ul>
    </p>
  </div>
</template>

<script>

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
    return {
      info: 'Todo List',
      infoText: 'Add items by clicking "add". Hide menu by clicking "Hide".',
      buttonText: 'hide',
      message: 'Hello Vue!',
      seen: true,
      entryList: todo
    }
  },
  methods: { 
    onClick: onClick,
    onEnter: onEnter
  }
}
</script>
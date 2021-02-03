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
<script src="./StartController.js" />
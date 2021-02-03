<template>
  <div class="StartView">
    <p class="w3-padding">
        <span v-if="seen"> {{ infoText }} </span>
    </p>
    <p class="w3-padding"> 
        <button class="w3-button w3-teal" v-on:click="onClick"> {{ hideShowButtonText }} </button>
    </p>
    <hr /> 
    <p class="w3-padding">
        <input class="w3-input w3-border" v-model="message" />
        <button  class="w3-button w3-margin-top w3-margin-bottom w3-teal" v-on:click="onEnter"> {{ addButtonText }} </button>
        <ul v-for="(item, index) in entryList" :key="index" class="w3-ul w3-border w3-margin-bottom">
          <li><button v-on:click="onDelete(item)" class="w3-button w3-teal">-</button> {{ item.text }}</li>
        </ul>
    </p>
  </div>
</template>
<script src="./StartController.js" />
<template>
  <div class="card">
    <div class="card-title orange lighter-2 white-text">
      <a class="waves-effect waves-light white-text" href='/filter/mecanico'><i class="material-icons left">keyboard_backspace</i></a>
      {{ contactInformation.name }}
    </div>
    <div class="card-content">
      <ul class="collection">
        <li
          v-for="(message, index) in messages"
          :key="index"
          class="collection-item-avatar"
        >
          <img
            :src="message.isFromUser ? userInformation.imageURL : contactInformation.imageURL"
            class="circle"
          />
          <template v-if="message.isButton">
            <a class="waves-effect waves-light btn orange accent-2" href="/dashboard/catalogo">{{ message.text }}</a>
          </template>
          <template v-else>
            <span class="title">{{ message.text }}</span>
          </template>
          <small class="secondary-content">
            {{ message.timestamp }}
          </small>
        </li>
      </ul>
    </div>
    <div class="card-action">
      Send message:
      <input type="text" name="messagetext"  id="messagetext" v-model="messagetext">
      <v-on:input class="waves-effect waves-light btn orange accent-2" @click="handleClick(messagetext)">Send</v-on:input>
    </div>
  </div>
</template>

<script>  
import moment from 'moment'

export default {
  computed: 
  {
    
  },

  methods:{
    handleClick: function(msg)
    {
      if(msg)
      {
        const vm = this;
        vm.messages.push({ text: msg, isFromUser: true, 
          timestamp: moment().format('HH:mm') });
        vm.messagetext = "";

        setTimeout(function()
        {                  
            vm.messages.push({ text: vm.botMessages[vm.botCount].text, isFromUser: false, 
              timestamp: moment().format('HH:mm'), isButton: vm.botMessages[vm.botCount].isButton });
    
            vm.botCount++;
        }, 1000);
      }
    }
  },
  data() {
    return {  
      botCount : 0,

      contactInformation:
      {
        name: 'Morgan Novak',
        imageURL: 'https://randomuser.me/api/portraits/men/58.jpg',
      },

      userInformation:
      {
        name: 'Jhon Doe',
        imageURL: 'https://randomuser.me/api/portraits/men/40.jpg',
      },

      messages:
      [
        
      ],

      botMessages:
      [
        { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.', isFromUser: false, isButton: false},
        { text: 'Laboriosam quaerat sapiente minima nam minus similique illum architecto et!', isFromUser: false, isButton: false},
        { text: 'Incidunt vitae quae facere ducimus nostrum aliquid dolorum veritatis dicta!', isFromUser: false, isButton: false},
        { text: 'Aceptar orden.', isFromUser: false, isButton: true},
      ]
    }
  },
  
}
</script>

<style scoped>
img {
  width: 20px;
  margin-right: 20px;
}

.card {
  min-height: 60vh !important;
}

.card-content {
  height: 90% !important;
}

.card-title {
  padding: 10px;
  padding-left: 50px;
}

.collection {
  padding: 20px !important;
}

li {
  padding-bottom: 10px;
}
.secondary-content {
  color: gray;
}
</style>


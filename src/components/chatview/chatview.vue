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
          <span class="title">{{ message.text }}</span>
          <small class="secondary-content">
            {{ message.timestamp }}
          </small>
        </li>
      </ul>
    </div>
    <div class="card-action">
      Send message
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactInformation: {
        name: 'Morgan Novak',
        imageURL: 'https://randomuser.me/api/portraits/men/58.jpg',
      },

      userInformation: {
        name: 'Jhon Doe',
        imageURL: 'https://randomuser.me/api/portraits/men/40.jpg',
      },

      messages: [
        { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero.', isFromUser: true, timestamp: '14:43' },
        { text: 'Laboriosam quaerat sapiente minima nam minus similique illum architecto et!', isFromUser: false, timestamp: '14:44' },
        { text: 'Incidunt vitae quae facere ducimus nostrum aliquid dolorum veritatis dicta!', isFromUser: true, timestamp: '15:37' },
        { text: 'Tenetur laborum quod cum excepturi recusandae porro sint quas soluta!', isFromUser: false, timestamp: '15:38' },
      ]
    }
  }
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


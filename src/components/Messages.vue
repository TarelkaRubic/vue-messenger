<template>
  <section class="chat-box">
    <div class="chat-box-list-container" ref="chatbox">
      <div class="messagessob">

        <div class="divsobesednik1">
            <span class="sobesednik1">Доброе утро!</span>
        </div>

          <div class="divsobesednik2">
            <span class="sobesednik2">Как дела?</span>
          </div>

          <div class="divsobesednik3">
            <span class="sobesednik3">Что делаешь?</span>
          </div>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
      </div>
      <ul class="chat-list">
        <span
          class="message"
          v-for="(message, idx) in messages"
          :key="idx"
          :class="message.author">
          <p>
            <span>{{ message.text }}</span>
          </p>
        </span>
      </ul>
      <ul>
  
</ul>
    </div>
    <div class="chat-inputs">
      <input
        type="text"
        v-model="message"
        @keyup.enter="sendMessage"
     onclick ="var self = this; setTimeout(function(){self.value=''}, 500)">
      <button @click="sendMessage">Отправить</button>
    </div>
  </section>
</template>

<script>
export default {

  name: 'Chat',
  data: () => ({
    message: '',
    messages: []

  }),


  methods: {

    sendMessage() {
      const message = this.message
      this.messages.push({
        text: message,
        author: 'client'

      })
    }
  }
}
</script>

<style>
.divsobesednik1{
  background: lime;
      border-radius: 40px;
      margin-top: 15px;
      float: left;
      width: 120px;
      height: 60px;
}
.divsobesednik2{
  background: lime;
      border-radius: 40px;
      margin-top: 90px;
      float: left;
      width: 100px;
      height: 60px;
      margin-left: -120px;
}
.divsobesednik3{
  background: lime;
      border-radius: 40px;
      margin-top: 165px;
      float: left;
      width: 150px;
      height: 60px;
      margin-left: -120px;
}
.sobesednik1{
  color: black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  position: relative;
  top: 15px;   
}
.sobesednik2{
  color: black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  position: relative;
  top: 15px;
}
.sobesednik3{
 color: black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
  position: relative;
  top: 15px;
      

      
}

.chat-box,
.chat-list {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  overflow: auto;
}
p{
  color: black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 20px;
}
  

  
.chat-box {
  margin: 10px;
  border: 3px solid black;
  width: 30vw;
  height: 80vh;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  align-items: space-between;
  justify-content: space-between;
  


}
.chat-inputs {
  display: flex;
}
.client {
     
      background: #0070C8;
      border-radius: 40px;
      width: 100px;
      
      margin-left: auto;
      margin-top: 15px;
        }
    
 input {
    line-height: 3;
    width: 100%;
    border: 1px solid #999;
    border-left: none;
    border-bottom: none;
    border-right: none;
    border-bottom-left-radius: 4px;
    padding-left: 15px;
  }
button {
    width: 145px;
    color: white;
    background: #0070C8;
    border-color: #999;
    border-bottom: none;
    border-right:none;
    border-bottom-right-radius: 3px;
  }

</style>
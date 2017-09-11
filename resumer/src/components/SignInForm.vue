<template>
  <div>
    <form @submit.prevent="signIn">
      <div class="row">
        <label class="inputTitle" @click="move($event)">用户名</label>
        <input type="text" required v-model="formData.username" @focus="focus($event)" @blur="blur($event)">
      </div>
      <div class="row">
        <label class="inputTitle" @click="move($event)">密码</label>
        <input type="password" required v-model="formData.password" @focus="focus($event)" @blur="blur($event)">
      </div>
      <div class="actions">
        <input class="Button" type="submit" value="Go">
        <p>{{errorMessage}}</p>
      </div>
    </form>
  </div>
</template>

<script>
import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'
export default {
  name: 'SignInForm',
  data(){
    return {
      formData: {
        username: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    signIn(){
      let {username, password} = this.formData
      AV.User.logIn(username,password).then(()=> {
        this.$emit('success', getAVUser())
      }, (error)=> {
        this.errorMessage = getErrorMessage(error)
      });
    },
    focus(e) {
      let _this = e.target
      if (_this.value === '') {
        $(_this).parent().find('.inputTitle').animate({
          'top': '0',
          'font-size': '12px'
        }, 150)
      }
    },
    blur(e) {
      let _this = e.target
      if ($(_this).val() === '') {
        $(_this).parent().find('.inputTitle').animate({
          'top': '12px',
          'font-size': '14px'
        }, 150)
      }
    },
    move(e) {
      let _this = e.target;
      let input = $(_this).parent().find('input')
      if (input.focus()) { return }
    }
  }
}
</script>
<style lang="scss" scoped>
.row {
  width: 100%;
  padding-top: 16px;
  position: relative;
  margin-bottom: 24px;
  label {
    color: #D8DFDD;
    position: absolute;
    top: 12px;
    font-size: 14px;
  }
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #D8DFDD;
  }
}

.actions {
  >.Button {
    width: 130px;
    height: 30px;
    text-align: center;
    color: #ED2855;
    border: 1px solid #D8DFDD;
    border-radius: 30px;
    background: #fff;
    margin: 0 auto;
    outline: none;
  }
  >.Button:hover {
    animation: actions 1s infinite linear;
  }
  @keyframes actions {
    0% {
      opacity: 0.3;
    }
    50% {
      opacity: 1;
      background: #ED2855;
      color: #fff;
    }
    100% {
      opacity: 0.3;
    }
  }
  .errorMessage{
    margin-top:32px;
    color:red;
    font-size: 13px;
  }
}
</style>
<template>
  <Loading :active="isLoading"></Loading>
  <div class="contact">
    <Nav></Nav>
    <div class="container">
      <Form name="submit-to-google-sheet" v-slot="{ errors }" @submit="submitMsg()">
        <div>
          <label for="name" class="form-label">Name*</label>
          <Field id="name" name="name" type="text" class="form-control" :class="{ 'is-invalid': errors['name'] }"
            rules="required" v-model="form.user.name"></Field>
          <ErrorMessage name="name" class="invalid-feedback"></ErrorMessage>
        </div>
        <div>
          <label for="email" class="form-label">Email*</label>
          <Field id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }"
            rules="email|required" v-model="form.user.email"></Field>
          <ErrorMessage as="" name="email" class="invalid-feedback"></ErrorMessage>
        </div>
        <div>
          <label for="message" class="form-label">Message*</label>
          <Field name="message" id="message" class="form-control" rules="required" v-model="form.message" as="textarea">
          </Field>
          <ErrorMessage name="message" class="invalid-feedback"></ErrorMessage>
        </div>
        <button>SUBMIT</button>
      </Form>
    </div>
    <MsgModal ref="msgModal"></MsgModal>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import MsgModal from '../components/MsgModal.vue'
export default {
  components: {
    Nav, Footer, MsgModal
  },
  data() {
    return {
      form: {
        user: {
          name: '',
          email: ''
        },
        message: ''
      },
      isLoading: false
    }
  },
  methods: {
    submitMsg() {
      this.isLoading = true
      // google sheets設定的網頁應用程式網址
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzGGBDgx8mw8w_eATMi9OZOhQKOLKvLni80D4-CJJ2gcgTwl9UgK-kqGu0CUtS-loMFUA/exec'
      const form = document.forms['submit-to-google-sheet']
      this.$http.post(scriptURL, new FormData(form))
        .then((res) => {
          console.log(res)
          this.isLoading = false
          this.$refs.msgModal.showModal()
          form.reset()
        })
    }
  }
}
</script>

<style scoped lang="scss">
.contact {
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent 70%),
    url('../assets/奇萊北峰01.jpg');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  // border: 1px solid red;
  box-sizing: border-box;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  padding: 200px 50px 50px 50px;
}

form {
  box-sizing: border-box;
  width: 50%;

  label {
    display: block;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
  }

  input,
  textarea {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 0;
    background: #d9d9d9;
    padding: 5px;
  }

  textarea {
    resize: none;
    height: 200px;
  }

  span {
    font-size: 12px;
    font-weight: 300;
    color: rgb(184, 21, 21);
  }

  div {
    margin-bottom: 25px;
  }

  button {
    cursor: pointer;
    display: block;
    width: 80px;
    height: 30px;
    margin-left: auto;
    background: #60C5DA;
    border: none;
    border-radius: 5px;
    color: #fff;
    text-align: center;
  }
  button:hover{
    background: #32bbd7;
  }
}

.footer {
  background: none;
  margin-top: 250px;
}

@media screen and (max-width:768px) {
  form {
    width: 100%;
  }

  .footer {
    margin-top: 10px;
  }
}
</style>

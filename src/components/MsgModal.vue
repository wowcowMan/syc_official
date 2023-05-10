<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Message sent successfully!</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Thanks for your message<br></p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Continue</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  data() {
    return {
      modal: {}
    }
  },
  methods: {
    showModal() {
      this.modal.show()
    },
    hideModal() {
      this.modal.hide()
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal)
  }
}

</script>

<style scoped lang="scss">
@import '~bootstrap/scss/bootstrap';

.modal {
  background: rgba(200, 200, 200, .5);
  button{
    color: #fff;
  }
  .modal-dialog{
    // border: 3px solid #1A1A1A;
    border-radius: 25px;
    background: rgb(38, 38, 38);
    padding: 25px;
    margin-top: 30%;
    color: #fff;
    p{
      font-weight: 300;
    }
    button{
      border-radius: 15px;
    }
  }
}
</style>

<template>
  <div class="category">
    <h3>gallery</h3>
    <!-- <p>{{ categoryId }}</p> -->
  </div>
</template>

<script>
export default {
  name: 'gallery'
}
</script>

<style scoped lang="scss">
.category {
  box-sizing: border-box;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  padding: 150px 50px 50px 50px;
  color: #fff;

  h3 {
    margin-bottom: 50px;
    font-size: 24px;
  }

  .project-list {
    display: flex;

    li {
      margin-right: 15px;
    }
  }
}
</style>
<!-- https://accounts.google.com/o/oauth2/auth?client_id=24333613557-bfr9hsif9rt9d66ockdnu8arb1im359t.apps.googleusercontent.com&redirect_uri=http://localhost:8080/oauth2callback&scope=https://www.googleapis.com/auth/spreadsheets.readonly&response_type=code -->
<!-- http://localhost:8080/oauth2callback?code=4/0AVHEtk4TNtBs49o2Ax5uAznVR1swlU8f87uN_dR6LgvtQcDsK9SZJ_4UfW7IjTJiibfI5w&scope=https://www.googleapis.com/auth/spreadsheets.readonly#/ -->

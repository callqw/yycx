<template>
  <div>
    <section class="Landscape">
      <img src="~static/icon.png" alt="Logo nuxt" class="Landscape__Image" width="20%"/>
      <h1 class="Landscape__Title">
        {{ error.statusCode }}
      </h1>
      <h2 class="Landscape__SubTitle">
        {{ error.message }}
      </h2>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      error:{
        statusCode:404,
        message:'未找到',

      }
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.Landscape
{
  $footer-height: 50px;

  min-height: calc(100vh - #{$footer-height});
  background-color: #fff;
  padding: 50px 15px;
  padding-top: 120px;
  text-align: center;
  @media (min-width: 991px)
  {
    padding: 100px 30px;
    padding-top: 180px;
  }
  &__Image
  {
    &--mobile
    {
      display: inline-block;
      @media (min-width: 991px)
      {
        display: none;
      }
    }
    &--desktop
    {
      display: none;
      @media (min-width: 991px)
      {
        display: inline-block;
      }
    }
  }
  &__Title
  {
    font-weight: 300;
    letter-spacing: 1px;
    margin: 20px 0;
    color: #35495e;
    font-size: 128px;
    line-height: 100px;
  }
  &__SubTitle
  {
    letter-spacing: 1px;
    line-height: normal;
    margin: 20px 0;
    color: #35495e;
  }
  &__List
  {
    list-style: none;
    margin: 0;
    padding: 0;
    &__Item
    {
      display: inline-block;
      padding: 20px 15px;
      padding-bottom: 0;
      .button
      {
        font-size: 16px;
      }
    }
  }
}
</style>

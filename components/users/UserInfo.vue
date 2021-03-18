<template>
  <div class="user__info">
    <UiComponentsTitle medium>{{ userInfo.name }}</UiComponentsTitle>
    <UiComponentsTitle small blue>{{ userInfo.title }}</UiComponentsTitle>

    <div class="user__info__bio mt-4 mb-4">
      <UiComponentsTitle extrasmall>
        {{ userInfo.bio }}
      </UiComponentsTitle>
    </div>

    <div class="user__info__experiance">
      <UiComponentsTitle small>{{
        userInfo.experience_level
      }}</UiComponentsTitle>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: Object
  }
};
</script>

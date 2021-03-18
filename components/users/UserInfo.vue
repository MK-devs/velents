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
      <UiComponentsTitle small gray>
        {{ userInfo.experience_level }}
      </UiComponentsTitle>
    </div>

    <div class="user__info__toggle mt-4">
      <toggle-button
        :sync="true"
        v-model="userInfo.flag"
        :width="125"
        :height="33"
        :font-size="14"
        color="#0505AC"
        :labels="{ checked: 'Flagged', unchecked: 'unFlagged' }"
      />
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

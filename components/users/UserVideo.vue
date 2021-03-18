<template>
  <div class="users__video">
    <b-carousel style="text-shadow: 0px 0px 2px #000">
      <b-carousel-slide v-for="video in usersList" :key="video.id">
        <iframe
          width="560"
          height="315"
          :src="video.video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: {
    usersList: Array
  }
};
</script>

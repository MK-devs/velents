<template>
  <div class="users__video">
    <b-carousel ref="slider" :interval="5000" fade>
      <b-carousel-slide v-for="video in usersList" :key="video.id">
        <iframe
          width="560"
          height="315"
          :src="video.video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div class="users__video__action mt-4">
          <UiComponentsButton @clickFn="openModal(video.id)" bgBlue smallRadius>
            <i class="fas fa-calendar-alt mr-2"></i>Schedule A Call
          </UiComponentsButton>

          <UiComponentsButton
            @clickFn="prev"
            bgBlueTrasparent
            smallRadius
            class="ml-2"
          >
            <i class="fas fa-arrow-circle-left mr-2"></i>
          </UiComponentsButton>

          <UiComponentsButton
            @clickFn="next"
            bgBlueTrasparent
            smallRadius
            class="ml-2"
          >
            <i class="fas fa-arrow-circle-right mr-2"></i>
          </UiComponentsButton>
        </div>

        <b-modal
          :id="'modal_' + video.id"
          :title="video.name"
          centered
          hide-footer
        >
          <div class="my-4">
            <b-form @submit.prevent.stop="submit(video)">
              <b-form-timepicker v-model="date" locale="en"></b-form-timepicker>

              <div class="modal__footer mt-4">
                <UiComponentsButton type="submit" bgBlue smallRadius>
                  Submit
                </UiComponentsButton>
              </div>
            </b-form>
          </div>
        </b-modal>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: {
    usersList: Array
  },

  data() {
    return {
      date: null
    };
  },

  methods: {
    prev() {
      this.$refs.slider.prev();
    },
    next() {
      this.$refs.slider.next();
    },
    openModal(id) {
      this.$bvModal.show(`modal_${id}`);
    },
    submit(user) {
      const payload = {
        user_id: user.id,
        created_at: this.date
      };

      this.$api.meetings
        .addMeeting(payload)
        .then(() => {
          this.$bvToast.toast("Successfully added!", {
            title: `Success!`,
            variant: "primary",
            solid: true
          });
          this.$bvModal.hide(`modal_${user.id}`);
        })
        .catch(e => console.log(e));
    }
  }
};
</script>

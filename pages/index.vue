<template>
  <div class="home__page">
    <b-container>
      <section class="__filter">
        <div class="inner-padding">
          <FormFilter />
        </div>
      </section>

      <section class="__body">
        <div class="inner-padding">
          <b-row>
            <!-- users list -->
            <b-col md="4">
              <div class="__userslists__wrap">
                <UsersList @getUserData="userInfo = $event" />
              </div>
            </b-col>

            <b-col md="5"></b-col>

            <b-col md="3">
              <div class="__userinfo__wrap">
                <UsersUserInfo :userInfo="userInfo" />
              </div>
            </b-col>
          </b-row>
        </div>
      </section>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {}
    };
  }
};
</script>

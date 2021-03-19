<template>
  <div class="home__page">
    <b-container>
      <section class="__filter">
        <div class="inner-padding">
          <FormFilter
            @getUserData="userInfo = $event"
            @searchResults="searchResults = $event"
            @getUsers="users = $event"
          />
        </div>
      </section>

      <section class="__body">
        <div class="inner-padding">
          <b-row>
            <!-- users list -->
            <b-col xl="4">
              <div class="__userslists__wrap">
                <UsersList
                  @getUserData="userInfo = $event"
                  :searchResults="searchResults"
                />
              </div>
            </b-col>
            <!-- users video -->
            <b-col xl="5">
              <div class="__usersvideos__wrap">
                <UsersUserVideo :usersList="users" />
              </div>
            </b-col>
            <!-- users info -->
            <b-col xl="3">
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
      userInfo: {},
      users: [],
      searchResults: []
    };
  }
};
</script>

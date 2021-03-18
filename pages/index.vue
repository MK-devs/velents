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
              <div class="__users__lists__wrap">
                <UsersList />
              </div>
            </b-col>
          </b-row>
        </div>
      </section>
    </b-container>
  </div>
</template>

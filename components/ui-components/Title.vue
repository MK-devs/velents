<template>
  <div>
    <h4
      class="title__element"
      :class="{
        ['title__element--nospaces']: no_spaces,
        ['title__element--big']: big,
        ['title__element--medium']: medium,
        ['title__element--small']: small,
        ['title__element--extrasmall']: extra_small,
        ['title__element--bold']: bold,
        ['title__element--white']: white,
        ['title__element--blue']: blue,
        ['title__element--danger']: danger,
        ['title__element--success']: success,
        ['title__element--uppercase']: upper_case,
        ['title__element--center']: center
      }"
    >
      <slot>{{ title }}</slot>
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    big: Boolean,
    medium: Boolean,
    bold: Boolean,
    small: Boolean,
    extra_small: Boolean,
    white: Boolean,
    blue: Boolean,
    danger: Boolean,
    success: Boolean,
    upper_case: Boolean,
    center: Boolean,
    no_spaces: Boolean
  }
};
</script>

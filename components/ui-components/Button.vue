<template>
  <button
    class="button__element"
    :to="to"
    :disabled="disabled"
    :type="type"
    :size="size"
    :class="{
      ['button__element--smallradius']: smallRadius,
      ['button__element--roundedradius']: roundedRadius,
      ['button__element--block']: block,
      ['button__element--bgbluetrasparent']: bgBlueTrasparent,
      ['button__element--bgblue']: bgBlue
    }"
    @click="$emit('clickFn')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    to: String,
    type: String,
    size: String,
    block: Boolean,
    disabled: Boolean,
    bgBlue: Boolean,
    bgBlueTrasparent: Boolean,
    smallRadius: Boolean,
    roundedRadius: Boolean
  }
};
</script>

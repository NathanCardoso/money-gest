<template>
  <div class="user-profile">
    <div class="user-info">
      <TheParagraph :paragraph-message="userName" />
      <TheParagraph :paragraph-message="userEmail" bold />
    </div>
    <TheFirstLetterName :user-name="userName" />
  </div>
</template>

<script lang="ts">
export default {
  name: "TheUserProfile",

  props: {
    userName: {
      type: String,
      required: true
    },
    userEmail: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.user-profile {
  @include useAlignCenter;
  gap: rem(16);
  width: max-content;
  background: $grayLight;
  padding: rem(8) rem(8) rem(8) rem(16);
  border-radius: rem(6);
  border: rem(1) solid $linesAndStroke;

  .user-info {
    @include useAlignEndCenter;
    flex-direction: column;
    gap: rem(8);
  }
}
</style>

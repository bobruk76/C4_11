<template>
  <div>
    <b-alert
      variant="danger"
      dismissible
      fade
      :show="dismissCountDown"
      @dismissed="dismissCountDown=0"
      >
      {{ message }}
    </b-alert>
  </div>
</template>

<script>
export default {
  props: ['message','dismissCountDown'],
};
</script>
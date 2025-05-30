<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <span class="navbar-brand">Simulador de tweets</span>
      <button
        class="btn pl-4 pr-4 btn-success"
        @click="openCloseForm"
        :class="{ 'btn-succes': !showForm, 'btn-danger': showForm }"
      >
        {{ !showForm ? "Nuevo tweet" : "Cerrar" }}
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    showForm: Boolean,
    openCloseForm: Function,
  },
};
</script>

<style></style>

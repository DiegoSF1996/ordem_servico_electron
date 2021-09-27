
<template>
  <b-modal hide-footer size="xl" scrollable id="modal-1" :title="titulo">
    <div>
      <slot> </slot>
    </div>
  </b-modal>
</template>
      <script>
export default {
  name: "ModalForm",
  props: {
    titulo: String,
  },
};
</script>
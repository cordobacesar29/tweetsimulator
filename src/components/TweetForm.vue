<template>
  <div class="tweet-form container">
    <form>
        <input class="form-control" placeholder="Tu nombre" />
        <textarea name="" id="" class="form-control" rows="3" placeholder="Escribe tu tweet"></textarea>
        <button type="button" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
 .tweet-form {
    margin-top: 20px;
    overflow: hidden;

    form{
        margin-bottom: 50px;

        input {
            margin-bottom: 10px;
        }

        button {
            width: 100%;
            margin-top: 10px;
        }
    }
 }
</style>
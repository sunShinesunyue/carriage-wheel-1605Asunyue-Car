<template>
    <div class='singerResult'>
        <img src='../static/man.jpg' class='singerImage'>
    </div>
</template>

<script>
</script>

<style>
    .singerResult {
        animation: role 2s ease-in-out 1s infinite alternate;
    }
    @keyframes role {
  0% {
    transform: rotateX(180deg);
    background: #000;
  }
   50% {
    transform: rotateX(360deg);
    background: red;
  }
  50% {
    transform: rotateY(360deg);
    background: red;
  }
}


</style>
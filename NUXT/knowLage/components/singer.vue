<template>
    <div class='singerResult'>
        <img src='../static/man.jpg'>
    </div>
</template>

<script>
</script>

<style>
    .singerResult {
        animation: goright 0.5s linear forwards 3.5s;
    }
    @keyframes godown {
        30% {
            top: 180px;
        }
    }
    @keyframes goright {
        100% {
            left: 70px;
        }
    }
</style>
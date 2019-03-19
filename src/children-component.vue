<template>
    <div>
        <!-- <img src="./xxxx.png" />
        <div class="test-img_xxx">

        </div>
        <div class="test-flex">
            <div class="test-flex_item">

            </div>
            <div class="test-flex_item">

            </div>
        </div> -->
<<<<<<< HEAD
        <!-- <div>
            <span @click="toSkip('/foo')">to todo1</span>
            <span @click="toSkip('/about')">to todo2</span>
        </div>
        <router-view /> -->
=======
        <div>
            <span @click="toSkip('/foo')">to todo1</span>
            <span @click="toSkip('/about')">to todo2</span>
        </div>
        <router-view />
>>>>>>> 56b332499089f18de5e0414b143486f14ba9ad99
    </div>
</template>

<script>
export default {
    name: 'ChildrenComponent',

    methods: {
        toSkip (path) {
            this.$router.push(path);
        }
    }
}
</script>

<style lang="scss">
$backgroud: #eee;
body {
    background: $backgroud;
}
.test-img_xxx {
    width: 250px;
    height: 250px;
    background: url('./xxxx.png');
}
.test-flex {
    display: flex;
}
.test-flex_item {
    flex: 0 0 240px;
    height: 20px;
    background: black;
}
</style>

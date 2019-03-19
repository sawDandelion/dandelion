<template>
    <div>
        <h1>vertical-align是干什么的</h1>
        <div class="app-children">
        </div>
        <div class="app-children">
            view-children
        </div>
    </div>
</template>

<script>
export default {
    name: 'VerticalAlign'
}
</script>

<style lang="scss">
.app-children {
    display: inline-block;
    width: 100px;
    height: 100px;
    border: 1px solid red;
}
</style>

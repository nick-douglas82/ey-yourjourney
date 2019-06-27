<template>
    <div class="site-logo" :class="[component.position]">
        <img :src="require('../../../images/'+component.src)" :alt="component.alt">
    </div>
</template>

<script>
export default {
    props: ["component"]
}
</script>

<style>

</style>


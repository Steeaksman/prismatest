<template>
    


    <div class="w-full h-screen flex ">

<div class="item m-auto">
    <h1>
    How are the  table conditions? How did your last craps play turn out?
    Check out real live Table Reports submitted by the members of our community<br>
    Do you have a report to share? Its easy . .<br>
    <NuxtLink to="/myTrips">Login and Submit your reports Here.</NuxtLink> <br>
    If you are new to our community first<br>
    <NuxtLink to="/register">register here to log in to submit your own Table reports.</NuxtLink>
</h1>
</div>

</div>





</template>

<script setup>
//This is the old middleware
/* definePageMeta({
    middleware: [
        function (to, from) {
            const user = useSupabaseUser();
            if (user.value) {
                return;
            }
            return navigateTO("/myTrips");
        },
    ],
}); */



</script>

<style lang="scss" scoped>

</style>
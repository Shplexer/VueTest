<script setup>
import CheckOut from '~/components/cart/CheckOut.vue';
import ItemList from '~/components/cart/ItemList.vue';

</script>

<template>
    <div class="main-area">
        <div class="nav-panel">
            <p>Главная</p>
            <img style="margin-left: 10px; margin-right: 10px;" src="/images/arrow.svg">
            <p class="gray-text">Корзина</p>
        </div>
        
        <div class="cart">
            <ItemList />
            <CheckOut/>
        </div>
    </div>
</template>
<style></style>

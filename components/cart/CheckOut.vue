<script setup>
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()

const {
    totalItems,
    totalPrice,
    isInstallationNeeded
} = storeToRefs(cartStore)

</script>

<template>
    <div v-if="totalItems > 0" class="total-area" >
        <p class="total-title">Итого</p>
        <div class="total-info">
            <div class="total-sum total-cell">
                <p class="total-sum-title total-cell-title">Сумма заказа</p>
                <p class="total-sum-number total-cell-data">{{ Intl.NumberFormat('ru-RU').format(totalPrice) }} ₽</p>
            </div>
            <div class="total-quantity total-cell">
                <p class="total-quantity-title total-cell-title">Количество</p>
                <p class="total-quantity-number total-cell-data"> {{ Intl.NumberFormat('ru-RU').format(totalItems) }} шт
                </p>
            </div>
            <div class="installation total-cell">
                <p class="installation-title total-cell-title">Установка</p>
                <p class="installation-bool total-cell-data"> {{ isInstallationNeeded ? "Нет" : "Да" }}</p>
            </div>
        </div>
        <!-- придумать другое название!! -->
        <div class="total-total total-cell">
            <p class="total-total-title">Стоимость товаров</p>
            <p class="total-total-number"> {{ Intl.NumberFormat('ru-RU').format(totalPrice) }} ₽</p>
        </div>
        <div class="total-controls">
            <button class="check-out">Оформить заказ</button>
            <button class="check-out-quick">Купить в 1 клик</button>
        </div>
    </div>
</template>

<style>
@import url("~/assets/css/checkOut.css");
</style>
<script setup>
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()

const {
    totalItemTypes,
    totalPrice,
} = storeToRefs(cartStore)

const formatPlural = (n, form1, form2, form5) => {
    const lastDigit = n % 10
    const lastTwoDigits = n % 100

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return `${n} ${form5}`
    }
    if (lastDigit === 1) {
        return `${n} ${form1}`
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return `${n} ${form2}`
    } else {
        return `${n} ${form5}`
    }
}
</script>
<template>
    <div class="header">
        <div class="header-controls">
            
        </div>
        <div class="cart-area">
            <div class="cart-icon-wrap">
                <img src="/images/cart.svg" class="cart-icon">
            </div>
            <div class="cart-info">
                <p class="cart-title">
                    Ваша корзина
                </p>
                <p class="cart-total-quantity gray-text">
                    {{ formatPlural(totalItemTypes, 'товар', 'товара', 'товаров') }}
                </p>
                <p class="cart-total-price">
                    {{  Intl.NumberFormat('ru-RU').format(totalPrice)}} ₽
                </p>
            </div>
        </div>
    </div>
        
</template>

<style>
    @import url("~/assets/css/header.css");
</style>
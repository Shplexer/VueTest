<script setup>
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()

const {
    items,
    totalItems,
    totalPrice,
    isInstallationNeeded
} = storeToRefs(cartStore)

const {
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
    deleteAllItems,
    toggleInstallation
} = cartStore

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
const getImageUrl = (picPath) => {
    return `/images/products/${picPath}`
}
</script>

<template>
    <div class="item-list-area">
        <div class="item-list-header">
            <h1 class="item-list-title">Ваша корзина</h1>
            <p class="item-list-total-items gray-text">{{ formatPlural(totalItems, 'товар', 'товара', 'товаров') }}</p>
            <p v-if="totalItems > 0" @click="deleteAllItems" class="clear-items gray-text" style="text-decoration: underline;">Очистить корзину</p>
        </div>
        <div v-if="totalItems > 0">

            <div class="item-list">
                <div v-for="item in items" :key="item.id" class="item-row">
                    <div class="item-info">
                        <div class="item-image-wrap">
                            <img :src="getImageUrl(item.picPath)" class="item-image">
                        </div>
                        <div class="item-text-info">
                            <p class="item-name">{{ item.name }}</p>
                            <p class="item-description">{{ item.description }}</p>
                            <p class="item-article gray-text">Артикул: {{ item.article }}</p>
                        </div>
                    </div>
                    <div class="quantity-area">
                        <div class="quantity-controls">
                            <button @click="decreaseQuantity(item.id)" class="decrease-quantity">−</button>
                            <div class="quantity">
                                <p>
                                    <!-- СДЕЛАТЬ ПОЛЕ ТЕКСТОВЫМ -->
                                    {{ Intl.NumberFormat('ru-RU').format(item.quantity) }}
                                </p>
                            </div>
                            <button @click="increaseQuantity(item.id)" class="increase-quantity">+</button>
                        </div>
                        <div v-if="item.quantity != 1" class="price-per">
                        {{ Intl.NumberFormat('ru-RU').format(item.price) }} ₽/шт
                    </div>
                </div>
                
                <div class="item-total-price">
                    {{ Intl.NumberFormat('ru-RU').format(item.quantity * item.price) }} ₽
                </div>
                <div class="remove-item-wrap">
                    <img src="/images/cross.svg" class="remove-item-icon" @click="deleteItem(item.id)">
                </div>
            </div>
        </div>
        <div class="installation-area">
            <div class="installation-checkbox-wrap">
                <input type="checkbox" class="installation-checkbox" @change="toggleInstallation" />
            </div>
            <div class="installation-icon-wrap">
                <img src="/images/installation.svg" class="installation-icon">
            </div>
            <div class="installation-text">
                <div class="installation-text-title">
                    Установка
                </div>
                <div class="installation-text-details gray-text">
                    Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.
                </div>
            </div>
        </div>
        </div>
        <div v-else>
            <h1 class="item-list-title">Корзина пуста!</h1>

        </div>
        <!-- <div>
            УДАЛИТЬ ПОТОМ: {{ Intl.NumberFormat('ru-RU').format(totalPrice) }}
        </div> -->
    </div>
</template>

<style>
@import url("~/assets/css/cart.css");
</style>
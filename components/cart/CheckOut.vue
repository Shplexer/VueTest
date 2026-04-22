<script setup lang="ts">
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()

const {
    items,
    totalItems,
    totalPrice,
    isInstallationNeeded
} = storeToRefs(cartStore)

const isLoading = ref(false)

async function handleCheckout() {
  if (totalItems.value === 0) {
    alert('Корзина пуста')
    return
  }
  
  isLoading.value = true
  
  try {
    const response = await $fetch('/api/checkout', {
      method: 'POST',
      body: {
        items: items.value,
        totalPrice: totalPrice.value,
        totalItems: totalItems.value,
        isInstallationNeeded: isInstallationNeeded.value
      }
    })
    console.log("=============")
    console.log(response);
    console.log("=============")
    alert(`Заказ успешно оформлен!\n
    Номер заказа: ${response.order.id}
    Сумма: ${Intl.NumberFormat('ru-RU').format(response.order.summary.totalPrice)} ₽
    Товаров: ${response.order.summary.totalItems} шт.
    Требуется установка: ${response.order.summary.installationRequested ? "Да" : "Нет"}
    `)
    
    cartStore.deleteAllItems()
    
  } catch (error: any) {
    console.error('Ошибка оформления заказа:', error)
    alert(`Ошибка оформления заказа\n\n${error.data?.message || 'Произошла неизвестная ошибка'}`)
  } finally {
    isLoading.value = false
  }
}

// Функция быстрого заказа
async function handleQuickCheckout() {
  if (totalItems.value === 0) {
    alert('Корзина пуста')
    return
  }
  
  isLoading.value = true
  
  try {
    const response = await $fetch('/api/checkout', {
      method: 'POST',
      body: {
        items: items.value,
        totalPrice: totalPrice.value,
        totalItems: totalItems.value,
        isInstallationNeeded: isInstallationNeeded.value,
        quickOrder: true
      }
    })
    
    alert(`Заказ в 1 клик оформлен!\n
    Номер заказа: ${response.order.id}
    Сумма: ${Intl.NumberFormat('ru-RU').format(response.order.summary.totalPrice)} ₽
    Товаров: ${response.order.summary.totalItems} шт.
    Требуется установка: ${response.order.summary.installationRequested ? "Да" : "Нет"}
    `)
    
    cartStore.deleteAllItems()
    
  } catch (error: any) {
    console.error('Ошибка заказа в 1 клик:', error)
    alert(`Ошибка оформления заказа\n\n${error.data?.message || 'Произошла неизвестная ошибка'}`)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
    <div v-if="totalItems > 0" class="total-area">
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
                <p class="installation-bool total-cell-data"> {{ isInstallationNeeded ? "Да" : "Нет" }}</p>
            </div>
        </div>
        <div class="total-total total-cell">
            <p class="total-total-title">Стоимость товаров</p>
            <p class="total-total-number"> {{ Intl.NumberFormat('ru-RU').format(totalPrice) }} ₽</p>
        </div>
        <div class="total-controls">
            <button 
                class="check-out" 
                @click="handleCheckout"
                :disabled="isLoading"
            >
                {{ isLoading ? 'Оформление...' : 'Оформить заказ' }}
            </button>
            <button 
                class="check-out-quick" 
                @click="handleQuickCheckout"
                :disabled="isLoading"
            >
                {{ isLoading ? 'Оформление...' : 'Купить в 1 клик' }}
            </button>
        </div>
    </div>
</template>

<style>
@import url("~/assets/css/checkOut.css");

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
    // state
    const items = ref([
        {
            id: 1,
            name: 'Вытяжное устройство G2H',
            price: 12644,
            article: 'G2H105',
            quantity: 1,
            description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
            picPath: '1.png'
        },
        {
            id: 2,
            name: 'Вытяжное устройство BXC',
            price: 12644,
            article: 'G2H1065',
            quantity: 2,
            description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
            picPath: '2.png'
        },
        {
            id: 3,
            name: 'Вытяжное устройство GHN',
            price: 12644,
            article: 'G2H1065',
            quantity: 1,
            description: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
            picPath: '3.png'
        },
    ]);
    const isInstallationNeeded = ref(false);
    // get
    const totalItems = computed(() => {
        return items.value.reduce((sum, item) => sum + item.quantity, 0)
    });

    const totalPrice = computed(() => {
        return items.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    });

    //actions
    function increaseQuantity(itemId: number) {
        const item = items.value.find(i => i.id === itemId);
        if (item) {
            item.quantity++;
        }
    }

    function decreaseQuantity(itemId: number) {
        const item = items.value.find(i => i.id === itemId);
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    }
    function deleteItem(itemId: number) {
        const index = items.value.findIndex(i => i.id === itemId);
        if (index !== -1) {
            items.value.splice(index, 1); // Actually remove the item
        }
    }
    function toggleInstallation() {
        isInstallationNeeded.value = !isInstallationNeeded.value
    }

    return {
        items,
        totalItems,
        totalPrice,
        isInstallationNeeded,
        increaseQuantity,
        decreaseQuantity,
        deleteItem,
        toggleInstallation
    }
})
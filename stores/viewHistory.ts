import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useViewHistoryStore = defineStore('viewHistory', () => {
    // state
    const items = ref([
        {
            id: 1,
            name: 'BXC',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Вытяжное устройство для механической системы вентиляции',
            picPath: '2.png'
        },
        {
            id: 2,
            name: 'G2H',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
            picPath: '1.png'
        },
        {
            id: 3,
            name: 'GHN',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Вытяжное устройство для механической системы вентиляции',
            picPath: '3.png'
        },
        {
            id: 4,
            name: 'TDA',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Вытяжное устройство для механической системы вентиляции',
            picPath: '4.png'
        },
       
    ]);


    return {
        items
    }
})
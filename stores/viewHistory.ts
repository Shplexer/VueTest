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
        {
            id: 5,
            name: 'BXC',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Вытяжное устройство для механической системы вентиляции',
            picPath: '2.png'
        },
        {
            id: 6,
            name: 'G2H',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
            picPath: '1.png'
        },
        {
            id: 7,
            name: 'GHN',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Вытяжное устройство для механической системы вентиляции',
            picPath: '3.png'
        },
        {
            id: 8,
            name: 'TDA',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Вытяжное устройство для механической системы вентиляции',
            picPath: '4.png'
        },
                {
            id: 9,
            name: 'BXC',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Вытяжное устройство для механической системы вентиляции',
            picPath: '2.png'
        },
        {
            id: 10,
            name: 'G2H',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
            picPath: '1.png'
        },
        {
            id: 11,
            name: 'GHN',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Вытяжное устройство для механической системы вентиляции',
            picPath: '3.png'
        },
        {
            id: 12,
            name: 'TDA',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Вытяжное устройство для механической системы вентиляции',
            picPath: '4.png'
        },
        {
            id: 13,
            name: 'BXC',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Вытяжное устройство для механической системы вентиляции',
            picPath: '2.png'
        },
        {
            id: 14,
            name: 'G2H',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
            picPath: '1.png'
        },
        {
            id: 15,
            name: 'GHN',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Вытяжное устройство для механической системы вентиляции',
            picPath: '3.png'
        },
        {
            id: 16,
            name: 'TDA',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Вытяжное устройство для механической системы вентиляции',
            picPath: '4.png'
        },
                {
            id: 17,
            name: 'BXC',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Вытяжное устройство для механической системы вентиляции',
            picPath: '2.png'
        },
        {
            id: 18,
            name: 'G2H',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
            picPath: '1.png'
        },
        {
            id: 19,
            name: 'GHN',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Вытяжное устройство для механической системы вентиляции',
            picPath: '3.png'
        },
        {
            id: 20,
            name: 'TDA',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Вытяжное устройство для механической системы вентиляции',
            picPath: '4.png'
        },
        {
            id: 21,
            name: 'BXC',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Вытяжное устройство для механической системы вентиляции',
            picPath: '2.png'
        },
        {
            id: 22,
            name: 'G2H',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
            picPath: '1.png'
        },
        {
            id: 23,
            name: 'GHN',
            priceMinRUB: 6848,
            priceMaxRUB: 56584,
            priceMinEUR: 77.60,
            priceMaxEUR: 643.86,
            description: 'Вытяжное устройство для механической системы вентиляции',
            picPath: '3.png'
        },
        {
            id: 24,
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
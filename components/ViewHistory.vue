<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { storeToRefs } from 'pinia'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const viewHistoryStore = useViewHistoryStore()
const { items } = storeToRefs(viewHistoryStore)

const swiperContainer = ref(null)
let swiperInstance = null

// Add reactive variables for current page and total pages
const currentPage = ref(1)
const totalPages = ref(1)

onMounted(() => {
    // Initialize Swiper after component mounts
    if (swiperContainer.value) {
        swiperInstance = new Swiper(swiperContainer.value, {
            modules: [Navigation, Pagination],
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 4,
            navigation: {
                nextEl: '.swi-next',
                prevEl: '.swi-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            lazy: {
                loadPrevNext: true
            },
            speed: 400,
            touchRatio: 1,
            observer: true,
            observeParents: true,
            on: {
                init: function() {
                    updatePaginationInfo(this)
                },
                slideChange: function() {
                    updatePaginationInfo(this)
                },
                resize: function() {
                    updatePaginationInfo(this)
                }
            }
        })
        
        const updateTotalPages = () => {
            const slidesPerView = swiperInstance.params.slidesPerView
            const totalSlides = items.value.length
            totalPages.value = Math.ceil(totalSlides / slidesPerView)
        }
        
        updateTotalPages()
    }
})

const updatePaginationInfo = (swiper) => {
    currentPage.value = swiper.realIndex / swiper.params.slidesPerGroup + 1
    const totalSlides = items.value.length
    const slidesPerView = swiper.params.slidesPerView
    totalPages.value = Math.ceil(totalSlides / slidesPerView)
}

onBeforeUnmount(() => {
    if (swiperInstance) {
        swiperInstance.destroy(true, true)
        swiperInstance = null
    }
})
</script>

<template>
    <div class="view-history-container">
    </div>
    <div class="swiper-header">
        <p class="swiper-title">
            Просмотренные товары
        </p>
        <div class="swiper-controls">
            <div class="swi-prev">
                <img src="/images/prev_icon.svg">
            </div>
            <div class="pagination">
                <p class="curr-page">
                    {{ currentPage }}
                </p>
                <p class="total-pages gray-text">
                    &nbsp;/ {{ totalPages }}
                </p>
            </div>
            <div class="swi-next">
               <img src="/images/next_icon.svg">
            </div>
        </div>
    </div>
    <div class="swiper-container" ref="swiperContainer">
        <div class="swiper-wrapper">
            <div v-for="item in items" :key="item.id" class="swiper-slide">
                <div class="product-card">
                   <div class="product-image">
                        <img :src="`/images/products/${item.picPath}`" :alt="item.name">
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">{{ item.name }}</h3>
                        <p class="product-description">{{ item.description }}</p>
                        <div class="product-footer">
                            <div class="product-price">
                                <span class="price-rub">
                                    {{ Intl.NumberFormat('ru-RU').format(item.priceMinRUB) }} ₽
                                    – {{ Intl.NumberFormat('ru-RU').format(item.priceMaxRUB) }} ₽
                                </span>
                                <span class="price-eur gray-text">
                                    {{ Intl.NumberFormat('ru-RU').format(item.priceMinEUR) }} € - {{
                                        Intl.NumberFormat('ru-RU').format(item.priceMaxEUR) }} €
                                </span>
                            </div>
                            <button class="details-button">
                                Подробнее
                            </button>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.view-history-container {
    position: relative;
    padding: 20px 40px;
    max-width: 1200px;
    margin: 0 auto;
}

.swiper-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 60px;
}

.swiper-title {
    font-size: 30px;
    font-weight: 500;
}
.pagination{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 12px;
}
.swi-next, .swi-prev{
    border-radius: 50%;
    background-color: #90A2B5;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-size: 18px;
    transition: background-color 0.2s ease;

}
.swi-next:hover, .swi-prev:hover{
    cursor: pointer;
    background-color: #7A8EA3;
}
.curr-page{
    font-size: 24px;

}
.total-pages{
    font-size: 18px;

}
.swiper-container {
    overflow: hidden;
    padding: 10px 0;
}

.swiper-controls {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.swiper-slide {
    height: auto;
}

.product-card {
    background: #f6f8fa;
    border-radius: 5px;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    height: 560px;
}

.product-image {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
    padding-bottom: 5px;

}

.product-image img {
    width: 245px;
    height: 245px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.product-info {
    padding: 25px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.product-footer {
    margin-top: auto;
}

.product-name {
    font-size: 22px;
    margin: 0;
}

.product-price {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 12px;
}


.price-eur {
    font-weight: 400;
    font-size: 16px;
}

.price-rub {
    font-weight: 400;
    font-size: 22px;
}

.details-button {
    height: 55px;
    font-size: 16px;
    border-radius: 4px;
    transition: background-color 0.2s ease;
    background: #0069B4;
    color: #FFFFFF;
    border: 0px;
    width: 100%;
    cursor: pointer;
}
.details-button:hover {
    background: #005197;
    cursor: pointer;
}
.product-description {
    font-size: 14px;
    line-height: 145%;
    margin: 0;
}

</style>
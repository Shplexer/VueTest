// server/api/checkout.post.ts

interface CheckoutBody {
  items: any[]
  totalPrice: number
  totalItems: number
  isInstallationNeeded: boolean
  quickOrder?: boolean
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<CheckoutBody>(event)
    
    const { items, totalPrice, totalItems, isInstallationNeeded } = body
    
    if (!items || items.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Корзина пуста',
      })
    }

    const order = {
      id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      items: items.map((item: any) => ({
        id: item.id,
        name: item.name,
        article: item.article,
        quantity: item.quantity,
        price: item.price,
        total: item.price * item.quantity
      })),
      summary: {
        totalItems,
        totalPrice,
        installationRequested: isInstallationNeeded
      },
      createdAt: new Date().toISOString(),
      status: 'pending'
    }
    
    console.log('Новый заказ создан:', order)
    
    return {
      success: true,
      message: 'Заказ успешно оформлен',
      order
    }
    
  } catch (error: any) {
    console.error('Ошибка при оформлении заказа:', error)
    
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Ошибка при оформлении заказа',
    })
  }
})
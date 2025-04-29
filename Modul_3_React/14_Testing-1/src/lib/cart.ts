export type CartItem = {
    id: string,
    name: string,
    priceCents: number,
    amount: number
}

type CartTotal = {
    total: number,
    discountPercent: number,
    appliedDiscount: number,
    totalWithDiscount: number // total - appliedDiscount
}



// * Rabattregeln:
// unter 150 kein Rabatt
// 150 - 299 => 10%
// 300 - 999 => 15%
// ab 1000 => 20%

export function getCartTotal(items: CartItem[]): CartTotal{
    // let total = 0;
    // items.forEach((item)=>{
    //     total = total + (item.priceCents * item.amount)
    // })

    const total = items.reduce((acc, item)=>(acc + item.priceCents * item.amount), 0)


    let discountPercent = 0
    if (total >= 15000){
        discountPercent = 10
    }
    if (total >= 30000){
        discountPercent = 15
    }
    if (total >= 100000){
        discountPercent = 20
    }

    const appliedDiscount = total * (discountPercent / 100)


    return {
        total: total,
        discountPercent: discountPercent,
        appliedDiscount: appliedDiscount,
        totalWithDiscount: total - appliedDiscount
    }
}









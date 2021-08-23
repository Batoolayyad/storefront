const initialState = {
    products: [
        { name: 'Sound Tower', description: 'Samsung Sound Tower 500W Pump up the bass Bluetooth USB', category: 'Electronics', inventoryCount: 3, price: 179, image:'https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/home-theater/soundbars/pdp/mx-t40-za/gallery/Gallery-sound-tower-T40-1-1600x1200.jpg?$product-details-jpg$' },
        { name: 'Laptop Dell', description: 'Dell Gaming G5 5500-220D Core i7-10750H 15.6” 32GB RAM 1TB + 512GB SSD', category: 'Electronics', inventoryCount: 3, price: 1500 ,image:'https://media.wired.com/photos/5d5ec4d7a9558100099f379e/1:1/w_759,h_759,c_limit/Gear-Razer-blade-pro-17-source-razer-FATA.jpg'  },
        { name: 'Laptop HP', description: 'HP Pavilion Gaming Core i7-10750H hexa 16GB DDR4 2DM 2933 1TB PCIe', category: 'Electronics', inventoryCount: 3, price:1300 ,image:'https://media.wired.com/photos/5d5ec4d7a9558100099f379e/1:1/w_759,h_759,c_limit/Gear-Razer-blade-pro-17-source-razer-FATA.jpg' },
        { name: 'Headphones', description: 'ONIKUMA Headphones Gaming Headset', category: 'Electronics', inventoryCount: 3, price: 98.990, image:'https://m.media-amazon.com/images/I/71YoAHYSL7L._AC_SL1500_.jpg'},
        { name: 'orange', description: 'fresh', category: 'Food', inventoryCount: 3, price: 3, image:'https://images.creativemarket.com/0.1.0/ps/4120980/1820/1214/m1/fpnw/wm1/kb78j0cplcejpqftnww1hcygjftsejpbc25hrgwd5gsmjvuwwdnjozcgbhllxbwa-.jpg?1520867839&s=68f47a35dcb9380020b41d6d639cded2' },
        { name: 'bananna', description: 'fresh', category: 'Food', inventoryCount: 3, price: 2.5 , image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SZMdGr2ZwU5-V5zZ_A1qbi9jI_HiO3hHKg&usqp=CAU'},
        { name: 'apple', description: 'fresh', category: 'Food', inventoryCount: 3, price: 3.75, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQak--QmxmYf1F3-Yja5SJi4t0p6e69d8l-dw&usqp=CAU'}
    ],
    activeProducts: []
}

export default function getItems(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'CHANGE_ACTIVE':
            const changeActive = state.products.filter(item => {
                return item.category === payload
            })
            return {
                products: state.products,
                activeProducts: changeActive
            }
            case 'DECREASE_INVENTORY':
                console.log('called from decrease inventory');
                const afterAdd = state.products.map((element)=>{
                    if(element.name == payload.name&&element.inventoryCount>0){
                        element.inventoryCount=element.inventoryCount-1;
                    }
                    if(element.inventoryCount===0){
                        element.description='sold'
                    }
                    return element;
                });
                // console.log('called in products');
                return {
                    products:afterAdd,
                    activeProducts:state.activeProducts
                }
    
        default:
            return state;
    }

}


export function getCategoryItems(name) {
    return {
        type: 'CHANGE_ACTIVE',
        payload: name
    }
}


export function reduceInventory(product){
    return{
        type:'DECREASE_INVENTORY',
        payload:product
    }
} 

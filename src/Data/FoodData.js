export function formatPrice(price) {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'INR'
    })
}

export const foodItems = [
    {
        name: 'Cheese Pizza',
        img: '/img/pizza.png',
        section: 'Pizza',
        price: 300
    },
    {
        name: 'Pepperoni Pizza',
        img: '/img/pizza2.jpeg',
        section: 'Pizza',
        price: 400
    },
    {
        name: 'Chicken Pizza',
        img: '/img/chicken-pizza.jpeg',
        section: 'Pizza',
        price: 420
    },
    {
        name: 'Veggie Pizza',
        img: '/img/healthy-pizza.jpeg',
        section: 'Pizza',
        price: 350
    },
    {
        name: 'Burger',
        img: '/img/burger.jpeg',
        section: 'Sandwich',
        price: 120
    },
    {
        name: 'Gyro',
        img: '/img/gyro.jpeg',
        section: 'Sandwich',
        price: 135
    },
    {
        name: 'Shrimp PoBoy',
        img: '/img/sandwich.jpeg',
        section: 'Sandwich',
        price: 99
    },
    {
        img: '/img/fries.jpeg',
        name: 'Fries',
        section: 'Sides',
        price: 55
    }
];

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});
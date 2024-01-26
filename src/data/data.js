const links = [
    {
        label: 'Home',
        url: '/',
    },
    {
        label: 'About',
        url: '/about',
    },
    {
        label: 'Menu',
        url: '/menu',
    },
    {
        label: 'Reservations',
        url: '/reservations',
    },
    {
        label: 'Order Online',
        url: '/order-online',
    },
    {
        label: 'Login',
        url: '/login',
    }
]

export const highlights = [
    {
        img: process.env.PUBLIC_URL + '/greek-salad.jpg',
        name: 'Greek salad',
        price: '12.99',
    },
    {
        img: process.env.PUBLIC_URL + '/bruchetta.svg',
        name: 'Bruschetta',
        price: '9.99',
    },
    {
        img: process.env.PUBLIC_URL + '/lemon-dessert.jpg',
        name: 'Lemon Dessert',
        price: '8.00',
    }
]

export default links;
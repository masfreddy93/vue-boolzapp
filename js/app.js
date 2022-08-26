const contacts = [ 
    {
        name: 'Michele',
        avatar: './img/avatar_1.jpg',
        visible: true,
        class: 'active',
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent',
            }, 
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent',
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received',
            },
        ],
    },
    {
        name: 'Fabio',
        avatar: './img/avatar_2.jpg'
    },
    {
        name: 'Samuele',
        avatar: './img/avatar_3.jpg',
    },
    {
        name: 'Anna',
        avatar: './img/avatar_4.jpg'
    },
    {
        name: 'Lucia',
        avatar: './img/avatar_5.jpg'
    },
    {
        name: 'Jack',
        avatar: './img/avatar_6.jpg'
    },
    {
        name: 'Sam',
        avatar: './img/avatar_7.jpg'
    }
]


const app = new Vue({
    el: '#root',
    data: {
        contacts
    },
})
const contacts = [ 
    {
        name: 'Michele',
        avatar: './img/avatar_1.jpg',
        visible: true,
        // class: 'active',
        index: 0,
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
        avatar: './img/avatar_2.jpg',
        visible: false,
        class: '',
        index: 1,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai mangiato?',
                status: 'sent',
            }, 
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent',
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Ok!',
                status: 'received',
            },
        ],
    },
    {
        name: 'Samuele',
        avatar: './img/avatar_3.jpg',
        visible: false,
        class: '',
        index: 2,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai dormito?',
                status: 'sent',
            }, 
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent',
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Certo!',
                status: 'received',
            },
        ],
        
    },
    {
        name: 'Anna',
        avatar: './img/avatar_4.jpg',
        visible: false,
        class: '',
        index: 3,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai stirato?',
                status: 'sent',
            }, 
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent',
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Va bene!',
                status: 'received',
            },
        ],
    },
    {
        name: 'Lucia',
        avatar: './img/avatar_5.jpg',
        visible: false,
        class: '',
        index: 4,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Vieni fuori?',
                status: 'sent',
            }, 
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent',
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Why?',
                status: 'received',
            },
        ],
    },
    {
        name: 'Jack',
        avatar: './img/avatar_6.jpg',
        visible: false,
        class: '',
        index: 5,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Bella',
                status: 'sent',
            }, 
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent',
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Hola!',
                status: 'received',
            },
        ],
    },
    {
        name: 'Sam',
        avatar: './img/avatar_7.jpg',
        visible: false,
        class: '',
        index: 6,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ehi',
                status: 'sent',
            }, 
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent',
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Kiss Kiss!',
                status: 'received',
            },
        ],
    }
]


const app = new Vue({
    el: '#root',
    data: {
        contacts,
        // active: false,
    },
    methods: {
        makeVisible: function(contact) {
            // contact.visible=false;
            contact.visible= !contact.visible
            console.log(contact.visible)
            console.log(contact.name)
            // contact.visible=false;
            // console.log(contact.visible)
        }
    }
})
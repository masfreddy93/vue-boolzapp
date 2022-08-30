const contacts = [ 
    {
        name: 'Michele',
        avatar: './img/avatar_1.jpg',
        visible: true,
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
        visible: true,
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
                date: '10/01/2020 16:20:22',
                message: 'Ok!',
                status: 'received',
            },
        ],
    },
    {
        name: 'Samuele',
        avatar: './img/avatar_3.jpg',
        visible: true,
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
                date: '10/01/2020 17:15:22',
                message: 'Certo!',
                status: 'received',
            },
        ],
        
    },
    {
        name: 'Anna',
        avatar: './img/avatar_4.jpg',
        visible: true,
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
        visible: true,
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
        visible: true,
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
        visible: true,
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
        active: 0,
        inputMessage: '',
        inputSearch: '',
        activeContact: contacts[0],
    },
    computed: {
        searchContact() {
            return this.contacts.filter((el) => el.name.toLowerCase().trim().includes(this.inputSearch.toLowerCase().trim()))
        }
    },
    methods: {
       addMessage: function() {
            this.inputMessage = this.inputMessage.trim();

            if(!this.inputMessage) return

            const messages = this.activeContact.messages;

            messages.push({
                date: '10/02/2022 15:40:47',
                message: this.inputMessage,
                status: 'sent',
            })

            // setTimeout(this.addReply, 1000)
            setTimeout(() => {

                const message = {
                    date: '10/02/2022 15:40:47',
                    message: 'ok',
                    status: 'received',
                }

                messages.push(message)
            }, 1000)

            this.inputMessage = '';
       },

    //    addReply: function() {
    //         const messages = this.contacts[this.active].messages;

    //         const message = {
    //             date: '10/02/2022 15:40:47',
    //             message: 'ok',
    //             status: 'received',
    //         }
    //         messages.push(message)
    //     },

        setActiveContact: function(contact) {
            this.activeContact = contact;
        },

        getHours(stringDate) {
            const hours = stringDate.split(' ')
            return hours[1].substr(0,5)
        },

        getHourLastMessage(array) {
            const lastMessage = array.messages[array.messages.length-1].date
            return this.getHours(lastMessage)
        }
    },
})


// DA SISTEMARE DATE E ORE (sia milestone 2 che milestone 3)
//ricerca di prime lettere nel searchContact (sistemare la computed)
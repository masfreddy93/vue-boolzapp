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
                date: '10/01/2020 10:30:55',
                message: 'Hai mangiato?',
                status: 'sent',
            }, 
            {
                date: '10/01/2020 10:31:00',
                message: 'Io si',
                status: 'sent',
            },
            {
                date: '10/01/2020 19:20:22',
                message: 'Anche io!',
                status: 'received',
            },
        ],
    },
    {
        name: 'Samuele Bersani',
        avatar: './img/avatar_3.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 22:30:55',
                message: 'Certo!',
                status: 'sent',
            }, 
            {
                date: '10/01/2020 20:15:22',
                message: 'Hai dormito?',
                status: 'received',
            },
        ],
        
    },
    {
        name: 'Luca Pezzolo',
        avatar: './img/avatar_4.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 20:30:55',
                message: 'Hai stirato?',
                status: 'sent',
            }, 
            {
                date: '10/01/2020 20:50:00',
                message: 'Le camicie intendo',
                status: 'sent',
            },
            {
                date: '10/01/2020 22:15:22',
                message: 'Si si si!',
                status: 'received',
            },
        ],
    },
    {
        name: 'Lorenzo Cherubini detto Jovanotti',
        avatar: './img/avatar_5.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Vieni fuori?',
                status: 'sent',
            }, 
        ],
    },
    {
        name: 'Lucia',
        avatar: './img/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 09:30:55',
                message: 'Bella',
                status: 'received',
            }, 
            {
                date: '10/01/2020 07:40:00',
                message: 'Come stai?',
                status: 'received',
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Bene',
                status: 'sent',
            },
        ],
    },
    {
        name: 'Sam Martino',
        avatar: './img/avatar_7.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 10:30:55',
                message: 'Ehi',
                status: 'sent',
            }, 
            {
                date: '10/01/2020 17:20:22',
                message: 'Dimmi pure che non vieni sai, non si fa così',
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
        actualDate: new Date(),
    },
    computed: {
        searchContact() {
            return this.contacts.filter((el) => el.name.toLowerCase().trim().includes(this.inputSearch.toLowerCase().trim()))
        },
        sortedMessagesByDate() {
            return this.activeContact.messages.sort((a, b) => new Date(a.date) - new Date(b.date))
        }
    },
    methods: {
       addMessage: function() {
            this.inputMessage = this.inputMessage.trim();

            if(!this.inputMessage) return

            const messages = this.activeContact.messages;

            messages.push({
                date: this.getDateInRealTime(this.actualDate),
                message: this.inputMessage,
                status: 'sent',
            })

            // setTimeout(this.addReply, 1000)
            setTimeout(() => {

                const message = {
                    date: this.getDateInRealTime(this.actualDate),
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
        },

        getTextLastMessage(array) {
            const lastMessage = array.messages[array.messages.length-1].message
            return lastMessage
        },

        getDateInRealTime(variable) {
            const date = (variable.toString().split(' ')[2]) + '/' + ('0' + (variable.getMonth() + 1)) + '/' + (variable.toString().split(' ')[3]) + ' ' + (variable.toString().split(' ')[4]);
            return date
        },
    },
})




// const dates = [
//   new Date("2022-04-29T16:10:43-06:00"),
//   new Date("2023-04-29T16:10:43-06:00"),
//   new Date("2022-01-29T16:10:43-06:00")
// ]

// console.log(dates)

// dates.sort((a, b) => a - b)

// console.log(dates)



// const datess = [
//     '10/01/2020 09:30:55',
//     '10/01/2020 07:40:00',
//     '10/01/2020 16:15:22',
//   ]
  
//   console.log(datess)
  
//   datess.sort((a, b) => new Date(a) - new Date(b))
  
//   console.log(datess)

//   contact.sms = contact.sms.sort((a,b) => new Date(a.time) - new Date(b.time));
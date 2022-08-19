import { reactive } from 'vue'

export const store = reactive({
    currentUser: {
        id: '0',
        name: 'Jakob',
        img: 'https://picsum.photos/200',
        lastOnline: '19:20',
        active: true,
    },
    chats: [
        {
            id: '0',
            title: 'Geschwister',
            lastMessage: 'Wir sind alles Geschwister',
            lastTime: '17:10',
            img: 'https://picsum.photos/200',
            messages: [
                {
                    id: '0',
                    userId: '0',
                    text: 'Hallo ich bin die erste Nachricht',
                    time: '17:10',
                },
                {
                    id: '1',
                    userId: '1',
                    text: 'Hallo ich bin die zweite Nachricht',
                    time: '17:11',
                }
            ],
            users: [
                {
                    id: '0',
                    name: 'Jakob',
                    img: 'https://picsum.photos/200',
                    lastOnline: '19:20',
                    active: true,
                },
                {
                    id: '1',
                    name: 'Joachim',
                    img: 'https://picsum.photos/200',
                    lastOnline: '20:20',
                    active: false,
                }
            ]
        },
        {
            id: '1',
            title: 'I selber mit mir',
            lastMessage: 'Meine erste Nachricht',
            lastTime: '18:10',
            img: 'https://picsum.photos/200',
            messages: [],
            users: [
                {
                    id: '0',
                    name: 'Jakob',
                    img: 'https://picsum.photos/200',
                    lastOnline: '19:20',
                    active: true,
                },
            ]
        },
    ],
    currentChat: {},
})
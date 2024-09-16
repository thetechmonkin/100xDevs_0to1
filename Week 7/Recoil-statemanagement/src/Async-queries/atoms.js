
import axios from "axios";
import { atom, selector } from "recoil";

// Without async data queries
// export const notifications = atom({
//     key: "networkAtomNew",
//     default: {
//         network: 4, 
//         jobs: 6, 
//         messaging: 3, 
//         notifications: 3
//     }
// });

// Asynchronous data queries

export const notifications = atom({
    key: "networkAtomNew",
    default: selector({
        key: 'networkAtomSelector',
        get: async () => {
            const res = await axios.get('https://sum-server.100xdevs.com/notifications');
            return res.data;
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector2",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})

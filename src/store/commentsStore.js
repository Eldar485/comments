export const commentsStore = {
    state: () => ({
        comments: [
            {
                id: '1',
                name: 'Roma',
                text: 'Heeeey',
                date: '01.03.2000'
            },
            {
                id: '2',
                name: 'Victor',
                text: 'Nooooooo',
                date: '05.12.2000'
            },
            {
                id: '3',
                name: 'Vova',
                text: 'Yes',
                date: '12.25.2000'
            },
            {
                id: '4',
                name: 'Vova',
                text: 'Yes',
                date: '03.01.2000'
            },
            {
                id: '5',
                name: 'Vova',
                text: 'Yes',
                date: '10.05.2000'
            },
            {
                id: '6',
                name: 'Vova',
                text: 'Yes',
                date: '05.17.2000'
            },
            {
                id: '7',
                name: 'Vova',
                text: 'Yes',
                date: '11.30.2000'
            }
        ],
        page: 0,
        loading: false,
        sort: 0,
        notifications: []
    }),

    getters: {
        getTotalCommentsCount: state => state.comments.length,
        getTotalPages: state => {
            return Math.ceil(state.comments.length / 3)
        },
        getSort: state => state.sort,
        getAllComments: state => state.comments,
        getNotifications: state => state.notifications,
        getPage: state => state.page,
        getComments: state => {
            let sortedArray = []
            if (state.sort === 0) {
                sortedArray = state.comments.sort((comm1, comm2) => comm1.id - comm2.id)
            }
            if (state.sort === 1) {
                sortedArray = state.comments.sort((comm1, comm2) => comm2.id - comm1.id)
            }
            if (state.sort === 2) {
                sortedArray = state.comments.sort((comm1, comm2) => new Date(comm1.date) - new Date(comm2.date))
            }
            if (state.sort === 3) {
                sortedArray = state.comments.sort((comm1, comm2) => new Date(comm2.date) - new Date(comm1.date))
            }
            const start = state.page * 3, end = start + 3;
            return sortedArray.slice(start, end);
        },
    },
    mutations: {
        setSort(state, sort) {
            state.sort = sort
        },
        addComment(state, comment) {
            state.comments = [...state.comments, comment]
        },
        deleteComment(state, id) {
            state.page = 0
            state.comments = state.comments.filter(el => el.id !== id)
        },
        setNotifications(state, notification) {
            notification.id = Date.now().toLocaleString();
            state.notifications.unshift(notification);
            setTimeout(() => {
                state.notifications = state.notifications.filter(n => n.id !== notification.id)
            }, 3000);
        },
        setLoading(state, loading) {
            state.loading = loading;
        },
        setPage(state, page) {
            state.page = page;
        }
    },
    namespaced: true
}

export const api_path = {
    user: {
        getAll: () => '/users',
        getById: (id:number) => `/users/${id}`,
        create: () => '/users',
        update: (id:number) => `/users/${id}`,
        delete: (id:number) => `/user/${id}`,
    },
}
const {
    createApp
} = Vue;

createApp({
    data() {
        return {
            message: 'Benvenuto VueJS',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80'
        }
    }
}).mount('#app')
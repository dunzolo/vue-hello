const {
    createApp
} = Vue;

createApp({
    data() {
        return {
            titolo: 'Benvenuto VueJS',
            nome: '',
            cognome: '',
            nome_cognome: '',
            display: 'd-none',
            immagine: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80'
        }
    },
    methods: {
        showText: function(){
            this.nome_cognome = `Ciao ${this.nome} ${this.cognome}`;
        },
        showImage: function(){
            this.display = 'd-block';
        }
    },
}).mount('#app')
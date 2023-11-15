const { createApp } = Vue;

const messaggio = {
    data () {
        return {
            message : 'Hello World',
            link : './img/ronaldinho.jpg'
        }
    }
};

createApp(messaggio).mount('#app') 
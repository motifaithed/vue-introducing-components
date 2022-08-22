const app = Vue.createApp({
    data(){
        return {
            friends:[
                {
                    id: 'Manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'Julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                }
            ],
            
        }
    },
    methods:{
        showDetails(){
            this.showDetailsFlag = !this.showDetailsFlag;
        }
    }
})

app.component('friend-contact',{
    template: `<li>
               <h2>{{ friend.name }}</h2>
               <button @click="showDetails">{{ showDetailsFlag == true ? 'Hide Details' : 'Show Details' }}</button>
               <ul v-if="showDetailsFlag">
               <li><strong>Phone:</strong> {{ friend.phone }}</li>
               <li><strong>Email:</strong> {{ friend.email }}</li>
              </ul>
              </li>`,
    data(){
        return {
            friend: {
                id: 'Manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com'           
            },
            showDetailsFlag: false
        }
    },
    methods:{
        showDetails(){
            this.showDetailsFlag = !this.showDetailsFlag;
        }
    }
})
app.mount('#app');

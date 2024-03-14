import  {contacts}  from './contacts.js';


const {createApp} = Vue;


createApp({

  
  
  data(){


    
    return{
      contacts,
      selectedId :0,
      isSent: 'j-r',
      newMessage: '',

    }

    
    
  },

  
  methods:{

    

    addMessage() {
    
    

    const newMsg = {
      date: '10/01/2020 15:30:55',
      message: this.newMessage,
      status: 'sent'
    };

    
    this.contacts[this.selectedId].messages.push(newMsg);

    this.newMessage ='';

    },

    answer(){

     setTimeout(() => {

      const newMsg = {
        date: '10/01/2020 15:30:55',
        message: 'OK!',
        status: 'received'
      };
  
      
      this.contacts[this.selectedId].messages.push(newMsg);

     }, 1000);

    }

    

  },

  
  computed:{





  },

  
  mounted(){


    


  }




}).mount('#myApp');
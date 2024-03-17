import  {contacts}  from './contacts.js';


const {createApp} = Vue;
let {DateTime} = luxon;


createApp({

  
  
  data(){


    
    return{
      contacts,
      selectedId :0,
      isSent: 'j-r',
      newMessage: '',
      searchUser: '',
      now: {},
      disappear: true,
      disappId: 'date',
      
      
      

    }

    
    
  },

  
  methods:{

    

    addMessage() {
    
    

    const newMsg = {
      date: `${this.newDate()}` ,
      message: this.newMessage,
      status: 'sent'
    };

    
    this.contacts[this.selectedId].messages.push(newMsg);

    this.newMessage ='';

    },

    answer(){

     setTimeout(() => {

      const newMsg = {
        date: `${this.newDate()}` ,
        message: 'OK!',
        status: 'received'
      };
  
      
      this.contacts[this.selectedId].messages.push(newMsg);

     }, 1000);

    },

    newDate(){

      this.now=DateTime.now();

      return DateTime.now().setLocale('it').toFormat('dd/MM/yy hh/mm/ss');

    },

    

  },

  
  computed:{

    filteredUsers(){
      
      return contacts.filter(contact => contact.name.toLowerCase().includes(this.searchUser.toLowerCase()))
    }


  },

  
  mounted(){


  }




}).mount('#myApp');
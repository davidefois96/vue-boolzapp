import  {contacts}  from './contacts.js';


const {createApp} = Vue;


createApp({

  
  
  data(){


    
    return{
      contacts,
      selectedId :0,
      typeMsg: ''
      
    }

    
    
  },

  
  methods:{

    isSent(){

      contacts[selectedId].messages.forEach(message => {

        if (message.status=='sent') {

          typeMsg=`"d-flex p-t-19 p-b-40 p-l-16 p-r-15 b-r-10 m-w-435 p-r light-green"`;

          return typeMsg

          
          
        } else {

          typeMsg=`"d-flex p-t-19 p-b-40 p-l-16 p-r-15 b-r-10 m-w-435 p-r bg-white"`;

          return typeMsg

          
        }
        
      });



    }





  },

  
  computed:{





  },

  
  mounted(){


    isSent();


  }




}).mount('#myApp');
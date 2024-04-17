$("document").ready(function(){
    $(".paycard").validate({
        rules:{
          email:{
                required:true,
            },
           
            number:{
                required:true,
                minlength:16
            },
            cardname:{
                required:true,
            },
            check:{
                required:true,
            },
            cvc:{
                required:true,
            },
            exepire:{
                required:true,
            },
            pass1:{
                required:true,
                minlength:8,
            },
            
  
        },
        messages:{
            email:{
                required:"*Please enter a your email Id*"
            },
            
           
          debitcard:{
                required:"**Enter your Card Number**",
                
            },
            cardname:{
                required:"**Please enter a Card name**",
            },
            check:{
              required:  "**Click the checkbox**",
            },
            exepire:{
                required:"**Expired date**"
            },

            cvc:{
                required:"**Please enter a your cvc **",
            },


            pass1:{
                required:"**Please enter a password**",
            },
           
        }
    })
  })
  





/*form check*/


$(".invalidCheck2").click(function(){
      if($(".submitbtn").is(":disabled")){
          $(".submitbtn").removeAttr("disabled");
      }
      
      else{
          $(".submitbtn").attr('disabled','disabled')
      }
    })



    /*login*/
   



//matchpassword

function matchpass(){
    var f1=document.matchpassword.pass3.value
    var f2=document.matchpassword.pass4.value

    if(f1==f2){
        return true;
    }
      else{
        document.querySelector(".wrong").innerHTML="don't match password!!"
        return false
    }


}





// create val account

$("document").ready(function(){
    $(".valaccounut").validate({
        rules:{
          email:{
                required:true,
            },
           
            pnumber:{
                required:true,
                minlength:10
            },
            firstname:{
                required:true,
                minlength:3,
            },
            lname:{
                required:true,
            },
            pass3:{
                required:true,
                minlength:8,
            },
           
            pass4:{
                required:true,
                minlength:8,
            },
            
  
        },
        messages:{
            email:{
                required:"*Please enter a your email id*"
            },
            
           
          firstname:{
                required:"**Enter your firstname**",
                minlength:"minimum 3 leters",
                
                
            },
            lname:{
                required:"**Enter your lastname**",
            },
            pnumber:{
              required:  "*Enter your  mobile number*",
            },
            pass3:{
                required:"**Enter a new Password!**"
            },

            pass4:{
                required:"**Enter a confirm Password!**"
            },
           
        }
    })
  })
  


    
    









  
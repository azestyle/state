import React,{ useState} from "react";
import NameInput from "./Name";
import EmailInput from "./Email";
import SurnameInput from "./Surname";

function FormInput({submit}){
 const [name, setname] = useState('');
 const [surname, setsurname] = useState('');
 const [email, setemail] = useState('');
 function Handleformsubmit(el){
    el.preventDefault();
    if(name.length<4){
        alert('Ad qısadır yenidən daxil edin')
    }
    if(surname.length<1||email.length<1){
        alert('xanaları tam doldurun')
    }else{
   submit({name,email,surname});
   setname('')
   setsurname('')
   setemail('')
    }
}
 return(
    <form onSubmit={Handleformsubmit} className="form">
        <div className="inputs">
             <NameInput value={name} changed={setname}/>
             <SurnameInput value={surname} changed={setsurname}/>
            <EmailInput value={email} changed={setemail}/>
        </div>
     
      <input type="submit" value="Göndər"  className="submit"/>
    </form>
 )
}
 export default FormInput;
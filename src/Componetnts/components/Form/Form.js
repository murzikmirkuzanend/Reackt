import React, {useState} from 'react';

const Form = (getFilter) => {
    
    const [form, setForm] = useState({name:'', username:'', email:''});
    
    
   const StarForm = (e) => {
     const  eventData = {...form,[e.target.name]:e.target.value}

       setForm({...form,...eventData})
   }
    const onKlick = (e) => {
        e.preventDefault()
        getFilter(form)
    }
    
    return (
        <div>
            
            <form>
                <label ><input type="text" name={'name'} value={form.name} onChange={StarForm}/></label>
                <label ><input type="text" name={'username'} value={form.username} onChange={StarForm}/></label>
                <label ><input type="text" name={'email'} value={form.email} onChange={StarForm}/></label>
                <button onClick={onKlick}>Filter</button>
            </form>
            
            
        </div>
    );
};

export default Form;
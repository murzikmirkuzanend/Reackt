import React, {useState} from 'react';

const Form = ({getFilter}) => {
    
    const [form, setForm] = useState({name:'', username:'', email:''});
    
    
   const StarForm = (e) => {
     const  eventData = {...form,[e.target.name]:e.target.value}

       setForm({...form, ...eventData})
   }
    const buttonOnClick = (e) => {
        e.preventDefault()
        getFilter(form)
    }

    return (
        <div>
            
            <form>
                <label >Name:<input type="text" name={'name'} value={form.name} onChange={StarForm}/></label>
                <label >Username:<input type="text" name={'username'} value={form.username} onChange={StarForm}/></label>
                <label >email:<input type="text" name={'email'} value={form.email} onChange={StarForm}/></label>
                <button onClick={buttonOnClick}>Filter</button>
            </form>
            
            
        </div>
    );
};

export default Form;
import React from 'react'
import './forminput.styles.scss';

const handleShow = (e) => {
    
    if(e.target.className==='bx bxs-hide'){
        e.target.className = 'bx bxs-show';
        e.target.parentNode.firstElementChild.setAttribute('type', 'text');
    } else{
        e.target.className = 'bx bxs-hide';
        e.target.parentNode.firstElementChild.setAttribute('type', 'password');

    }
        
    console.log()
}
function FormInput({label, name, type, handleChange, value}) {
    return (
        <div className="text-box">
            <input type={type} id={name} name={name} onChange={handleChange} autoComplete='off' required  maxLength='40' value={value}/>
            <label>{label}</label>
            {type==='password' ? <i id="showHide" onClick={handleShow} className='bx bxs-hide'></i>: null }
        </div>
    )
}

{/* <i class='bx bxs-hide' ></i> */}
export default FormInput;
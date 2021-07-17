import headerLogo from '../images/header-logo.svg'
import { Link ,withRouter } from 'react-router-dom'; 
import React from 'react';
import auth from '../utils/auth';
import InfoTooltip from '../../src/components/InfoTooltip';


function Register(props){
    const [inputEmailData,setinputEmailData] = React.useState({})
    const [inputPasswordData,setinputPasswordData] = React.useState({})

    function handleEmailChange(e){
        const {name, value} = e.target;
        setinputEmailData({[name]: value })
       
    }
    function handlePasswordChange(e){
        const {name, value} = e.target;
        setinputPasswordData({[name]: value })
       
    }
    const [isSuccess,setisSuccess] = React.useState()
    const [stateOpenPopup,setstateOpenPopup] = React.useState()
    function closePopup(){
        setstateOpenPopup(false)
    }
    function handleSubmit (e){
        e.preventDefault()
        const {email}= inputEmailData;
        const {password}= inputPasswordData;
        auth.register({email,password})
        .then((res) => {
            if(res.status === 201){
                setisSuccess(true)
                setstateOpenPopup(true)
                setTimeout(()=>{props.history.push('/sign-in')}, 3000)
              } else {
                setisSuccess(false)
                setstateOpenPopup(true)
                console.log('Что то пошло не так')
              }
            });
    }

    return(
        <div className='singup singup_active'>
        <header className="singup__header">
            <img className="singup__logo" src={headerLogo} alt="Логотип сайта путешествие" />
            <Link to="/sign-in" className='singup__registration'>Войти</Link>
        </header>
        <form className='singup__in' onSubmit={handleSubmit}>
          <h3 className="singup__title">Регистрация</h3>
          <input 
          placeholder='Email'
          name="email"
          type="email"
          className='singup__email'
          onChange={handleEmailChange}
          />
          <input  
           placeholder='Password'
           name="password"
           type="password"
           className='singup__password'
           onChange={handlePasswordChange}
           />
          <button  className="singup__btn-in" type="submit" >Зарегистрироваться</button>
          <Link to="/sign-in" className="singup__question">Уже зарегистрированы? Войти</Link>
        </form>
        <InfoTooltip isSuccess={isSuccess} stateOpenPopup={stateOpenPopup} onClose={closePopup}/>
    </div>
    )

}
export default withRouter (Register);
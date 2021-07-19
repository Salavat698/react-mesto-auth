import headerLogo from '../images/header-logo.svg'
import { Link ,withRouter } from 'react-router-dom'; 
import React from 'react';



function Register(props){    

    return(
        <div className='singup singup_active'>
        <header className="singup__header">
            <img className="singup__logo" src={headerLogo} alt="Логотип сайта путешествие" />
            <Link to="/sign-in" className='singup__registration'>Войти</Link>
        </header>
        <form className='singup__in' onSubmit={props.onRegister}>
          <h3 className="singup__title">Регистрация</h3>
          <input 
          placeholder='Email'
          name="email"
          type="email"
          value={props.inputEmailData.email}
          className='singup__email'
          onChange={props.handleEmailChange}
          />
      
          <input  
           placeholder='Password'
           value={props.inputPasswordData.password}
           name="password"
           type="password"
           className='singup__password'
           onChange={props.handlePasswordChange}
           />
          <button  className="singup__btn-in" type="submit" >Зарегистрироваться</button>
          <Link to="/sign-in" className="singup__question">Уже зарегистрированы? Войти</Link>
        </form>
       
    </div>
    )

}
export default withRouter (Register);
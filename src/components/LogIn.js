import headerLogo from '../images/header-logo.svg'
import { Link ,withRouter } from 'react-router-dom'; 
import React from 'react';


function LogIn(props){
   
    return(
        <div className='login'>
            <header className="login__header">
                <img className="login__logo" src={headerLogo} alt="Логотип сайта путешествие" />
                <Link to="/sign-up" className='login__registration'>Регистрация</Link>
            </header>
            <form className='login__in' onSubmit={props.onLoginSumbit}>
              <h3 className="login__title">Вход</h3>
              <input 
              placeholder='Email' 
              className='login__email'
              name="email"
              type="email"
              value={props.inputEmaiLoginlData.email}
              onChange={props.handleEmailLoginChange}
              />
              <input 
                placeholder='Пароль'
                className='login__password'
                value={props.inputPassworLogindData.password}
                name="password"
                type="password"
                onChange={props.handlePassworLogindChange}
                />
              <button  className="login__btn-in" type="submit" >Войти</button>
            </form>
        </div>
    )

}
export default withRouter(LogIn);
import headerLogo from '../images/header-logo.svg'
// import InfoTooltip from '../../src/components/InfoTooltip';
import { Link ,withRouter } from 'react-router-dom'; 
import React from 'react';
import auth from '../utils/auth';

function LogIn(props){
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

    function handleSubmit (e){
        e.preventDefault()
        const {email}= inputEmailData;
        const {password}= inputPasswordData;


        auth.login({email,password})
        .then((res) => {
            if(res){
                props.onLogin();
                props.history.push('/main');
              } else {
                  console.log('Что-то пошло не так!')
              }
            });
    }
    return(
        <div className='login'>
            <header className="login__header">
                <img className="login__logo" src={headerLogo} alt="Логотип сайта путешествие" />
                <Link to="/sign-up" className='login__registration'>Регистрация</Link>
            </header>
            <form className='login__in' onSubmit={handleSubmit}>
              <h3 className="login__title">Вход</h3>
              <input 
              placeholder='Email' 
              className='login__email'
              name="email"
              type="email"
              onChange={handleEmailChange}
              />
              <input 
                placeholder='Пароль'
                className='login__password'
                name="password"
                type="password"
                onChange={handlePasswordChange}
                />
              <button  className="login__btn-in" type="submit" >Войти</button>
            </form>
        </div>
    )

}
export default withRouter(LogIn);
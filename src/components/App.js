import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext} from '../contexts/CurrentUserContext';
import { CurrentCardsContext} from '../contexts/CurrentCardsContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeletQuestionPopup from './DeletQuestionPopup';

import { Route, Switch, Redirect ,withRouter} from 'react-router-dom';
import auth from '../utils/auth';
import LogIn from './LogIn';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from '../../src/components/InfoTooltip';
function App(props) {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  function handleEditAvatarClick (){
    setIsEditAvatarPopupOpen(true)
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  function handleEditProfileClick (){
     setIsEditProfilePopupOpen (true)
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  function handleAddPlaceClick (){
    setIsAddPlacePopupOpen(true)
  }
  //попап удаления
  const [ deletQuestionPopup, setDeletQuestionPopup] = React.useState(false);
  const [deletCard, setdeletCard] = React.useState({});
  function handleDeletQuestionPopup (card){
    setdeletCard(card)
    setDeletQuestionPopup(true)
  }

  const [selectedCard, setSelectedCard] = React.useState({});
  const handleCardClick = (card) => {
  setSelectedCard(card)
}
  
  function closeAllPopups(){
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen (false)
    setIsAddPlacePopupOpen(false)
    setDeletQuestionPopup(false)
    setSelectedCard({})
    setstateOpenPopup(false)
  }


 
//закрытие попап по ESC
  React.useEffect(() => {
    const handleEsc = (event) => {
      const btnEscape = 27;
       if (event.keyCode === btnEscape) {
        closeAllPopups()
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);


  const [currentUser,setCurrentUser] = React.useState({})
  React.useEffect(()=>{
    api.getUserInfo()
    .then(res =>{
      setCurrentUser(res)
    })
    .catch(res=>{
      console.log(`Ошибка:${res}`)
    })
  },[])
  


  function handleUpdateUser (e){
  
    api.updateUser(e)
    .then((res)=>{
      setCurrentUser(res)
      closeAllPopups()
    })
    .catch(res=>{
      console.log(`Ошибка:${res}`)
    })
  }

  function handleUpdateAvatar(e){
    api.updateAvatar(e)
    .then((res)=>{
      setCurrentUser(res)
      closeAllPopups()
    })
    .catch(res=>{
      console.log(`Ошибка:${res}`)
    })
  }

  // card


  const [currentCards,setCurrentCards] = React.useState([])
  
  React.useEffect(()=>{
    api.getInitialCards()
    .then( res =>{
      setCurrentCards(res)
    })
    .catch(res=>{
      console.log(`Error:${res}`)
    })
  },[])

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked)
    .then((newCard) => {
        setCurrentCards((currentCards) => currentCards.map((c) => c._id === card._id ? newCard : c));
    }).catch(res=>{
      console.log(`Error:${res}`)
    });
  }

 
  function handleCardDelete (card) {
    // Снова проверяем, есть ли уже лайк на этой карточке

    const isOwn = card.owner._id === currentUser._id;
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeCardStatus(card._id, isOwn)
    .then((newCard) => {
      setCurrentCards((currentCards) => [...currentCards].filter((c) => c._id === card._id ? console.log(newCard) : c));
    }).catch(res=>{
      console.log(`Error:${res}`)
    });

   }


   function handleAddPlaceSubmit(e){
    api.addCard(e)
    .then( newCard =>{
      setCurrentCards([newCard, ...currentCards]);
      closeAllPopups();
    })
    .catch(newCard=>{
      console.log(`Ошибка:${newCard}`)
    })
   }
  //  стейит переменная для автризаций или залогирование
  const [loggedIn,setloggedIn] = React.useState(false)

  function onLogin(){
    setloggedIn(true)
  }
  // ПОДЫМАЕМ СТЕИТ НА НАДО ПО ЗАДАНИЮ
  const [inputEmailData,setinputEmailData] = React.useState({value:''})
  const [inputPasswordData,setinputPasswordData] = React.useState({value:''})


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

  function onRegister (e){
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
          
        }).catch((err) => console.log(err));
}





  const [emailData,setEmailData] = React.useState({})


  React.useEffect(()=>{
      tokenCheck();
    },[loggedIn])

   function tokenCheck () {
      // если у пользователя есть токен в localStorage, 
      // эта функция проверит, действующий он или нет
      const jwt = localStorage.getItem('token');
      if (jwt){
        auth.getToken(jwt)
        .then((res)=>{
        const userData = (
          res.data.email
        )
          if (res){
            setEmailData({userData})
            setloggedIn(true)
            props.history.push("/main")
          }
          
        })
        .catch((err) => console.log(err))
      }
    }

    // логин
    const [inputEmaiLoginlData,setinputEmaiLoginlData] = React.useState({})
    const [inputPassworLogindData,setinputPassworLogindData] = React.useState({})

    function handleEmailLoginChange(e){
        const {name, value} = e.target;
        setinputEmaiLoginlData({[name]: value })
       
    }
    function handlePassworLogindChange(e){
        const {name, value} = e.target;
        setinputPassworLogindData({[name]: value })
       
    }

    function onLoginSumbit (e){
        e.preventDefault()
        const {email}= inputEmaiLoginlData;
        const {password}= inputPassworLogindData;


        auth.login({email,password})
        .then((res) => {
            if(res){
                onLogin();
                props.history.push('/main');
              } else {
                  console.log('Что-то пошло не так!')
              }
            }).catch((err) => console.log(err));
            
    }

  return (

        <div className="App body-background">
          <CurrentCardsContext.Provider value={currentCards}>
          <CurrentUserContext.Provider value={currentUser}>
            <Switch>
           
              <Route exact path="/">
                  {loggedIn ? <Redirect to="/main"/> : <Redirect to="/sign-in"/>}
              </Route>
        
              <ProtectedRoute
                  path="/main"
                  loggedIn={loggedIn}
                  component={() =>
                    <>
                     <Header userData={emailData.userData} />
                     <Main
                       loggedIn={loggedIn}
                       component={Main}
                       onEditAvatar={handleEditAvatarClick}
                       onEditProfile={handleEditProfileClick}
                       onAddPlace ={handleAddPlaceClick}
                       onCardClick={handleCardClick}
                       cards = {currentCards} 
                       onCardLike ={handleCardLike}
                       onCardDelete ={handleDeletQuestionPopup}
                     />
                     <Footer  loggedIn={loggedIn}/>
                    </>
                }
              />       
              
              <Route 
                path="/sign-in"
                component={() => 
                <LogIn 
                onLogin={onLogin} 
                onLoginSumbit={onLoginSumbit}
                inputEmaiLoginlData={inputEmaiLoginlData}
                inputPassworLogindData={inputPassworLogindData}
                setinputEmaiLoginlData={setinputEmaiLoginlData}
                setinputPassworLogindData={setinputPassworLogindData}
                handleEmailLoginChange={handleEmailLoginChange}
                handlePassworLogindChange={handlePassworLogindChange}
                />}
              />

              <Route 
                path="/sign-up" 
                loggedIn={loggedIn}
                component={() => 
                <Register 
                  onLogin={onLogin}
                  onRegister={onRegister}
            
                  inputEmailData={inputEmailData}
                  inputPasswordData={inputPasswordData}
                  setinputEmailData={setinputEmailData}
                  setinputPasswordData={setinputPasswordData}
                  handleEmailChange={handleEmailChange}
                  handlePasswordChange={handlePasswordChange}
                  />}
              />
    
            </Switch>


            <EditProfilePopup onUpdateUser ={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
            <EditAvatarPopup onUpdateAvatar ={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
            <AddPlacePopup onAddPlace ={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
            <DeletQuestionPopup 
                card={deletCard} 
                isOpen={deletQuestionPopup}
                onClose={closeAllPopups}
                onCardDelete={handleCardDelete}
            />
            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
            <InfoTooltip isSuccess={isSuccess} stateOpenPopup={stateOpenPopup} onClose={closeAllPopups}/>
            </CurrentUserContext.Provider>
          </CurrentCardsContext.Provider>
         
        </div>
        
  );
}

export default withRouter(App);

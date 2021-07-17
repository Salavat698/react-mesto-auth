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
    setloggedIn(false)
    
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

      }
    }

  return (

        <div className="App body-background">
          <CurrentCardsContext.Provider value={currentCards}>
            <CurrentUserContext.Provider value={currentUser}>
            <Switch>

              <Route exact path="/">
                  {loggedIn ? <Redirect to="/main"/> : <Redirect to="/sign-in"/>}
              </Route>

              <Route  path="/main">
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={() => <Header userData={emailData.userData} />}
                />
                <ProtectedRoute
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
          
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={Footer}
                />
              </Route>
              
              <Route 
                path="/sign-in"
                component={() => <LogIn onLogin={onLogin} />}
              />

              <Route 
                path="/sign-up" 
                loggedIn={loggedIn}
                component={Register}
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

            </CurrentUserContext.Provider>
          </CurrentCardsContext.Provider>
         
        </div>
        
  );
}

export default withRouter(App);

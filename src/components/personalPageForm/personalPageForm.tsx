import { useNavigate } from "react-router-dom";
import { AboutPersonal, AboutPersonalAvatarDraw, AboutPersonalAvatarWrapper, AboutPersonalBlock, AboutPersonalDateOfRegister, AboutPersonalEducatiom, AboutPersonalForm, AboutPersonalFormInput, AboutPersonalFormSubWrapper, AboutPersonalFormTitle, AboutPersonalFormWrapper, AboutPersonalUsername, AvatarPersonal, SaveButton, PersonalForm, PersonalFormBackground, PersonalFormWrapper, PersonalNaBar, PersonalNavBarItem, YourPersonalData, ResumeWrapper, FileUploader, DragYourResume } from "./personalPageFormStyles";

/*import React, { useReducer } from 'react';

// Исходное состояние
const initialState = {
  count: 0,
};

// Редуктор - функция, которая обрабатывает действия и возвращает новое состояние
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const PersonalPageForm = () => {
  // Использование useReducer с передачей редуктора и начального состояния
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default PersonalPageForm;
  */

// sessionStorage.removeItem('jwtToken');
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import useJwt from "../../hooks/useJwt";
import { fetchPersonalInformationFunction } from "../../store/slices/person.slice";
import { personalInfSelector } from "../../store/selectors/person.selector";
import Draw from "../../assets/draw.png"
import usePersonalInformation from "../../hooks/usePersonalInformation";
const PersonalPageForm = () => {
  const dispatch = useDispatch()
  const {jwtToken} = useJwt()
  const {handleLogout, username, email, country, city, telephone, RegistrationData, avatar, document, favouriteOffers, experience, lastTimeAtNetwork, education, describtion} =usePersonalInformation()
  useEffect(() => {
    const token = jwtToken
    console.log("TOLEN"+token)
    if (token != null && token.length > 1) {
      dispatch(fetchPersonalInformationFunction({ token }))
    }
  }, [jwtToken])
  return (
    <PersonalForm>
 
      <PersonalFormWrapper>
<PersonalNaBar> 
<PersonalNavBarItem>Your data</PersonalNavBarItem>
<PersonalNavBarItem>Chats</PersonalNavBarItem>
<PersonalNavBarItem
 onClick={handleLogout}
>Log out</PersonalNavBarItem>
</PersonalNaBar>

 <SaveButton>
   Save 
 </SaveButton>

<AboutPersonal>
  <AvatarPersonal  src={avatar} alt="logo" />
  <AboutPersonalDateOfRegister>{RegistrationData}</AboutPersonalDateOfRegister>
  <AboutPersonalBlock>
    <AboutPersonalAvatarWrapper>
  <AboutPersonalUsername>{username}</AboutPersonalUsername>
    </AboutPersonalAvatarWrapper>
    <AboutPersonalAvatarWrapper>
<AboutPersonalEducatiom>Education:dvvddsvv {education}</AboutPersonalEducatiom>
<AboutPersonalAvatarDraw src={Draw} alt="draw"  size={"20px"} />
  </AboutPersonalAvatarWrapper> 
    <AboutPersonalAvatarWrapper>
  {/* 
*/}
<AboutPersonalEducatiom>About: Im a gay and bi-sexual jar of mayonese</AboutPersonalEducatiom>
<AboutPersonalAvatarDraw src={Draw} alt="draw"  size={"20px"} />
</AboutPersonalAvatarWrapper> 
  </AboutPersonalBlock>
</AboutPersonal>

<AboutPersonalForm>
  <YourPersonalData>Your personal data</YourPersonalData>
<AboutPersonalFormWrapper>
  <AboutPersonalFormTitle>
Experience
  </AboutPersonalFormTitle>
  <AboutPersonalFormSubWrapper>
<AboutPersonalFormInput  placeholder="Type experience"/>
  <AboutPersonalAvatarDraw src={Draw} alt="draw" size={"40px"} />
  </AboutPersonalFormSubWrapper>
</AboutPersonalFormWrapper>

<AboutPersonalFormWrapper>
<AboutPersonalFormTitle>
Email
  </AboutPersonalFormTitle>
  <AboutPersonalFormSubWrapper>
<AboutPersonalFormInput defaultValue={email}  placeholder="Type email"/>
  <AboutPersonalAvatarDraw src={Draw} alt="draw" size={"40px"} />
</AboutPersonalFormSubWrapper>
</AboutPersonalFormWrapper>


<AboutPersonalFormWrapper>
<AboutPersonalFormTitle>
Password
  </AboutPersonalFormTitle>
  <AboutPersonalFormSubWrapper>
<AboutPersonalFormInput defaultValue={""}  placeholder="Type password"/>
  <AboutPersonalAvatarDraw src={Draw} alt="draw" size={"40px"} />
</AboutPersonalFormSubWrapper>
</AboutPersonalFormWrapper>



<AboutPersonalFormWrapper>
<AboutPersonalFormTitle>
Telephone
  </AboutPersonalFormTitle>
  <AboutPersonalFormSubWrapper>
<AboutPersonalFormInput defaultValue={telephone}  placeholder="Type email"/>
  <AboutPersonalAvatarDraw src={Draw} alt="draw" size={"40px"} />
</AboutPersonalFormSubWrapper>
</AboutPersonalFormWrapper>


<AboutPersonalFormWrapper>
<AboutPersonalFormTitle>
Country
  </AboutPersonalFormTitle>
  <AboutPersonalFormSubWrapper>
<AboutPersonalFormInput defaultValue={country}  placeholder="Type country"/>
  <AboutPersonalAvatarDraw src={Draw} alt="draw" size={"40px"} />
</AboutPersonalFormSubWrapper>
</AboutPersonalFormWrapper>

<AboutPersonalFormWrapper>
<AboutPersonalFormTitle>
City
  </AboutPersonalFormTitle>
  <AboutPersonalFormSubWrapper>
<AboutPersonalFormInput defaultValue={city}  placeholder="Type city"/>
  <AboutPersonalAvatarDraw src={Draw} alt="draw" size={"40px"} />
</AboutPersonalFormSubWrapper>
</AboutPersonalFormWrapper>
<ResumeWrapper> 
<DragYourResume>Drag your resume</DragYourResume>
  <FileUploader  placeholder="drag your resume"/>
</ResumeWrapper> 
</AboutPersonalForm>
      </PersonalFormWrapper>
      <PersonalFormBackground />
    </PersonalForm>
  );
}

export default PersonalPageForm;


/*

<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <title>Отправка файла на сервер</title>
 </head>
 <body>
  <form enctype="multipart/form-data" method="post">
   <p><input type="file" name="f" id="fileInput">
   <input type="button" value="Отправить" onclick="displayFileName()"></p>
  </form>

  <h1 id="fileNameHeading"></h1>
  <a id="downloadLink" style="display:none;">Скачать файл</a>

  <script>
    function displayFileName() {
      // Получаем элемент input с типом file
      var fileInput = document.getElementById('fileInput');
      
      // Получаем выбранный файл
      var fileName = fileInput.value;

      // Отображаем имя файла в элементе h1
      var fileNameHeading = document.getElementById('fileNameHeading');
      fileNameHeading.textContent = "Название файла: " + fileName;

      // Показываем ссылку для скачивания файла
      var downloadLink = document.getElementById('downloadLink');
      downloadLink.href = URL.createObjectURL(fileInput.files[0]);
      downloadLink.download = fileName;
      downloadLink.style.display = 'inline';
    }
  </script>
 </body>
</html>

*/
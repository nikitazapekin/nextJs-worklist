
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { personalInfSelector } from "../store/selectors/person.selector";
import { useRef } from "react";
import useJwt from "./useJwt";
import { fetchYourInformationFunction } from "../store/slices/yourInformation.slice";
import { yourInformationSelector } from "../store/selectors/yourInformation.selector";
import { fetchAvatarFunction } from "../store/slices/setAvatar.slice";
interface YourResume {
  documentTitle: string,
  uploadLink: string
}
interface PersonalInformationTypes {
  education: string,
  about: string;
  experience: string;
  email: string;
  password: string;
  telephone: string;
  country: string;
  city: string;
  document: string;
  token: string;
  errorMessage: ""
}
const usePersonalInformation = () => {
  const fileUploader = useRef(null)
  const {errorMessage} = useSelector(yourInformationSelector)
  const [errorMessagesForm,setErrorMessagesForm] = useState({
    emailError: "",
    passwordError: ""
  }) 
  console.log("ERRROR" + errorMessage)
  useEffect(()=> {
    console.log("ERR" +JSON.stringify(errorMessage))
  }, [errorMessage])
  const dispatch = useDispatch()
  const { jwtToken } = useJwt()
  const [personalInformationState, setPersonalDataState] = useState<PersonalInformationTypes>({
    education: "",
    about: "",
    experience: "",
    email: "",
    password: "",
    telephone: "",
    country: "",
    city: "",
    document: "",
    token: "",
    errorMessage: ""
  })
  useEffect(() => {
    setPersonalDataState((prev) => ({
      ...prev,
      ["token"]: jwtToken,
    }))
  }, [jwtToken])
  const { username, email, country, city, telephone, RegistrationData, avatar, document, favouriteOffers, experience, lastTimeAtNetwork, education, describtion} = useSelector(personalInfSelector)
  const navigate = useNavigate()
  useEffect(()=> {
    setPersonalDataState({
      education: education,
      about: describtion,
      experience: experience,
      email: email,
      password: "",
      telephone: telephone,
      country:country,
      city: city,
      document: document,
      token: jwtToken,
      errorMessage: "",
    })
  }, [username, email, country, city, telephone,  document, favouriteOffers, experience, education, describtion])
  const [yourResume, setYourResume] = useState<YourResume>({
    documentTitle: "",
    uploadLink: ""
  })
  const handleLogout = () => {
    navigate("/sign_in")
    sessionStorage.removeItem('jwtToken');
  }
  const handleChangeFile = () => {
    setYourResume({
      documentTitle: fileUploader.current.value,
      uploadLink: URL.createObjectURL(fileUploader.current.files[0])
    })
    setPersonalDataState((prev) => ({
      ...prev,
      ["document"]: URL.createObjectURL(fileUploader.current.files[0]),
    }))
  }
  const handleClearDocument = () => {
    setYourResume({
      documentTitle: "",
      uploadLink: ""
    })
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalDataState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }
  const handleSave = () => {
    dispatch(fetchYourInformationFunction(personalInformationState))
  }

  const handleAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 100 * 1024 * 1024) {
        console.log("Файл слишком большой. Выберите файл размером до 100 МБ.");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          let avatar = reader.result
          let token = jwtToken
          console.log("AVATAR "+ avatar)
          dispatch(fetchAvatarFunction({avatar, token} ))
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return { handleLogout, handleSave, handleChangeFile, handleAvatar, handleClearDocument, handleChange, yourResume, fileUploader, username, email, country, city, telephone, RegistrationData, avatar, document, favouriteOffers, experience, lastTimeAtNetwork, education, describtion,
  //   errorMessage
     }
}
export default usePersonalInformation

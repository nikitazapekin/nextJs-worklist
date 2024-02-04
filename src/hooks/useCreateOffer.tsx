
import { useEffect, useState, useRef } from "react"
import axios from "axios"
import useJwt from "./useJwt"
interface TypesOfStateOfOffer {
 title: string,
 describtion: string,
 skills: String[], 
 workingPerDay: string,
 location: string,
    salary: string
}
const useCreateOffer = () => {
    const {jwtToken} = useJwt()
    const skillInput = useRef(null)
    const removeElement= useRef(null)
    const [selectedFiles, setSelectedFiles] = useState<File[]>([])
    const [isClickedFirst, setIsClickedFirst] = useState(false) 
const [stateOfOffer, setStateOfOffer] = useState<TypesOfStateOfOffer>({
    title: "",
 describtion: "",
 skills: [], 
 workingPerDay: "",
 location: "",
    salary: "" 
}
)
const [stateOfOfferError, setStateOfOfferError] =useState({
    titleError: "",
    describtionError: "",
    location: "",
}) 
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
setStateOfOffer(prev=> ({
    ...prev, [event.target.name]: event.target.value
}))
}
const handleAddSkill = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(skillInput.current.value){
        setStateOfOffer(prev=> ({
            ...prev, skills: [...prev.skills, skillInput.current.value]
        }))
    }
}
const handleRemove =(removeItem: String) => {
    setStateOfOffer(prev=> ({
        ...prev, skills:  stateOfOffer.skills.filter((item)=>removeItem!=item)
    }))
}
const handleSave = () => {
setIsClickedFirst(true)
 
if(!stateOfOffer.title) {
    setStateOfOfferError((prev) => ({
        ...prev,
        ["titleError"]: "This field cannot be empty"
    }))
 
}
if(!stateOfOffer.describtion) {
    setStateOfOfferError((prev) => ({
        ...prev,
        ["describtionError"]: "This field cannot be empty"
    }))
 
}
if(!stateOfOffer.location) {
    setStateOfOfferError((prev) => ({
        ...prev,
        ["location"]: "This field cannot be empty"
    }))
 
}
}
useEffect(()=> {
    skillInput.current.value=""
}, [stateOfOffer.skills])
useEffect(()=> {
    setIsClickedFirst(false)
}, [stateOfOffer])
const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const formData = new FormData();
      Array.from(files).forEach((file) => {
        formData.append("my-files", file);
      });
      setSelectedFiles([...selectedFiles, ...Array.from(files)]);
    }
  };    
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      formData.append('jwtToken', jwtToken);
      const response = await axios.post("http://localhost:5000/testMultiple", formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
return {handleChange, handleAddSkill, skillInput, stateOfOffer,
     handleRemove, removeElement, stateOfOfferError,
    handleSave,  handleFileChange, selectedFiles,
    isClickedFirst, handleSubmit
    }
}
export default useCreateOffer
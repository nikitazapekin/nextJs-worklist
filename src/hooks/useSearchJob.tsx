import { useEffect, useState, memo } from "react"
const useSearchJob = () => {
    //const [isChanged, setIsChanged] 
    const [searchJobState, setSearchJobState] = useState({
        title: "",
        skills: [],
        workingPerDay: 0,
        location: "",
      salary: {
        from: "",
        to: ""
      }
    })
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSearchJobState((prev) => ({
            ...prev,
            [name]: value,
        }));
        console.log("Change")
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "from" && typeof value=="string") {
            setSearchJobState((prev) => ({
                ...prev,
                salary: {
                    ...prev.salary,
                    from: value
                }
            })); 
        }
        if (name === "to" && typeof value=="string") {
            setSearchJobState((prev) => ({
                ...prev,
                salary: {
                    ...prev.salary,
                    to: value
                }
            })); 
        }
    };
    const [handleChangeValue, setHandleChangeValue] = useState("")
    const handleAdd = () => {
        if (handleChangeValue.length > 0) {
            setSearchJobState((prev) => ({
                ...prev, skills: [...prev.skills, handleChangeValue]
            }))
        }
    }
    const handleRemoveSkill = (removeElement: string) => {
        setSearchJobState((prev) => ({
            ...prev,
            skills: prev.skills.filter((item) => item != removeElement)
        }))
    }
    const handleAddChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setHandleChangeValue(value)
    }

  
    return { searchJobState, setSearchJobState, handleChange, handleAdd, handleAddChange, handleRemoveSkill, handleOnChange }
}
export default useSearchJob
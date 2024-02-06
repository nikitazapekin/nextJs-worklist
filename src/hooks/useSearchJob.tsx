import { useEffect, useState, memo } from "react"
const useSearchJob = () => {
    const [searchJobState, setSearchJobState] = useState({
        title: "",
        skills: [],
        workingPerDay: 0,
        location: "",
        salary: 0
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSearchJobState((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
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
    useEffect(() => {
        console.log(handleChangeValue)
    }, [handleAddChange])
    useEffect(() => {
        console.log("STATE" + JSON.stringify(searchJobState))
    }, [searchJobState])
    return { searchJobState, setSearchJobState, handleChange, handleAdd, handleAddChange, handleRemoveSkill }
}
export default useSearchJob
import { useEffect, useState, memo, useRef } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { setSearchParamsState } from "../store/slices/searchParams.slice"
import { fetchGetOffersFunction } from "../store/slices/getOffers.slice";
interface searchJobStateProps {
    title: string,
    skills: string[],
    workingPerDay: number,
    location: string,
  salary: {
    from: string,
    to: string
  }
}
const useSearchJob = () => {
const dispatch = useDispatch()
    const [searchJobState, setSearchJobState] = useState<searchJobStateProps>({
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
    const sidebar = useRef(null)
 //   const dispatch = useDispatch()
    const sidebarButton = useRef(null)
    const [isHide, setIsHide] = useState(false)
    const [currentPosition, setCurrentPosition] = useState( 0)
    const [currentPositionOfHideButton, setCurrentPositionOfHideButton] = useState( 0 )
    const onHide = () => {
        if (isHide == false) {
            setCurrentPosition(sidebar.current.offsetWidth)
            setCurrentPositionOfHideButton(sidebarButton.current.offsetWidth)
            setIsHide(true)
        }
        else {
            setCurrentPosition(0)
            setCurrentPositionOfHideButton(0)
            setIsHide(false)
        }
    }
    const handleSearch = () => {
        dispatch(fetchGetOffersFunction({page: 1, limit: 6, title: searchJobState.title , skills: searchJobState.skills, workingPerDay:searchJobState.workingPerDay,
            location: searchJobState.location,  salary: searchJobState.salary
            }))
            dispatch(setSearchParamsState({
title: searchJobState.title,
skills: searchJobState.skills,
workingPerDay: searchJobState.workingPerDay,
location: searchJobState.location,
salary: {
    from: searchJobState.salary.from,
    to: searchJobState.salary.to,
}
            }))
    }
    return { searchJobState, setSearchJobState, handleChange, handleAdd, handleAddChange, handleRemoveSkill, handleOnChange ,
    onHide, handleSearch, sidebar, sidebarButton, isHide, currentPosition, currentPositionOfHideButton
    }
}
export default useSearchJob
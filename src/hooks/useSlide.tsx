import { useEffect, useState } from "react"
const useSlide  =  () => {
    const [currentPosition, setCurrentPosition] =useState<number>(0)
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    useEffect(()=> {

    },[currentPosition])
    return {currentPosition, setCurrentPosition, currentSlide, setCurrentSlide}
   // console.log(currentPosition)
}
export default useSlide
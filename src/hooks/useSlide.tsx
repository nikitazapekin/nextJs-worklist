import { useEffect, useState, useRef } from "react"
const useSlide  =  () => {
    const slider = useRef<HTMLDivElement>()
    const [currentPosition, setCurrentPosition] =useState<number>(0)
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const handleClick = (direction: 'left' | 'right') => {
        if (slider.current !== undefined) {
          if (direction === 'left') {
           

              if (currentSlide == 0) {
                setCurrentSlide(2)
              setCurrentPosition(prev => prev - slider.current.offsetWidth * 2) // 350
            }
            else {
              setCurrentSlide(prev => prev - 1)
              setCurrentPosition(prev => prev + slider.current.offsetWidth) // 350
            }
          } else {
            if (currentSlide != 2) {
    
              setCurrentPosition(prev => prev - slider.current.offsetWidth)
              setCurrentSlide(prev => prev + 1)
            }
            else {
              setCurrentPosition(0)
              setCurrentSlide(0)
            }
          
        }
        }
      };
      const handleDot = (index: number) => {
        setCurrentSlide(index)
        setCurrentPosition(-slider.current.offsetWidth * index)
      }
       
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentSlide != 2) {

        setCurrentPosition(prev => prev - slider.current.offsetWidth)
        setCurrentSlide(prev => prev + 1)
      }
      else {
        setCurrentPosition(0)
        setCurrentSlide(0)
      }
    }, 5000);

    return () => { clearInterval(intervalId); };
  }, [setCurrentSlide, setCurrentPosition, currentSlide]);
    return {currentPosition, setCurrentPosition, currentSlide, setCurrentSlide, handleClick, handleDot, slider}
}
export default useSlide
import { useEffect, useState } from "react"
const useChat = () => {
    const [currentMessage, setCurrentMessage] = useState<string>("")
    const handleChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentMessage(event.target.value)
    }
    const handleSendMessage = () => {

    }
    useEffect(() => {
        console.log(currentMessage)
    }, [currentMessage])
    return { handleChangeMessage, handleSendMessage }
}

export default useChat
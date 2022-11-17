import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Fresh Food`;
    },[title])
}

export default useTitle;
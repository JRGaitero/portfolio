import {useEffect, useState} from "react";

const Type = (props) => {
    const textToType = props.text

    const [typedText, setTypedText] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTypedText(textToType.slice(0, typedText.length + 1))
        }, 35)

        return () => clearTimeout(timeout)
    }, [textToType, typedText])

    return typedText
}

export default Type
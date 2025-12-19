import {useRef, forwardRef, useImperativeHandle} from "react";

function InputUsingImperative({label}, ref) {
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => ({
        getUCValue() {
            return inputRef.current.value.toUpperCase();
        },
    }));

    return (
        <div>
            <label>{label}</label>
            <input type="text" ref={inputRef}/>
        </div>
    );

}

export default forwardRef(InputUsingImperative);


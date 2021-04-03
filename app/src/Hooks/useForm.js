import { useState } from "react";


const useForm = () => {

    const [value, setValue] = useState('');
    //const [error, setError] = useState(null);

    function onChange({target}) {
        setValue(target.value);
    }
    
    return {
        value,
        setValue,
        onChange
    }
};

export default useForm;
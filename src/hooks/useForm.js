import { useState } from "react";

export const useForm = (initialValues) => {

    const [formValues, setFormValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: checked,
        }));
    }

    return {
        ...formValues,
        handleInputChange,
        handleCheckboxChange,
    };
}

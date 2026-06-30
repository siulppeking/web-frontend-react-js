import { useState } from "react";

export const useForm = (initialValues = {}) => {

    const [formValues, setFormValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: checked,
        }));
    };

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
    };

    return {
        ...formValues,
        handleInputChange,
        handleCheckboxChange,
        handleSelectChange,
    };

}
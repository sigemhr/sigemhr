import {useState} from "react";

export const useAditionalData  = () => {
    const [departments, setDepartments] = useState([])


    return {departments, setDepartments}
}
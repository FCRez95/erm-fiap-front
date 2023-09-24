import { useCallback, useReducer } from 'react'

const formReducer = (state: any, action:any) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true
            for(const input in state.inputs) {
                if (input === action.inputId) {
                    formIsValid = formIsValid && action.isValid
                } else {
                    formIsValid = formIsValid && state.inputs[input].isValid
                }
            }

            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid}
                },
                isValid: formIsValid
            }
    }
}

export const useForm = (initialInputs:any, initialFormValidity:any) => {
    const [formState, dispatch] = useReducer(formReducer, {
      inputs: initialInputs,
      isValid: initialFormValidity,
    });

    const inputHandler = useCallback((id: string, value: string, isValid: boolean) => {
        dispatch({
            type: 'INPUT_CHANGE',
            value,
            isValid,
            inputId: id,
        });
    }, []);
    return [formState, inputHandler];
  };
  
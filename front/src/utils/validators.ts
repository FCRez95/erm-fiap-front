export interface Validator {
    type: string
    target?: number
}

export const RequireValidator = (): Validator => ({
    type: 'required_field'
})

export const EmailValidator = (): Validator => ({
    type: 'email'
})

export const MinLengthValidator = (val: number): Validator => ({
    type: 'min_length',
    target: val
})

export const MaxLengthValidator = (val: number): Validator => ({
    type: 'max_length',
    target: val
})

export const validate = (value: string, validators: Validator[]) => {
    let isValid = true
    for (const validator of validators) {
        if (validator.type === 'required_field') {
            isValid = isValid && value.trim().length > 0
        }
        if (validator.type === 'min_length' && validator.target) {
            isValid = isValid && value.trim().length > validator.target
        }
        if (validator.type === 'max_length' && validator.target) {
            isValid = isValid && value.trim().length < validator.target
        }
        if (validator.type === 'email') {
            isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
          }
    }
    return isValid
}
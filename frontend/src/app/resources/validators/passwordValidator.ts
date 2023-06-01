import { AbstractControl } from "@angular/forms"

export const checkPassword = (password: string,
    confirmPassword: string) => {
        const validator = (form: AbstractControl) => {
            const passwordControl = form.get(password);
            const confirmPasswordControl = form.get(confirmPassword);

            if(!passwordControl || !confirmPasswordControl)return;

            if(passwordControl !== confirmPasswordControl){
                confirmPasswordControl.setErrors({notSame:true});
            }else{
                const errors = confirmPasswordControl.errors

                if(!errors) return;

                delete errors.notSame;
                confirmPasswordControl.setErrors(errors);
            }
        }
        return validator;
    }
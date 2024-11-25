import { TextField } from "@mui/material";

interface InputInt {
    label: string,
    placholder: string
}

const TextInput: React.FC<InputInt> = ({ label, placholder }) => {
    return (
        <TextField
            label={label}
            placeholder={placholder}
            fullWidth
        />
    )
}

export default TextInput;
import { MenuItem, Select, TextField } from "@mui/material";

interface SelectInt {
    label: string,
    options: string[]
}

const SelectInput: React.FC<SelectInt> = ({ label, options }) => {
    return (
        <TextField
            label={label}
            select
            fullWidth
        >
            {options.map((option, idx) => (
                <MenuItem key={idx} value={option}>
                    {option}
                </MenuItem>
            ))}
        </TextField>
    )
}

export default SelectInput;


import React, { ChangeEvent, useState } from 'react';
import { TextField, Box, Typography } from '@mui/material';
import { Grid } from '@mui/system';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';

interface InputData {
    row: number,
    column: number,
    label: string,
    type: string,
    options: string[]
}

const DrawerContainer = () => {
    const [inputValue, setInputValue] = useState('');
    const [elements, setElements] = useState<InputData[]>([]);

    const parseInputValue = (input: string): InputData[] => {
        return input
            .split('\n')
            .map((line) => {
                const [row, column, label, type, options] = line.split(';');
                return {
                    row: Number(row),
                    column: Number(column),
                    label: label,
                    type: type,
                    options: type === 'SELECT' ? options.split(',') : [options]
                }
            })
            .filter((el) => el.row && el.column && el.label && el.type);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        const parsedElement = parseInputValue(value);
        console.log(parsedElement);
        setElements(parsedElement);
    }

    return (
        <Box className="drawer-container" sx={{ mr: 20, ml: 20, mt: 3 }}>
            <Typography variant='h2' textAlign="center">
                Drawer Element
            </Typography>
            <TextField
                label="Element Drawer"
                placeholder="1;2;First Name;TEXT_INPUT;Enter your first name"
                multiline
                fullWidth
                sx={{ mt: 2 }}
                value={inputValue}
                onChange={handleChange}
            />
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)', 
                    gridTemplateRows: 'repeat(4, 1fr)',
                    gap: 2,
                }}
            >
                {elements.map((elem, idx) => (
                    <Box
                        sx={{
                            gridColumn: elem.column,
                            gridRow: elem.row, 
                            mt: 4
                        }}
                        key={idx}
                    >
                        {elem.type === 'TEXT_INPUT' ? (
                            <TextInput label={elem.label} placholder={elem.options[0]} />
                        ) : (
                            <SelectInput label={elem.label} options={elem.options} />
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default DrawerContainer;
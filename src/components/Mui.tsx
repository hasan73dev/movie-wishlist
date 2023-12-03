import { Typography } from '@mui/material';

import { 
  Button,
  Stack,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';


export default function Mui() {
  const [format, setFormat] = useState<string[]>([])
  console.log(format)
  return (
    <div>
      <Stack spacing={2}>
        <Stack direction="row">
        <Button 
        color='success' 
        style={{}} 
        variant='contained'
        startIcon = { <AccountCircleIcon />}
        >Hello</Button>
        <Button 
        color='success' 
        style={{}} 
        variant='contained'
        startIcon = { <AccountCircleIcon color = "secondary"/>}
        >Hello</Button>
        <Button 
        color='success' 
        style={{}} 
        variant='contained'
        startIcon = { <AccountCircleIcon />}
        >Hello</Button>


        </Stack>
        <Stack direction="row">
        <Button 
        color='success' 
        style={{}} 
        variant='contained'
        startIcon = { <AccountCircleIcon />}
        >Hello</Button>
        <Button 
        color='success' 
        style={{}} 
        variant='contained'
        startIcon = { <AccountCircleIcon />}
        >Hello</Button>
        <Button 
        color='success' 
        style={{}} 
        variant='contained'
        startIcon = { <AccountCircleIcon />}
        >Hello</Button>


        </Stack>

        <Stack direction="row">

      <ToggleButtonGroup value={format} onChange={(e:React.MouseEvent<HTMLElement, MouseEvent>,updatedFormat:string[]) =>{
        setFormat(updatedFormat)
        console.log(updatedFormat)
      }} color='success' >
          <ToggleButton value="bold">
            <AccountCircleIcon />
            </ToggleButton>
          <ToggleButton value="italic">
            <AccountCircleIcon />
            </ToggleButton>
          <ToggleButton value="underline">
            <AccountCircleIcon />
            </ToggleButton>

      </ToggleButtonGroup>

        </Stack>  

      </Stack>
    
    <ButtonGroup variant='contained' orientation='vertical'>
    <Button>Click</Button>
    <Button>Click</Button>
    <Button>Click</Button>
    </ButtonGroup>
    </div>
    
  )
}

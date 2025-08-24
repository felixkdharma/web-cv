import * as React from 'react';
import { styled } from '@mui/material'; // Efektif jika custom button digunakan berkali kali pada 1 components
import Button from '@mui/material/Button';
import '../styles/start-button.css'; 

function StartButton() {

    const handleClick = () => {
        document.getElementById('chapter1').scrollIntoView({
            behavior: 'smooth',
        });
    }
    return(
        <Button onClick={handleClick} className='pixel-button' variant='contained' sx={{
            zIndex: 4,
            position: 'absolute',
            top: 78 + '%',
            left: 48 + '%',
            width: 150 + 'px',
            height: 60 + 'px',
            borderRadius: 10 + 'px',
            animation: "retroMove 1.5s steps(2) infinite",
                "@keyframes retroMove": {
                "0%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(-4px)" },
                "100%": { transform: "translateY(0)" }
        },
            "& span" : {
                color: 'yellow',
                fontFamily: "'Press Start 2P, system-ui'",
                fontWeight: 'bold',
                fontSize: 22 + 'px'
            }
        }}> <span> Start </span> </Button>
    )
}

export default StartButton;
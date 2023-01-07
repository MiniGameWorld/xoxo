import { useState } from 'react';

import { makeStyles, Container, Button } from '@material-ui/core';
import Alert from '@mui/material/Alert';

const useStyles = makeStyles({
    parent: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-around",
        alignItems: "center",
        background: "radial-gradient(purple, black)"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        height: "85%",
        width: "75%",
        justifyContent: "space-around",
        alignItems: "center",
        background: "lightgrey"
    },
    border: {
        border: "1px solid black",
        borderCollapse: "collapse"
    },
    box: {
        border: "1px solid black",
        width: "80px",
        height: "80px",
        textAlign: "center",
        fontSize: "28px",
        userSelect: "none"
    },
    inline: {
        display: "inline-block",
    }
});

const App = () => {
    const classes = useStyles();
    var [count, setCount] = useState(1);

    const handleClick = (event) => {
        if (document.getElementById(event.target.id).textContent === '_') {
            let currentPlayer = (count % 2 === 0) ? 'o' : 'x';
            document.getElementById(event.target.id).textContent = currentPlayer;
        }
        else {
            return;
        }

        if (checkForWinning() === false)
            setCount(count + 1);
    }

    const checkForWinning = () => {
        let a00 = document.getElementById('a00').textContent;
        let a01 = document.getElementById('a01').textContent;
        let a02 = document.getElementById('a02').textContent;
        let a10 = document.getElementById('a10').textContent;
        let a11 = document.getElementById('a11').textContent;
        let a12 = document.getElementById('a12').textContent;
        let a20 = document.getElementById('a20').textContent;
        let a21 = document.getElementById('a21').textContent;
        let a22 = document.getElementById('a22').textContent;

        if ((a00 === 'o' && a01 === 'o' && a02 === 'o') || (a10 === 'o' && a11 === 'o' && a12 === 'o') || (a20 === 'o' && a21 === 'o' && a22 === 'o') || (a00 === 'o' && a10 === 'o' && a20 === 'o') || (a01 === 'o' && a11 === 'o' && a21 === 'o') || (a02 === 'o' && a12 === 'o' && a22 === 'o') || (a00 === 'o' && a11 === 'o' && a22 === 'o') || (a02 === 'o' && a11 === 'o' && a20 === 'o')) {
            alert("O won");
            setCount(1);
            reset();
            return true;
        }
        else if ((a00 === 'x' && a01 === 'x' && a02 === 'x') || (a10 === 'x' && a11 === 'x' && a12 === 'x') || (a20 === 'x' && a21 === 'x' && a22 === 'x') || (a00 === 'x' && a10 === 'x' && a20 === 'x') || (a01 === 'x' && a11 === 'x' && a21 === 'x') || (a02 === 'x' && a12 === 'x' && a22 === 'x') || (a00 === 'x' && a11 === 'x' && a22 === 'x') || (a02 === 'x' && a11 === 'x' && a20 === 'x')) {
            alert("X won");
            setCount(1);
            reset();
            return true;
        }
        else if (a00 !== '_' && a01 !== '_' && a02 !== '_' && a10 !== '_' && a11 !== '_' && a12 !== '_' && a20 !== '_' && a21 !== '_' && a22 !== '_') {
            alert("Draw");
            setCount(1);
            reset();
            return true;
        }
        else {
            return false;
        }
    }

    const reset = () => {
        document.getElementById('a00').textContent = '_'
        document.getElementById('a01').textContent = '_'
        document.getElementById('a02').textContent = '_'
        document.getElementById('a10').textContent = '_'
        document.getElementById('a11').textContent = '_'
        document.getElementById('a12').textContent = '_'
        document.getElementById('a20').textContent = '_'
        document.getElementById('a21').textContent = '_'
        document.getElementById('a22').textContent = '_'
        setCount(1);
    }

    return (
        <div className={classes.parent}>
            <Container className={classes.container}>
                <Alert severity="info">
                    This is player <strong>{(count % 2 === 0) ? 'o' : 'x'}'s</strong> turn
                </Alert>

                <table className={classes.border}>
                    <tr className={classes.border}>
                        <td id='a00' onClick={handleClick} className={classes.box}>_</td>
                        <td id='a10' onClick={handleClick} className={classes.box}>_</td>
                        <td id='a20' onClick={handleClick} className={classes.box}>_</td>
                    </tr>

                    <tr className={classes.border}>
                        <td id='a01' onClick={handleClick} className={classes.box}>_</td>
                        <td id='a11' onClick={handleClick} className={classes.box}>_</td>
                        <td id='a21' onClick={handleClick} className={classes.box}>_</td>
                    </tr>

                    <tr className={classes.border}>
                        <td id='a02' onClick={handleClick} className={classes.box}>_</td>
                        <td id='a12' onClick={handleClick} className={classes.box}>_</td>
                        <td id='a22' onClick={handleClick} className={classes.box}>_</td>
                    </tr>
                </table>

                <div>
                    <Button variant='contained' color='secondary' onClick={()=>window.location.href='../'} title='Back to Mini Game World'>
                        Home
                    </Button>
                    &nbsp;
                    <Button variant='contained' color='primary' onClick={reset}>
                        Reset
                    </Button>
                </div>
            </Container>

        </div>
    )
}

export default App;

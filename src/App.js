import { makeStyles, Container, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
	container: {
		display: "flex",
		flexDirection: "column",
		height: "100vh",
		justifyContent: "center",
		alignItems: "center",
	}
});

const App = () => {
	const classes = useStyles();
	return (
		<Container className={classes.container}>
			<Typography variant='h2'>
				XOXO
			</Typography>
			<Button variant='contained' color='primary' onClick={()=> window.location.href='/game'}>
				Play Game
			</Button>
		</Container>
	);
}

export default App;

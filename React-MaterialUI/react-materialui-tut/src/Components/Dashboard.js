import { Grid, Container, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
}));

function Dashboard() {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                    <Paper>1</Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Paper>2</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper>3</Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Dashboard;
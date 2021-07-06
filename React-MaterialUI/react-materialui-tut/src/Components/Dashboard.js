import { Fragment } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Paper } from '@material-ui/core'
import BarChart from './BarChart'
import PieChart from './PieChart'
import BoxPlot from './BoxPlot'
import Tableau from './Tableau';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}));

function Dashboard() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <main className={classes.content}>
            {/* adds vertical space after the nav bar */}
            <div className={classes.appBarSpacer} />
            <Container className={classes.container}>
                <Grid container spacing={3}>
                    {/* Bar Graph */}
                    <Grid item xs={12} md={6} lg={6} >
                        <Paper className={fixedHeightPaper}>
                            <BarChart />
                        </Paper>
                    </Grid>
                    {/* Pie Chart */}
                    <Grid item xs={12} md={6} lg={6}>
                        <Paper className={fixedHeightPaper} >
                            <PieChart />
                        </Paper>
                    </Grid>
                    {/* Box Plot */}
                    <Grid item xs={12} md={6} lg={6}>
                        <Paper className={fixedHeightPaper}>
                            <BoxPlot />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Paper className={fixedHeightPaper}>
                            <BoxPlot />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </main>
    )
}

export default Dashboard;
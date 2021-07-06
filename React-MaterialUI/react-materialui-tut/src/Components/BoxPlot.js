import { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title'
import { VictoryChart, VictoryBoxPlot, VictoryAxis, VictoryTheme, VictoryZoomContainer } from 'victory'

const useStyles = makeStyles((theme) => ({
    // boxplot: {
    //     width: '100%',
    //     height: '100%',
    //     padding: 0,
    //     marginTop: 0,
    //     border: '1px black solid',
    // },
    // Fragment: {
    //     border: '1px black solid',
    // }
}));

function BoxPlot() {
    const classes = useStyles();

    return (
        <div style={{height: '200px'}}>
        <Fragment>
            <Title>Job Hunt Time (days)</Title>
            <VictoryChart 
                domainPadding={20} 
                padding={{ top: 0, bottom: 25, left: 10, right: 10 }}
                height={200}
                width={450}
                theme={VictoryTheme.material}
            >
                <VictoryAxis
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={["2016", "2017", "2018", "2019", "2020"]}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`$${x / 1000}k`)}
                />
                <VictoryBoxPlot
                    boxWidth={20}
                    data={[
                    { x: 1, y: [1, 2, 3, 5] },
                    { x: 2, y: [3, 2, 8, 10] },
                    { x: 3, y: [2, 8, 6, 5] },
                    { x: 4, y: [1, 3, 2, 9] },
                    { x: 5, y: [1, 3, 2, 9] }
                    ]}
                />
            </VictoryChart>
            </Fragment>
        </div>
    )
}

export default BoxPlot;
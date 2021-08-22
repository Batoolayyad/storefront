import React from 'react'
import { connect } from 'react-redux';
import { changeActive } from '../categories';
import { getCategoryItems } from '../products';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


// function Categories(props) {
//     return (
//         <div>
//             {props.categoriesList.map(element => {
//                 return <div key={element.name} onClick={() => { props.changeActive(element.name) }}>{element.name}</div>
//             })}
//             <div>{props.activeCategory.name}</div>
//             <div>{props.activeCategory.description}</div>
//         </div>
//     )
// }
// const mapStateToProps = (state) => {
//     return state.categoriesList;
// }
// const mapDispatchToProps = {
//     changeActive,
//     getCategoryItems
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Categories);



const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});


function Categories(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
                >
                {props.categoriesList.map((element)=>{
                    return <Tab key={element.name} label={element.name} onClick={() => { props.changeActive(element.name) }} />
                })}
            </Tabs>
        </Paper>
                <div style={{margin:"15px"}}>
                <h2 >{props.activeCategory.name} </h2>
                <h4 >{props.activeCategory.description} </h4>

                </div>
        </>
    );
}


const mapStateToProps = (state) => {
    return state.categoriesList;
}
const mapDispatchToProps = {
    changeActive,
    getCategoryItems
}


export default connect(mapStateToProps, mapDispatchToProps)(Categories);
import React from 'react'
import {connect} from 'react-redux';
import {getCategoryItems} from '../products';
import { addToCart } from '../cart';
import {reduceInventory} from '../products';


import { CardActionArea,CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { useSnackbar } from 'notistack';
// function Products(props) {
//     return (
//         <div>
//             <ul>
//             {props.activeProducts.map(element=>{
//                 return <li onClick={()=>{getCategoryItems(element.categoriesList)}}>{element.name} {element.price}</li>
//             })}
//             </ul>
//         </div>
//     )
// }
// function mapStateToProps(state){
//     return state.products;
// }
// const mapDispatchToProps = {
//     getCategoryItems,
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Products)






const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function Products(props) {
    const classes = useStyles();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    function handleClick(element){
        props.addToCart(element);
        props.reduceInventory(element);
        props.getCategoryItems(props.category.name);
        enqueueSnackbar('added to cart ');
    }

    return (
        <div style={{display:'flex',justifyContent:'space-evenly', marginTop:'50px'}}>
            {props.products.activeProducts.map(element=>{
            return <Card elevation={3} className={classes.root} style={{display:"inline-block", width:'20%',borderRadius:'10px', backgroundColor:'white'}}>
                  <CardMedia 
                    className={classes.media}
                    image={element.image}
                    title="Contemplative Reptile"
                />
                 <CardActionArea>
                <CardContent >
                    <Typography  gutterBottom variant="h5" component="h2">
                        {element.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                       {element.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                       {element.price}
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                        <Button size="small" color="primary" onClick={()=>{handleClick(element) }}>
                            Add To Cart
                        </Button>
                    </CardActions>
            </Card>

            })}
        </div>
    )
}
function mapStateToProps(state) {
    return {
        category:state.categoriesList.activeCategory,
        products: state.products,
        cartProducts: state.cart
    };
}
const mapDispatchToProps = {
    getCategoryItems,
    addToCart,
    reduceInventory,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)



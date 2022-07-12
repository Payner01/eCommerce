import React from 'react'
import { Card, CardContent, Typography, CardMedia, CardActions, IconBotton} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'


const Product = ({ product }) => {
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image="" title={product.name} />
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant="h5">
                    {product.price}
                </Typography>
            </div>
            <Typography variant="h2" color="textSecondary">{product.description}</Typography>
        </CardContent>
        <CardActions disabledSpacing className={classes.cardActions}>
            <IconButton aria-label="Add to Cart"></IconButton>
            </CardActions>
      </Card>
    </div>
  )
}

export default Product

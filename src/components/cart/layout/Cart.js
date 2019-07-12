import React from 'react'
import { Button, Table } from 'reactstrap';
import { Link } from 'gatsby'
import { connect } from 'react-redux'

import {
    wrapper,
    top,
    bottom,
    top_button,
    bottom__heading,
    bottom__heading__title,
    bottom__heading__total,
    item__box,
    qty
} from './CartStyles'

const Cart = (props) => {

    const total = props.items.reduce((acc, item) => (acc + item.price * item.quantity), 0)

    const totalQuantity = props.items.reduce((acc, item) => (acc + item.quantity), 0)

    const quantityLabel = (totalQuantity > 1) ? 'items' : 'item'

    return (
        <div css={wrapper}>
            <div css={top}>
                <Button color="secondary">
                    <Link css={top_button} to='/'>Return</Link>
                </Button>
            </div>
            <div css={bottom}>
                <div css={bottom__heading}>
                    <h3 css={bottom__heading__title}>My order</h3>
                    <div css={bottom__heading__total}>
                        <span>Total: </span>
                        <span>{total}€</span>
                    </div>
                </div>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.items.map((item) => {

                                const { name, price, id, quantity } = item

                                // const itemLabel = (quantity > 1) ? 'items' : 'item'

                                return (
                                    <tr key={id} css={item__box}>
                                        <td>{name}</td>
                                        <td>
                                            <span css={qty}>-</span>
                                            {quantity}
                                            <span css={qty}>+</span>
                                        </td>
                                        <td>{price}€</td>
                                        <td>&times;</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

const mapStateToProps = ({ items }) => {
    return {
        items
    }
}

export default connect(mapStateToProps)(Cart)
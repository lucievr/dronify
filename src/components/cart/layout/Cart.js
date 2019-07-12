import React from 'react'
import { Table } from 'reactstrap';
import { Link } from 'gatsby'
import { connect } from 'react-redux'

const Cart = (props) => {

    const total = props.items.reduce((acc, item) => (acc + item.price * item.quantity), 0)

    const totalQuantity = props.items.reduce((acc, item) => (acc + item.quantity), 0)

    const quantityLabel = (totalQuantity > 1) ? 'items' : 'item'

    return (
        <>
            <Link to='/'>Back to home</Link>
            <h3>Your order:</h3>
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.items.map((item, index) => {

                            const { name, price, id, quantity } = item

                            const itemLabel = (quantity > 1) ? 'items' : 'item'

                            return (
                                <tr key={id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{name}</td>
                                    <td>{quantity} {itemLabel}</td>
                                    <td>{price}€</td>
                                </tr>
                            )
                        })
                    }
                    <tr><td>=</td><td>Total:</td><td>{totalQuantity} {quantityLabel}</td><td>{total}€</td></tr>
                </tbody>
            </Table>
        </>
    )
}

const mapStateToProps = ({ items }) => {
    return {
        items
    }
}

export default connect(mapStateToProps)(Cart)
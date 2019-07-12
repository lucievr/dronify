import React from 'react'
import { Table } from 'reactstrap';
import { Link } from 'gatsby'
import { connect } from 'react-redux'

const Cart = (props) => {
    return (
        <>
            <Link to='/'>Back to home</Link>
            <h3>Your order:</h3>
            <div>
                {
                    props.items.map((item, index) => {

                        const { name, price, id, quantity } = item
                        console.log(item)

                        const itemLabel = (quantity > 1) ? 'items' : 'item'

                        return (
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
                                    <tr key={id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{name}</td>
                                        <td>{quantity} {itemLabel}</td>
                                        <td>{price}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        )
                    })
                }
            </div>
        </>
    )
}

Table.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    size: PropTypes.string,
    bordered: PropTypes.bool,
    borderless: PropTypes.bool,
    striped: PropTypes.bool,
    dark: PropTypes.bool,
    hover: PropTypes.bool,
    responsive: PropTypes.bool,
    // Custom ref handler that will be assigned to the "ref" of the inner <table> element
    innerRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.object
    ])
}

const mapStateToProps = ({ items }) => {
    return {
        items
    }
}

export default connect(mapStateToProps)(Cart)
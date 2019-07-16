import React from "react"
import { Button, Table } from "reactstrap"
import { Global } from "@emotion/core"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { deleteFromCart, addQuantity, reduceQuantity } from "../../../actions"

import GlobalStyles from "../../styles/GlobalStyles"

import {
    wrapper,
    top,
    bottom,
    top_button,
    bottom__heading,
    bottom__heading__title,
    bottom__heading__total,
    item__box,
    qty,
    buttons,
    imageStyles,
    deleteItemButton,
    emptyCart,
} from "./CartStyles"

const Cart = ({ items, deleteFromCart, addQuantity, reduceQuantity }) => {
    const total = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )

    const View =
        total === 0 ? (
            <span css={emptyCart}>
                The cart is now empty. Select some products to buy before
                checking out.
            </span>
        ) : (
            <Link to="/delivery/">
                <button>Next Step</button>
            </Link>
        )

    return (
        <div>
            <Global styles={GlobalStyles} />
            <div css={wrapper}>
                <div css={top}>
                    <Button color="secondary">
                        <Link css={top_button} to="/">
                            Home
                        </Link>
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
                    <Table hover>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => {
                                const {
                                    name,
                                    price,
                                    id,
                                    quantity,
                                    image,
                                } = item

                                return (
                                    <tr key={id} css={item__box}>
                                        <td>
                                            <img
                                                css={imageStyles}
                                                src={image.src}
                                                alt="product"
                                            />
                                        </td>
                                        <td>{name}</td>
                                        <td>
                                            <div css={buttons}>
                                                <button
                                                    css={qty}
                                                    onClick={() =>
                                                        reduceQuantity(id)
                                                    }
                                                >
                                                    -
                                                </button>
                                                {quantity}
                                                <button
                                                    css={qty}
                                                    onClick={() =>
                                                        addQuantity(id)
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td>{price}€</td>
                                        <td>{quantity * price}€</td>
                                        <td>
                                            <button
                                                css={deleteItemButton}
                                                onClick={() =>
                                                    deleteFromCart(id)
                                                }
                                            >
                                                &times;
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    {View}
                </div>
            </div>
        </div>
    )
}

// const NoItems = () => {
//     return (
//         <div>
//             <Global styles={GlobalStyles} />
//             <div css={wrapper}>
//                 <div css={top}>
//                     <Button color="secondary">
//                         <Link css={top_button} to='/'>Home</Link>
//                     </Button>
//                 </div>
//                 <div css={bottom}>
//                     <div css={bottom__heading}>
//                         <h3 css={bottom__heading__title}>My order</h3>
//                         <div css={bottom__heading__total}>
//                             <span>Total: </span>
//                             <span>{total}€</span>
//                         </div>
//                     </div>
//                     <Table hover>
//                         <thead>
//                             <tr>
//                                 <th></th>
//                                 <th>Name</th>
//                                 <th>Quantity</th>
//                                 <th>Unit Price</th>
//                                 <th>Total Price</th>
//                             </tr>
//                         </thead>
//                         <tbody></tbody>
//     )

const mapStateToProps = ({ items }) => {
    return {
        items,
    }
}

const mapDispatchToState = {
    deleteFromCart,
    addQuantity,
    reduceQuantity,
}

export default connect(
    mapStateToProps,
    mapDispatchToState
)(Cart)

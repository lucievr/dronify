import React from "react"
import { ordersSection, profileTitle, viewLink } from "../styles/AccountStyles"
import { Link } from 'gatsby'

import { Table } from "reactstrap"

let today = new Date()
let dd = today.getDate()
let mm = today.getMonth() + 1 //January is 0!

let yyyy = today.getFullYear()
if (dd < 10) {
    dd = "0" + dd
}
if (mm < 10) {
    mm = "0" + mm
}

today = dd + "/" + mm + "/" + yyyy

const Orders = ({ user }) => {
    return (
        <section css={ordersSection}>
            <h5 css={profileTitle}>Past Orders</h5>
            <Table striped bordered hover dark>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date Ordered</th>
                        <th>Total Price</th>
                        <th>Order Status</th>
                        <th>Order Detail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>25/05/2019</td>
                        <td>€ 699</td>
                        <td>delivered</td>
                        <td>
                            <Link to='' css={viewLink}>
                                View
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>13/07/2019</td>
                        <td>€ 2999</td>
                        <td>processed</td>
                        <td>
                            <Link to='' css={viewLink}>
                                View
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>{today}</td>
                        <td>–</td>
                        <td>in progress</td>
                        <td>
                            <Link to='' css={viewLink}>
                                –
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </section>
    )
}

export default Orders

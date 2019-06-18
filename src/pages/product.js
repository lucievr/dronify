import React from "react"
import { Link } from "gatsby"
import Button from '@material-ui/core/Button';

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>

    {/* Material UI test button */}
    <Button variant="contained" color="primary">
      Hello World
    </Button>

    <button
    class="snipcart-add-item"
    data-item-id="1"
    data-item-name="Beer"
    data-item-price="3.00"
    data-item-weight="20"
    data-item-url="https://shoolix.netlify.com"
    data-item-description="Some cool beer">
        Buy beer
</button>
 <button
    class="snipcart-add-item"
    data-item-id="2"
    data-item-name="White wine"
    data-item-price="5.00"
    data-item-weight="20"
    data-item-url="https://shoolix.netlify.com"
    data-item-description="Some crisp white wine">
        Buy white wine
</button>

<button
    class="snipcart-add-item"
    data-item-id="3"
    data-item-name="Red wine"
    data-item-price="5.00"
    data-item-weight="20"
    data-item-url="https://shoolix.netlify.com"
    data-item-description="Some full-bodied red wine">
        Buy red wine
</button>

<a href="#" class="snipcart-checkout">Click here to checkout</a>

<div class="snipcart-summary">
    Number of items: <span class="snipcart-total-items"></span>
    Total price: <span class="snipcart-total-price"></span>
</div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

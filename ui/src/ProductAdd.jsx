/* globals React PropTypes */

import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class ProductAdd extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        console.log("test message121212")
        e.preventDefault();
        const form = document.forms.productAdd;
        console.log(form.Price.value);
        const product = {
            Product_id: 0,
            status: "New",
            Product_name: form.Product_name.value,
            Category: form.Category.value,
            Price: form.Price.valueAsNumber,
            Image: form.Image.value,
        }
        //const temp = product.Image;
        this.props.createProduct(product);
        form.Product_name.value = "";
        form.Category.value = "Shirts";
        form.Price.value = 0;
        form.Image.value = "";
    }
    render() {
        return (
            <div className="form">
                <form name="productAdd" onSubmit={this.handleSubmit} className="main">
                    <input type="text" name="Product_name" placeholder="Product_name" />
                    <select name="Category" className="select" placeholder="Category">
                        <option value="Shirts">Shirts</option>
                        <option value="Jeans">Jeans</option>
                        <option value="Jackets">Jackets</option>
                        <option value="Sweaters">Sweaters</option>
                        <option value="Accessories">Accessories</option>
                    </select>
                    <div className="dollar"> <input type="number" name="Price" placeholder="Price" /></div>
                    <input type="text" name="Image" placeholder="Image" />
                    <button>Add Product</button>
                </form>
            </div>
        );
    }
}

ProductAdd.propTypes = {
    createProduct: PropTypes.func.isRequired,
  };
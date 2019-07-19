import React from "react"
import { navigate } from "gatsby"

const encode = data => {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
}

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: "", email: "", message: "" }
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        fetch("/contact-us/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-form", ...this.state }),
        })
            .then(() => navigate("/form-success/"))
            .catch(error => alert(error))
            .finally(this.setState({ name: "", email: "", message: "" }))

        e.preventDefault()
    }
    render() {
        return (
            <form
                className="form"
                name="contact-form"
                method="POST"
                netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                action="/form-success/"
            >
                <input type="hidden" name="form-name" value="contact-form" />
                <input name="bot-field" type="hidden" />
                <div className="form__group">
                    <input
                        type="text"
                        className="form__input"
                        placeholder="Name"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        pattern="^([A-Za-z ]){5,}$"
                        title="Minimum 5 letters"
                        maxLength="40"
                        required
                    />
                    <label htmlFor="name" className="form__label">
                        Name
                    </label>
                </div>

                <div className="form__group">
                    <input
                        type="email"
                        className="form__input"
                        placeholder="Email"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Enter a valid email address"
                        maxLength="50"
                        required
                    />
                    <label htmlFor="email" className="form__label">
                        Email
                    </label>
                </div>

                <div className="form__group">
                    <textarea
                        name="message"
                        className="form__message"
                        placeholder="Your message"
                        id="message"
                        cols="30"
                        rows="6"
                        value={this.state.message}
                        onChange={this.handleChange}
                        title="Your message is too short"
                        minLength="10"
                        required
                    />
                </div>

                <div className="form__group">
                    <button className="form__button" type="submit">
                        Send
                    </button>
                </div>
            </form>
        )
    }
}

export default Form

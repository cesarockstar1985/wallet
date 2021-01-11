import React, { Component } from "react";
import ReactDOM from "react-dom";
import TransferForm from "./TransferForm.js";
import TransferList from "./TransferList";
import axios from 'axios'
import url from './url'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      postsCount: 0,
      error: null,
      form: {
        body: '',
        title: '',
        id: 0,
        userId: 1
      }
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {

    try {
      let response = await fetch(`${url}/posts`);
      let data = await response.json();

      this.setState({
        posts: data.reverse(),
        postsCount: data.length
      });

    } catch (error) {
      this.setState({
        error
      });
    }
  }

  async handleSubmit(e) {

    e.preventDefault()
    try {
      let config = {
        method: 'POST',
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },

        body: JSON.stringify(this.state.form)
      }

      axios.post(`${url}/posts`, config)
        .then((response) => {

          if (response.status == 201) {
            alert("El post fue insertado")
          }

          const posts = this.state.posts

          posts.unshift(this.state.form)

          this.setState({
            posts: posts,
            postsCount: this.state.postsCount + 1,
            form: {
              body: '',
              title: ''
            }
          })
        })

    } catch (error) {
      this.setState({
        error
      })
    }
  }

  handleChange(e) {

    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
        id: this.state.postsCount + 1
      }
    })
  }

  render() {
    return (
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-12-m-t-md">
            <p className="title h1"> {this.state.postsCount} posts</p>
          </div>
          <div className="col-md-12 p-3">
            <TransferForm
              form={this.state.form}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
          </div>
        </div>
        <div className="m-t-md">
          <TransferList
            posts={this.state.posts}
          />
        </div>
      </div>
    );
  }
}
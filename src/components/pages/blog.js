import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import BlogItem from "../blog/blog-item";
import BlogModal from "../modals/blog-modal";

class Blog extends React.Component {
  constructor() {
    super()

    this.state = {
      blogItems: [],
      totalCount: 0,
      currentPage: 0,
      isLoading: true,
      blogModalIsOpen: false
    }

    this.getBlogItems = this.getBlogItems.bind(this);
    this.onScroll = this.onScroll.bind(this)
    window.addEventListener("scroll", this.onScroll, false)
    this.handleNewBlogClick = this.handleNewBlogClick.bind(this)
    this.handleModelClose = this.handleModelClose.bind(this)
    this.handleSuccesfullNewBlogSubmision = this.handleSuccesfullNewBlogSubmision.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  handleDeleteClick(blog) {
    axios.delete(`https://api.devcamp.space/portfolio/portfolio_blogs/${blog.id}`, { withCredentials: true }).then(response => {
      this.setState({
        blogItems: this.state.blogItems.filter(blogItem => {
          return blog.id !== blogItem.id
        })
      })

      return response.data
    }).catch(error => {
      console.log("handleDeleteClick error", error);
    })
  }

  handleSuccesfullNewBlogSubmision(blog) {
    this.setState({
      blogModalIsOpen: false,
      blogItems: [blog].concat(this.state.blogItems)
    })
  }

  handleModelClose() {
    this.setState({
      blogModalIsOpen: false
    })
  }

  handleNewBlogClick() {
    this.setState({
      blogModalIsOpen: true
    })
  }

  onScroll() {
    if (this.state.isLoading || this.state.blogItems.length === this.state.totalCount) {
      return;
    }


    if (window.innerHeight + document.documentElement.scrollTop +1 >= document.documentElement.offsetHeight) {
      this.getBlogItems();
    }
  }

  getBlogItems() {
    this.setState({
      currentPage: this.state.currentPage + 1
    })
    axios.get(`https://carlosleany.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`, {withCredentials: true}).then(response =>{
      console.log("getting", response.data);
      this.setState({
        blogItems: this.state.blogItems.concat(response.data.portfolio_blogs),
        totalCount: response.data.meta.total_records,
        isLoading: false
      })
  }).catch(error => {
      console.log("getBlogItems error", error);
    })
  }

  componentWillMount() {
    this.getBlogItems();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false)
  }

  render() {
    const blogRecords = this.state.blogItems.map(blogItem => {
      if (this.props.loggedInStatus === "LOGGED_IN") {
        return (
          <div key={blogItem.id} className="admin-blog-wrapper">
            <BlogItem blogItem={blogItem} />
            <a className="blog-icon" onClick={() => this.handleDeleteClick(blogItem)}>
              <FontAwesomeIcon icon="trash" />
            </a>
          </div>
        )
      } else {
        return <BlogItem key={blogItem.id} blogItem={blogItem} />
      }
    })

    return (
      <div className="blog-container">
          <BlogModal
            handleSuccesfullNewBlogSubmision={this.handleSuccesfullNewBlogSubmision}
            handleModelClose={this.handleModelClose}
            modalIsOpen={this.state.blogModalIsOpen} 
          />

          {this.props.loggedInStatus === "LOGGED_IN" ? (
            <div className="new-blog-link">
              <a onClick={this.handleNewBlogClick}>
                <FontAwesomeIcon icon="plus-square" />
              </a>
            </div>
          ) : true }

        <div className="content-container">
          {blogRecords}
        </div>

        {this.state.isLoading ? (
          <div className="content-loader">
            <h5>tiny dragon, so cute</h5>
            <FontAwesomeIcon icon='dragon' spin/>
          </div>
        ) : null }
      </div>
    )
  }
}

export default Blog;
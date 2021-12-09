import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import BlogItem from "../blog/blog-item";

class Blog extends React.Component {
  constructor() {
    super()

    this.state = {
      blogItems: [],
      totalCount: 0,
      currentPage: 0
    }

    this.getBlogItems = this.getBlogItems.bind(this);
    this.onScroll = this.onScroll.bind(this)
    window.addEventListener("scroll", this.onScroll, false)
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
      return <BlogItem key={blogItem.id} blogItem={blogItem} />
    })

    return (
      <div className="blog-container">
        <div className="content-container">
          {blogRecords}
        </div>

        {/* {this.state.isLoading ? ( */}
          <div className="content-loader">
            <h5>tiny dragon, so cute</h5>
            <FontAwesomeIcon icon='dragon' spin/>
          </div>
        {/* ) : null } */}
      </div>
    )
  }
}

export default Blog;
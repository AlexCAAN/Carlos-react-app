import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {
    constructor() {
        super()

        this.state = {
            PortfolioItems: [],
            PortfolioToEdit: {}
        }

        this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
        this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.handleEditClick = this.handleEditClick.bind(this)
        this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this)
    }

    clearPortfolioToEdit() {
        this.setState({
            PortfolioToEdit: {}
        })
    }

    handleEditClick(PortfolioItem) {
        this.setState({
            PortfolioToEdit: PortfolioItem
        })
    }

    handleDeleteClick(PortfolioItem) {
        axios.delete(
            `https://api.devcamp.space/portfolio/portfolio_items/${PortfolioItem.id}`,
            {withCredentials: true}
        ).then(response => {
            this.setState({
                PortfolioItems: this.state.PortfolioItems.filter(item => {
                    return item.id !== PortfolioItem.id
                })
            })
            
            return response.data
        }).catch(error => {
            console.log("handleDeleteClick erorr", error);
        })
    }

    handleEditFormSubmission() {
        this.getPortfolioItems()
    }

    handleNewFormSubmission(PortfolioItem) {
        this.setState({
            PortfolioItems: [PortfolioItem].concat(this.state.PortfolioItems)
        })
    }

    handleFormSubmissionError(error) {
        console.log("handleFormSubmissionError error", error)
    }

    getPortfolioItems() {
        axios.get('https://carlosleany.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc', {
            withCredentials : true
        }).then(response => {
            this.setState({
                PortfolioItems: [...response.data.portfolio_items]
            })
        }).catch(error => {
            console.log("error in getPortfolioItems", error)
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <PortfolioForm
                        handleNewFormSubmission = {this.handleNewFormSubmission}
                        handleEditFormSubmission = {this.handleEditFormSubmission}
                        handleFormSubmissionError = {this.handleFormSubmissionError}
                        clearPortfolioToEdit={this.clearPortfolioToEdit}
                        PortfolioToEdit={this.state.PortfolioToEdit}
                    />
                </div>

                <div className="right-column">
                    <PortfolioSidebarList 
                        handleDeleteClick={this.handleDeleteClick}
                        data={this.state.PortfolioItems}
                        handleEditClick={this.handleEditClick}
                    />
                </div>
            </div>
        )
    }
}
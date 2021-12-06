import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioSidebarList = props => {
    const PortfolioList = props.data.map(PortfolioItem => {
        return(
            <div key={PortfolioItem.id} className="portfolio-item-thumb">
                <div className="portfolio-thumb-img">
                    <img src={PortfolioItem.thumb_image_url} />
                </div>
                <div className="text-content">
                    <div className="title">{PortfolioItem.name}</div>
                    <a className="delete-icon" onClick={() => props.handleDeleteClick(PortfolioItem)}>
                        <FontAwesomeIcon icon="trash" />
                    </a>
                </div>
            </div>
        )
    })


    return <div className="portfolio-sidebar-list-wrapper">{PortfolioList}</div>
}

export default PortfolioSidebarList
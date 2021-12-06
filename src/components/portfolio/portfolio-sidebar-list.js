import React from "react";

const PortfolioSidebarList = props => {
    const PortfolioList = props.data.map(PortfolioItem => {
        return(
            <div key={PortfolioItem.id} className="portfolio-item-thumb">
                <div className="portfolio-thumb-img">
                    <img src={PortfolioItem.thumb_image_url} />
                </div>
                <h1 className="title">{PortfolioItem.name}</h1>
                <h2>{PortfolioItem.id}</h2>

            </div>
        )
    })


    return <div className="portfolio-sidebar-list-wrapper">{PortfolioList}</div>
}

export default PortfolioSidebarList
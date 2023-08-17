import React from 'react'

const NewsItem = (props) => {
    let {title,description,imageUrl,newsUrl, author, date} = props;
    return (
      <div className='my-3'>
        <div className={`card bg-${props.mode}`}>
            <img src={!imageUrl?"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11787/production/_124395517_bbcbreakingnewsgraphic.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{title}</h5>
                <p className="card-text" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{description}</p>
                <p className="card-text"><small className="text-muted" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem

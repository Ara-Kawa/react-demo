function Item({numItems, image}) {
 

 
    return (
  
  <div className="col-sm-4 col-12">
    <div className="card">
   
    <img className="card-img-top" src={image?image.download_url: ''}   alt="Card image cap" id={numItems.id} width="50" height="200"></img>
      <div className="card-body">
        <h5 className="card-title">{numItems.name}</h5>
        <p className="card-text">#</p>
      <div className="card-btn"> 
       
        </div>
      </div>
    </div>
  </div>
  
    );
  }
  
  export default Item;
  
function FilmsPresentation({films}) {
    return ( 
        <>
        <div className="title">
            <h1>Movies</h1>
            </div>
        <div className="container">
           {films.map(film => (
             <div className="column">
             <div className="card">
                 <div className="image-holder">
                 <img src={film.img} alt='film'/>
                 </div>
                 <h3>{film.title}</h3>
                 <p>{film.year}</p>
                 <p>{film.nation}</p>
                 <p className="p"><button>Watch now</button></p>
             </div>
         </div> 
           ))}
        </div>
        </>
     );
}

export default FilmsPresentation;
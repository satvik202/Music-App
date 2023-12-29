export const Player = ({fn,song})=>{
    return (
        <div >
            <button onClick={()=>{
                fn(false, null);
            }} className="btn btn-success">Back to song</button>
            <p>
            <br />
            <img src={song.artworkUrl100} alt="" />
            {song?.artistName} {song?.trackName}
            </p>
            <br />
        <audio controls>
            <source src= {song?.previewUrl} type="audio/mp4" />
        </audio>

        </div>
    )
}
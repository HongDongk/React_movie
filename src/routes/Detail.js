import { useEffect, useState } from "react";
import Info from "../components/Info";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [datas, setDatas] = useState({});
    
    const getMovies = async () => {
        const json = await (
          await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
          )
        ).json();
        setDatas(json.data.movie);
        setLoading(false);
      };
    
    useEffect(() => {getMovies();}, []);
    
    return (
        <div>
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <Info 
                    background_image_original={datas.background_image_original}
                    medium_cover_image={datas.medium_cover_image}
                    url={datas.url}
                    title_long={datas.title_long}
                    rating={datas.rating}
                    runtime={datas.runtime}
                    genres={datas.genres}
                    download_count={datas.download_count}             
                />
            )}
        </div>
    );
  }
  export default Detail;
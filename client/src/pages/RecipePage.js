import {useParams} from 'react-router-dom';
import '../styles/pageStyle.css';

const RecipePage = () => {
    const {id} = useParams();

    return (
        <div> 
            <div>
                <h1> {id} </h1>
                <p> rest of recipe</p>    
            </div>

            <div>
                <p> rating </p>
                <div className="rating">
                    <button className="rate"> 1 </button>
                    <button className="rate"> 2 </button>
                    <button className="rate"> 3 </button>
                    <button className="rate"> 4 </button>
                    <button className="rate"> 5 </button>
                </div>
                <p> comments </p>
            </div>

            <div className="commenting">
                <label> Make a comment </label> 
                <input type="text" name="comment" />
                <button> Comment </button>
            </div>
            
        </div>
    );
}

export default RecipePage;
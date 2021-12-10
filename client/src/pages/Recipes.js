import '../styles/pageStyle.css'
import { useState, useEffect } from "react";
import Multiselect from 'multiselect-react-dropdown';

const Recipes = () => {
    const axios = require('axios').default;
    useEffect(() => {
        axios.get("http://localhost:7000/api/recipe_ingredients")
            .then((res) => {
                console.log(res);
                setIngredients(res.data);
            }).catch((err) => {
                console.log(err);
            });

        axios.get("http://localhost:7000/api/recipe_allergy")
            .then((res) => {
                setAllergy(res.data);
            }).catch((err) => {
                console.log(err);
            });

        axios.get("http://localhost:7000/api/recipe_country")
            .then((res) => {
                setOrigin_country(res.data);
            }).catch((err) => {
                console.log(err);
            });

        axios.get("http://localhost:7000/api/recipe_type")
            .then((res) => {
                setType(res.data);
            }).catch((err) => {
                console.log(err);
            });

    }, []);

    //ingredients  
    const [ingredients, setIngredients] = useState([]);
    //allergy
    const [allergy, setAllergy] = useState([]);
    //country
    const [origin_country, setOrigin_country] = useState([]);
    //recipe type
    const [type, setType] = useState([]);

    const [display, setDisplay]= useState([]);

    useEffect(() => {
        var list= [];
        origin_country.forEach((item) => {
            if(!list.some((ing) => ing.id === item.id)){
                list.push({id: item.id, name: item.name});
            }
        });
        setDisplay(list);
    }, [origin_country]);

    const options = [
        { cat: "type", key: "breakfast" },
        { cat: "idk", key: "fill" },
    ];

    const [filterselected, setFilterselected] = useState([]);

    const selected = (array, object) => {
        if (!filterselected.includes(object)) {
            setFilterselected(filterselected => [...filterselected, object]);
        }
    }

    const removed = (array, object) => {
        if (filterselected.includes(object)) {
            const list = filterselected.filter((item) => item !== object);
            setFilterselected(list);
        }
    }

    return (
        <div>
            <div>
                <Multiselect
                    options={options}
                    displayValue='key'
                    groupBy='cat'
                    onSelect={selected}
                    onRemove={removed}
                    closeOnSelect={false}
                    showCheckbox
                />
                <button> Find recipes </button>
            </div>
            <p>List of recipes</p>

        </div>
    );
}

export default Recipes;
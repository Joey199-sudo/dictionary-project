import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";


export default function Dictionary(){
    let [keyword,setkeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response){
        setResults(response.data[0]);

    }


    function search(event){
        event.preventDefault();
        //alert(`Searching for ${keyword} definition`);
   
    }


    let apiWord = keyword;
    let apiKey ="bf5oac1604d9d228143bbe638f30t8d8";
    let apiURL=`https://api.shecodes.io/dictionary/v1/define?word=${apiWord}&key=${apiKey}`;
    axios.get(apiURL).then(handleResponse);
    
    function handleKeywordChange(event){
       setkeyword(event.target.value);

    }

    return (<div className="Dictionary">
                <form onSubmit={search}>
                    <input type="search" onChange={handleKeywordChange}/>
                </form>
            <Results results={results}/>
        </div>
    
    );
}
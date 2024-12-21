import { useState } from "react";
import React from "react";
import "./Dictionary.css";
import axios from "axios";


export default function Dictionary(){
    let [keyword,setkeyword] = useState("");

    function handleResponse(response){
        console.log(response.data[0]);
        
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

    return <div className="Dictionary">
                <form onSubmit={search}>
                    <input type="search" onChange={handleKeywordChange}/>
                </form>
        
        </div>
    
    
}
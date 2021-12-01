import React, {useState } from "react";


export default function WhyKey(){
    
    const [ userList , setUserList] = useState([
        
        { id: 1, name: "빌게이츠" },
        { id: 2, name: "스티브잡스" },
        { id: 3, name: "홍길동" },
        { id: 4, name: "일런머스크" }

    ]);
    
    return (
        <>
            {

            userList.map((item, idx) => (
                <input 
                type = "text" 
                placeholder={item.name} 
                style ={{display:"block"}}
                />
 
            ))

            }
        </>
    );    
}
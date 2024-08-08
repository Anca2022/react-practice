import { memo } from "react";
function Search({onChange}){
    console.log('rendered');
    return(
        <input type='text' placeholder="Search users..." onChange={(e)=>onChange(e.target.value)}></input>
    )
}
export default memo(Search); 
// memo ca sa nu randeze componenta daca re-randeaza parent, atata vreme cat props raman aceleasi
//in cazul asta, daca onChange function e aceeasi, nu re-randeaza
// dar in parent, handleSearch se schimba la fiecare randare
// => Search comp rerandeaza la fiecare re-randare a parent (de ex la shuffle users)
// => useCallback pentru a mentine aceeasi handleSearch function intre randari
//initial items: array that holds ~ 29mil objects
//underscore to make numbers more readable
const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
    return {
        id:i,
        isSelected: i===29_999_998
    };
});
export default initialItems;
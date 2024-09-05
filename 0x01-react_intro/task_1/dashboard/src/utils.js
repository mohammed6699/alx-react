const getFullYear = () => {
    let New_Year = new Date().getFullYear();
    return New_Year;
}
const getFooterCopy = (isIndex) => {
    if (isIndex) {
        return "Holberton School";
    }else{
        return "Holberton School main dashboard";
    }
}
module.exports = {
    getFullYear,
    getFooterCopy,
}
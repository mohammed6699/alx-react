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
const getLatestNotification = () => {
    return "<strong>Urgent requirement</strong> - complete by EOD";
}
module.exports = {
    getFullYear,
    getFooterCopy,
    getLatestNotification,
}
import { getFullYear, getFooterCopy ,getLatestNotification} from "./utils";
test ('returns New_Year', () => {
    expect(getFullYear).tobe(2021);
});
test ('correct footer copy', () => {
    expect(getFooterCopy(true)).tobe("Holberton School");
    expect(getFooterCopy(false)).tobe("Holberton School main dashboard");
});
test ('returns latest notification', () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
    });
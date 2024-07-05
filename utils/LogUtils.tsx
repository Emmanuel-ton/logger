type DateRes = {
    dateString: String
}



const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]


export const createDateInfo = (dateObj: Date): DateRes => {
    const day = dateObj.getDay()
    const date = dateObj.getDate()
    const dayStr = daysOfWeek[day]
    const monthIndex = dateObj.getUTCMonth()


    let dateStr = daysOfWeek[day]
                        .slice(0,3)
                        .concat(", ")
                        .concat(String(date) + getDatePostfix(day))
                        .concat(" " + months[monthIndex])
    
    
    return {
        dateString: dateStr
    }

}



const getDatePostfix = (date: number): String => {
    let postfix = ""

    const dateStr = String(date)
    const len = dateStr.length
    const dayNum = Number(dateStr.charAt(len-1))
    
    postfix = dayNum === 1 ? "st": dayNum === 2 ? "nd" : dayNum === 3 ? "rd" : "th"

    return postfix
}
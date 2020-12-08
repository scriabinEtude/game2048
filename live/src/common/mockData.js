const friends = [
    {name:'ZZwe', age:15},
    {name:'suzi', age:20},
    {name:'IU', age:25},
    {name:'sonnaun', age:30},
]

const timelines = [
    {desc:'점심이 맛있었다', likes:0},
    {desc:'나는 멋지다', likes:10},
    {desc:'호텔에 널러 갔다.', likes:20},
    {desc:'비싼핸드폰을 샀다.', likes:30},
]

function makeDataGenerator(items){
    let itemIndex = 0;
    return function getNextData(){
        const item = items[itemIndex % items.length]
        itemIndex += 1;
        return {...item, id:itemIndex}
    }
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines)
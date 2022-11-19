const sortByName = (a, b) => {
    return a.name.localeCompare(b.name);
};

// not always accurate, why?
const sortByWeight = (a, b) => {
    const regularExpression = /\d+/g;
    const weightA = a.weight.match(regularExpression) || [1000];
    const weightB = b.weight.match(regularExpression) || [1000];
    return Number(weightA[weightA.length-1] - Number(weightB[weightB.length-1]));
};

const sortByAge = (a, b) => {
    let regularExpression = /\d+/g;
    const ageA = a.life_span.match(regularExpression) || [1000];
    const ageB = b.life_span.match(regularExpression) || [1000];
    return Number(ageA[ageA.length-1]) - Number(ageB[ageB.length-1]);
};

// export default (doggos, { text = '', sortBy }) => {
export default (doggos) => {
    return doggos;
    // return doggos.filter((doggo) => doggo.name.toLowerCase().includes(text.toLowerCase()))
    // .sort((a, b) => {
    //     if (sortBy === 'name') {
    //         return sortByName(a, b);
    //     } else if (sortBy === 'weight') {
    //         return sortByWeight(a, b);
    //     } else if (sortBy === 'age') {
    //         return sortByAge(a, b);
    //     }
    //     return sortByName(a, b);
    // });
};
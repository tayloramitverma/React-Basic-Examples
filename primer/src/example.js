export function sumValues(values){
    return values.reduce( (prevVal, value) => (prevVal + value),0);
}

export function subtractValues(amount, values){
    return values.reduce( (total, value) => (total - value),amount);
}

export function multiplyValues(values){
    return values.reduce( (prevVal, value) => (prevVal * value),1);
}

export function divideValues(first, second){
    return first / second;
}


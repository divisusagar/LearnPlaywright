export const PI = 3.14159;

export function getCircumference(radius){
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI * radius * radius;
}

export function getVolume(radius){
    return 4 * PI * radius * radius;
}

export default function add(num1, num2){
    return num1+num2;
}

export function sub(num1, num2){
    return num1-num2;
}
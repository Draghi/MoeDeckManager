/* *************************************************************** **
** * ©2020 Michael Baker (project@absolutelynot.moe) | AGPL v3.0 * **
** *************************************************************** */

type ArrayElementType<T> = T extends (infer U)[] ? U : T;

export default function shallowEquals<T>(valA: T, valB: T): boolean {
    if (Array.isArray(valA)) {
        if (!Array.isArray(valB)) return false;
        return shallowEqualsArray<ArrayElementType<T>>(valA, valB);
    }
    return shallowEqualObjects(valA, valB);
}

export function shallowEqualObjects<T extends Object>(objA: T, objB: T): boolean {
    if (objA === objB) return true;
    if ((objA == null) || (objB == null)) return false;

    const keysA = <(keyof T)[]>Object.keys(objA);
    const keysB = <(keyof T)[]>Object.keys(objB);
    if (keysA.length !== keysB.length) return false;

    for(const key of keysA) {
        if (objA[key] !== objB[key]) return false;
        if (!Object.prototype.hasOwnProperty.call(objB, key)) return false;
    }

    return true;
}

export function shallowEqualsArray<T>(arrA: T[], arrB: T[]): boolean {
    if (arrA === arrB) return true;
    if ((arrA == null) || (arrB == null)) return false;
    if (arrA.length !== arrB.length) return false;

    for(let i = 0, len = arrA.length; i < len; i++) {
        if (!shallowEqualObjects(arrA[i], arrB[i])) return false;
    }

    return true;
}
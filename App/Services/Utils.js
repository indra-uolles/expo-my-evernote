import cloneDeep from 'lodash/cloneDeep';

export const getItemsByKeysArr = (keysArr, items) => {
    return keysArr.map((key) => items[key]);
};


export const toggleIdArray = (arr, id) => {
    let newArr = arr.slice();
    let index = newArr.indexOf(id);

    if (index != -1) {
        newArr.splice(index, 1);
    } else {
        newArr.push(id);
    }

    return newArr;
};

export const rename = (obj, key, newKey) => {
    const newObj = cloneDeep(obj);
  
    if (Object.keys(newObj).includes(key)) {
        newObj[newKey] = newObj[key];
  
        delete newObj[key];
    }
    
    return newObj;
};

export const isEmptyObj = (obj) => {
    return !Object.keys(obj).length;
};

export const objWithoutKey = (obj, key) => {
    const newObj = cloneDeep(obj);
  
    if (Object.keys(newObj).includes(key)) {
        delete newObj[key];
    }
    
    return newObj;
};

export const photoUrl = (url) => {
    if (url.includes('http')) {
        url = url.substring(url.search('/uploads'));
    } 

    return 'http://192.168.1.56:3000' + url;
};

export const formatImg = (image) => {
    let pathParts = image.path.split('/');
    return {
        uri: image.path,
        type: image.mime,
        name: pathParts[pathParts.length - 1]
    };
};

export const getDataArrayField = (fieldName, data) => {
    if (fieldName in data) {
        return data[fieldName];
    } else {
        return [];
    }
}
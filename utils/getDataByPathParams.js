export const getDataByPathParams = (data, pathParam, key) => {
    return data.filter((item) => {
        return item[key].toLowerCase() === pathParam.toLowerCase()
    });
}
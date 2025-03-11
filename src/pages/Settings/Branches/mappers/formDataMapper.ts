
import { initBranch } from "models/Branch";

export const formDataMapper = (object: any) => {
    let mapperObj: any = {}
    console.log(Object.keys(initBranch))
    Object.keys(initBranch).map(k => mapperObj[k] = object[k])
    console.log("mapperObj", mapperObj);
    return mapperObj;
}

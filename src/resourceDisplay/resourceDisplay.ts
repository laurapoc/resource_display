import { rawDataObject } from "./data";
import { DataDto } from "./types";

export const recursive = (data: DataDto[]): string[] => {
  const mapTroughObjectItems = (dataArr: DataDto[]) => {
    const resultArray: string[] = [];

    dataArr.forEach((item: DataDto) => {
      resultArray.push(`- ${item.name}`);

      if (item.childs.length > 0) {
        mapTroughObjectItems(item.childs).forEach((child: string) => {
          let emptySpace = " ";
          resultArray.push(`${emptySpace} ${child}`);
        });
      }
    });
    return resultArray;
  };
  return mapTroughObjectItems(data);
};

recursive(rawDataObject).forEach((str: string) => {
  // the console imitates fron-end printing values
  console.log(str);
});

const flattenDataArray = (array: DataDto[]) => {
  const flattenedArray = [];
  array.forEach((obj: DataDto) => {
    if (obj.childs.length > 0) {
      flattenedArray.push(obj);
      if (obj.childs.length > 0) {
        // use recursion here
      }
    }
  });
};

export const iterative = (data: DataDto[]) => {
  // flatten data array
  flattenDataArray(data);

  // iterate through data array

  // check level of data object and form string which repeats empty spaces due to number of level

  // push formed string into result array

  // return result array
};

iterative(rawDataObject);

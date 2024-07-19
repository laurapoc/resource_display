import { rawDataObject } from "./data";
import { DataDto } from "./types";

export const recursive = (data: DataDto[]) => {
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

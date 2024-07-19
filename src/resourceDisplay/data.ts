import { DataDto } from "./types";

export const rawDataObject: DataDto[] = [
  {
    id: "1",
    level: 1,
    name: "Lorem",
    childs: [
      {
        id: "2",
        level: 2,
        name: "Ipsum",
        childs: [],
      },
      {
        id: "3",
        level: 2,
        name: "Dolor",
        childs: [
          {
            id: "33",
            level: 3,
            name: "Orci",
            childs: [
              {
                id: "4",
                level: 4,
                name: "Quis",
                childs: [
                  {
                    id: "5",
                    level: 5,
                    name: "Odio",
                    childs: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "6",
        level: 2,
        name: "Sit",
        childs: [
          {
            id: "7",
            level: 3,
            name: "Amet",
            childs: [],
          },
          {
            id: "8",
            level: 3,
            name: "Concestetur",
            childs: [],
          },
        ],
      },
      {
        id: "9",
        level: 2,
        name: "Adipiscing",
        childs: [
          {
            id: "10",
            level: 3,
            name: "Elit",
            childs: [
              {
                id: "11",
                level: 4,
                name: "Vestibulum",
                childs: [],
              },
              {
                id: "12",
                level: 4,
                name: "Vitae",
                childs: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const testDataWithTwoLevels: DataDto[] = [
  {
    id: "1",
    level: 1,
    name: "Test1",
    childs: [
      {
        id: "2",
        level: 2,
        name: "Test1Child",
        childs: [],
      },
    ],
  },
  {
    id: "3",
    level: 1,
    name: "Test2",
    childs: [
      {
        id: "4",
        level: 2,
        name: "Test2Child",
        childs: [],
      },
    ],
  },
];

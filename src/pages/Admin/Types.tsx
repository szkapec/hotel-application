

export type UserType = {
  allUsers: [
    {
      startDate: Array<string>// [{ id: string; capacity?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}];
      idRoom: string;
      price?: number;
      capacity?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
    }
  ];
  isloadingAllUsers: boolean;
  oneRoomUsers: [{ startDate:  Array<string> }];
  today: string;
  allUser: any;
  
};

export type RoomType = [
   { _id: string; roomNumber: number }
];

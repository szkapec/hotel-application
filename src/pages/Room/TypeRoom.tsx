import { match } from 'react-router-dom';


export type RoomType = {
        _id?: string,
        reserved: boolean,
        code: number,
        price: number,
        capacity: number,
        images?: [
            {_id: string, image: string}
        ]
        additionally?: string,
        extras?: string,
        info?: string,
        roomNumber?: number,
}

export type RoomMatchType = {
    params: {
        room_id: string,
    },
    path: string,
}


export type RoomUserType = {
    allUserFromRoom: [
      {
        startDate: [{ id: string; capacity?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}];
        idRoom: string;
        price?: number;
        capacity?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
      }
    ];
    isloadingAllUsers: boolean,
    oneRoomUsers: [{ startDate: [{ date: string }] }],
    today: string,
    idRoom: [
        {code: number}
    ]
      
    code: number,
  };
  
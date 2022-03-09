export class Account {
    constructor(public id: number,
        public email: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public thirdName: string,
        public birthDay: Date,
        public groupUniversity: string,
        public fakulty: string,
        public nickName: string,
        public statusInProfile: string,
        public countOfFrends: number,
        public countOfFolowers: number,
        public countOfPhoto: number,
        public countOfPosts: number,
        public mainPhoto: string,
        public dataTimeCreate: Date ){}
}
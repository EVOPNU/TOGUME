export class Group{
    constructor(public id:number,
        public name:string,
        public description:string,
        public access:string,
        public amount:number){
    }
}
export class groupUsers{
    constructor(public id:number,
        public group_id:number,
        public user_id:number,
        public role:string){}
}
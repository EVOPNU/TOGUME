export declare class GroupsController {
    createGroup(req: any, res: any, headers: any, body: any): Promise<void>;
    sender(req: any, res: any, headers: any, body: any): Promise<void>;
    addUser(req: any, res: any, headers: any): Promise<void>;
    GetByUserId(req: any, res: any, headers: any): Promise<void>;
    request(req: any, res: any, headers: any): Promise<void>;
    listRequest(req: any, res: any, headers: any): Promise<void>;
    usersInvites(req: any, res: any, headers: any): Promise<void>;
    deleteRequest(req: any, res: any, headers: any): Promise<void>;
    getRight(req: any, res: any, headers: any): Promise<void>;
    deleteUser(req: any, res: any, headers: any): Promise<void>;
    removeGroup(req: any, res: any, headers: any): Promise<void>;
    GetDataGroup(req: any, res: any, headers: any): Promise<void>;
    UsersOfGroup(req: any, res: any, headers: any): Promise<void>;
    allGroups(req: any, res: any, headers: any): Promise<void>;
    usersGroup(req: any, res: any, headers: any): Promise<void>;
}

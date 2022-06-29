import { Controller, Post, Req, Res, Get, HttpStatus, Headers, Body } from "@nestjs/common";
// import { response } from "express";
import fetch from "node-fetch";

@Controller('/api/v1/Groups/')
export class GroupsController {

    @Post('/create/')
    async createGroup(@Req() req, @Res() res, @Headers() headers, @Body() body) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001/api/v1/Groups/create`, {
                    method: 'POST',
                    headers: {'Id': `${response.headers.get('Id')}`, 'Content-Type':'application/json'},
                    body: JSON.stringify(body)
                }).then(response2 => {
                    let count = 0; 
                    //"count" for counting response if 1 then response is true if 0 then response is false 
                    //Need for error if "then" block is not been, because if dont do this response will be sends twice
                    //Блок catch нужен для проверки на body, если выдаёт ошибку(то есть попадает в этот блок), значит тела нет
                    res.set('Id', `${response.headers.get('Id')}`);
                    response2.json()
                    .catch(err => {
                        count = 1;
                        return res.status(response2.status).send({});
                    })
                    .then(data => {
                        if(count == 0) {
                            return res.status(response2.status).json(data);
                        }
                    });
                });
            }
        });
    }

    @Post('/update/')
    async sender(@Req() req, @Res() res, @Headers() headers, @Body() body) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'POST',
                    headers: {'Id' : `${response.headers.get('Id')}`, 'Content-Type':'application/json'},
                    body: JSON.stringify(body)
                }).then(response2 => {
                    let count = 0; 
                    //"count" for counting response if 1 then response is true if 0 then response is false 
                    //Need for error if "then" block is not been, because if dont do this response will be sends twice
                    //Блок catch нужен для проверки на body, если выдаёт ошибку(то есть попадает в этот блок), значит тела нет
                    res.set('Id', `${response.headers.get('Id')}`);
                    response2.json()
                    .catch(err => {
                        count = 1;
                        return res.status(response2.status).send({});
                    })
                    .then(data => {
                        if(count == 0) {
                            return res.status(response2.status).json(data);
                        }
                    });
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/add/:acess/:groupID/:userID/')
    async addUser(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: {'Id' : `${response.headers.get('Id')}`}
                }).then(response2 => {
                    let count = 0; 
                    //"count" for counting response if 1 then response is true if 0 then response is false 
                    //Need for error if "then" block is not been, because if dont do this response will be sends twice
                    //Блок catch нужен для проверки на body, если выдаёт ошибку(то есть попадает в этот блок), значит тела нет
                    res.set('Id', `${response.headers.get('Id')}`);
                    response2.json()
                    .catch(err => {
                        count = 1;
                        return res.status(response2.status).send({});
                    })
                    .then(data => {
                        if(count == 0) {
                            return res.status(response2.status).json(data);
                        }
                    });
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/us/:userid')
    async GetByUserId(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: {'Id' : `${response.headers.get('Id')}`}
                }).then(response2 => {
                    let count = 0; 
                    //"count" for counting response if 1 then response is true if 0 then response is false 
                    //Need for error if "then" block is not been, because if dont do this response will be sends twice
                    //Блок catch нужен для проверки на body, если выдаёт ошибку(то есть попадает в этот блок), значит тела нет
                    res.set('Id', `${response.headers.get('Id')}`);
                    response2.json()
                    .catch(err => {
                        count = 1;
                        return res.status(response2.status).send({});
                    })
                    .then(data => {
                        if(count == 0) {
                            return res.status(response2.status).json(data);
                        }
                    });
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/req/:groupid/')
    async request(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: {'Id' : `${response.headers.get('Id')}`}
                }).then(response2 => {
                    let count = 0; 
                    //"count" for counting response if 1 then response is true if 0 then response is false 
                    //Need for error if "then" block is not been, because if dont do this response will be sends twice
                    //Блок catch нужен для проверки на body, если выдаёт ошибку(то есть попадает в этот блок), значит тела нет
                    res.set('Id', `${response.headers.get('Id')}`);
                    response2.json()
                    .catch(err => {
                        count = 1;
                        return res.status(response2.status).send({});
                    })
                    .then(data => {
                        if(count == 0) {
                            return res.status(response2.status).json(data);
                        }
                    });
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/invgr/:groupid/')
    async listRequest(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: {'Id' : `${response.headers.get('Id')}`}
                }).then(response2 => {
                    let count = 0; 
                    //"count" for counting response if 1 then response is true if 0 then response is false 
                    //Need for error if "then" block is not been, because if dont do this response will be sends twice
                    //Блок catch нужен для проверки на body, если выдаёт ошибку(то есть попадает в этот блок), значит тела нет
                    res.set('Id', `${response.headers.get('Id')}`);
                    response2.json()
                    .catch(err => {
                        count = 1;
                        return res.status(response2.status).send({});
                    })
                    .then(data => {
                        if(count == 0) {
                            return res.status(response2.status).json(data);
                        }
                    });
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/invus/')
    async usersInvites(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: {'Id' : `${response.headers.get('Id')}`}
                }).then(response2 => {
                    let count = 0; 
                    //"count" for counting response if 1 then response is true if 0 then response is false 
                    //Need for error if "then" block is not been, because if dont do this response will be sends twice
                    //Блок catch нужен для проверки на body, если выдаёт ошибку(то есть попадает в этот блок), значит тела нет
                    res.set('Id', `${response.headers.get('Id')}`);
                    response2.json()
                    .catch(err => {
                        count = 1;
                        return res.status(response2.status).send({});
                    })
                    .then(data => {
                        if(count == 0) {
                            return res.status(response2.status).json(data);
                        }
                    });
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/not/:groupid/:userid')
    async deleteRequest(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: {'Id' : `${response.headers.get('Id')}`}
                }).then(response2 => {
                    let count = 0; 
                    //"count" for counting response if 1 then response is true if 0 then response is false 
                    //Need for error if "then" block is not been, because if dont do this response will be sends twice
                    //Блок catch нужен для проверки на body, если выдаёт ошибку(то есть попадает в этот блок), значит тела нет
                    res.set('Id', `${response.headers.get('Id')}`);
                    response2.json()
                    .catch(err => {
                        count = 1;
                        return res.status(response2.status).send({});
                    })
                    .then(data => {
                        if(count == 0) {
                            return res.status(response2.status).json(data);
                        }
                    });
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/right/:groupid/:userid/')
    async getRight(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: {'Id' : `${response.headers.get('Id')}`}
                }).then(response2 => {
                    let count = 0; 
                    //"count" for counting response if 1 then response is true if 0 then response is false 
                    //Need for error if "then" block is not been, because if dont do this response will be sends twice
                    //Блок catch нужен для проверки на body, если выдаёт ошибку(то есть попадает в этот блок), значит тела нет
                    res.set('Id', `${response.headers.get('Id')}`);
                    response2.json()
                    .catch(err => {
                        count = 1;
                        return res.status(response2.status).send({});
                    })
                    .then(data => {
                        if(count == 0) {
                            return res.status(response2.status).json(data);
                        }
                    });
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/delete/:groupid/:userid/')
    async deleteUser(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: {'Id' : `${response.headers.get('Id')}`}
                }).then(response2 => {
                    let count = 0; 
                    //"count" for counting response if 1 then response is true if 0 then response is false 
                    //Need for error if "then" block is not been, because if dont do this response will be sends twice
                    //Блок catch нужен для проверки на body, если выдаёт ошибку(то есть попадает в этот блок), значит тела нет
                    res.set('Id', `${response.headers.get('Id')}`);
                    response2.json()
                    .catch(err => {
                        count = 1;
                        return res.status(response2.status).send({});
                    })
                    .then(data => {
                        if(count == 0) {
                            return res.status(response2.status).json(data);
                        }
                    });
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/exterminatus/:groupid/')
    async removeGroup(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: {'Id' : `${response.headers.get('Id')}`}
                }).then(response2 => {
                    let count = 0; 
                    //"count" for counting response if 1 then response is true if 0 then response is false 
                    //Need for error if "then" block is not been, because if dont do this response will be sends twice
                    //Блок catch нужен для проверки на body, если выдаёт ошибку(то есть попадает в этот блок), значит тела нет
                    res.set('Id', `${response.headers.get('Id')}`);
                    response2.json()
                    .catch(err => {
                        count = 1;
                        return res.status(response2.status).send({});
                    })
                    .then(data => {
                        if(count == 0) {
                            return res.status(response2.status).json(data);
                        }
                    });
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/gr/:groupid')
    async GetDataGroup(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: {'Id' : `${response.headers.get('Id')}`}
                }).then(response2 => {
                    let count = 0; 
                    //"count" for counting response if 1 then response is true if 0 then response is false 
                    //Need for error if "then" block is not been, because if dont do this response will be sends twice
                    //Блок catch нужен для проверки на body, если выдаёт ошибку(то есть попадает в этот блок), значит тела нет
                    res.set('Id', `${response.headers.get('Id')}`);
                    response2.json()
                    .catch(err => {
                        count = 1;
                        return res.status(response2.status).send({});
                    })
                    .then(data => {
                        if(count == 0) {
                            return res.status(response2.status).json(data);
                        }
                    });
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/ingroup/:groupid')
    async UsersOfGroup(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: {'Id' : `${response.headers.get('Id')}`}
                }).then(response2 => {
                    let count = 0; 
                    //"count" for counting response if 1 then response is true if 0 then response is false 
                    //Need for error if "then" block is not been, because if dont do this response will be sends twice
                    //Блок catch нужен для проверки на body, если выдаёт ошибку(то есть попадает в этот блок), значит тела нет
                    res.set('Id', `${response.headers.get('Id')}`);
                    response2.json()
                    .catch(err => {
                        count = 1;
                        return res.status(response2.status).send({});
                    })
                    .then(data => {
                        if(count == 0) {
                            return res.status(response2.status).json(data);
                        }
                    });
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/allgroups/')
    async allGroups(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: {'Id' : `${response.headers.get('Id')}`}
                }).then(response2 => {
                    let count = 0; 
                    //"count" for counting response if 1 then response is true if 0 then response is false 
                    //Need for error if "then" block is not been, because if dont do this response will be sends twice
                    //Блок catch нужен для проверки на body, если выдаёт ошибку(то есть попадает в этот блок), значит тела нет
                    res.set('Id', `${response.headers.get('Id')}`);
                    response2.json()
                    .catch(err => {
                        count = 1;
                        return res.status(response2.status).send({});
                    })
                    .then(data => {
                        if(count == 0) {
                            return res.status(response2.status).json(data);
                        }
                    });
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }

    @Get('/us/:userID')
    async usersGroup(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: {'Id' : `${response.headers.get('Id')}`}
                }).then(response2 => {
                    let count = 0; 
                    //"count" for counting response if 1 then response is true if 0 then response is false 
                    //Need for error if "then" block is not been, because if dont do this response will be sends twice
                    //Блок catch нужен для проверки на body, если выдаёт ошибку(то есть попадает в этот блок), значит тела нет
                    res.set('Id', `${response.headers.get('Id')}`);
                    response2.json()
                    .catch(err => {
                        count = 1;
                        return res.status(response2.status).send({});
                    })
                    .then(data => {
                        if(count == 0) {
                            return res.status(response2.status).json(data);
                        }
                    });
                });            
            }   
            else {
                return res.status(HttpStatus.FORBIDDEN).send('You don`t have access. You need to login.');
            }
        });
    }
}
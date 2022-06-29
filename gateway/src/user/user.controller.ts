import { Controller, Res, Put, Req, Get, HttpStatus, Headers, Body, UseInterceptors, UploadedFile } from "@nestjs/common";
import { FileInterceptor } from '@nestjs/platform-express';
import * as FormData from 'form-data';
import fetch from "node-fetch";

@Controller('/api/v1/user/account/')
export class UserController {

    @Put('/change/password/')
    async changePassword(@Req() req, @Res() res, @Headers() headers, @Body() body) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001/api/v1/user/account/change/password`, {
                    method: 'PUT',
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

    @Put('/change/firstname/')
    async changeFistName(@Res() req, @Res() res, @Headers() headers, @Body() body) {
        await fetch('http://security:5113/api/v1/authorization', { 
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001/api/v1/user/account/change/firstname`, { 
                    method: 'PUT',
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

    @Get('')
    async getUserById(@Req() req, @Res() res, @Headers() headers) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001${req.originalUrl}`, {
                    method: 'GET',
                    headers: {'Id' : `${response.headers.get('Id')}`},
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



    @Put('/change/lastname/')
    async changeLastName(@Res() req, @Res() res, @Headers() headers, @Body() body) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001/api/v1/user/account/change/lastname`, {
                    method: 'PUT',
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

    @Put('/change/thirdname/')
    async changeThirdName(@Res() req, @Res() res, @Headers() headers, @Body() body) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001/api/v1/user/account/change/thirdname`, {
                    method: 'PUT',
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

    @Put('/change/birthday/')
    async changeBirthday(@Res() req, @Res() res, @Headers() headers, @Body() body) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001/api/v1/user/account/change/birthday`, {
                    method: 'PUT',
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

    @Put('/change/groupuniversity/')
    async changeGroupUniversity(@Res() req, @Res() res, @Headers() headers, @Body() body) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001/api/v1/user/account/change/groupuniversity`, {
                    method: 'PUT',
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

    @Put('/change/changefakulty/')
    async changeFakulty(@Res() req, @Res() res, @Headers() headers, @Body() body) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001/api/v1/user/account/change/changefakulty`, {
                    method: 'PUT',
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

    @Put('/change/nickname/')
    async changeNickname(@Res() req, @Res() res, @Headers() headers, @Body() body) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001/api/v1/user/account/change/nickname`, {
                    method: 'PUT',
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

    @Put('/change/statusinprofile/')
    async changeStatusInProfile(@Res() req, @Res() res, @Headers() headers, @Body() body) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                fetch(`http://router:3001/api/v1/user/account/change/statusinprofile`, {
                    method: 'PUT',
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

    @Put('/change/mainphoto/')
    @UseInterceptors()
    async changeMainPhoto(@Res() req, @Res() res, @Headers() headers, @Body() body, @UploadedFile() image) {
        await fetch('http://security:5113/api/v1/authorization', {
            method: 'GET', 
            headers: {'Authorization':`${headers.authorization}`}
        }).then(async response => {
            if(response.status == 200) {
                let formData = new FormData();
                formData.append('image', JSON.stringify(image))
                fetch(`http://router:3001/api/v1/user/account/change/mainphoto`, {
                    method: 'PUT',
                    headers: {'Id' : `${response.headers.get('Id')}`},
                    body: formData
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
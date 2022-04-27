import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public http:HttpClient) { }

  createNewsPost(user_id:News['user_id'],public_id:News['public_id'],title:News['title'],content:News['content']){
    return this.http.post('/api/v1/news/',{user_id, public_id, title, content})
    //в ответе приходит айди новости, но пока что не придумал куда его вставить
  }

  getNewsPost(news_id:number){
    return this.http.get('/api/v1/news/'+news_id)
  }

  deleteNewsPost(user_delete_id:number, public_id:News['public_id'], news_id:News['news_id']){
    this.http.delete('/api/v1/news/',{body:{user_delete_id,public_id,news_id}})
  }

  changeNewsPost(public_id:News['public_id'],title:News['title'],content:News['content'], news_id:News['news_id']){
    this.http.put('/api/v1/news/'+news_id,{public_id,title,content})
  }
}

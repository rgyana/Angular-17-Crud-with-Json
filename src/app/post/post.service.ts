import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, lastValueFrom } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseApiUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }

  async createPost(post: any) {
    let url = this.baseApiUrl + 'posts';
    const createPostDate = await lastValueFrom(this.httpClient.post<any>(url, post));
    return createPostDate;
  }

  async getAllDate() {
    let url = this.baseApiUrl + 'posts';
    const allPostData = await lastValueFrom(this.httpClient.get<any>(url));
    return allPostData;
  }

  async findPostDataById(id: number) {
    let url = this.baseApiUrl + 'posts/' + encodeURIComponent(id);
    const findPostData = await lastValueFrom(this.httpClient.get<any>(url));
    return findPostData;
  }

  async editPostData(id: number, post: Post) {
    let url = this.baseApiUrl + 'posts/' + encodeURIComponent(id);
    const editPostData = await lastValueFrom(this.httpClient.put<any>(url, post));
    return editPostData;
  }

  async deletePostData(id: number) {
    let url = this.baseApiUrl + 'posts/' + encodeURIComponent(id);
    const deletePostData = await lastValueFrom(this.httpClient.delete<any>(url));
    return deletePostData;
  }


}

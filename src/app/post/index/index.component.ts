import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  allPostData: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAllPostData();
  }

  getAllPostData() {
    this.postService.getAllDate().then((res) => {
      this.allPostData = res;
      console.log(this.allPostData);
    })
  }

  deletePost(postId: number) {
    this.postService.deletePostData(postId).then((res) => {
      this.allPostData = this.allPostData.filter(item => item.id !== postId);
    })
  }

}

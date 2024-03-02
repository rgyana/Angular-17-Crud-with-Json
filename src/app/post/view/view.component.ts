import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {

  id !: number;
  post !: any;

  constructor(private postService: PostService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['postId'];

    this.postService.findPostDataById(this.id).then((res) => {
      this.post = res;
    })
  }
}

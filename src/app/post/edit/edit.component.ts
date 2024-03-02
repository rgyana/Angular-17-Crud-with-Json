import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

  id!: number;
  post !: any;
  postEditForm!: FormGroup

  constructor(private postService: PostService, private router: Router, private activateRoute: ActivatedRoute, private formBilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['postId'];
    this.postService.findPostDataById(this.id).then((res) => {
      this.postEditForm.patchValue(res);
    });

    this.postEditForm = this.formBilder.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]]
    })
  }

  submitEditData() {
    this.postService.editPostData(this.id, this.postEditForm.value).then((res) => {
      alert("Data has been updated");
      this.router.navigate(['/index']);
    })
  }

}

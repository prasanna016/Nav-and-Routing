import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  posts: any=[];
  private url='https://jsonplaceholder.typicode.com/posts'
constructor( private http:HttpClient){
    http.get(this.url)
    .subscribe(response =>{
        console.log("res",response);
        this.posts=response;
    });
}

ngOnInit(): void {
    
}
createPost(input:HTMLInputElement){
    let post:any={title:input.value};
    input.value='';
    this.http.post(this.url,JSON.stringify(post))
    .subscribe(response=>{
        post['id']=response;
        this.posts.splice(0,0,post);
    });
}
updatePost(post:any){
    console.log(post)
    this.http.patch(this.url +'/'+  post.id,JSON.stringify(post))
    .subscribe(response =>{
        console.log(response);
       // this.posts=response;
    });
}
deletePost(post:any){
    this.http.delete(this.url +'/'+ post.id)
    .subscribe(response => {
        let index=this.posts.indexOf(post);
        this.posts.splice(index, 1);
    })
}
}



import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'bro';

    dForm: FormGroup;
    fetch: any;
    modal: any;
    cpy: any;
    
    constructor(private fb: FormBuilder, private http: HttpClient) {
        this.dForm = this.fb.group({
            id: '',
            title: ['', Validators.required],
            content: [''],
        });
        this.getData();
    }



    getData(): void {
        this.http.get('http://localhost/Dino/read.php').subscribe(
            data => {
                this.fetch = data;
            },
        );
    }
    // tslint:disable-next-line:typedef
    PostData(d: any) {
        this.http.post('http://localhost/Dino/insert.php', d).subscribe(
            data => {
                this.getData();
                this.dForm.reset('');
            },
        );
    }


    // tslint:disable-next-line:typedef
    block() {
        this.modal = document.getElementById('myModal');

        this.modal.style.display = 'block';

    }
    // tslint:disable-next-line:typedef
    close() {
        this.modal.style.display = 'none';
    }

    // tslint:disable-next-line:typedef
    del(id: any) {
        this.http.delete(`http://localhost/dino/delete.php?id=${id}`).subscribe(
            data => {
                console.log('Delete Request is successful ', data);
                this.getData();
                this.dForm.reset('');
            },
            error => {
                console.log('Error', error);
            }
        );
    }
    // tslint:disable-next-line:typedef
    cpText() {
        this.cpy = document.getElementById('created');
        this.cpy.select();
        this.cpy.setSelectionRange(0, 99999);
        document.execCommand('copy');

    }

    // copy() {
    //     this.copyText = document.getElementById('content');
    //     this.copyText.select();
    //     this.copyText.setSelectionRange(0, 99999);
    //     document.execCommand('copy');
    // }
}

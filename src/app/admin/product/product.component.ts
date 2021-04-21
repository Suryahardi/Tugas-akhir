import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title:any;
  book:any={};
  books:any=[];
  constructor(
    public dialog: MatDialog
  ) { 

  }

  ngOnInit(): void {
    this.title='Product';
    this.book={
      title:'Cara Jadi Idol',
      author:'Sun Joong Pras',
      publisher:'Sunhouse Digital',
      year:2020,
      isbn:'8298377474',
      price:70000
    };
    this.getBooks();
  }

  getBooks()
  {
    //4. memperbarui koleksi books
    this.books=[
      {
        title:'Cara Jadi Idol',
        author:'Sun Joong Pras',
        publisher:'Sunhouse Digital',
        year:2020,
        isbn:'8298377474',
        price:70000
      },
      {
        title:'Cari Jadi Idol By Mas Pras',
        author:'Sun Joong Pras',
        publisher:'Sunhouse Digital',
        year:2020,
        isbn:'82983323455',
        price:75000
      }
    ];
  }  

  productDetail(data: any,idx: number)
 {
   let dialog=this.dialog.open(ProductDetailComponent, {
     width:'400px',
     data:data
   });
   dialog.afterClosed().subscribe(res=>{
     if(res)
     {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
       if(idx==-1)this.books.push(res);      
        //jika tidak maka perbarui data  
       else this.books[idx]=res; 
     }
   })
 }
 deleteProduct(idx: any)
 {
   var conf=confirm('Delete item?');
   if(conf)
   this.books.splice(idx,1);
 }


}

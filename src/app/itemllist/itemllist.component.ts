import { Component } from '@angular/core';
import { ItemlistService } from '../itemlist.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-itemllist',
  templateUrl: './itemllist.component.html',
  styleUrls: ['./itemllist.component.css']
})
export class ItemllistComponent {
 
 /*  public sampledata:any;

  constructor(private item:ItemlistService){
    this.getproductdata();

  }

  getproductdata(){
    this.item.getmedicalprod().subscribe(
      (res:any)=>{
        console.log(res);
        this.sampledata=res;
      },
      (err:any)=>{
        console.log(err)
      }
    )
  } */



  data: any[] = [];

  constructor(private dataService: ItemlistService,private router:Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }




  removeImage(index: number) {
    this.data.splice(index, 1);
    alert('Product Removed');
    
  }

  cshopping(){
    this.router.navigate(['/appointmentform']);
  }

}

import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../models/product-model";
import {ActivatedRoute} from "@angular/router";
import { Storage } from '@ionic/storage';
import {ProductService} from "../../services/product.service";
import {VariationModel} from "../../models/variation-modal";

@Component({
    selector: 'app-prod-detail',
    templateUrl: './prod-detail.page.html',
    styleUrls: ['./prod-detail.page.scss'],
})
export class ProdDetailPage implements OnInit {
    product: ProductModel;
    variation: VariationModel;
    showData = false;
    listArrayOfVariations: VariationModel[] = [];
    displayedList: VariationModel[] = [];

    constructor(private route: ActivatedRoute, public storage: Storage, private productService: ProductService) {
    }

    ngOnInit() {
        this.route.data.subscribe(async (data: { product: ProductModel }) => {
            this.product = data.product;
            this.showData = true;
            await this.storage.create();

        });
    }


    addToCart(product){
      this.storage.get('cart').then((data) =>{
      });
    }

    productVariations(){
      this.productService.getProductVarition(this.product.id).subscribe(data=>{
        console.log(data[0].id);
      });
    }
}

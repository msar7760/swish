import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vender',
  templateUrl: 'vender.html',
})
export class VenderPage {


 vendorData = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.vendorData = navParams.get('vendorData');

    console.log(this.vendorData)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VenderPage');
  }

}

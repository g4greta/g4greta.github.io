import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 600,
    autoplay:true,
    centeredSlides: true,
    autoHeight: true
  };

  imgs = [
    "../../../assets/imgs/photogallery/File 1.jpeg",
    "../../../assets/imgs/photogallery/File 2.jpeg",
    "../../../assets/imgs/photogallery/File 3.jpeg",
    "../../../assets/imgs/photogallery/File 4.jpeg",
    "../../../assets/imgs/photogallery/File 5.jpeg",
    "../../../assets/imgs/photogallery/File 6.jpeg",
    "../../../assets/imgs/photogallery/File 7.jpeg",
    "../../../assets/imgs/photogallery/File 8.jpeg",
    "../../../assets/imgs/photogallery/File 9.jpeg",
    "../../../assets/imgs/photogallery/File 10.jpeg",
    "../../../assets/imgs/photogallery/File 11.jpeg",
    "../../../assets/imgs/photogallery/File 12.jpeg",
    "../../../assets/imgs/photogallery/File 13.jpeg",
    "../../../assets/imgs/photogallery/File 14.jpeg",
    "../../../assets/imgs/photogallery/File 15.jpeg",
    "../../../assets/imgs/photogallery/File 16.jpeg",
    "../../../assets/imgs/photogallery/File 17.jpeg",
    "../../../assets/imgs/photogallery/File 18.jpeg",
    "../../../assets/imgs/photogallery/File 19.jpeg",
    "../../../assets/imgs/photogallery/File 20.jpeg",
    "../../../assets/imgs/photogallery/File 21.jpeg",

  ]
  
  constructor() { }

  ngOnInit() {
    $(".navbar").addClass('navbar-inverse');
  }

}

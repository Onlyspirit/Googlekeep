import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  imports: [ CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home  {
  constructor() {
    document.addEventListener('mousedown', this.clicking.bind(this))
  }
  showNoted = true
  parent = false;
   showNote() {
     this.parent = true;
  this.showNoted = false;
   }
  clicking(event: any) {
    if (this.name && this.title != '') {
      const box = document.querySelector('.start-type') as HTMLElement
      if (box && !box.contains(event.target)) {
        this.saveNote()
        this.name = ""
        this.title = ""
      }
    }
  }
  // protected readonly title = signal('Google_Keep');

  title = ''
  name = ''
  content = ''
  // clickMe() {
  //   console.log(this.name);
  //   console.log(this.content);
  //   console.log(this.title);
  //   this.name = ""
  // }


  delete(index: number) {
    this.basket.splice(index, 1);
    localStorage.setItem('note', JSON.stringify(this.basket));
  }
  list = false
  more() {
    this.list = true;
  }
  edit() {

  }
  color() {

  }
  canvas = false
  showCanvas() {
    this.canvas = true;
  }



  noteBackground = '#202124'
  colors = ['#202124', '#77172E', '#692B17', '#7C4A03', '#264D3B', '#0C625D', '#256377', '#284255', '#472E5B', '#6C394F', '#4B443A', '#232427']
  backgroundImages = ['a.png', 'b.png', 'c.png', 'd.png', 'e.png', 'f.png', 'g.png', 'h.png', 'i.png']
  
  pickBackground(item: any) {
    this.noteBgImage = item;
    console.log(this.noteBgImage);
  }
  
  noteBgImage = ''
  pickColor(item: any) {
    // console.log(this.activeCanasIndex);
    this.noteBackground = item;
    this.canvas = false;
  }
  basket: Array<{ content: string, head: any }> = []
  saveNote() {
    this.basket.push({ content: this.name, head: this.title })
    console.log(this.basket);
    localStorage.setItem('note', JSON.stringify(this.basket))
    this.name = ''

    // console.log(this.name);
    // localStorage.setItem(
    //   'name', this.name
    // )
    // this.name = ''
    // this.basket.push(localStorage.getItem('name'))

  }

}

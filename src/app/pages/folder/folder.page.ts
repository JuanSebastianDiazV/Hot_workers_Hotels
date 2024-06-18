import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(
    private menuCtrl: MenuController,
  ) {}

  ngOnInit() {
    this.menuCtrl.enable(false);
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}

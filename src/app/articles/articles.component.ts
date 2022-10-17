import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, } from '@angular/material/table';
import { ArticleService } from 'src/services/article.service';
import { Article } from 'src/models/articles';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  dataSource:MatTableDataSource<Article>;
  constructor(private AS:ArticleService, private dialog:MatDialog) { 
    this.dataSource = new MatTableDataSource(this.AS.tab);
  }

  ngOnInit(): void {}
    //dataSource: Article[] = GLOBAL.db.articles;
    displayedColumns: string[] = ['id', 'title', 'type', 'lien','date','auteur','sourcePDF','actions'];
    fetchDataSoure():void{
      this.getArticles();
    }
    getArticles()
    {
      this.AS.getAllArticles().then((tableau)=>this.dataSource.data=tableau);
    }
  
    OnRemove(id:string):void{
      //ouvrir la boite de dialogue
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      });
      //attendre le resultat thread observable
      dialogRef.afterClosed().subscribe(result => {
        if (result)
      //if resultat=confirm alors :
      this.AS.deleteArticle(id).then(() => this.dataSource = new MatTableDataSource(this.AS.tab));
      })
    
    
    
    }
    
}

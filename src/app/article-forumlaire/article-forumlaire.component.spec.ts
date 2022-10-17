import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleForumlaireComponent } from './article-forumlaire.component';

describe('ArticleForumlaireComponent', () => {
  let component: ArticleForumlaireComponent;
  let fixture: ComponentFixture<ArticleForumlaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleForumlaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleForumlaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { MySkillsSectionComponent } from './my-skills-section/my-skills-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { IAmSectionComponent } from './i-am-section/i-am-section.component';
import { PictureTextDivComponent } from './picture-text-div/picture-text-div.component';
import { TetxPictureDivComponent } from './tetx-picture-div/tetx-picture-div.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutMeSectionComponent,
    MySkillsSectionComponent,
    PortfolioSectionComponent,
    ContactSectionComponent,
    IAmSectionComponent,
    PictureTextDivComponent,
    TetxPictureDivComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Json2usersService } from './json2users/json2users.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [Json2usersService],
})
export class DataModule {}

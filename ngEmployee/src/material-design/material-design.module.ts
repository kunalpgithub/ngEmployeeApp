import { CdkTableModule } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatPaginatiorModule,
  MatProgressSpinnnerModulle,
  MatSortModule,
  MatTableModule,
} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules: any[] = [
  MatButtonModule,
  MatCheckboxModule,
  CdkTableModule,
  MatSliderModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatPaginatiorModule,
  MatSortModule,
  MatTableModule,
  MatProgressSpinnnerModulle,
];

// Declare Module that imports/exports the @angular/material modules needed in the app
@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialDesignModule {}

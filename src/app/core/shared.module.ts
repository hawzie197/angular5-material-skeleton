import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxDnDModule } from '@withinpixels/ngx-dnd';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
    declarations   : [],
    imports        : [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ColorPickerModule,
        NgxDnDModule,
        NgxDatatableModule
    ],
    exports        : [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ColorPickerModule,
        NgxDnDModule,
        NgxDatatableModule,
    ],
    providers      : [
        CookieService,
    ]
})

export class SharedModule
{

}

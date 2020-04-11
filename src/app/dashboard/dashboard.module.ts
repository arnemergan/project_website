import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { DashboardComponent } from './dashboard.component';
import { InvoicesComponent } from './elements/invoices/invoices.component';
import { UploadInvoiceComponent } from './elements/upload-invoice/upload-invoice.component';
import { InvoiceDataComponent } from './elements/invoice-data/invoice-data.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule  } from '@angular/material/table'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LayoutModule } from '@angular/cdk/layout';
import { StatisticsComponent } from './elements/statistics/statistics.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatBadgeModule } from '@angular/material/badge'
import { MatExpansionModule } from '@angular/material/expansion'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { HttpClientModule } from '@angular/common/http';
import { CallbackComponent } from './elements/callback/callback.component';
import {MatChipsModule} from '@angular/material/chips';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    DashboardComponent,
    InvoicesComponent,
    UploadInvoiceComponent,
    InvoiceDataComponent,
    StatisticsComponent,
    CallbackComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    NgxDropzoneModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatExpansionModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule,
    MatChipsModule,
    NgxChartsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
    ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { DevicesComponent } from './pages/devices/devices.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DeviceListComponent,
    DeviceDetailsComponent,
    DevicesComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class DeviceModule {}

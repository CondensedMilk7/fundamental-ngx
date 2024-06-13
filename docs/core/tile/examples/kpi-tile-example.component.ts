import { Component } from '@angular/core';
import { TileModule } from '@fundamental-ngx/core/tile';

@Component({
    selector: 'fd-kpi-tile-example',
    templateUrl: './kpi-tile-example.component.html',
    styles: [
        `
        .fddoc-container {
            display: flex;
            justify-content: space-around;
            padding-bottom: 1rem;
        `
    ],
    standalone: true,
    imports: [TileModule]
})
export class KpiTileExampleComponent {
    onRefreshClick(): void {
        alert('Refresh clicked!');
    }
}

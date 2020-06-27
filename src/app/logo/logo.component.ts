import {
    Component,
    Input,
} from '@angular/core';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: [
        './logo.component.scss',
    ],
})
export class LogoComponent {
    @Input() public readonly normal = 'VID';
    @Input() public readonly slatted = 'MARK';
    @Input() public readonly subtitle = 'ENTERTAINMENT';
}

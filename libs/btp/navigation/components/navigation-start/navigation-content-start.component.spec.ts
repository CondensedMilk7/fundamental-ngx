import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationContentStartComponent } from './navigation-content-start.component';
import { FdbNavigation } from '../../models/navigation.class';
import { signal } from '@angular/core';
import { FdbNavigationListItem } from '../../models/navigation-list-item.class';
import { Subject } from 'rxjs';
import { NavigationService } from '../../services/navigation.service';

class NavigationComponentMock extends FdbNavigation {
    closeAllPopups = new Subject<void>();
    classList$ = signal([]);
    isSnapped$ = signal(false);
    showMoreButton$ = signal(null);
    _navigationItemRenderer = signal(null);
    horizontal$ = signal(false);
    moreButtonRenderer$ = signal(null);
    getFirstFocusableItem(): FdbNavigationListItem | null {
        return null;
    }
    closePopups(): void {}
    setActiveItem(): void {}
    getActiveItem(): FdbNavigationListItem | null {
        return null;
    }
}

describe('NavigationContentStartComponent', () => {
    let component: NavigationContentStartComponent;
    let fixture: ComponentFixture<NavigationContentStartComponent>;
    let navigationCmp: NavigationComponentMock;

    beforeEach(async () => {
        navigationCmp = new NavigationComponentMock();
        await TestBed.configureTestingModule({
            imports: [NavigationContentStartComponent],
            providers: [
                NavigationService,
                {
                    provide: FdbNavigation,
                    useValue: navigationCmp
                }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(NavigationContentStartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

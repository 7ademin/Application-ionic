import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RestaurantPage } from './restaurant.page';

describe('RestaurantPage', () => {
  let component: RestaurantPage;
  let fixture: ComponentFixture<RestaurantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

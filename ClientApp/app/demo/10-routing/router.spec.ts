import { Location } from "@angular/common";
import { TestBed, fakeAsync, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { HomeComponent, SearchComponent, AppComponent, routes } from "./router";

describe('Router', () => {
  let location: Location;
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [HomeComponent, SearchComponent, AppComponent]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should redirect to /home when navigating to empty path', () => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/home');
    });
  });

  it('should redirect to /home', () => {
    router.navigate(['/home']).then(() => {
      expect(location.path()).toBe('/home');
    });
  });

  it('should redirect to /search', () => {
    router.navigate(['/search']).then(() => {
      expect(location.path()).toBe('/search');
    });
  });

});
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user-object/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { env } from 'src/environments/environments';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>
  let component: AppComponent

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [AuthService, UserService, AngularFireAuth],
      imports: [
        RouterTestingModule, 
        HttpClientModule,
        AngularFireModule.initializeApp(env.firebase), 
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Organic-shop'`, () => {
    expect(component.title).toEqual('Organic-shop');
  });

});

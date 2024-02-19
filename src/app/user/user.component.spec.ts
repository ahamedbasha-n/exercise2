import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //title testing
  it("titletesting", () => {
    expect(component.componentname).toBe('ahamed');
  })


//html element testing
  it("htmltesting", () => {
    const data=fixture.nativeElement;
    expect(data.querySelector(".myname").textContent).toContain('Ahamed')
  })

});

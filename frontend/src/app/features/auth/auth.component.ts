import { Component } from '@angular/core';
import { ApiDataService } from '../../services/api-data.service';
import { FormsModule } from '@angular/forms';
import { NavigationService } from '../../services/navigation.service';
@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  UserInfo: any = {
    username: '',
    password: '',
  };
  constructor(
    private apiDataService: ApiDataService,
    private navigationService: NavigationService
  ) {}

  onSubmit() {
    this.navigationService.navigateTo('club-user');
    // this.apiDataService
    //   .login(this.UserInfo.username, this.UserInfo.password)
    //   .subscribe({
    //     next: (response: any) => {
    //       console.log(response);
    //       localStorage.setItem('accessToken', response.token);
    //       this.navigationService.navigateTo('guest-clubs');
    //     },
    //     error: (err) => {
    //       console.error('Login failed:', err);
    //       alert('Login failed');
    //     },
    //   });
  }
}

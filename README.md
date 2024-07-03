# Angular Js Important points

 This table includes some of the most commonly used commands to help you quickly find and use them in your Angular projects.

| Full Command                               | Shorthand               | Description                        |
|--------------------------------------------|----------------------------------------------------------    |
| `ng serve`                                 | `ng s`                  | Start the development server       |
| `ng generate component component-name`     | `ng g c component-name` | Generate a new Angular component   |
| `ng generate service service-name`         | `ng g s service-name`   | Generate a new Angular service     |
| `ng generate module module-name`           | `ng g m module-name`    | Generate a new Angular module      |
| `ng generate directive directive-name`     | `ng g d directive-name` | Generate a new Angular directive   |
| `ng generate pipe pipe-name`               | `ng g p pipe-name`      | Generate a new Angular pipe        |
| `ng generate guard guard-name`             | `ng g g guard-name`     | Generate a new Angular guard       |
| `ng build`                                 | `ng b`                  | Build the project                  |
| `ng test`                                  | `ng t`                  | Run unit tests                     |
| `ng e2e`                                   |                         | Run end-to-end tests               |
| `ng lint`                                  | `ng l`                  | Lint the project                   |
| `ng new project-name`                      |                         | Create a new Angular project       |
| `ng generate class class-name`             | `ng g cl class-name`    | Generate a new Angular class       |
| `ng generate interface interface-name`     | `ng g i interface-name` | Generate a new Angular interface   |
| `ng generate enum enum-name`               | `ng g e enum-name`      | Generate a new Angular enum        |
| `ng generate guard guard-name`             | `ng g g guard-name`     | Generate a new Angular guard       |
| `ng generate pipe pipe-name`               | `ng g p pipe-name`      | Generate a new Angular pipe        |
| `ng generate resolver resolver-name`       | `ng g r resolver-name`  | Generate a new Angular resolver    |
| `ng generate application application-name` | `ng g app app-name`     | Generate a new Angular application |
| `ng generate library library-name`         | `ng g lib library-name` | Generate a new Angular library     |


#### Getting Started

1. **Install Node.js and npm**
   - Ensure Node.js and npm are installed. Use the following command to check:
     ```
     node -v
     npm -v

     ```

2. **Install Angular CLI**
   - Install the Angular Command Line Interface (CLI) globally:
     ```
     npm install -g @angular/cli

     ```

3. **Create a New Angular Project**
   - Create a new project using the CLI:
     ```
     ng new my-angular-app

     ```

4. **Navigate to Project Directory**
   - Change to the project directory:
     ```
     cd my-angular-app

     ```

5. **Serve the Application**
   - Start the development server:
     ```
     ng serve

     ```
   - Access the application at `http://localhost:4200`.

#### Project Structure

- **src/**: Contains the source code.
- **app/**: Main application module and component files.
- **assets/**: Static assets like images, fonts, etc.
- **environments/**: Environment-specific configurations.
- **angular.json**: Configuration file for Angular CLI.

#### Creating Components, Services, and Modules

6. **Generate a New Component**
   - Use the Angular CLI to generate components:
     ```
     ng generate component my-component

     ```

7. **Generate a New Service**
   - Create a service for handling business logic:
     ```
     ng generate service my-service

     ```

8. **Generate a New Module**
   - Create a module for organizing your app:
     ```
     ng generate module my-module

     ```

#### Data Binding and Directives

9. **Interpolation**
   - Bind data from the component to the view:
     ```
     <h1>{{ title }}</h1>

     ```

10. **Property Binding**
    - Bind properties to DOM elements:
      ```
      <img [src]="imageUrl">

      ```

11. **Event Binding**
    - Bind events to methods in the component:
      ```
      <button (click)="handleClick()">Click me</button>

      ```

12. **Two-way Binding**
    - Bind input fields using `ngModel`:
      ```
      <input [(ngModel)]="userName">

      ```

13. **Structural Directives**
    - `*ngIf` for conditional rendering:
      ```
      <div *ngIf="isVisible">Content</div>

      ```
    - `*ngFor` for looping:
      ```
      <div *ngFor="let item of items">{{ item }}</div>

      ```

#### Services and Dependency Injection

14. **Creating and Injecting Services**
    - Define a service and use `@Injectable`:
      ```
      @Injectable({
        providedIn: 'root',
      })
      export class MyService { }

      ```
    - Inject the service into a component:
      ```
      constructor(private myService: MyService) { }

      ```

#### Routing

15. **Setting Up Routing**
    - Configure routes in `app-routing.module.ts`:
      ```
      const routes: Routes = [
        { path: '', component: HomeComponent },
        { path: 'about', component: AboutComponent },
      ];

      ```

16. **Router Outlet**
    - Add `<router-outlet>` in your template:
      ```
      <router-outlet></router-outlet>

      ```

17. **Router Links**
    - Use `routerLink` for navigation:
      ```
      <a [routerLink]="['/about']">About</a>

      ```

#### Advanced Topics

18. **Lazy Loading Modules**
    - Load modules lazily for better performance:
      ```
      const routes: Routes = [
        { path: '', component: HomeComponent },
        {
          path: 'feature',
          loadChildren: () =>
            import('./feature/feature.module').then((m) => m.FeatureModule),
        },
      ];

      ```

19. **Reactive Forms**
    - Create and manage reactive forms:
      ```
      this.myForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      });

      ```

20. **HTTP Client**
    - Use `HttpClientModule` for making HTTP requests:
      ```
      this.http.get('api/url').subscribe(data => {
        this.data = data;
      });

      ```

### Best Practices

- **Use Angular CLI for Scaffolding**: Simplifies project setup and ensures best practices.
- **Follow Angular Style Guide**: Ensures code consistency and maintainability.
- **Use Modules for Organization**: Helps in managing features and lazy loading.
- **Leverage Reactive Programming**: Utilize RxJS for handling asynchronous data streams.
- **Optimize Performance**: Lazy load modules, use OnPush change detection strategy, and avoid unnecessary bindings.

### Important Commands

- **Build the Application**
  ```
  ng build
  ```

- **Run Tests**
  ```
  ng test
  ```

- **Lint the Code**
  ```
  ng lint
  ```

- **Update Angular**
  ```
  ng update
  ```

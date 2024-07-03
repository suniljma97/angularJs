# Angular Js Important points


Certainly! Below is a Markdown table that summarizes the common Angular CLI shortcut commands.

```markdown
# Angular CLI Shortcut Commands

| Command                              | Shorthand   | Description                             |
|--------------------------------------|-------------|-----------------------------------------|
| `ng serve`                           | `ng s`      | Start the development server            |
| `ng generate component <name>`       | `ng g c <name>` | Generate a new component             |
| `ng generate service <name>`         | `ng g s <name>` | Generate a new service                 |
| `ng generate module <name>`          | `ng g m <name>` | Generate a new module                  |
| `ng generate directive <name>`       | `ng g d <name>` | Generate a new directive               |
| `ng generate pipe <name>`            | `ng g p <name>` | Generate a new pipe                    |
| `ng generate guard <name>`           | `ng g g <name>` | Generate a new guard                   |
| `ng build`                           | `ng b`      | Build the project                       |
| `ng test`                            | `ng t`      | Run unit tests                          |
| `ng e2e`                             | N/A         | Run end-to-end tests                    |
| `ng lint`                            | `ng l`      | Lint the project                        |
| `ng new <project-name>`              | N/A         | Create a new Angular project            |
| `ng generate class <name>`           | `ng g cl <name>` | Generate a new class                   |
| `ng generate interface <name>`       | `ng g i <name>` | Generate a new interface               |
| `ng generate enum <name>`            | `ng g e <name>` | Generate a new enum                    |
| `ng generate module <name> --routing`| `ng g m <name> --routing` | Generate a new module with routing |


### Notes

- Use `ng --help` or `ng <command> --help` for more information on any command.
- Install the Angular CLI globally if not already installed:
  ```sh
  npm install -g @angular/cli
  ```

```markdown
# Angular 18 Cheat Sheet

## Getting Started

### Install Node.js and npm
Ensure Node.js and npm are installed. Use the following command to check:
```sh
node -v
npm -v

```

### Install Angular CLI
Install the Angular Command Line Interface (CLI) globally:
```sh
npm install -g @angular/cli
```

### Create a New Angular Project
Create a new project using the CLI:
```sh
ng new my-angular-app
```

### Navigate to Project Directory
Change to the project directory:
```sh
cd my-angular-app
```

### Serve the Application
Start the development server:
```sh
ng serve
```
Access the application at `http://localhost:4200`.

## Project Structure

- **src/**: Contains the source code.
- **app/**: Main application module and component files.
- **assets/**: Static assets like images, fonts, etc.
- **environments/**: Environment-specific configurations.
- **angular.json**: Configuration file for Angular CLI.

## Creating Components, Services, and Modules

### Generate a New Component
Use the Angular CLI to generate components:
```sh
ng generate component my-component
```

### Generate a New Service
Create a service for handling business logic:
```sh
ng generate service my-service
```

### Generate a New Module
Create a module for organizing your app:
```sh
ng generate module my-module
```

## Data Binding and Directives

### Interpolation
Bind data from the component to the view:
```html
<h1>{{ title }}</h1>
```

### Property Binding
Bind properties to DOM elements:
```html
<img [src]="imageUrl">
```

### Event Binding
Bind events to methods in the component:
```html
<button (click)="handleClick()">Click me</button>
```

### Two-way Binding
Bind input fields using `ngModel`:
```html
<input [(ngModel)]="userName">
```

### Structural Directives
- `*ngIf` for conditional rendering:
  ```html
  <div *ngIf="isVisible">Content</div>
  ```
- `*ngFor` for looping:
  ```html
  <div *ngFor="let item of items">{{ item }}</div>
  ```

## Services and Dependency Injection

### Creating and Injecting Services
Define a service and use `@Injectable`:
```typescript
@Injectable({
  providedIn: 'root',
})
export class MyService { }
```
Inject the service into a component:
```typescript
constructor(private myService: MyService) { }
```

## Routing

### Setting Up Routing
Configure routes in `app-routing.module.ts`:
```typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];
```

### Router Outlet
Add `<router-outlet>` in your template:
```html
<router-outlet></router-outlet>
```

### Router Links
Use `routerLink` for navigation:
```html
<a [routerLink]="['/about']">About</a>
```

## Advanced Topics

### Lazy Loading Modules
Load modules lazily for better performance:
```typescript
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'feature',
    loadChildren: () =>
      import('./feature/feature.module').then((m) => m.FeatureModule),
  },
];
```

### Reactive Forms
Create and manage reactive forms:
```typescript
this.myForm = this.fb.group({
  name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
});
```

### HTTP Client
Use `HttpClientModule` for making HTTP requests:
```typescript
this.http.get('api/url').subscribe(data => {
  this.data = data;
});
```

## Best Practices

- **Use Angular CLI for Scaffolding**: Simplifies project setup and ensures best practices.
- **Follow Angular Style Guide**: Ensures code consistency and maintainability.
- **Use Modules for Organization**: Helps in managing features and lazy loading.
- **Leverage Reactive Programming**: Utilize RxJS for handling asynchronous data streams.
- **Optimize Performance**: Lazy load modules, use OnPush change detection strategy, and avoid unnecessary bindings.

## Important Commands

### Build the Application
```sh
ng build
```

### Run Tests
```sh
ng test
```

### Lint the Code
```sh
ng lint
```

### Update Angular
```sh
ng update
```
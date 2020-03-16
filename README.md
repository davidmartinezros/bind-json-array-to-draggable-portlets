## load bind json array to draggable portlets in an easy way with app-draggable-portlets-template

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) and is designed as a basic template combined with [Angular](https://angular.io/).

You can find me at https://davidmartinezros.com or contact in the email davidnezan@gmail.com

## demo plunker using the component

https://plnkr.co/edit/REhfoeZ3CaoYOneY?preview

# how to use this component

You can use it as a component in your project adding the <app-load-portlets configFile="/assets/json/data.json"></app-load-portlets> tag in your AppComponent, add the module AppDraggablePortletsTemplateModule and define the data json file.

Like this:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppDraggablePortletsTemplateModule } from 'app-draggable-portlets-template';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppDraggablePortletsTemplateModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
```

Then, you can define the data json file that loads all portlets.

Like this:

```
{
    "columnsCount": 3,
    "columns": [
        {
            "portlets" : [
                {
                    "header": "Portlet header 1",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            ]
        },
        {
            "portlets" : [
                {
                    "header": "Portlet header 2",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    "header": "Portlet header 3",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            ]
        },
        {
            "portlets" : [
                {
                    "header": "Portlet header 4",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            ]
        }
    ]
    
}
```

Call the component into the html of the AppComponent with the route of your data json file:

```
<app-load-portlets configFile="/assets/json/data.json"></app-load-portlets>
```

## Demo Example

You can find the demo here: https://davidmartinezros.com/portfolio-full-stack-developer-software-engineer/project/en/draggable-portlets-with-angular

# ngc-float-button

[`Google Material Floating Action Button`](https://material.io/guidelines/components/buttons-floating-action-button.html),
Implementation for Angular v4+

![](http://g.recordit.co/yfaZdBGGCY.gif)


## [`Demo`](http://bit.ly/2yIya2f)

## Installation

First, you need to install the npm module:

```sh
npm install ngc-float-button --save
```

## Dependencies

#### Google Material Icons
#### Angular Material >= beta.12
#### Angular >= 4.4.4

## Usage

#### 1. You need to add the Google Material icons in your `index.html`:
##### The Google Material Icons is required by Angular Material <mat-icon> component

```HTML
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

Check the [`Google Material Icons site`](https://material.io/icons/) to see all icons

#### 2. Import the `NgcFloatButtonModule` in your project:

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgcFloatButtonModule} from 'ngc-float-button';

@NgModule({
    imports: [
        BrowserModule,
        NgcFloatButtonModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

##### SharedModule

If you use a [`SharedModule`](https://angular.io/docs/ts/latest/guide/ngmodule.html#!#shared-modules) that you import in multiple other feature modules,
you can export the `NgcFloatButtonModule` to make sure you don't have to import it in every module.

```ts
@NgModule({
    exports: [
        CommonModule,
        NgcFloatButtonModule
    ]
})
export class SharedModule { }
```

Finally, you can use `ngc-float-button` in your Angular project.

## Sample

The FAB template

```HTML
    <ngc-float-button icon="add">
        <ngc-float-item-button icon="person_add" content="float item 1"></ngc-float-item-button>
        <ngc-float-item-button icon="gps_fixed" content="float item 2"></ngc-float-item-button>
        <ngc-float-item-button icon="mode_edit" content="float item 3"></ngc-float-item-button>
    </ngc-float-button>
```

## API

#### @Input properties

`ngc-float-button` properties:

- `icon` property expects for `icon_name` listed in Google Material Icons site.

- `[open]` property expects for `BehaviorSubject` type, with this you can open or close the FAB dispatching events.

- `disabled` property expects a `boolean` to toggle if a button is clickable. Defaults to `false`.

- `color` property define the background color and expects a `background:{value}` valid value. Defaults to `#dd0031`.

- `direction` property expects for `string` value type value that's accepted `top`, `right`, `bottom`, `left`. Defaults to `top`

- `spaceBetweenButtons` - property expects a valid number value in `px` to define the space between each `ngc-float-item-button`, Defaults to `55`

Sample: `[open]`

```Typescript
    ...
    //our parent component

    // with 'true' our FAB will be started open.
    public open:BehaviorSubject<boolean> = new BehaviorSubject(true); // true is the initial state of FAB

    ...
```

```HTML
    <div>
        <button md-button (click)="open.next(true)">Open</button>
        <button md-button (click)="open.next(false)">Close</button>
    </div>

    <ngc-float-button icon="add" [open]="open">
    ...
```

Sample: `[direction]`

```HTML
    <div>
        <button md-button (click)="direction='top'">Top</button>
        <button md-button (click)="direction='right'">Right</button>
        <button md-button (click)="direction='bottom'">Bottom</button>
        <button md-button (click)="direction='left'">Left</button>
    </div>

    <ngc-float-button icon="add" direction="{{direction}}">
    ...
```

`ngc-float-item-button` properties:

- `icon` property expects for `icon_name` listed in Google Material Icons site.
- `color` property define the background color and expects a `background:{value}` valid value. Defaults to `white`.
- `disabled` property expects a `boolean` to toggle if a button is clickable. Defaults to `false`.
- `content` property expects `string` value to show additional text in `ngc-float-item-button`

#### @Output property

You can listen the all events emitted by `ngc-float-button` subscribing in the `(events)` observable output.

Sample:

```Typescript
    ...

    output(log) {
        console.log(log);
    }

    ...
```

```HTML
    <ngc-float-button (events)="output($event)">
    ...
```

## Customization

If you need change some css property in `ngc-float-button` you need to use `/deep/` selector in parent css component.

More info about customization soon.


## CSS animations credits

[`The css animations were inspired by this`](https://embed.plnkr.co/gist/00de5ab564446dcb8be067d44e67a692)

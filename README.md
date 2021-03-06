# RxCSS

**Note:** This is still an evolving idea! Stay tuned for special announcements at CSS Dev Conf about the future of RxCSS!

## Requirements

Make sure [RxJS](https://github.com/ReactiveX/rxjs) is installed and globally available.

## Installation

You can either use RxCSS in an existing project:

```bash
npm install rxcss@latest --save
```

Or you can include it directly in a `<script>` tag:
```html
<script src="https://unpkg.com/@reactivex/rxjs/dist/global/Rx.min.js"></script>
<script src="https://unpkg.com/rxcss@latest/dist/rxcss.min.js"></script>
```

## Usage

```js
const mouse$ = Rx.Observable
  .fromEvent(document, 'mousemove')
  .map(({ clientX, clientY }) => ({
    x: clientX,
    y: clientY
  }));


const style$ = RxCSS({
  mouse: mouse$,
});

// Optional
style$.subscribe(...);
```

```css
:root {
  --mouse-x: 0;
  --mouse-y: 0;
}


.ball {
  transform:
    translateX(calc(var(--mouse-x) * 1px))
    translateY(calc(var(--mouse-y) * 1px));
}
```

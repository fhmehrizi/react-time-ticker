
# react-time-ticker

A customizable countdown timer component for React applications. The `react-time-ticker` component displays a countdown timer with various units and styling options.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
    - [Basic Example](#basic-example)
    - [Advanced Example with Custom Styling](#advanced-example-with-custom-styling)
    - [Props](#props)
    - [Styles](#customstyles-styles-object)
    - [Units](#displayunitsconfig-units-object)
    - [Labels](#labels-labels-object)
- [Demo](#changelog)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)

## Features

- Display time in years, months, days, hours, minutes, and seconds.
- Customizable labels and styles.
- Responsive design with support for single and double-line layouts.
- Countdown functionality with a callback for when the countdown ends.
- Configurable display units (e.g., show only hours and minutes, hide seconds).

## Prerequisites

Before using this component, ensure that you have the following:

- **React**: v16.8 or higher.
- **Node.js**: v12 or higher.
- A package manager like **npm** or **yarn**.

## Installation

To install the `TimeTicker` component, use npm or yarn:

```bash
npm install react-time-ticker
```
or
```bash
yarn add react-time-ticker
```

## Usage
###  
#### Basic Example
The most basic usage of the `react-time-ticker` component involves providing an `initialSeconds` prop for the countdown and an optional `onTimesUp` callback.

```bash
import React from 'react';
import TimeTicker from 'react-time-ticker';

const App = () => (
<TimeTicker
initialSeconds={3600} // 1 hour countdown
onTimesUp={() => console.log('Time is up!')}
/>
);

export default App;
```
###
#### Advanced Example with Custom Styling
In this example, we will customize the appearance of the TimeTicker by passing customStyles, and only show hours, minutes, and seconds.

```bash
import React from 'react';
import TimeTicker from 'react-time-ticker';

const App = () => (
  <TimeTicker
    initialSeconds={7200} // 2 hours countdown
    displayUnitsConfig={{
      hours: true,
      minutes: true,
      seconds: true,
    }}
    customStyles={{
      digitBg: '#222222',
      digitColor: '#FFFFFF',
      digitFontSize: '1.5rem',
      labelColor: '#F1C40F',
      labelFontSize: '0.875rem',
      labelBg: '#333333',
      separatorColor: '#E74C3C',
    }}
    labels={{
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
    }}
    emphasizeLabels={false}
    isDoubleLine={true}
    onTimesUp={() => alert('Countdown finished!')}
  />
);

export default App;
```
###  
### Props


| Name                 | Type         | Default Value | Description                                                                     |
|----------------------|--------------|---------------|---------------------------------------------------------------------------------|
| `initialSeconds`     | `number`     | `0`           | The initial time in seconds.                                                    |
| `displayUnitsConfig` | `object`     | *             | Configures which time units are displayed (years, months, days, etc.).          |
| `onTimesUp`          | `() => void` | `() => {}`    | Callback function that is called when the timer ends.                           |
| `customStyles`       | `object`     | *             | Custom styles object to override default styles (see the Styles section below). |
| `labels`             | `object`     | *             | Custom labels for each time unit (see the Labels section below).                |
| `showLabels`         | `boolean`    | `true`        | Determines if labels should be shown.                                           |
| `emphasizeLabels`    | `boolean`    | `true`        | Determines if labels should be emphasized.                                      |
| `isDoubleLine`       | `boolean`    | `false`       | Determines if the display should be in double-line mode.                        |

### `customStyles` (Styles Object)

The `customStyles` prop is an object that allows you to define specific styles for the timer. You can override the default styles by providing values for the following properties:

| Property                 | Type     | Default Value | Description                    |
|--------------------------|----------|---------------|--------------------------------|
| `labelBg`                | `string` | `#1f2937`     | Background color for labels.   |
| `labelColor`             | `string` | `#f9fafb`     | Text color for labels.         |
| `labelFontSize`          | `string` | `0.6875rem`   | Font size for labels.          |
| `labelPaddingY`          | `string` | `0.3rem`      | Vertical padding for labels.   |
| `fontFamily`             | `string` | `sans-serif`  | Font family for the component. |
| `separatorColor`         | `string` | `#1f2937`     | Color for separators.          |
| `verticalSeparatorColor` | `string` | `#1f2937`     | Color for vertical separators. |
| `digitBg`                | `string` | `#1f2937`     | Background color for digits.   |
| `digitColor`             | `string` | `#f9fafb`     | Text color for digits.         |
| `digitFontSize`          | `string` | `0.875rem`    | Font size for digits.          |
| `digitWidth`             | `string` | `1.75rem`     | Width of each digit.           |
| `digitHeight`            | `string` | `2rem`        | Height of each digit.          |

### `displayUnitsConfig` (Units Object)

| Property  | Type    | Default | Description                          |
|-----------|---------|---------|--------------------------------------|
| `years`   | boolean | `true`  | Show the years unit in the ticker.   |
| `months`  | boolean | `true`  | Show the months unit in the ticker.  |
| `days`    | boolean | `true`  | Show the days unit in the ticker.    |
| `hours`   | boolean | `true`  | Show the hours unit in the ticker.   |
| `minutes` | boolean | `true`  | Show the minutes unit in the ticker. |
| `seconds` | boolean | `true`  | Show the seconds unit in the ticker. |


### `labels` (Labels Object)

The `labels` prop is an object that allows you to provide custom labels for each time unit. The object can include the following properties:

| Property  | Type     | Description                   |
|-----------|----------|-------------------------------|
| `years`   | `string` | Label for the "years" unit.   |
| `months`  | `string` | Label for the "months" unit.  |
| `days`    | `string` | Label for the "days" unit.    |
| `hours`   | `string` | Label for the "hours" unit.   |
| `minutes` | `string` | Label for the "minutes" unit. |
| `seconds` | `string` | Label for the "seconds" unit. |

###
### Customizing Timer Behavior
You can pass a custom function using the `onTimesUp` prop, which is triggered when the countdown reaches zero. This allows you to implement any custom logic, such as redirecting the user, showing a message, or starting a new countdown.
```bash
<TimeTicker
  initialSeconds={1800} // 30 minutes
  onTimesUp={() => {
    console.log('Countdown finished!');
    // Custom behavior here
  }}
/>
```

## Demo
You can view a live demo of the React Time Ticker component [here](https://github.com/fhmehrizi/react-time-ticker.git).

## Changelog

### [1.0.0] - YYYY-MM-DD
- Initial release of the `TimeTicker` component with core features:
    - Time unit configuration (years, months, days, hours, minutes, seconds).
    - Customizable styles for digits, labels, and separators.
    - Optional `onTimesUp` callback function.
    - Configuration to show/hide time units (e.g., hide years or months).
    - Support for double-line layout and label emphasis.


## Contributing
Feel free to open issues and submit pull requests on [GitHub](https://github.com/fhmehrizi/react-time-ticker.git).


## License
This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit) file for details.



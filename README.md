Toside Studio - Account Library
=========
Library reserved for [Toside Studio](https://www.tosidestudio.com/) projects. Developed to be integrated into projects
NextJS.

Security considerations
-----------------------
This library has been developed to integrate only with the official Toside Studio projects. Install the library and use it
in other projects download the Toside Studio from any responsibility.

Usage
-----
The library is compatible with NextJS

### Installation

```
npm i tosidestudio-account
```

### Import CSS styles

This code must be insert in the file `_app.js` and without the style the library can't work.

```js
import 'tosidestudio-account/dist/style.css';
```

### Import library

To use the method of the package import the library in the file.
```js
import * as TosideAccount from 'tosidestudio-account'
```

### Check login

Method to check if the user is logged or not. 

```js
if(TosideAccount.tosideLoginCheck()){
    // User is logged
} else {
    // User is not logged
}
```

### Login method

To open the view with the login module call the method `tosideLoginModule`

```js
TosideAccount.tosideLoginModule(secretKey)
```

### Signup method

Call the method `tosideSignupModule` to show the view with the signup module

```js
TosideAccount.tosideSignupModule(secretKey)
```

### Lgout

```js
TosideAccount.tosideLogout()
```

Credits
-------
Barioglio Simone

License
-------
&copy; Toside Studio Sobe Inc. - [www.tosidestudio.com](https://www.tosidestudio.com/)

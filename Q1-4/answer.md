## Can you explain about Interface and Enum, and where will you be using, please make some examples. 


**NOTE: Javascript has not kind of keyword to implement, just use `object` to mock the behavior**


`Interface` usually used to describe shape, it means what class looks like


```js
const ISample = {
    var1: '',
    method1: function () { }
}

const sampleData1 = {
    var1: 'sample',
    method1: function () { }
};

const sampleData2 = {
    var1: 'sample',
    method1: '123'
};

function SampleFunc(data) {
    Object.keys(data).forEach(key => {
        if (typeof data[key] !== typeof ISample[key]) {
            throw new Error('Please implement properties base on ISample');
        }
    });
}

console.log(SampleFunc(sampleData1));
// console.log(SampleFunc(sampleData2));


```

`Enum` usually used to determined constant and make them more readable

```js
const UserRole = Object.freeze({
    Admin: 'Admin',
    User: 'User',
    Guest: 'Guest'
});

function checkAccess(role) {
    switch (role) {
        case UserRole.Admin:
            console.log('Admin');
            break;
        case UserRole.User:
            console.log('User');
            break;
        case UserRole.Guest:
            console.log('Guest');
            break;
        default:
            console.log('Wrong Role ID');
            break;
    }
}

console.log(checkAccess(UserRole.Admin));

```


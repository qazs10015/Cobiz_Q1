##  All following exams please using Javascript only:

{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', 
profession: ‘xxx’}
lastName, note can be empty, customerID can only be a set of digital 
numbers.
profession can only have ‘student’, ‘freelancer’, ‘productOwner’, 
‘engineer’ or ‘systemAnalytics’.


### Prepare some test data and utility

```js
const sampleData = [
    {
        firstName: 'John',
        lastName: 'AAA',
        customerID: 123,
        note: '',
        profession: 'student'
    },
    {
        firstName: '',
        lastName: '',
        customerID: 456,
        note: '',
        profession: 'systemAnalytics'
    },
    {
        firstName: '',
        lastName: '',
        customerID: 789,
        note: '',
        profession: 'productOwner'
    },
    {
        firstName: '',
        lastName: '',
        customerID: 0,
        note: '',
        profession: 'freelancer'
    },
    {
        firstName: '',
        lastName: '',
        customerID: 0,
        note: '',
        profession: 'engineer'
    }
]

// declare profession data in order
const professionMap = new Map([
    ["systemAnalytics", 1],
    ["engineer", 2],
    ["productOwner", 3],
    ["freelancer", 4],
    ["student", 5]
]);

// filter user data base on requirements
function filterUser(user) {
    return user.filter((item) => {
        if (!!firstName && professionMap.has(item.profession) && typeof item.customerID === 'number') return item;
    });
}

// console.log(filterUser(sampleData));

```
### Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out.

``` js
function sortUserName(user) {
    return user.sort((a, b) => {
        let nameA = a.firstName + a.lastName + a.customerID;
        let nameB = b.firstName + b.lastName + b.customerID;
        return nameA - nameB;
    });
}

console.log(sortUserName(filterUser(user)));
```

### Q2. Please sort by ‘profession’ to follow the principle.

```js
function sortByType(user) {
    return user.sort((a, b) => {
        let nameA = a.profession;
        let nameB = b.profession;
        return professionMap.get(nameA) - professionMap.get(nameB);
    })
};

console.log(sortByType(filterUser(sampleData)));

```
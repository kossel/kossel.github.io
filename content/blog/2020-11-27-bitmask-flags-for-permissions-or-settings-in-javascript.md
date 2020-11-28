---
title: Bitmask flags for permissions or settings in javascript
date: 2020-11-27T03:52:38.516Z
tags:
  - javascript
---
Using bitmask for permissions is not something new, it's been widely used in *nix world  (linux, macOs, Unix) since forever. I was just curious how it's actually implemented and wanted to explorer why it's useful also when it's useful.

Let's assume a very simple permission system

| Permission    | Dec | Binary |
| ------------- | --- | ------ |
| Execution (x) | 1   | 0001   |
| Write (w)     | 2   | 0010   |
| Read (r)      | 4   | 0100   |

Each permission is a bit in the binary position, eg. first bit represent has `execution` permission, second bit = has `write` permission and so on. so 0111 means have all the 3 permissions, which in decimal is `777`, that's why `chmod 777` gives all the permissions in nix world.

Follow this we can do a very simple permission assignment and check system.

```javascript
const PERMISSIONS = {
    x: 1,       //  0001
    w: 1 << 1,  //  0010  = 2 move 1 position from the left
    r: 1 << 2,  //  0100  = 4 move 2 positions from the left
};

let userPermission = 0; // initialize without permission

// for permission assignment we just need to do

// granting execution permission.
userPermission |= PERMISSIONS.x   // he's 0001
// granting read permission
userPermission |= PERMISSIONS.r   // he's now 0101

// how to check permission

if (userPermission & PERMISSIONS.x) {
    // & is AND so 0101 AND 0001 returns true
    console.log('user has execution permission');
}

if (userPermission & PERMISSIONS.w) {
    // now 0101 AND 0010 returns false
    console.log('user has write permission')
}

if (userPermission & PERMISSIONS.r) {
    // now 0101 AND 0100 returns true
    console.log('user has read permission')
}
```

if you run above code you should see output

```
user has execution permission
user has read permission
```

Now the question is why is this and what's the difference if I do it as an array like
```javascript
const userPermission = [true, false, true];
```
or as an object?
```javascript
const userPermission = {
    x: true,
    w: false,
    r: true,
}
```

There are many advantages:
- Speed, the bitwise operations are much faster than comparing array or objects
- Space, it's clear that an array or an object uses more space than a number, in the case of a file system, imagine hundreds of thousands of files, each file needs to have its own permission, it would use considerably space int than array/objects. What about the front-end world? Well, a page has A LOT of DOMs, what if we want to mark each DOM with some flags? using bitmask + int would use considerably less memory than if it were an array. Actually, this technic is being used in Vue for patch flagging vnodes, as you can see here [in the patchFlags.ts](https://github.com/vuejs/vue-next/blob/master/packages/shared/src/patchFlags.ts) (Vue source code)
- It's easier to manage and compare, you can just use bitwise operators. Imagine a scenario where you have a defined group of permission, let's say you have 

```javascript
const editor = 3 // 0011 read and write only
```

to determine whether a user is an editor would be fairly straightforward with

```
if (userPermission & editor ){
  console.log('you are editor');
}
```

doing that with an array or object would require more work...

- If we ever wanted to store it in DB, it's much easier to store a number than an array or object, and obviously it's faster and takes less space (did I said that again??)

There are also disadvantages :
- First, it might be harder to read, especially if a developer is not familiar with bitwise operators, so if the flags are relatively small, might not worth spending the developer's time on this and thinking it looks "cooler"...
- Since it relies on the size of a Number (64bits in javascript) if you have more than 64 "flags" you might have to think of a more complicated schema for permissions, eg. break the permissions into groups. (which might not necessarily be a cons)


Hopefully, this explains why bitwise is better and when we can take advantage and use it

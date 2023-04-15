
console.group('Group 1');
console.log('message 1');
console.log('message 2');
console.group('Child Group');
console.log('Message one');
console.log('Message two');
console.group('Grand Child Group ');
console.log('Message one');
console.log('Message two');
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group('Group 2');
console.log('Message one');
console.log('Message two');
console.groupEnd();


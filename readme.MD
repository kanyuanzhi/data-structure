# data-structure

### Description 
This js file is a realization of data structure in Javascript. It contains basic data structures like stack, queue, list, dictionary and some useful methods now. It will be updated continually.

### Content
##### data structures, usuful methods & functions

### Usage
```javascript
<script type="text/javascript" src="data-structure.js"></script>
<script>
	//to create new data structures:
	var s = new Stack();
	var q = new Queue();
	var l = new LList();
	var d = new Dictionary();
</script>
```

### Some functions:
- `function accountWord(origin)`
to account the number of each words in a text, and origin is an array after the process of a text which can use "split(' ')". The below codes is an example of communication between js and php:
```javascript
<script>
	$(function){
		$.get(
		'read.txt',
		function(data){
			var origin = data.split(' ');
			for(var i=0; i<origin.length; i++){
				origin[i] = origin[i].trim();	// delete the "space" in the end of each origin lines
			}
			var process = accountWord(origin);
		}
		)
	}
</script>
```
```php
<?php
	$file = 'C:\wamp\www\phpjquery\amountword.txt';
	$content = file_get_contents($file);
	echo $content;
```

- `function nulBase(num, base)`
to convert a decimal numbers into a "base(2,4,8...)" number



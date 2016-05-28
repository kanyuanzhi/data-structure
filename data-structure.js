// 栈数据结构
function Stack(){
	this.dataStore = [];
	this.top = 0;
	
	this.spush = function(element){
		this.dataStore[this.top++] = element;
	}
	
	this.spop = function(){
		if(this.top > 0){		// 栈非空时才可弹出
			return this.dataStore[--this.top];
		}
	}
	
	this.peek = function(){
		return this.dataStore[this.top-1];
	}
	
	this.clear = function(){
		this.top = 0;
	}
	
	this.length = function(){
		return this.top;
	}
	
	this.display = function(){
		var str = "";
		for(var i=this.length()-1; i>=0 ; --i){		// 倒序打印，从上至下
			str += this.dataStore[i] + "\n";
		}
		return str;
	}
}

// 队列数据结构
function Queue(){
	this.dataStore = [];
	
	this.qIn = function(element){
		this.dataStore.push(element);
	}
	
	this.qOut = function(){
		this.dataStore.shift();
	}
	
	this.first = function(){
		return this.dataStore[0];
	}
	
	this.last = function(){
		return this.dataStore[this.dataStore.length-1];
	}
	
	this.display = function(){
		var str = "";
		for(var i=0; i<this.dataStore.length; ++i){
			str += this.dataStore[i] + " ";
		}
		return str;
	}
	
	this.length = function(){
		return this.dataStore.length;
	}
	
	this.empty = function(){
		return this.dataStore.length>0?false:true;  
	}
}

// 链表数据结构
function Node(element){
	this.element = element;
	this.next = null;
}

function LList(){
	this.head = new Node("head");
	
	this.findCurrent = function(item){
		var currentNode = this.head;
		while(currentNode.element != item && currentNode != null){
			currentNode = currentNode.next;
		}
		return currentNode;
	}
	
	this.findPrevious = function(item){
		var previousNode = this.head;
		while(previousNode.next.element != item && previousNode.next != null){
			previousNode = previousNode.next;
		}
		return previousNode;
	}
	
	this.insert = function(element,item){
		var newNode = new Node(element);
		var currentNode = this.findCurrent(item);
		newNode.next = currentNode.next;
		currentNode.next = newNode;
	}
	
	this.remove = function(element){
		var previousNode = this.findPrevious(element);
		if(previousNode.next != null){
			previousNode.next = previousNode.next.next;
		}
	}
	
	this.display = function(){
		var str = "";
		var node = this.head;
		while(node != null){
			str += node.element + "-->";
			node = node.next;
		}
		return str + "null";
	}
}

// 字典数据结构
function Dictionary(){
	this.dataStore = [];
	
	this.add = function(key,value){
		this.dataStore[key] = value;
	}
	
	this.findByKey = function(key){
		return this.dataStore[key];
	}
	
	this.remove = function(key){
		delete this.dataStore[key];
	}
	
	this.length = function(){
		var i = 0;
		for(var k in Object.keys(this.dataStore)){
			i++;
		}
		return i;
	}
	
	this.display = function(){
		var str = "";
		var temp = Object.keys(this.dataStore);
		for(var i=0; i<temp.length; ++i){
			str += temp[i] + " : " + this.dataStore[temp[i]] + "\n";
		}
		return str;
	}
	
	this.clear = function(){
		var temp = Object.keys(this.dataStore);
		for(var i=0; i<temp.length; ++i){
			delete this.dataStore[temp[i]];
		}
	}
}


/*******************************************************************************************************/

function accountWords(origin){	// 统计每个单词数量，origin为存数单词的数组
	var process = new Dictionary();
	var mount = [];
	for(var i=0; i<origin.length; i++){
		mount[i]=1;
		for(var j=i+1; j<origin.length; j++){
			if(origin[i] == origin[j]){
				mount[i]++;
				origin[j] = null;
			}
		}
	}
	for(var m=0; m<origin.length; m++){
		if(origin[m]){
			process.add(origin[m],mount[m]);
		}
	}
	return process;
}

function nulBase(num,base){		// 进制转换
	var s = new Stack;
	while(num > 0){
		s.spush(num % base);
		var num = parseInt(num / base);
	}
	var result = "";
	while(s.length() > 0){
		result += s.spop();
	}
	return result;
}
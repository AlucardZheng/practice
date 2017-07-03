"use strict"
var SimpleFactory=function(){
		var parent= this;
		this.Operation =function(){
			this._numberA=0;
			this._numberB=0;
			this.GetResult=function(){
				var result=0;
				return result;
			};
		};
		this.OperationAdd =function(){
			parent.Operation.call(this);
			this.GetResult=function(){
				var result = 0;
				result =this._numberA+this._numberB;
				return result;
			};
		};
		this.OperationSub =function(){
			parent.Operation.call(this);
			this.GetResult=function(){
				var result = 0;
				result =this._numberA-this._numberB;
				return result;
			};
		};
		this.OperationMul =function(){
			parent.Operation.call(this);
			this.GetResult=function(){
				var result = 0;
				result =this._numberA*this._numberB;
				return result;
			};
		};
		this.OperationDiv =function(){
			parent.Operation.call(this);
			this.GetResult=function(){
				var result = 0;
				if(this._numberB==0) throw "被除数不能等于0";
				result =this._numberA/this._numberB;
				return result;
			};
		};
		this.OperationFactory =function(self = parent){
			this.CreateOperate=function(operate){
				var oper=null;
				this.parent = self;
				switch(operate)
				{
					case "+":
						oper = new this.parent.OperationAdd();
						break;
					case "-":
						oper = new this.parent.OperationSub();
						break;
					case "*":
						oper = new this.parent.OperationMul();
						break;
					case "/":
						oper = new this.parent.OperationDiv();
						break;
				}
				return oper;
			};
		};


};
$(function(){
	//alert("ddd");
	$('.btn_cal').on('click',function(){
		var simpleFactory =new SimpleFactory();
		var operationFactory = new simpleFactory.OperationFactory();

		var oper = operationFactory.CreateOperate($('.sign').val());
		oper._numberA=parseFloat($('.numberA').val()) ;
		oper._numberB=parseFloat($('.numberB').val()) ;
		$('.result').val(oper.GetResult());
	});
	
});
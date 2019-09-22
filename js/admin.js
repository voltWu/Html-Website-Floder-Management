var menuItemClick =function(eve){
	GetAcivePanel(function(pc){
		Register.prepare();
		Register.invoke(eve);
	});
}
class Item{
    constructor(menu,file,func){
    	this.menu = menu;
        this.file = file;
        this.func = func;
    }
}
class Register{
	static add(menu,file,func){
		if(Register.isItemsNull())
			Register.items = [];
    	Register.items.push(new Item(menu,file,func));
    };
    static invoke(eve){
    	var menu = $(eve.target).parent().parent().parent().children().first().text();
    	var file = eve.target.innerText;
    	for(var index=0; index < Register.items.length; index++){
        	var item = Register.items[index];
            if(item.menu==menu && item.file == file){
            	item.func(eve);
            }
        }
    };
	static isItemsNull(){
		return Register.items == null;
	}
	static prepare(){
		if(Register.isItemsNull()){
			Register.register();
		}
	};
	static register(){
		Register.add("MENU_1","FILE_1",func1);
		Register.add("MENU_1","FILE_2",func2);
	}
}
function func1(eve){
	console.log("in MENU_1/FILE_1");
}
function func2(eve){
	console.log("in MUNU_1/FILE_2");
}
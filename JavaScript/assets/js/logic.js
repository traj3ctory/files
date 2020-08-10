class Validate {
	 
  static user(data){
    //  if(!/[a-zA-Z]{2,}/.test(data)) return false;
    if (/^[A-Za-z0-9_-]{4,}$/ig.test(data)) return true;
		else return false;
  }

  static password(data){
  	if(!/[A-Za-z0-9@]{6,}/.test(data)) return false;
  	else return true;
  }
}
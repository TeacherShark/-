!function(){function asteriskmobile(phonenumber,countrycode,starChar,spchar){for(var length=phonenumber.length,starstr="",third=Math.floor(length/3),i=third+1;i>0;i--)starstr+=starChar;var laster=length-2*third-1,starphone=phonenumber.replace(eval("/(.{"+Math.floor(third)+"})(.*)(.{"+laster+"})/g"),"$1"+starstr+"$3");return countrycode+spchar+starphone}function asteriskemail(mailname,host,starChar,spchar){for(var length=mailname.length,starstr="",third=Math.floor(length/3),i=third+1;i>0;i--)starstr+=starChar;var laster=length-2*third-1,mailstar=mailname.replace(eval("/(.{"+Math.floor(third)+"})(.*)(.{"+laster+"})/g"),"$1"+starstr+"$3");return mailstar+spchar+host}String.prototype.asterisk=function(){if(this.indexOf("-")>0){var r=this.split("-");return asteriskmobile(r[1],r[0],"*","-")}if(this.indexOf("@")>0){var t=this.split("@");return asteriskemail(t[0],t[1],"*","@")}return asteriskmobile(this,"","*","")}}();
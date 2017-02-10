var UserSQL = {  
                insert:'INSERT INTO lanxin_user(uid,username) VALUES(?,?)', 
                queryAll:'SELECT * FROM lanxin_user',  
                getUserById:'SELECT * FROM lanxin_user WHERE uid = ? ',
              };
 module.exports = UserSQL;
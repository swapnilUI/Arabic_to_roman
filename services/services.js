function convertToRoman(num) {
        //TABLE OF EQUIVALENCES
        var arrConv=[{0:' '},{1:'I'},{2:'II'},{3:'III'},{4:'IV'},{5:'V'},{6:'VI'},{7:'VII'},{8:'VIII'},{9:'IX'},{10:'X'},{20:'XX'},{30:'XXX'},{40:'XL'},{50:'L'},{60:'LX'},{70:'LXX'},{80:'LXXX'},{90:'XC'},{100:'C'},{200:'CC'},{300:'CCC'},{400:'CD'},{500:'D'},{600:'DC'},{700:'DCC'},{800:'DCCC'},{900:'CM'},{1000:'M'},{2000:'MM'},{3000:'MMM'},{4000:'MMMM'},{5000:'MMMMM'},{6000:'MMMMMM'},{7000:'MMMMMMM'},{8000:'MMMMMMMM'},{9000:'MMMMMMMMM'}];

        //First we break down the number into its units
        //and create an array ex: 652 ==> [600, 50, 2]
        var arr=[num.length];
        arr=num.toString().split("").reverse();
        var i=1;
        for (var k=0;k<arr.length;k++){
            arr.splice(k,1,arr[k]*i);
            i*=10;
        }

        //We make an array of objects with the number and the roman number equivalence
        var romansArray=[];
        for (i=0;i<arr.length;i++){
            var val=arrConv.filter(function(obj){
            return obj[arr[i]];
            })[0];
            romansArray.push(val);
        }

        //I get rid of all the null values
        var result=romansArray.filter(function(val){
            return (val!=null);
        });

        //It returns the string with the roman number
        return result.map(function(value,key){
            return result[key][arr[key]];
        }).reverse().join("").trim();

}   
module.exports = function(app,db){    
    app.get('/addnumber',function(req,res){
        db.romannumbers.find(function(err,docs){
            res.json(docs);
        });
    });   
    
    app.post('/addnumber',function(req,res){	
        if(req.body.number === "" || typeof req.body.number !== "number"){
            return;
        }
        var row = {};
        row.arabic = req.body.number;
        row.roman = convertToRoman(req.body.number);
        
        db.romannumbers.insert(row,function(err,doc){
            res.json({success:"true"});
        });
    });

} 
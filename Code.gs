// i want share for you, how we can read data from google spreadsheet and print on log, let's start :)

function readData() {
    
    var ss = SpreadsheetApp.getActiveSheet(); // this variable, for get active spreadsheet

    var fRow = 2; // start row
    var fColumn = 2; // start  coloumn
    var lRow = ss.getLastRow(); // end row
    var lColumn = ss.getLastColumn(); // end coloumn

    var rows = ss.getRange(fRow, fColumn, lRow, lColumn).getValues();

    for(var i = 0, l = (rows.length - 1); i<l; i++){
        var data = rows[i][0]; // value 0 for show your data
        Logger.log(data); // this for print to log
    }
}